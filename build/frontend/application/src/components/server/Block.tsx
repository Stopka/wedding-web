import { ReactElement } from 'react'
import GalleryBlock from './block/GalleryBlock'
import PosterBlock from './block/PosterBlock'
import ProgramBlock from './block/ProgramBlock'
import AnchorBlock from './block/AnchorBlock'
import ContactsBlock from './block/ContactsBlock'
import MapBlock from './block/MapBlock'
import Content from './Content'
import RowBlock from './block/RowBlock'

const Item = ({ fields }: { fields: { blockType: string } }): ReactElement => {
  switch (fields.blockType) {
    case 'Gallery':
      // @ts-expect-error
      return <GalleryBlock fields={fields}/>
    case 'Poster':
      // @ts-expect-error
      return <PosterBlock fields={fields}/>
    case 'Program':
      // @ts-expect-error
      return <ProgramBlock fields={fields}/>
    case 'Anchor':
      // @ts-expect-error
      return <AnchorBlock fields={fields}/>
    case 'Contacts':
      // @ts-expect-error
      return <ContactsBlock fields={fields}/>
    case 'Map':
      // @ts-expect-error
      return <MapBlock fields={fields}/>
    case 'Row':
      // @ts-expect-error
      return <RowBlock fields={fields}/>
    default:
      console.warn('Unknown block', fields)
      return <></>
  }
}

export default function Block ({ block, className }: { block?: any, className?: string }): ReactElement {
  return <div className={'block block_' + (block?.fields?.blockType?.toLowerCase() ?? '') + ' ' + (className ?? '')}>
    <Item fields={block.fields}/>
  </div>
}
