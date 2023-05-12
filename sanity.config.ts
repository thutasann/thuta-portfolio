import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { codeInput } from '@sanity/code-input'

const projectId = '10x7114n'
const dataset = 'production'

export default defineConfig({
  basePath: '/studio',
  name: 'thutadev',
  title: 'portfolio',

  projectId,
  dataset,

  plugins: [deskTool(), visionTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
})
