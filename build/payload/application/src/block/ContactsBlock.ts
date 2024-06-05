import { Block } from 'payload/types'
import ImageField from '../fields/ImageField'
import { RowLabelArgs } from 'payload/dist/admin/components/forms/RowLabel/types'

const ContactsBlock: Block = {
  slug: 'Contacts',
  fields: [
    {
      type: 'array',
      name: 'items',
      required: true,
      admin: {
        components: {
          RowLabel: ({ data, index }: RowLabelArgs): string => {
            return data.name ?? `Contact ${String(index).padStart(2, '0')}`
          }
        }
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'name',
              type: 'text'
            },
            {
              name: 'role',
              type: 'text',
              localized: true
            }
          ]
        },
        ImageField()
      ]
    }
  ]
}

export default ContactsBlock
