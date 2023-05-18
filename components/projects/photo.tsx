import BlurImage from '../blur-image'

export default function Photo({ photo }: { photo: { imgUrl: string } }) {
  return (
    <>
      <BlurImage alt='project' src={photo.imgUrl} height={600} width={600} className='w-full object-cover aspect-square col-span-2' />
    </>
  )
}
