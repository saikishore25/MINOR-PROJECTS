import React from 'react'
import message from '../../assets/msg-icon.png';
import mail from '../../assets/mail-icon.png';
import phone from '../../assets/phone-icon.png';
import location from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';


import './Contact.css'


const Contact = () => {
    
    return (
        
        <div className='contact'>
            
                <div className="contact-address">

                        <div className="message">

                            <p>Send Us A Message</p>
                            <img src={message} alt="" />

                        </div>

                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat expedita suscipit odit nihil eum, repellendus distinctio repudiandae accusamus doloremque doloribus earum aliquid corrupti labore similique iusto. Facilis eligendi, unde eum vitae sequi voluptates qui quia nobis ad eveniet reprehenderit eos quo, rem doloremque incidunt ipsa iste, minus aliquam doloribus magni.</p>

                        <div className="contact-email">
                            
                            <img src={mail} alt="" />
                            <p>makam.kishore.991.sandhya@gmail.com</p>

                        </div>

                        <div className="contact-phone">

                            <img src={phone} alt="" />
                            <p>+91 9490983357</p>

                        </div>

                        <div className="contact-addr">

                            <img src={location} alt="" />
                            <p>9/4/A/CF Uppal, Ramanthapur, Hyderabad 500039, Telangana, India </p>

                        </div>
                </div>

                <div className="contact-form">
                    
                    <div className="fillers">

                        <label htmlFor="name">Your Name</label>
                        <br />
                        <input placeholder="Enter Your Name" type="text" name="" id="name" />

                    </div>

                    <div className="fillers">

                        <label htmlFor="name">Phone Number</label>
                        <br />
                        <input placeholder="Enter Your Mobile" type="number" name="" id="number" />
                        
                    </div>

                    <div className="fillers">

                        <label htmlFor="text">Write Your Message Here</label>
                        <br />
                        <textarea name="" id="text" rows={10} cols={80}></textarea>


                    </div>

                    <button className='main-btn bt-color'>Submit Now <img src={white_arrow} alt="" /></button>
                </div>
        
        </div>
    )
}

export default Contact
