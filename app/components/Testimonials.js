const Testimonials = () => {
  return (
    <section className='testimonial'>
      <div className='u-center-text u-margin-bottom-big'>
        <h2>OUR MENU</h2>
      </div>
      <div className='bg-video'>
        <video className='bg-video__content' autoPlay muted loop>
          <source src='/testimonial-bg-2.mp4' type='video/mp4' />
          Your Browser is not supported.
        </video>
      </div>
    </section>
  )
}
export default Testimonials
