
const Button = ({label,iconURL,bgcolor}) => {
  return (
    <button className={`flex justify-center items-center ${
      bgcolor ? `${bgcolor} text-slate-600 border-slate-gray border-2` : "bg-coral-red text-white"
    } px-7 py-4 rounded-full font-montserrat
    text-lg text-white gap-4`}>
        {label}
        {iconURL && <img src={iconURL} alt="buttonIcon" />}
        
    </button>
  )
}

export default Button
