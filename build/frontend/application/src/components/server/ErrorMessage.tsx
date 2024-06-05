import React, { ReactElement } from 'react'
import Icon from './client/Icon'

export default function ErrorMessage ({ message }: { message?: string }): ReactElement {
  if (message === undefined) {
    return (
      <></>
    )
  }
  return (
    <div className='d-flex justify-content-center'>
      <Icon iconName='warning' />
      <span>{message}</span>
    </div>
  )
}
