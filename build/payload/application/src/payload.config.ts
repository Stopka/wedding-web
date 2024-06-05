import { buildConfig } from 'payload/config'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { BlocksFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import PageCollection from './collections/PageCollection'
import UsersCollection from './collections/UsersCollection'
import MediaCollection from './collections/MediaCollection'
import MainNavigationGlobal from './globals/MainNavigationGlobal'
import { viteBundler } from '@payloadcms/bundler-vite'
import redirects from '@payloadcms/plugin-redirects'
import GalleryBlock from './block/GalleryBlock'
import HomePageGlobal from './globals/HomePageGlobal'
import PosterBlock from './block/PosterBlock'
import ProgramBlock from './block/ProgramBlock'
import AnchorBlock from './block/AnchorBlock'
import ContactsBlock from './block/ContactsBlock'
import MapBlock from './block/MapBlock'
import RowBlock from './block/RowBlock'

export default buildConfig({
  serverURL: process.env.SERVER_URL,
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      BlocksFeature({
        blocks: [
          GalleryBlock,
          PosterBlock,
          ProgramBlock,
          AnchorBlock,
          ContactsBlock,
          MapBlock,
          RowBlock
        ]
      })
    ]
  }),
  db: mongooseAdapter({
    url: process.env.MONGODB_URI ?? ''
  }),
  admin: {
    user: UsersCollection.slug,
    avatar: 'gravatar',
    bundler: webpackBundler(),
    css: path.resolve(__dirname, 'css/stylesheet.scss'),
    meta: {
      titleSuffix: ' | Admin | Áňa ❤️ Štěpán',
      favicon: '/favicon.svg',
      ogImage: '/favicon.svg'
    }
  },
  collections: [
    UsersCollection,
    PageCollection,
    MediaCollection
  ],
  globals: [
    MainNavigationGlobal,
    HomePageGlobal
  ],
  localization: {
    locales: [
      'en',
      'cs'
    ],
    defaultLocale: 'en',
    fallback: true
  },
  plugins: [
    redirects({
      collections: ['pages']
    })
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
    disablePlaygroundInProduction: true
  },
  rateLimit: {
    trustProxy: true,
    max: 500,
    window: 30000
  }
})
