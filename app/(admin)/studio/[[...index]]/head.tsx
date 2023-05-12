// Re-export `NextStudioHead` as default if you're happy with the default behavior
export { NextStudioHead } from 'next-sanity/studio/head'

export default function CustomStudioHead() {
  return (
    <>
      <link rel='icon' type='image/png' sizes='32x32' href='https://www.sanity.io/static/images/favicons/favicon-32x32.png' />
    </>
  )
}
