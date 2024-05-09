import React from 'react'

const Footer = () => {
    const date = new Date();
  return (
      <footer className='foo'>
          <p>Copyright &copy; {date.getFullYear()} all reserved</p>
    </footer>
  )
}

export default Footer