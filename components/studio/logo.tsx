import Image from 'next/image'

function Logo(props: any) {
  const { renderDefault, title } = props
  return (
    <div className='flex items-center space-x-2'>
      <Image
        src='/thutadev.webp'
        width={60}
        height={60}
        loading='lazy'
        blurDataURL='/thutadev.webp'
        alt='thuta dev'
        className='object-cover rounded-lg'
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  )
}

export default Logo
