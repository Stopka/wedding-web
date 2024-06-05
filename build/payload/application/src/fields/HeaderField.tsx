import { Field } from 'payload/types'

const HeaderField = (): Field => ({
  name: 'header',
  type: 'text',
  required: true,
  localized: true
})

export default HeaderField
