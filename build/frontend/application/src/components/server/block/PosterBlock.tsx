import { ReactElement } from 'react'
import { ImageFragment } from '../../../graphql/generated/types'
import MediaImage from '../MediaImage'
import Content from '../Content'

export default function PosterBlock ({ fields }: {
  fields: { image: ImageFragment, id: string, topText: any, bottomText: any }
}): ReactElement {
  return <>
    <div className={'d-flex'}>
      <div className={'p-7'}>
        <MediaImage media={fields.image} className={'mw-100'}/>
      </div>
      <div className={'p-5'}>
        <Content content={fields.topText}/>
      </div>
      <div className={'p-5 align-self-end'}>
        <Content content={fields.bottomText}/>
      </div>
    </div>
  </>
}
