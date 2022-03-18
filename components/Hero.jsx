
const Homepage = ({user}) => {
  console.log(user);

  return  <section data-aos="fade-up" id="hero" className="h-[80vh] flex flex-col justify-center pt-40 items-center" >
            <div className="w-[30%] mx-auto text-center" >
            <h1 className="text-5xl font-semibold tracking-wide py-8 " >NSR AUTOMOTIVE</h1>
            <p className="text-lg font-medium " >Welcome to NSR Automotive quality vehicles at affordable price</p>
            </div>
            <img className="h-96 mt-8" src="/bmw.home.png" alt="heroimg" />
    </section>

};
export default Homepage;
