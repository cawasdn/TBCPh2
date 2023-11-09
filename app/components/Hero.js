import Image from 'next/image'
import heroa from '../assets/hero-a.jpg'
import herob from '../assets/hero-b.jpg'
import heroc from '../assets/hero-c.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-box'>
        <div className='hero-title'>
          <h1>Thousands of healthy, tasty recipes from all over the world!</h1>
        </div>
        <div className='hero-info'>
          <p>Immerse yourself in a world of endless flavor possibilities.div</p>
          <p>
            Come and join the Flavorist movement, where culinary artistry meets
            community!
          </p>
        </div>
      </div>
      <div className='hero-feature-box'>
        <Image
          src={heroa}
          className='hero-image-1'
          alt='Photo of an example food'
        />
        <Image
          src={herob}
          className='hero-image-2'
          alt='Photo of an example food'
        />
        <Image
          src={heroc}
          className='hero-image-3'
          alt='Photo of an example food'
        />
      </div>
    </div>
  )
}
export default Hero
