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

        <div className='story'>
          <figure className='story__shape'>
            <img src='rev2.jpg' alt='image2' className='story__img' />
          </figure>
          <div className='story__text'>
            <h3 className='heading-tertiary u-margin-bottom-small'>
              Rhea M. C. Ortiz
            </h3>
            <p>
              Spacious, fresh and easy to find ang place. Their Food was in big
              serving super sulit.Very bait ng mga staffs and heto pa 24/7 is
              the best. Surely, I will get back here. Ang sarap ng carbonara
              nila, and worth it yung food nila, with affordable price. Maganda
              dito if gusto jiyo magundwind, along highway lang din 🥰
            </p>
          </div>
        </div>

        <div className='story'>
          <figure className='story__shape'>
            <img src='rev3.jpg' alt='image2' className='story__img' />
          </figure>
          <div className='story__text'>
            <h3 className='heading-tertiary u-margin-bottom-small'>
              Momshie Tine Reyes
            </h3>
            <p>
              The place is so relaxing because of their Al Fresco Dining. And
              Sobrang sarap ng foods nila we tried their Mojos, TBC Pasta
              Alfredo, and Cheesecake Series Oreo Cheesecake XXL size grabe ang
              generous ng serving nila. We will surely comeback again 🥰
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
