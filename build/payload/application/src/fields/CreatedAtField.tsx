import { Field } from 'payload/types'

const CreatedAtField = (): Field => ({
  type: 'date',
  name: 'createdAt',
  admin: {
    date: {
      pickerAppearance: 'dayAndTime'
    }
  }
})

export default CreatedAtField
