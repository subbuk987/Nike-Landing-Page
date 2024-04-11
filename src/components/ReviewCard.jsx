import { star } from "../assets/icons"

const ReviewCard = ({img , review ,name}) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-[500px]">
      <img src={img} alt="customer" width={120} height={120} className="rounded-full object-cover my-2"/>
      <p className="info-text sm:max-w-sm text-center my-2">
        {review}
      </p>
      <div className="flex gap-2 my-2">
        <img src={star} width={24} height={24} alt="rating" />
        <p className="info-text  ">(4.5)</p>
      </div>
      <h3 className="font-montserrat font-bold text-2xl  my-2">{name}</h3>
    </div>
  )
}

export default ReviewCard
