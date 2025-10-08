import React from 'react'
import './Footer.css';
import logoo from '../images/logoo.jpg';
import istore from '../images/istore.jpg';
import insta from '../images/insta.svg';
import face from '../images/face.svg';
import twitter from '../images/twitter.svg';
import appstore from '../images/appstore.jpg';
const Footer = () => {
  return (
    <div>
    <section className='five'>
     <div className='row1'>
      <div className='col5'><img src={logoo}/></div>
      <div className='col6'>About Us<br/><br/>
                         Our Heritage<br/><br/>
                        Coffeehouse<br/><br/>
                        Our Company</div><br/>
      <div className='col7'>Responsibility<br/><br/>
                               Diversity<br/><br/>
                              Community<br/><br/>
                            Ethical Sourcing<br/><br/>
                           Environmental Stewardship<br/><br/>
                              Learn More</div><br/>                  
     <div className='col8'>Legal<br/> <br/>
                    Disclaimer </div>
     <div className='col9'>Quick Links<br/><br/>
                             FAQs<br/><br/>
                          Customer Service<br/><br/>
                               Delivery<br/><br/>
                      Loyalty Program Terms and Conditions<br/><br/>
                       Starbucks India Mobile App Terms of Use<br/><br/>
                            Starbucks® Rewards Program<br/><br/>
                            Free Tall Bev on Survey<br/><br/>
                            Special 30% Off on Beverage<br/><br/>
                          20% Off on Classic Combo Offer<br/><br/>
                           Early Access Offer T&C<br/><br/>
                                 Privacy Policy<br/><br/>
                            SR Exclusive Beverage<br/><br/>
                          Buy any 2 Food Get15% Off<br/><br/>
                     Tues Club - 20% Off on Invoice T&C - Sep</div>                      
     </div>
     <div className='row2'>
      <div className='col10'>SOCIAL MEDIA</div>
      <div className='col11'><img src={istore}/></div>
      </div>   
     <div className='row3'>
      <div className='col12'>
      <div className='row4'>
        <div className='col13'><img src={insta}/></div>
        <div className='col14'><img src={face}/></div>
        <div className='col15'><img src={twitter}/></div>
      </div>
      </div>
      <div className='col16'><img src={appstore}/></div>
      <img className='web' src={logoo}/>
      </div> 
      

      <hr/>
      <ul className='fot'>
        <li className='fot1'> Web Accessibility</li>|
        <li className='fot1'>Privacy Statement</li>|
        <li className='fot1'> Teams of Use</li>|
        <li className='fot1'> Contact us</li>|
      </ul>
    </section>

    </div>
  )
}

export default Footer