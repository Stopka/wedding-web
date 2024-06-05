import React, { ReactElement, ReactNode } from 'react'
import Footer from '../../components/server/Footer'
import NavBar from '../../components/server/NavBar'
import { LocaleEnum } from '../../locales/locales'
import ClientProviders from '../../components/client/ClientProviders'
import ClientLayout from '../../components/client/ClientLayout'
import createConfig from '../../config/createConfig'
import { setCurrentLocale } from '../../locales/CurtrentLocale'
import Dancers from '../../public/swing.svg'

export default async function LocaleLayout ({
  children,
  params: { locale }
}: {
  children: ReactNode
  params: { locale: LocaleEnum }
}): Promise<ReactElement> {
  setCurrentLocale(locale)
  return (
    <html lang={locale}>
    <body>
      <ClientProviders config={createConfig().get('client')}>
        <ClientLayout>
          <Dancers className={'logo'} />
          <NavBar/>
          <main className="container">
            {children}
          </main>
          <Footer/>
        </ClientLayout>
      </ClientProviders>
    </body>
    </html>
  )
}
