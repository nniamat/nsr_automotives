const Sold = () => {
    const usedCars = [

        { img: "/insignia2014.jpg",name:"Vauxhall Insignia" },
        { img: "/clio66.jpg",name:"Renault Clio" },
        { img: "/polo63.jpg",name:"Volkswagen Polo" },
        { img: "/corsa2011.jpg",name:"Vauxhall Corsa" },
        { img: "/polo2007.jpg",name:"Volkswagen Polo" },
        { img: "/fiat50063.jpg",name:"Fiat 500" },
    ]
    return <section id="sold" className=" py-10 mt-10" >
        <h1 className="flex justify-center py-5 font-semibold underline underline-offset-8 text-3xl mt-10 " >Sold Cards</h1>
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

export default Sold