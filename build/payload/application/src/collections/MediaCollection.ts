import { CollectionConfig } from 'payload/types'
import TitleField from '../fields/TitleField'

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const MediaCollection: CollectionConfig = {
  slug: 'media',
  fields: [
    TitleField(),
    {
      name: 'alt',
      type: 'text',
      localized: true
    }
  ],
  access: {
    read: (): boolean => true
  },
  upload: {
    staticURL: '/uploads/media',
    staticDir: '../uploads/media',
    imageSizes: [
      {
        name: 'face',
        width: 640,
        height: 640
      }
    ]
  }
}

export default MediaCollection
