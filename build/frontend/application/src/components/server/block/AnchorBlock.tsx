import { ReactElement } from 'react'

export default function AnchorBlock ({ fields }: {
  fields: { anchor: string }
}): ReactElement {
  return <span id={fields.anchor}></span>
}
