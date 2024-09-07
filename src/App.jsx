import React from 'react'
import Nav from './components/Nav'
import BG from './components/BG'
import Slide1 from './components/Slide1'
import Slide2 from './components/Slide2'
import Slide3 from './components/Slide3'
import Slide4 from './components/Slide4'


const App = () => {
  return (
    <div className='relative w-full main h-fit'>
       <BG />
       <Nav/>
       <Slide1 val1={"Enjoy on your TV"} val2={"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."} Img={"/tv.png"} Vi={"/video.m4v"} Key={0}/>

       <Slide2 Key={1} val1={"Download your shows to watch offline"} val2={"Save your favourites easily and always have something to watch."}/>
       
       <Slide1 val1={"Watch everywhere"} val2={"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."} Img={"/device.png"} Vi={"/video.m4v"} Key={1}/>
       
       <Slide2 Key={0}  val1={"Create profiles for kids"} val2={"Send children on adventures with their favourite characters in a space made just for them—free with your membership."}/>

       <Slide3/>
       <Slide4/>
    </div>
  )
}

export default App