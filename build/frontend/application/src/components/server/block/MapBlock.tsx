import { ReactElement } from 'react'

export default function MapBlock ({ fields }: {
  fields: { url: string }
}): ReactElement {
  return <>
    <iframe className={'w-100 mb-3 col-md-6'} style={{ height: '20em' }} src={fields.url} ></iframe>
  </>
}
