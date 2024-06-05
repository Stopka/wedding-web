import { Field } from 'payload/types'
import UrlValidator from '../validators/UrlValidator'
import TitleRowLabel from '../components/rowLabels/TitleRowLabel'

const LinksField = (): Field => ({
  name: 'links',
  type: 'array',
  localized: true,
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          validate: UrlValidator()
        }
      ]
    }
  ],
  admin: {
    initCollapsed: true,
    components: {
      RowLabel: TitleRowLabel('Link', 'label')
    }
  }
})

export default LinksField
