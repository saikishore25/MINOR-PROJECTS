import React from 'react'
import './About.css'
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';



const About = () => {
    
    return (
        
        <div className='about'>

            <div className="about-left">
                
                <img className="video-img" src={about_img} alt="" />
                <img className="play-pause" src={play_icon} alt="" />

            </div>

            <div className="about-right">

                <h3>About The University</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam rerum quas sed eius veniam consequatur dignissimos consequuntur debitis, soluta, expedita blanditiis beatae! Expedita enim fuga, tempora adipisci temporibus non veniam, perferendis incidunt provident eum quos placeat facere inventore fugiat? Alias omnis rem ducimus voluptatem ipsa id nobis. Commodi perspiciatis ea iusto alias iure esse, a id aliquid tempora nemo hic veniam quasi? 
                ullam exercitationem tenetur sed, deserunt molestiae in, inventore voluptates quod eos? A non temporibus fugit laborum totam cum, laboriosam eius nobis, magnam, iusto eaque corporis perspiciatis. Impedit laborum praesentium voluptas fugit officia corrupti dolor. Iste consequuntur ratione repellat repellendus, libero velit cumque possimus quibusdam vero porro rem, earum autem harum tenetur nam odit repudiandae modi ipsam voluptatum. Nisi nam dicta hic rerum! Impedit iusto quas et cum nesciunt nisi? Repudiandae, aliquam dignissimos ex amet ut ea facere vitae quam sunt autem aut nam iure nobis accusantium, molestias dolorem sapiente atque necessitatibus, corporis laudantium.</p>


            </div>
            
        </div>
    )
}

export default About
