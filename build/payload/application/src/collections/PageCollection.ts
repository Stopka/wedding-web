import { CollectionConfig } from 'payload/types'
import ImageField from '../fields/ImageField'
import TitleField from '../fields/TitleField'
import SlugField from '../fields/SlugField'

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const PageCollection: CollectionConfig = {
  slug: 'pages',
  versions: {
    drafts: true,
    maxPerDoc: 30
  },
  access: {
    read: (): boolean => true
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: [
      'title',
      'id',
      'createdAt',
      'updatedAt',
      '_status'
    ]
  },
  fields: [
    {
      type: 'row',
      fields: [
        TitleField(),
        SlugField()
      ]
    },
    ImageField(false),
    {
      type: 'richText',
      name: 'content',
      localized: true
    }
  ]
}

export default PageCollection
