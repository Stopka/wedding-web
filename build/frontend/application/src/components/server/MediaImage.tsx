import { ReactElement } from 'react'
import { ImageFragment } from '../../graphql/generated/types'

export default function MediaImage ({ media, className, ariaHidden }: {
  media: ImageFragment | undefined | null
  className?: string
  ariaHidden?: boolean
}): ReactElement {
  if (
    media === undefined ||
    media === null ||
    media.url === undefined ||
    media.url === null ||
    media.mimeType?.startsWith('image/') === false
  ) {
    return <></>
  }
  return <img
    aria-hidden={ariaHidden === true ? true : undefined}
    src={media.url} alt={media.alt ?? ''}
    className={`${className ?? ''} ${media.mimeType?.includes('image/svg') === true ? 'vector' : ''} media-image`}
  />
}
