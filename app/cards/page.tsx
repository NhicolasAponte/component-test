import CardWithForm from '@/components/cards/CardWithForm'
import CardWIthImage from '@/components/cards/CardWithImage'

const CardPage = () => {
  return (
    <div className='bg-gray-100 m-5 h-screen w-full flex flex-wrap items-center justify-between'>
      <CardWithForm/>
      <CardWIthImage/>

    </div>
  )
}

export default CardPage
