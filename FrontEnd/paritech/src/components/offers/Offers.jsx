import React from 'react'
import image1 from '../../assets/Images/offers/mid-banner1.jpg'
import image2 from '../../assets/Images/offers/mid-banner2.jpg'

const Offers = () => {
  return (
    <section className='mx-auto max-w-[1200px] grid md:grid-cols-2 items justify-center gap-[30px] my-[50px] px-[15px]'>
        <Offer image={image1} title={"men's items upto 50%"} subtitle={"Mens's collection"}/>
        <Offer image={image2} title={"mid season upto 50%"} subtitle={"Men's collection"}/>
    </section>
  )
}

export default Offers


const Offer = ({image, title, subtitle}) =>{
    return(
        <article className='relative shadow-lg shadow-gray-400 max-h-[300px]'>
            <img src={image} alt='' className='w-full h-full object-cover'/>
            <div className='absolute top-[10%] left-[10%]'>
                <p className='text-red-500 capitalize'>{subtitle}</p>
                <h3 className='text-[1.4rem] uppercase font-medium'>{`${title}`}</h3>
                <button className='my-[30px] bg-black px-[30px] py-[8px] rounded-lg text-white'>Shop Now</button>
            </div>
        </article>
    )
}