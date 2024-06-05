import { Block } from 'payload/types'

const PosterBlock: Block = {
  slug: 'Poster',
  fields: [
    {
      type: 'upload',
      name: 'image',
      relationTo: 'media',
      filterOptions: {
        mimeType: { contains: 'image' }
      },
      required: true
    },
    {
      name: 'topText',
      type: 'richText'
    },
    {
      name: 'bottomText',
      type: 'richText'
    }
  ]
}

export default PosterBlock
