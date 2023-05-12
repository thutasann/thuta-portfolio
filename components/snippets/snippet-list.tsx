import { CodeCategory, Snippet } from '@/types/typings'
import React from 'react'
import Sidebar from './sidebar'

interface ISnippetList {
  snippets: Snippet[]
  tags: CodeCategory[]
}

const SnippetList = ({ snippets, tags }: ISnippetList) => {
  return (
    <section className='relative flex md:flex-col w-full flex-row'>
      <div className='w-[30%] md:hidden block'>
        <Sidebar tags={tags} />
      </div>
      <div>list</div>
    </section>
  )
}

export default SnippetList
