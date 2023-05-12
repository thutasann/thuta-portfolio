import { createClient } from 'next-sanity'

export const projectId = '10x7114n'
export const dataset = 'production'
const apiVersion = '2022-11-15'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})
