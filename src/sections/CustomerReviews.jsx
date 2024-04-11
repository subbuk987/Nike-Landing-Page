import { customer1,customer2 } from "../assets/images"
import ReviewCard from "../components/ReviewCard"
const CustomerReviews = () => {
  return (
    <section id="reviews" className="flex flex-col max-container justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl font-palanquin font-bold">
          What Our <span className="text-coral-red">Customers</span> Say?
        </h2>
        <p className="info-text text-center lg:max-w-lg mt-5">
          Hear genuine stories from our satisfied customers 
          about their exceptional experiences with us.
        </p>
      </div>
      <div className="flex flex-1 justify-evenly items-center w-full max-lg:flex-col mt-20">
        <ReviewCard 
        img={customer1} 
        review={"The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"}
        name={"Morich Brown"}
        />
        <ReviewCard
        img={customer2}
        review={"The product not only met but exceeded my expectations. I'll definitely be a returning customer!"}
        name={"Lota Mongeskar"}
        />

      </div>
    </section>
  )
}

export default CustomerReviews
