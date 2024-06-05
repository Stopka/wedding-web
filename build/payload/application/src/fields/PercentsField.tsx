import { Field } from 'payload/types'

const PercentsField = (): Field => ({
  name: 'percents',
  type: 'number',
  min: 0,
  max: 100,
  required: true
})

export default PercentsField
