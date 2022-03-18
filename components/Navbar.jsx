import { auth } from "../firebase";
import { signOut } from "firebase/auth";

import {Link} from 'react-scroll'
import * as Scroll from 'react-scroll'
const Navbar = ({googleSignIn,setUserLoggedIn,userloggedIn}) => {
    const scroll = Scroll.animateScroll;



    return <nav className= " fixed w-full h-28 text-gray-600 text-lg bg-white font-mono list-none z-20" >
        <ul className=" flex justify-evenly items-center h-full  w-[70%] mx-auto transition-al " >
            <Link to="hero" smooth={true} duration={500} className="hover:text-red-400 cursor-pointer " >Home</Link>
            <Link to="usedcars" smooth={true} offset={-10} duration={500} className="hover:text-red-400 cursor-pointer ">Used Cars</Link>
            <Link to="valuation" smooth={true} duration={500} className="hover:text-red-400 cursor-pointer ">Valuation</Link>
            <Link to="sold" smooth={true} offset={-10} duration={500} className="hover:text-red-400 cursor-pointer ">Sold</Link>
            <Link to="slider" smooth={true} offset={-50} duration={500} className="hover:text-red-400 cursor-pointer ">Bodywork</Link>
            <Link to="footer" smooth={true} duration={500} className="hover:text-red-400 cursor-pointer ">Contact Us</Link>
        </ul>
        <h3 onClick={()=>scroll.scrollToTop()} className="absolute top-8 left-24 text-4xl cursor-pointer transition-all hover:scale-110 text-black underline underline-offset-8  italic  font-bold " >NSR</h3>
        {
           userloggedIn ? (<button onClick={()=>{
            signOut(auth).then(()=>{
                setUserLoggedIn(false);
                alert("You've been signed out successfully")
                localStorage.removeItem("email");
            })
        }} className="absolute top-8 right-24 px-4 py-2 rounded-md text-white bg-green-400 " >Sign Out</button>) : (<button onClick={()=>googleSignIn()} className="absolute top-8 right-24 px-4 py-2 rounded-md text-white bg-green-400 " >Google Sign In</button>)
        }
    </nav>

}

export default Navbar