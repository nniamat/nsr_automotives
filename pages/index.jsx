import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import UsedCars from '../components/UsedCars'
import Sold from '../components/Sold'
import Valuation from '../components/Valuation'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth} from '../firebase'
import {useState,useEffect} from 'react'
import AOS   from 'aos';
import "aos/dist/aos.css";

function Homepage() {
  useEffect(() => {
   AOS.init({
     duration:2000
   });

  }, []);


  const [userloggedIn,setUserLoggedIn] = useState(false)
  const [user,setUser] = useState()
  const provider = new GoogleAuthProvider();
 const googleSignIn = () => {signInWithPopup(auth, provider)
 .then((result) => {
  localStorage.setItem("email",result.user.email);
  setUserLoggedIn(true);
  console.log(result);
  setUser(result)
 }).catch((error) => {
  console.error(error);
 })}

 useEffect(()=>{
   if(localStorage.getItem("email")){
     setUserLoggedIn(true)
   }
 },[])



  return (
    <>
    <Navbar  userloggedIn={userloggedIn} setUserLoggedIn={setUserLoggedIn} googleSignIn={googleSignIn} />
    <Hero user={user} />
    <UsedCars/>
    <Valuation user={user} />
    <Sold/>
    <Slider/>
    <Footer/>
    </>
  )
}

export default Homepage