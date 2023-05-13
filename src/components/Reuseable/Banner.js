import React from 'react'
import './Reuseablescss/Banner.scss'
const Banner = () => {
  return (
    <div className='banner-parent'>
      <div className="container">
        <div className="container">
          <div className="grid">
            <div className="start">
              <h2>Heading of this section</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, facere tenetur sed corrupti dolore ipsam modi exercitationem? Iusto ducimus vero enim nostrum eos necessitatibus quis. Minus assumenda in aut voluptates.</p>
              <button>Shop Now!</button>
            </div>
            <div className="end">
              {/* <img src="https://images.unsplash.com/photo-1556942040-df93bd3bdd19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmVhdXR5JTIwZmFjZXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner