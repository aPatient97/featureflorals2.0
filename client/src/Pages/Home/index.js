import React, { useEffect, useState } from 'react'
import UrlButton from '../../components/UrlButton';
import InstaButton from '../../components/InstaButon';
import './style.css'
import ContactForm from '../../components/ContactForm';
import InstaSVG from '../../components/InstaSVG';
import MultiCarousel from '../../components/MultiCarousel';
import MothersDay from '../../components/MothersDay';
import Contact from '../../components/Contact';
import ScrollDown from '../../components/ScrollDown';

function Home() {

  const [mothersDay, setMothersDay] = useState(null)

  useEffect(() => {
    
   if (sessionStorage.getItem('viewed') === null) {
     setMothersDay(true)
      sessionStorage.setItem('viewed', 'modal has rendered')
      console.log(sessionStorage.getItem('viewed'))
   }
   const bgImg = document.querySelector('.background-image')
   bgImg.addEventListener('wheel', handleWheel, {passive: false})
   
   // eslint-disable-next-line
  }, [])

  const scrollDown = (e) => {
    const destination = document.querySelector('.break-container')
    destination && destination.scrollIntoView({ behaviour: 'smooth' })
    // const bgImg = document.querySelector('.background-image')
    // bgImg.addEventListener('wheel', e => e.preventDefault(), { passive: false})
  }

  const handleWheel = (e) => {
    e.preventDefault()
    scrollDown(e)
    
    const bgImg = document.querySelector('.background-image')

    bgImg.removeEventListener('wheel', handleWheel)
}
  
  return (

    <>

    { mothersDay && (
      <MothersDay setMothersDay={setMothersDay}/>
    )}

    <div className="background-image" >
      {/* <div className='flex-row'>
        <Header />       
      </div> */}
      <ScrollDown />
    </div>
    <div className='break-container'>
      <div className="break">
        <p>Passionate about sustainable practises <span id='fontless'>&</span> working with the seasons</p>
        {/* <p id='lighter'> Inspired by the flourishing beauty of untouched meadows and idyllic country gardens.</p> */}
      </div>
    </div>
    {/* <div className="parallax-vid">
      <BgVideo />
    </div> */}

    <UrlButton text={'Click for full gallery'} url={'/gallery'}/>
    <MultiCarousel />

    <div className="flex home-btns">
      {/* <UrlButton text={'Contact me here'} url={'/about'} onClick={scrollContact}/> */}
      <InstaButton text={'Follow me on Instagram @featureflorals'} url={'https://www.instagram.com/featureflorals/'}/>
    </div>

    <Contact />
    <ContactForm />
    <InstaSVG />
    
    </>
  )
}

export default Home
