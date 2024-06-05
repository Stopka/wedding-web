import React, { ReactElement } from 'react'

export default function Emoji ({ value }: { value: string | null | undefined }): ReactElement {
  if (value === '' || value === null || value === undefined) {
    return <></>
  }
  return <span className='emoji' aria-hidden>{value}</span>
}
