import Photo from '@/components/projects/photo'
import { projects } from '@/constants/data'
import { IProject } from '@/types/typings'
import React from 'react'

export default function PhotoPage({
  params: { id },
}: {
  params: {
    id: string
  }
}) {
  const photo = projects.find(p => p.id === Number(id)) as IProject

  return (
    <div className='container mx-auto my-10'>
      <div className='w-1/2 mx-auto border border-gray-700'>
        <Photo photo={photo} />
      </div>
    </div>
  )
}
