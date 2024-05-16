import Image from 'next/image'
import glassImage from '@/public/images/glass-verre.jpg'

const ImageContainer = () => {
  return (
    <div className='grid gap-4'>
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          Image here 
        </div>
        <div className=" flex items-center space-x-4 rounded-md border p-4">
        <Image 
            src={glassImage}
            width={400}
            height={400}
            alt='test image'
        />
        </div>
        {/* <Image 
            src={glassImage}
            // width={500}
            // height={500}
            alt='test image'
        /> */}
    </div>
  )
}

export default ImageContainer
