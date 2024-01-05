const Products = () => {
  return (
    <section className='product-section'>
      <div className='products-title'>
        <h2>OUR PRODUCTS</h2>
        <h3>TBC serves a vast variety of drinks</h3>
      </div>
      <div className='products'>
        <div className='products-items'>
          <img src='/products/milktea.jpg' alt='' />
          <p>Milktea</p>
        </div>
        <div className='products-items'>
          <img src='/products/original-tea.jpg' alt='' />
          <p>Original tea</p>
        </div>
        <div className='products-items'>
          <img src='/products/frappe.jpg' alt='' />
          <p>Frappe</p>
        </div>
        <div className='products-items'>
          <img src='/products/Fruit-Tea.jpg' alt='' />
          <p>Fruit tea</p>
        </div>
        <div className='products-items'>
          <img src='/products/iced.jpg' alt='' />
          <p>Iced Series</p>
        </div>
        <div className='products-items'>
          <img src='/products/lemonades.jpeg' alt='' />
          <p>Lemonade</p>
        </div>
        <div className='products-items'>
          <img src='/products/sodapops.jpg' alt='' />
          <p>Sodapops</p>
        </div>
        <div className='products-items'>
          <img src='/products/hot.jpg' alt='' />
          <p>Hot Drinks </p>
        </div>
      </div>
      <div className='Slideshow'></div>
    </section>
  )
}

export default Products
