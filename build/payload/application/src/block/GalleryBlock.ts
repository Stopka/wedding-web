import { Block } from 'payload/types'

const GalleryBlock: Block = {
  slug: 'Gallery',
  fields: [
    {
      name: 'showTitle',
      type: 'checkbox'
    },
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          type: 'upload',
          name: 'image',
          relationTo: 'media',
          filterOptions: {
            mimeType: { contains: 'image' }
          }
        }
      ]
    }
  ]
}

export default GalleryBlock
