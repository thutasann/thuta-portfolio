import { CodeCategory } from '@/types/typings'
import React from 'react'
import { AiOutlineTags } from 'react-icons/ai'
import { BiChevronsRight } from 'react-icons/bi'
import { HiMenuAlt1 } from 'react-icons/hi'

interface ISidebar {
  tags: CodeCategory[]
}

const Sidebar = ({ tags }: ISidebar) => {
  return (
    <div className='sidebar'>
      <h2 className='font-[700] text-2xl flex items-center text-dark dark:text-light'>
        <AiOutlineTags className='w-6 h-6 mr-3 -ml-2' />
        Tags
      </h2>
      <div className='w-full mt-7 sidebar_content'>
        <ul>
          <li className='group'>
            <HiMenuAlt1 className={`w-6 h-6 -ml-2 mr-2 fill-primaryDark`} />
            <span className='group-hover:ml-2'>All</span>
          </li>
          {tags.map((item, idx) => (
            <li key={idx} className='group'>
              <HiMenuAlt1 className={`w-6 h-6 -ml-2 mr-2 fill-primaryDark`} />
              <span className='group-hover:ml-2'> {item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
