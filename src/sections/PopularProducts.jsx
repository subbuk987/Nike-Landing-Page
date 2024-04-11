import PopularProduct from "../components/PopularProduct"
import { products } from "../constants"
const PopularProducts = () => {
  return (
    <section id="popular" className="max-container">
      <h2 className="font-palanquin text-4xl font-bold mb-8">
        Our <span className="text-coral-red">Popular</span> Products
      </h2>
      <p className="font-montserrat text-slate-gray mt-6 mb-14 leading-6 text-base sm:max-w-xl">
        Experience top-notch quality and style with our sought-after 
        selections. Discover a world of comfort, design, and value
      </p>
      <div className="grid xl:grid-cols-4 sm:grid-cols-2 sm:gap-16 max-sm:grid-cols-1 xl:min-w-full justify-between">
        {products.map((product)=>{
          return (
            <PopularProduct key={product.name} img={product.imgURL} name={product.name} price={product.price}/>
          )
        })}
      </div>
      
    </section>
  )
}

export default PopularProducts
