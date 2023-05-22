import React, { useEffect } from 'react'
import './Homescss/Part.scss'

const Part = ({first,second,third}) => {

  return (
   <div>
   
    <div className='popular-parent'>
                <div className='product-gift-grid'>
                    <div style={{overflow:'hidden',boxSizing:'border-box'}} >
                        <img src={first} alt="" className='product-gift-img'  data-aos="fade-up" style={{boxShadow:'0px 0px 5px 0px #00000042'}}/>
                      
                    </div>
                    <div style={{overflow:'hidden',boxSizing:'border-box'}} >
                        <img src={second} alt="" className='product-gift-img' data-aos="fade-down" style={{boxShadow:'0px 0px 5px 0px #00000042'}}/>
                        <img src={third} alt="" className='product-gift-img' data-aos="fade-up" style={{boxShadow:'0px 0px 5px 0px #00000042'}}/>
                    </div>
                </div>

              
            </div>
   </div>
  )
}

export default Part