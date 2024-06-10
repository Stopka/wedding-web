import { ReactElement } from 'react'
import { ImageFragment } from '../../graphql/generated/types'

export default function MediaImage ({ media, className, ariaHidden, sizeName }: {
  media: ImageFragment | undefined | null
  sizeName?: string
  className?: string
  ariaHidden?: boolean
}): ReactElement {
  if (
    media === undefined ||
    media === null
  ) {
    return <></>
  }
  let url = media.url
  let mimeType = media.mimeType
  if (sizeName !== undefined) {
    const size = media?.sizes?.[sizeName]
    url = size.url
    mimeType = size.mimeType
  }
  if (
    url === undefined ||
    url === null ||
    mimeType?.startsWith('image/') === false
  ) {
    return <></>
  }
  return <img
    aria-hidden={ariaHidden === true ? true : undefined}
    src={url} alt={media.alt ?? ''}
    className={`${className ?? ''} ${mimeType?.includes('image/svg') === true ? 'vector' : ''} media-image`}
  />
}
