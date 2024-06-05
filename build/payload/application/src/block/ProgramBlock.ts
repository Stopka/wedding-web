import { Block } from 'payload/types'

const ProgramBlock: Block = {
  slug: 'Program',
  fields: [
    {
      type: 'array',
      name: 'items',
      required: true,
      localized: true,
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'time',
              type: 'date',
              admin: {
                date: {
                  pickerAppearance: 'timeOnly',
                  displayFormat: 'hh:mm'
                }
              }
            },
            {
              name: 'title',
              type: 'text'
            }
          ]
        }
      ]
    }
  ]
}

export default ProgramBlock
