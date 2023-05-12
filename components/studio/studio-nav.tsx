import Link from 'next/link'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

function StudioNavBar(props: any) {
  return (
    <div className='bg-black'>
      <div className='flex items-center justify-between p-5'>
        <Link href={'/'} className='text-primary flex items-center  group group-hover:text-teal-600 space-x-2'>
          <ArrowUturnLeftIcon className='h-6 w-6 text-primary group-hover:text-primaryDark' />
          <span className='group-hover:text-primaryDark'>Home</span>
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavBar
