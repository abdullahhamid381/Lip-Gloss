import React from 'react'
import './Homescss/Part.scss'
import { party } from '../../productData'
const Part = ({two,three,four}) => {
  return (
   <div>
     <div className='part-grid'>
        {
            party.map((item)=>{
                return(
                    <div className='party-detail' id={item.id}>
                        <div className='icon'>
                            <span>{item.icon}</span>
                        </div>
                        <div className='title'>
                            <h5>{item.title}</h5>
                        </div>
                        <div className='para'>
                            {item.para}
                        </div>
                    </div>
                )
            })
        }
       
    </div>
    <div className='popular-parent'>
                <div className='product-gift-grid'>
                    <div style={{overflow:'hidden',boxSizing:'border-box'}}>
                        <img src={two} alt="" className='product-gift-img' />
                      
                    </div>
                    <div style={{overflow:'hidden',boxSizing:'border-box'}}>
                        <img src={three} alt="" className='product-gift-img' />
                        <img src={four} alt="" className='product-gift-img' />
                    </div>
                </div>

              
            </div>
   </div>
  )
}

export default Part