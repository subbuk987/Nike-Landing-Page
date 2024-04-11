import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"
const Services = () => {
  return (
    <section id="services" className="max-container">
      <div className="flex gap-10 justify-between flex-wrap ">
        {services.map((service)=>{
          return (<ServiceCard key={service.label} {...service}/>)
        })}
      </div>
    </section>
  )
}

export default Services
