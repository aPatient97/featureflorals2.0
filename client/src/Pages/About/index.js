import React from 'react'
//import InstaSVG from '../../components/InstaSVG'
import ParallaxPics from '../../components/ParallaxPics'
import './style.css'

function About() {


  return (
    <>
        <h1 className='center-text about-h1'>Behind the flowers</h1>
        <ParallaxPics />
        <div className='about'>
            <div className='about-ps'>
                
              <p>Feature Florals was founded by Shannon, a floral designer based in south-west London. 
              </p>
              <p>As a studio we pride ourselves on working with the seasons and practice using sustainable methods, utilising local British suppliers and growers wherever possible. </p>
              <p>Spending plentiful time outdoors in nature, no matter the season, inspires our creative floristry style. This is reflected in the colours, textures, shapes, and forms of our arrangements.
              </p>
              <p>Practicing in these important and sought after methods and style has led to Shannon gaining a vast amount of experience working for some incredibly talented florists and companies in and out of London.</p>
              <p>We are always up for a coffee and a cake with like-minded creatives, so do reach out if you would like to meet and collaborate.</p>
            </div>
            <div className='img-container'>
              <img className='about-img1' src="/images/about-img/shannon-flowers.webp" alt="Shannon Clifford in the Feature Florals / featureflorals studio surrounded by flowers." />
              <img className='about-img2' src="/images/about-img/shan-front.webp" alt="A front shot of featureflorals holding a bouquet of flowers with a digital camera" />
              <img className='about-img3' src="/images/about-img/shan-front-cam.webp" alt="A front shot of featureflorals holding a bouquet of flowers with a digital camera" />
            </div>
        </div>
        {/* <div className="insta-container">
          <InstaSVG />
        </div> */}
    </>
  )
}

export default About
