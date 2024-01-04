const Testimonials = () => {
  return (
    <section className='testimonial'>
      <div className='u-center-text u-margin-bottom-big'>
        <h2>REVIEWS FROM OUR CUSTOMERS</h2>
      </div>
      <div className='row'>
        <div className='story'>
          <figure className='story__shape'>
            <img src='rev1.jpg' alt='image1' className='story__img' />
          </figure>
          <div className='story__text'>
            <h3 className='heading-tertiary u-margin-bottom-small'>
              Niknik Badidles
            </h3>
            <p>
              Ang ganda ng ambiance. Nakaka relax, masarap tambayan with
              friends. 24/7 din matitikman ang masasarap nilang food at mga
              drinks. Large tea selection · Healthy salads · Delicious
              sandwiches
            </p>
          </div>
        </div>
      </div>

      {/* <div className='bg-video'>
        <video className='bg-video__content' autoPlay muted loop>
          <source src='/testimonial-bg-2.mp4' type='video/mp4' />
          Your Browser is not supported.
        </video>
      </div> */}
    </section>
  )
}
export default Testimonials
