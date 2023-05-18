import React from 'react'
import './Homescss/Team.scss'
const Team = () => {
    return (
        <div className='team-parent'>
            <div className='team-img-text-first' data-aos="fade-up">
                <div>
                    <img src="./images/6.webp" alt="" />
                </div>
                <div className='content'>
                    <div>
                    <h3>
                    GIRL,S NIGHT</h3>
                    <p>Gather your girlfriends for a night of making lipsticks, partying, and fun. Escape the stress-filled everyday and relax in our colorful, casual atmosphere. Sip your favorite beverage and dance to the music while our experienced artists help you create your own personal masterpiece.</p>
                    </div>
                </div>
            </div>



            <div className='team-img-text-second'data-aos="fade-up">
                
                <div className='content'>
                    <div>
                    <h3>
                    BIRTHDAY PARTIES</h3>
                    <p>Set your creativity free with a new twist on fun. Our professional mixologists guides each guest to create a finished work of art they can proudly use and call their own.</p>
                    </div>
                </div>
                <div>
                    <img src="./images/7.webp" alt="" />
                </div>
            </div>


            <div className='team-img-text-first'data-aos="fade-up">
                <div>
                    <img src="./images/8.webp" alt="" />
                </div>
                <div className='content'>
                    <div>
                    <h3>
                    BRIDAL SHOWERS</h3>
                    <p>Celebrate with your sisterhood and create a lasting memory before your big day. It,s the perfect plan for your wedding party. Mix and sip with your sisters in style. Book a private party or join one of ours.</p>
                    </div>
                </div>
            </div>


          
        </div>
    )
}

export default Team