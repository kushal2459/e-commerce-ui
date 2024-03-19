import React from 'react'
import about_img from '../img/about_img.jpg'

const About = () => {
  return (
    <>
    <div className='text-center flex flex-col justify-center items-center mt-10'>
        <h1 className='text-3xl font-semibold max-w-lg md:max-w-3xl'>Get To Know Who We Are And What We Do - About Us</h1>
        <p className='max-w-xl md:max-w-2xl my-5 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nostrum autem omnis suscipit tempore at libero voluptates totam sit ex eaque cum eum laborum inventore, quos dolorum sequi est commodi magni eius molestiae mollitia exercitationem eligendi harum. Sed beatae asperiores inventore quasi esse repellendus, nam harum, delectus quis modi facilis nihil atque ad iste nostrum! Omnis consectetur adipisci nesciunt magni reiciendis nam totam dolor ipsum quis sed itaque dicta tenetur corporis, cumque quia ipsa? Maxime quo distinctio corporis pariatur nobis atque voluptatum cum molestiae debitis illum dolorem exercitationem, itaque quod totam quos tempore, dolores dolorum animi fugit natus quisquam numquam.</p>
    </div>
    <div className='flex flex-col md:flex-row gap-16'>
        <div className='md:py-10'>
            <h1 className='text-3xl font-semibold'>Learn About Us And What Sets Us Apart</h1>
            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure culpa exercitationem facere optio deleniti dolorem, recusandae reprehenderit maxime earum delectus beatae aperiam quos vero blanditiis nisi ex repudiandae id sapiente quam quibusdam a quo! Dolore suscipit excepturi dignissimos modi magni expedita, error, minus ut qui quasi corporis sapiente aut tempore!</p>
        </div>
        <div className='flex justify-center md:justify-end'>
            <img src={about_img} alt="about_img" width={3000} className='w-full md:w-96'/>
        </div>
    </div>
    
    </>
  )
}

export default About