'use client'

import Error from 'next/error'
import { ReactElement } from 'react'

// Render the default Next.js 404 page when a route
// is requested that doesn't match the middleware and
// therefore doesn't have a locale associated with it.

export default function NotFound (): ReactElement {
  return (
    <html lang="en">
    <body>
    <Error statusCode={404} />
    </body>
    </html>
  )
}
