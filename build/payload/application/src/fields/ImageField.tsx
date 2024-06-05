import { Field } from 'payload/types'

const ImageField = (required: boolean = true): Field => ({
  name: 'image',
  type: 'upload',
  relationTo: 'media',
  filterOptions: {
    mimeType: { contains: 'image' }
  },
  required
})

export default ImageField
