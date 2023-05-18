import React, { useEffect } from 'react'
import './Homescss/Part.scss'

const Part = ({first,second,third}) => {

  return (
   <div>
   
    <div className='popular-parent'>
                <div className='product-gift-grid'>
                    <div style={{overflow:'hidden',boxSizing:'border-box'}} data-aos="fade-up">
                        <img src={first} alt="" className='product-gift-img'  />
                      
                    </div>
                    <div style={{overflow:'hidden',boxSizing:'border-box'}} data-aos="fade-up">
                        <img src={second} alt="" className='product-gift-img'/>
                        <img src={third} alt="" className='product-gift-img'/>
                    </div>
                </div>

              
            </div>
   </div>
  )
}

export default Part