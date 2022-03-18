

const UsedCars = () => {
    const usedCars = [
        { img: "/usedcar/aclass2.jpg",link:"/usedcars/aclass",name:"Mercades A Class" },
        { img: "/bclio/bclio1.jpg",link:"/usedcars/bclio",name:"Renault Clio" },
        { img: "/clio/clio1.jpg",link:"/usedcars/clio",name:"Renault Clio" },
        { img: "/comingsoon.jpg",link:"/usedcars/1series",name:"BMW 1 Series" },
        { img: "/comingsoon.jpg",link:"/usedcars/fiesta",name:"Ford Fiesta" },
        { img: "/comingsoon.jpg",link:"/usedcars/fiat500",name:"Fiat 500" },
    ]
    return <section id="usedcars" className=" py-10 mt-24" >
        <h1 className="flex justify-center py-5 font-semibold underline underline-offset-8 text-3xl mt-10 " >Used cars</h1>
        <div className="grid grid-cols-3 grid-rows-2 place-items-center">
            {
                usedCars.map((r, i) => {
                    return <a key={i} data-aos={i%2===0 ? "flip-left" : "flip-right"} data-aos-easing="ease-out-cubic" href={r.link}>
                        <div className="flex flex-col  cursor-pointer hover:scale-105 transition-all " >
                            <img className="h-80  p-8 " src={r.img} alt="usedcarimg" />
                            <p className="flex justify-center mt-[-24px] items-center text-lg font-normal " >{r.name}</p>
                        </div>
                    </a>
                })

            }
        </div>
    </section>
}

export default UsedCars