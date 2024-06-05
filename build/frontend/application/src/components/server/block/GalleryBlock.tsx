import { ReactElement } from 'react'
import { ImageFragment } from '../../../graphql/generated/types'
import MediaImage from '../MediaImage'

export default function GalleryBlock ({ fields }: {
  fields: { showTitle?: boolean | null, items: Array<{ image: ImageFragment, id: string }> }
}): ReactElement {
  const showTitle = fields.showTitle === true
  return <div className={'gallery row'}>
    {fields.items.map((item) => {
      return <div className={'mb-3 col-md-6'}>
        <div className={'card '}>
          {showTitle
            ? (
              <div className="card-header">
                {item.image.title}
              </div>
              )
            : ''}
          <MediaImage media={item.image} key={item.id}
                      className={'card-img' + (showTitle && (item?.image?.title?.length ?? 0) > 0 ? '-bottom' : '')}/>
        </div>
      </div>
    })}
  </div>
}
