import emailjs from 'emailjs-com'

const Footer = () => {
    return <section id="footer" >
            <div className="grid grid-cols-2 bg-gray-900 text-white h-[40vh]" >
                    <div data-aos="fade-right" className=" w-[50%] mx-auto flex flex-col text-left justify-center " >
                        <h1 className="text-xl font-semibold py-4 text-left underline underline-offset-8 " >Contact</h1>
                        <p className="text-gray-200 text-base py-4 text-left" >Why not contact us directly?</p>
                        <a href="tel:+4407311313199 " className="text-lg font-medium py-4 text-left" >📞+ 44 07311313199</a>
                        <h2 className="text-lg font-medium py-4 text-left" >📨 niamat.nasrati@nsrautomotive.co.uk</h2>
                    </div>
            
         
                    <div data-aos="fade-up" className=" w-[50%] mx-auto flex flex-col justify-center items-center text " >
                        <h1 className="text-xl font-semibold py-4 w-full " >Open Times</h1>
                        <a className="flex justify-between hover:bg-gray-700 hover:scale-105 cursor-pointer py-1 text-gray-100 w-full transition-all " href="#"><p>📅 Mon  </p><span>Appointment only</span></a>
                        <a className="flex justify-between hover:bg-gray-700 hover:scale-105 cursor-pointer py-1 text-gray-100 w-full transition-all " href="#"><p>📅 Tue  </p><span>Appointment only</span></a>
                        <a className="flex justify-between hover:bg-gray-700 hover:scale-105 cursor-pointer py-1 text-gray-100 w-full transition-all " href="#"><p>📅 Wed  </p><span>Appointment only</span></a>
                        <a className="flex justify-between hover:bg-gray-700 hover:scale-105 cursor-pointer py-1 text-gray-100 w-full transition-all " href="#"><p>📅 Thurs  </p><span>Appointment only</span></a>
                        <a className="flex justify-between hover:bg-gray-700 hover:scale-105 cursor-pointer py-1 text-gray-100 w-full transition-all " href="#"><p>📅 Fri  </p><span>Appointment only</span></a>
                        <a className="flex justify-between hover:bg-gray-700 hover:scale-105 cursor-pointer py-1 text-gray-100 w-full transition-all " href="#"><p>📅 Sat  </p><span>Appointment only</span></a>
                        <a className="flex justify-between hover:bg-gray-700 hover:scale-105 cursor-pointer py-1 text-gray-100 w-full transition-all " href="#"><p>📅 Sun  </p><span>Appointment only</span></a>
                    </div>
            </div>
    </section>
}

export default Footer