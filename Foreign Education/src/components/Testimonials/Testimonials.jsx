import './Testimonials.css';
import React, { useState } from 'react';
import forward_icon from '../../assets/next-icon.png';
import backward_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const testimonialsData = [
    
    {
        img: user_1,
        name: 'Ricky Ponting',
        location: 'Edusity, USA',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, tempore est earum ipsa natus perspiciatis aspernatur architecto quae veniam dolorum tenetur maxime nam minus nemo perferendis, corporis tempora hic? Fuga!',
    },

    {
        img: user_2,
        name: 'William Jackson',
        location: 'Edusity, USA',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, tempore est earum ipsa natus perspiciatis aspernatur architecto quae veniam dolorum tenetur maxime nam minus nemo perferendis, corporis tempora hic? Fuga!',
    },
    {
        img: user_3,
        name: 'Emily Clarke',
        location: 'Edusity, USA',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, tempore est earum ipsa natus perspiciatis aspernatur architecto quae veniam dolorum tenetur maxime nam minus nemo perferendis, corporis tempora hic? Fuga!',
    },
    {
        img: user_4,
        name: 'Silveston ponty',
        location: 'Edusity, USA',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, tempore est earum ipsa natus perspiciatis aspernatur architecto quae veniam dolorum tenetur maxime nam minus nemo perferendis, corporis tempora hic? Fuga!',
    },
    {
        img: user_4,
        name: 'Silveston ponty',
        location: 'Edusity, USA',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, tempore est earum ipsa natus perspiciatis aspernatur architecto quae veniam dolorum tenetur maxime nam minus nemo perferendis, corporis tempora hic? Fuga!',
    },
    {
        img: user_4,
        name: 'Silveston ponty',
        location: 'Edusity, USA',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, tempore est earum ipsa natus perspiciatis aspernatur architecto quae veniam dolorum tenetur maxime nam minus nemo perferendis, corporis tempora hic? Fuga!',
    },
    {
        img: user_4,
        name: 'Silveston ponty',
        location: 'Edusity, USA',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, tempore est earum ipsa natus perspiciatis aspernatur architecto quae veniam dolorum tenetur maxime nam minus nemo perferendis, corporis tempora hic? Fuga!',
    },

];

const Testimonials = () => {
   

    return (
        <div className="testimonial">
            
            <div className="testimonials">

                <img src={backward_icon} alt="Previous" className="prev-btn"  />

                <div className='slider-panel'>


                    {testimonialsData.map((value, index) => (


                            <div className="slides" key={index}>

                                <div className="user-info">

                                    <img src={value.img} alt="" />
                                    <div>

                                        <h3>{value.name}</h3>
                                        <span>{value.location}</span>

                                    </div>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur architecto voluptas voluptatem modi vel iste. Dolores, quasi quidem? Fugit, iusto consequuntur, vel at quisquam velit fuga saepe maxime nobis numquam atque harum ipsa aut.</p>

                                </div>

                            </div>

                    ))}




                </div>
                



                <img src={forward_icon} alt="Next" className="next-btn" />
            </div>
        
        </div>
    );
};

export default Testimonials;
