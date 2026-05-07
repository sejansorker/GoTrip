import React from 'react'
import Container from './Container'

const Header = () => {
  return (
    <Container>
       <div className="flex ">
        <div className="w-1/3">
        logo
        </div>
        <div className="w-1/3">
        <ul className='flex gap-x-13'><li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Blog</li>
        <li>Contact</li></ul>
        </div>
        <div className="w-1/3">
        <button>Call</button></div>
       </div>
    </Container>
  )
}

export default Header