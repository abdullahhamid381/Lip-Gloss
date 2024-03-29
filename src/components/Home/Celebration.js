import React from 'react'
import { party } from '../../productData'
import './Homescss/Celebration.scss'
const Celebration = () => {
  return (
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
  )
}

export default Celebration