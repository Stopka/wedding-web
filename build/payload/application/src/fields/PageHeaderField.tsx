import { Field } from 'payload/types'
import EmojiField from './EmojiField'
import IconField from './IconField'
import HeaderField from './HeaderField'

const PageHeaderField = (): Field => ({
  name: 'pageHeader',
  type: 'group',
  label: 'Page header',
  fields: [
    {
      type: 'row',
      fields: [
        HeaderField(),
        EmojiField(),
        IconField()
      ]
    }
  ]
})

export default PageHeaderField
