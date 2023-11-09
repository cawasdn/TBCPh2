import Link from 'next/link'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-box'>
        <div className='header-info-box'>
          <div>
            <Link href='/'>
              <h1>The Big Cup</h1>
            </Link>
            <p>Where taste meet imagination.</p>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
