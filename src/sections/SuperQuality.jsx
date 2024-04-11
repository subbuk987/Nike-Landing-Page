import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
import Button from "../components/Button"
const SuperQuality = () => {
  return (
    <section id="quality" className="flex max-container justify-evenly gap-16 max-xl:flex-col">
      <div className="max-w-[50%] max-xl:min-w-full">
        <h2 className="font-palanquin text-4xl font-bold mb-8">
          We Provide You <span className="text-coral-red">Super Quality</span> Shoes
        </h2>
        <p className="text-xl font-montserrat text-slate-gray leading-8 mb-5">
          Ensuring premium comfort and style, 
          our meticulously crafted footwear is 
          designed to elevate your experience, 
          providing you with unmatched quality, 
          innovation, and a touch of elegance.
        </p>
        <p className="text-xl font-montserrat text-slate-gray leading-8 mb-10">
        Our dedication to detail and excellence
        ensures your satisfaction
        </p>
        <Button label={"Shop Now"} iconURL={arrowRight} />
      </div>
      <div className="max-w-[50%] max-xl:min-w-full flex justify-center items-center">
        <img src={shoe8} alt="SuperQualityShoe" />
      </div>
      
    </section>
  )
}

export default SuperQuality
