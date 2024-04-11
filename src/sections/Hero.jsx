import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import { shoes, statistics } from "../constants"
import { useState } from "react"

const Hero = () => {

    const [BigShoe, setBigShoe] = useState(bigShoe1)

    return (
        <section id="home" className="flex gap-10 max-xl:flex-col max-container">
            <div className="flex flex-col justify-center items-start pt-28 max-xl:padding-x ">
                <p className="text-coral-red font-montserrat text-xl">Our Summer collections</p>
                <h1 className="font-palanquin font-extrabold text-8xl mt-10 max-sm:text-[72px]">
                    <span className="">
                        The New Arrival
                    </span>
                    <br />
                    <span className="text-coral-red mt-3 inline-block">
                        Nike
                    </span> Shoes
                </h1>
                <p className="font-montserrat text-slate-gray mt-6 mb-14 leading-8 text-lg sm:max-w-sm">
                    Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
                </p>
                <Button label='Shop Now' iconURL={arrowRight}/>
                <div className="flex justify-start items-start flex-wrap gap-16 mt-20 font-palanquin ">
                    {statistics.map((stat)=>(
                        <div key={stat.label}>
                            <p className="text-4xl font-bold">{stat.value}</p>
                            <p className="text-lg font-montserrat text-slate-gray leading-7">{stat.label}</p>
                        </div>
                        
                    ))}
                </div>
            </div>
        
            <div className=" flex-1 flex justify-center items-center max-xl:py-40 padding-x  pt-28">
                <div className=" flex flex-col relative py-32  bg-primary bg-cover bg-hero bg-center rounded-3xl">
                    <img src={BigShoe} alt="BigShoe" width={610} height={502} className="object-contain z-10 relative"/>
                    <div className="absolute flex  justify-center gap-10 -bottom-[5%] w-[100%]">
                        {shoes.map((shoe,index)=>(
                            <ShoeCard key={index} shoe={shoe} bigshoeimage={BigShoe} changeBigShoe={(shoe)=>setBigShoe(shoe)}/>
                        ))}
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Hero
