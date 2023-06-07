import React from 'react'
import './Homescss/Part.scss'

const Part = ({first,second,third}) => {
  return (
   <div>
   
    <div className='popular-parent'>
                <div className='product-gift-grid'>
                    <div style={{overflow:'hidden',boxSizing:'border-box'}}>
                        <img src='./images/firsth.jpg' alt="" className='product-gift-img' />
                      
                    </div>
                    <div style={{overflow:'hidden',boxSizing:'border-box'}}>
                        <img src='./images/secondh.jpg' alt="" className='product-gift-img' />
                        <img src='./images/thirdh.jpg' alt="" className='product-gift-img' />
                    </div>
                </div>

              
            </div>
   </div>
  )
}

export default Part