import React, {ReactElement} from 'react'

export default function ({title, description}: {
  title?: string
  description?: string
}): ReactElement {
  const pageName = 'Áňa ❤️ Štěpa'
  const htmlTitle = (title !== undefined ? `${title} | ` : '') + pageName
  return (
    <>
      <title>{htmlTitle}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
      <meta name='description' content={description}/>
      <meta property='og:image' content='/skorpil.png'/>
      <meta property='og:type' content='website'/>
      <meta property='og:title' content={title ?? pageName}/>
      {/* <meta property="og:description" content={description}/> */}
      <link rel='icon' href='/favicon.png'/>
      <link rel='icon' href='/favicon.svg'/>
    </>
  )
}
