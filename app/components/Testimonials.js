const Testimonials = () => {
  return (
    <section>
      <h1 className='testimonial-title'>We Rebuild Lives</h1>
      <div className='testimonial-video-box'>
        <video className='testimonial-video' autoPlay muted loop>
          <source src={'/testimonial-bg-2.mp4'} type='video/mp4'></source>
        </video>
      </div>
    </section>
  )
}
export default Testimonials
