import { GlobalConfig } from 'payload/types'
import TitleField from '../fields/TitleField'
import ImageField from '../fields/ImageField'

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const HomePageGlobal: GlobalConfig = {
  slug: 'homePage',
  versions: {
    drafts: true,
    max: 100
  },
  access: {
    read: (): boolean => true
  },
  fields: [
    TitleField(),
    ImageField(),
    {
      type: 'richText',
      name: 'content',
      localized: true
    }
  ]

}

export default HomePageGlobal
