import { Block } from 'payload/types'

const MapBlock: Block = {
  slug: 'Map',
  fields: [
    {
      name: 'url',
      type: 'text',
      required: true
    }
  ]
}

export default MapBlock
