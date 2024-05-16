import CardWithForm from '@/components/cards/CardWithForm'
import CardWIthImage from '@/components/cards/CardWithImage'
import ImageContainer from '@/components/images/ImageContainer'

const CardPage = () => {
  return (
    <div className='bg-gray-100 mx-5 h-screen flex flex-wrap items-center justify-between'>
      <CardWithForm/>
      <ImageContainer/>
      <CardWIthImage/>

    </div>
  )
}

export default CardPage
