'use client'

import { CodeCategory, Snippet } from '@/types/typings'
import React, { useState } from 'react'
import Sidebar from './sidebar'
import { useRecoilValue } from 'recoil'
import { AiOutlineCalendar, AiOutlineTags } from 'react-icons/ai'
import { HiOutlineCode } from 'react-icons/hi'
import { tagState } from '@/atoms/states'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import NoResult from '../no-result'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeVariants } from '@/animations'

interface ISnippetList {
  snippets: Snippet[]
  tags: CodeCategory[]
}

const SnippetList = ({ snippets, tags }: ISnippetList) => {
  const [search, setSearch] = useState<string>('')

  const tag = useRecoilValue(tagState)

  let filteredSnippets: Snippet[] = []

  if (search) {
    filteredSnippets = snippets.filter(item => item.title.toLowerCase().includes(search))
  } else {
    filteredSnippets = tag === 'all' || tag === '' ? snippets : snippets.filter(item => item.tags.find(val => val.title === tag))
  }

  return (
    <section className='relative flex md:flex-col w-full flex-row '>
      <div className='w-[30%] md:hidden block'>
        <Sidebar tags={tags} />
      </div>

      <div className='w-full pl-7 md:pl-0'>
        <div className='relative mt-5 group'>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            className='inputBox'
            placeholder='Search Snippets...'
            spellCheck={false}
            autoCapitalize='none'
          />
          <MagnifyingGlassIcon className='absolute w-6 h-6 text-dark/50 group-hover:text-primary transition-all duration-500 ease-in-out dark:text-light/60 right-0 top-3' />
        </div>
        {filteredSnippets?.length > 0 &&
          filteredSnippets?.map((snippet, idx) => (
            <motion.div
              className='flex flex-col cursor-pointer group'
              initial='initialState'
              animate='animateState'
              exit='exitState'
              transition={{
                duration: 0.75,
                ease: 'easeOut',
              }}
              variants={fadeVariants}
              key={idx}
            >
              <Link href={`/snippets/${snippet.slug.current}`} className='snippet relative'>
                <h2 className='flex flex-row md:flex-col md:items-start items-center gap-2'>
                  <HiOutlineCode />
                  {snippet.title}
                </h2>
                <p>{snippet.description}</p>

                <div className='flex items-center mt-4 space-x-4'>
                  <span className='flex items-center text-[15px] xs:text-[12px] text-primary-black dark:text-gray-400 text-opacity-80'>
                    <AiOutlineCalendar className='mr-1' />
                    {new Date(snippet._createdAt).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>

                  {snippet.tags.map(category => (
                    <div
                      key={category._id}
                      className='flex  xs:text-[12px] items-center text-primary-black dark:text-gray-400 text-opacity-80'
                    >
                      <AiOutlineTags className='mr-1' /> {category.title}
                    </div>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}

        {filteredSnippets?.length === 0 && <NoResult />}
      </div>
    </section>
  )
}

export default SnippetList
