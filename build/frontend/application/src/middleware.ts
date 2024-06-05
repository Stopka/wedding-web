import { NextRequest } from 'next/server'
import Negotiator from 'negotiator'
import locales, { defaultLocale, LocaleEnum } from './locales/locales'

const resolveLocale = (request: NextRequest): LocaleEnum => {
  const headers: Negotiator.Headers = {}
  for (const key in request.headers.keys()) {
    const value = request.headers.get(key)
    if (value === null) {
      continue
    }

    headers[key] = value
  }
  const negotiator = new Negotiator({ headers })
  return LocaleEnum[negotiator.language(Object.keys(LocaleEnum)) ?? defaultLocale] ?? defaultLocale
}

const isLocaleInPath = (pathname: string): boolean => {
  return Object.keys(locales).some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
}

const resolveLocaleRedirect = async (request: NextRequest): Promise<string | null> => {
  const { pathname } = request.nextUrl
  if (isLocaleInPath(request.nextUrl.pathname)) {
    return null
  }
  console.info('No locale in url, resolving', { pathname })
  const locale = resolveLocale(request)
  return `/${locale}${pathname}`
}

export async function middleware (request: NextRequest): Promise<Response | null> {
  for (const resolver of [resolveLocaleRedirect]) {
    const destinationUrl = await resolver(request)
    if (destinationUrl !== null) {
      request.nextUrl.pathname = destinationUrl
      return Response.redirect(request.nextUrl)
    }
  }
  return null
}

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}
