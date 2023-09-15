import React from 'react'
import { MidbannerData } from './mid_bannerjson'

const Midbanner = () => {

  return (
    <section className='my-[50px]'>
      <div className="grid gap-[20px] md:grid-cols-3 px-3 md:px-0">
      {
        MidbannerData.map((ele, index) =>{
          return(
            <MidbannerCard key={index} card={ele}/>
          )
        })
      }
      </div>
    </section>
  )
}

export default Midbanner


const MidbannerCard = ({card}) => {

  const {desc, title, image, button} = card

  return (
    <article className='relative shadow-lg shadow-gray-400'>
        <img src={image} alt={title} className='object-cover'/>
        <div className='absolute top-[35%] md:top-[15%] lg:top-[30%] left-3 flex-col gap-[5px]'>
          <p className='text-[#EB1B3E] uppercase text-lg md:text-sm'>{desc}</p>
          <p className='md:max-w-[150px] xl:max-w-full font-semibold uppercase text-xl md:text-base'>{title}</p>
          <a href="#" className='my-5 capitalize text-sm border-b-2 border-black '>{button}</a>
        </div>
    </article>
)
}
