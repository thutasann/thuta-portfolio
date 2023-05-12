import { CodeCategory, Snippet } from '@/types/typings'
import React from 'react'
import Sidebar from './sidebar'
import { AiOutlineCalendar, AiOutlineTags } from 'react-icons/ai'
import { HiOutlineCode } from 'react-icons/hi'

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
      <div className='w-full pl-7 md:pl-0'>
        {snippets?.map((snippet, idx) => (
          <div className='snippet' key={idx}>
            <h2 className='flex flex-row md:flex-col md:items-start items-center gap-2'>
              <HiOutlineCode />
              {snippet.title}
            </h2>
            <p>{snippet.description}</p>

            <div className='flex items-center mt-4 space-x-4'>
              <span className='flex items-center  text-[15px] text-primary-black dark:text-gray-400 text-opacity-80'>
                <AiOutlineCalendar className='mr-1' />
                {new Date(snippet._createdAt).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>

              {snippet.tags.map(category => (
                <div key={category._id} className='flex items-center text-primary-black dark:text-gray-400 text-opacity-80'>
                  <AiOutlineTags className='mr-1' /> {category.title}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SnippetList
