import React, { ReactElement } from 'react'

export default function Footer (): ReactElement {
  return (
    <footer className='text-center mt-5'>
      <p>©{(new Date()).getFullYear()}</p>
    </footer>
  )
}
