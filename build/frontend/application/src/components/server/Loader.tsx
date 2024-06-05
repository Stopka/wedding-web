import React, { ReactElement, ReactNode } from 'react'

export default function Loader ({
  showTop,
  showBottom,
  hideContent,
  children,
  loading,
  placeholder
}: {
  children: ReactNode
  loading: boolean
  hideContent?: boolean
  showTop?: boolean
  showBottom?: boolean
  placeholder?: ReactNode
}): ReactElement {
  const spinner = placeholder ?? (
    <div className='d-flex justify-content-center'>
      Spinnn....
    </div>
  )
  return (
    <>
      {(showTop ?? false) && loading ? spinner : ''}
      {(hideContent ?? false) && loading ? '' : children}
      {(showBottom ?? false) && loading ? spinner : ''}
    </>
  )
}
