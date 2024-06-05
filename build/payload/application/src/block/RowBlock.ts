import { Block } from 'payload/types'

const MapBlock: Block = {
  slug: 'Row',
  fields: [
    {
      name: 'columns',
      type: 'array',
      fields: [
        {
          name: 'classes',
          type: 'text',
          required: false
        },
        {
          name: 'content',
          type: 'richText',
          required: true
        }
      ]
    }
  ]
}

export default MapBlock
