import { ReactNode } from 'react'
import '../styles/global.scss'
import { Metadata } from 'next'
import prepareMetadataTitle from '../services/prepareMetadataTitle'

export const metadata: Metadata = {
  title: prepareMetadataTitle(),
  icons: '/favicon.svg'
}

export default function RootLayout ({ children }: {
  children: ReactNode
}): ReactNode {
  return children
}
