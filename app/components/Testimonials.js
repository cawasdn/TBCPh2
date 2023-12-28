const Testimonials = () => {
  return (
    <section className='testimonial'>
      <div className='bg-video'>
        <video className='bg-video__content' autoPlay muted loop>
          <source src='/testimonial-bg-2.mp4' type='video/mp4' />
          Your Browser is not supported.
        </video>
      </div>
      {/* <h1 className='testimonial-title'>We Rebuild Lives</h1>
      <div className='testimonial-video-box'>
        <video className='testimonial-video' autoPlay muted loop>
          <source src={'/testimonial-bg-2.mp4'} type='video/mp4'></source>
        </video>
      </div> */}
    </section>
  )
}
export default Testimonials
