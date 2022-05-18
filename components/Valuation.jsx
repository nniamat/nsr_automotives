import emailjs from 'emailjs-com'
import { useRef } from 'react'

const Valuation = ({user}) => {
	const form = useRef();

	const sendEmail = e => {
		e.preventDefault();
		emailjs.sendForm("service_vcz9e3g","template_8dezgpa",form.current,"_o7-C_Q36leqRAAZ4").then(()=>{
			alert("Message sent successfully");
			form.current.value(null);
		}).catch((e)=>console.log(e))
	}

    return <section data-aos="fade-left" id="valuation" className="h-screen bg-gray-900 text-white flex flex-col justify-center items-center  " >
        <h2 className="text-3xl font-bold tracking-widest underline underline-offset-8 mt-10 " >Valuation</h2>
        <form ref={form} onSubmit={sendEmail} className="w-[50%] m-20 text-black mt-10 " >

		<div className="relative z-0 mb-6 w-[95%] mx-auto group p-2 ">
        <input type="email" value={user && user.user.email} name="email" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="email" className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        </div>
    
		<div className="grid xl:grid-cols-2 xl:gap-6 p-6">
			<div className="relative z-0 mb-6 w-full group">
				<input value={user && user.user.displayName} type="text" name="username" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
				<label htmlFor="username" className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
			</div>
			<div className="relative z-0 mb-6 w-full group">
				<input type="text" name="registerno" id="registerno" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
				<label htmlFor="registerno" className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Registration Number</label>
			</div>
		</div>
		<div className="grid xl:grid-cols-2 xl:gap-6 p-6 ">
			<div className="relative z-0 mb-6 w-full group">
				<input type="text"  name="phonenumber" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
				<label htmlFor="phonenumber" className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telephone</label>
			</div>
			<div className="relative z-0 mb-6 w-full group">
				<input type="number" name="mileage" id="mileage" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
				<label htmlFor="mileage" className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mileage</label>
			</div>
		</div>
        <div className="flex justify-center items-center mt-5" >

		<button type="submit" className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-9 text-lg py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </div>
	</form>
    </section>

}

export default Valuation