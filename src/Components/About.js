import React from 'react'
import { BsFacebook,BsInstagram,BsLinkedin } from "react-icons/bs";
import Navbar from './Navbar';


const About = () => {
  return (
    <div className='about-page-container'>
        <Navbar/>
      <div className='about-page-section'>
        <div className='one-section-main'>
          <div className='text-only-div'>
              <h3>Chef</h3>
              <h1>Shabarinath , Karthik , Jayasimha</h1>
              <p>Lorem ipsum dolor amet glavrida – sit amet, consectetur 
                adipiscing dolor sit amet, consectetur adipiscing elit. Aenean 
                fermentum at urna at scelerisque. Praesent suscipit nisi non pretium 
                ultrices. Ut eu ante sit amet ligula laoreet posuer euismod consectetur 
                fringilla eu, lobortis in sapien.
                Fusce malesuada ligula enim, fermentum rhoncus eros efficitur efficitur. 
                Maecenas tincidunt, elit eu ornare volutpat, lorem arcu ullamcorper tortor, 
                quis cursus ante magna in erat.</p>
                <div className='icon-media-div'>
                   <BsFacebook className='fb-icon'/>
                   <BsInstagram className='ins-icon'/>
                   <BsLinkedin className='link-icon'/>
                </div>
          </div>
          <div className='img-only-div'>
             <img  src="https://the7.io/elementor-restaurant/wp-content/uploads/sites/99/elementor/thumbs/res013-pt1xp0h01vbs0pcngsnc8hianrukr6zu482nmxhqg8.jpg" alt=""/>
          </div>
        </div>
        <div className='one-section-main'>
          <div className='text-only-div'>
            <h1>Fresh local ingredients</h1>
              <div>
                <h2>Vegetables</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
                    luctus nec ullamcorper mattis dapibus leo.
                </p>
              </div>
              <div>
                <h2>Meat & poultry</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
                    luctus nec ullamcorper mattis dapibus leo.
                </p>
              </div>
              <div>
                <h2>Local cheeses</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
                    luctus nec ullamcorper mattis dapibus leo.
                </p>
              </div>
          </div>
          <div className='img-only-div'>
             <img  src="https://the7.io/elementor-restaurant/wp-content/uploads/sites/99/elementor/thumbs/food052-ptcmf2xxy70yzrcqskb4ygwtbmmgokt2zp691puvqg.jpg" alt=""/>
          </div>
        </div>
        <div className='one-section-main'>
          <div className='text-only-div'>
          <h1>Atmosphere</h1>
              <div>
                <h2>The restaurant</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
                    luctus nec ullamcorper mattis dapibus leo.
                </p>
              </div>
              <div>
                <h2>The bar</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
                    luctus nec ullamcorper mattis dapibus leo.
                </p>
              </div>
              <div>
                <h2>The terrace</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
                    luctus nec ullamcorper mattis dapibus leo.
                </p>
              </div>
          </div>
          <div className='img-only-div'>
             <img  src="https://the7.io/elementor-restaurant/wp-content/uploads/sites/99/elementor/thumbs/food062-ptcmf8kz378oxf4jvmqwdfhkvxunyrfh0h35xdmip4.jpg" alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;