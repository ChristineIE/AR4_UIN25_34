import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import assignments from './schemaTypes/assignments'

export default defineConfig({
  name: 'default',
  title: 'Arbeidskrav 4',

  projectId: '7rp7d1oe',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
