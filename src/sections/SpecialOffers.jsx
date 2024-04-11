import { offer } from "../assets/images"
import Button from "../components/Button"
const SpecialOffers = () => {
  return (
    <section id="offers" className="flex gap-8 justify-between max-container items-center max-xl:flex-col-reverse">
      <div className=" flex-1" >
        <img src={offer} alt="Special Offer" width={773} height={687} className="object-contain w-full"/>
      </div>
      <div className="py-20">
        <h2 className="font-palanquin text-4xl font-bold ">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="info-text mt-4 lg:max-w-lg">
          Embark on a shopping journey that redefines your 
          experience with unbeatable deals. From premier 
          selections to incredible savings, we offer unparalleled 
          value that sets us apart.
        </p>
        <p className="info-text mt-6 lg:max-w-lg">
          Navigate a realm of possibilities designed to fulfill 
          your unique desires, surpassing the loftiest expectations. 
          Your journey with us is nothing short of exceptional.
        </p>
        <div className="flex gap-10 mt-10 justify-start">
          <Button label="View Details"/>
          <Button label="Learn More" bgcolor={"bg-white"}/>
        </div>

      </div>
    </section>
  )
}

export default SpecialOffers
