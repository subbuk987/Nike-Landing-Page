

const ServiceCard = ({imgURL , label , subtext}) => {
  return (
    <div className="flex-1 flex flex-col rounded-2xl px-8 py-16 shadow-3xl sm:min-w-[350px] min-w-[200px] ">
        <div className="w-11 h-11 bg-coral-red flex items-center justify-center rounded-full">
            <img src={imgURL} alt="service icon" width={24} height={24} />
        </div>
        <h3 className="font-palanquin text-3xl font-bold py-3">{label}</h3>
        <p className="info-text">{subtext}</p>
    </div>
  )
}

export default ServiceCard
