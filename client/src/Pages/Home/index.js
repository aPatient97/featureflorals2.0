import React, { useEffect, useState } from 'react'
import UrlButton from '../../components/UrlButton';
import InstaButton from '../../components/InstaButon';
import './style.css'
import ContactForm from '../../components/ContactForm';
import InstaSVG from '../../components/InstaSVG';
import MultiCarousel from '../../components/MultiCarousel';
import MothersDay from '../../components/MothersDay';
import Contact from '../../components/Contact';

function Home() {

  const [mothersDay, setMothersDay] = useState(null)

  useEffect(() => {
    
   if (sessionStorage.getItem('viewed') === null) {
     setMothersDay(true)
      sessionStorage.setItem('viewed', 'modal has rendered')
      console.log(sessionStorage.getItem('viewed'))
   }
    
  }, [])

  return (

    <>

    { mothersDay && (
      <MothersDay setMothersDay={setMothersDay}/>
    )}

    <div className="background-image">
      {/* <div className='flex-row'>
        <Header />       
      </div> */}
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
