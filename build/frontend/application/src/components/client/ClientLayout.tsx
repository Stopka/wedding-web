'use client'
import React, { ReactElement, ReactNode, useEffect } from 'react'
import { useMatomo } from '../../hooks/MatomoHook'

export default function ClientLayout ({
  children
}: {
  children: ReactNode
}): ReactElement {
  const matomo = useMatomo()
  useEffect(() => {
    matomo.trackPageView()
  }, [])
  return (
    <>
      {children}
    </>
  )
}
