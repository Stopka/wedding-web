import { Block } from 'payload/types'

const ProgramBlock: Block = {
  slug: 'Anchor',
  fields: [
    {
      type: 'text',
      name: 'anchor',
      required: true
    }
  ]
}

export default ProgramBlock
