'use client'

import { CodeCategory } from '@/types/typings'
import { useRecoilState } from 'recoil'
import React from 'react'
import { AiOutlineTags } from 'react-icons/ai'
import { HiMenuAlt1 } from 'react-icons/hi'
import { tagState } from '@/atoms/states'

interface ISidebar {
  tags: CodeCategory[]
}

const Sidebar = ({ tags }: ISidebar) => {
  const [tag, setTag] = useRecoilState(tagState)

  const handleSelect = (tag: string) => {
    setTag(tag)
  }

  return (
    <div className='sidebar'>
      <h2 className='font-[700] text-2xl flex items-center text-dark dark:text-light'>
        <AiOutlineTags className='w-6 h-6 mr-3 -ml-2' />
        Tags
      </h2>

      <div className='w-full mt-4 sidebar_content'>
        <ul>
          <li className='group' onClick={() => handleSelect('all')}>
            <HiMenuAlt1 className={`w-6 h-6 -ml-2 mr-2 ${tag === 'all' ? 'fill-primary' : 'fill-dark dark:fill-light'}`} />
            <span className={`${tag === 'all' && 'text-primary'}`}>All</span>
          </li>
          {tags.map((item, idx) => (
            <li key={idx} className='group' onClick={() => handleSelect(item.title)}>
              <HiMenuAlt1 className={`w-6 h-6 -ml-2 mr-2 ${tag === item.title ? 'fill-primary' : 'fill-dark dark:fill-light'}`} />
              <span className={` ${tag === item.title && 'text-primary'}`}> {item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
