'use client'

import { Snippet } from '@/types/typings'
import { CopyBlock, dracula } from 'react-code-blocks'

type Props = {
  snippet: Snippet
}

function CodeBlock({ snippet }: Props) {
  return (
    <div className='p-4 bg-codeBlock mt-7 border border-dark dark:border-light/90 rounded-[30px] hover:rounded-[20px] transition-all duration-500 ease-in-out'>
      <CopyBlock
        text={snippet.code.code}
        language={snippet.code.language}
        wrapLines
        showLineNumbers={false}
        theme={dracula}
        codeBlock={true}
      />
    </div>
  )
}

export default CodeBlock
