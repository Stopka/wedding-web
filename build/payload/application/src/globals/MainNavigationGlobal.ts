import { GlobalConfig } from 'payload/types'
import TitleField from '../fields/TitleField'
import ImageField from '../fields/ImageField'
import TitleRowLabel from '../components/rowLabels/TitleRowLabel'
import EmojiField from '../fields/EmojiField'
import IconField from '../fields/IconField'
import HeaderField from '../fields/HeaderField'

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const MainNavigationGlobal: GlobalConfig = {
  slug: 'mainNavigation',
  versions: {
    drafts: true,
    max: 100
  },
  access: {
    read: (): boolean => true
  },
  fields: [
    {
      name: 'items',
      type: 'array',
      required: true,
      fields: [
        TitleField(),
        {
          name: 'url',
          type: 'text',
          required: true
        }
      ],
      admin: {
        components: {
          RowLabel: TitleRowLabel()
        }
      }
    }
  ]

}

export default MainNavigationGlobal
