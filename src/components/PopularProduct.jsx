import { star } from "../assets/icons";

const PopularProduct = ({ img, name, price }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={img} alt="ProductPopular" />
      <div className="flex mt-5 gap-2">
        <img src={star} alt="Rating" />
        <p className="font-montserrat text-slate-gray text-xl"> (4.5)</p>
      </div>
      <h3 className="font-palanquin text-2xl font-semibold my-3 max-sm:text-xl">{name}</h3>
      <p className="font-palanquin text-coral-red text-xl font-bold mb-5">{price}</p>
    </div>
  );
};

export default PopularProduct;