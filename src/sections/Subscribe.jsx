import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section id="subscribe" className="flex justify-between max-container items-center gap-20 max-lg:flex-col ">
      <div>
        <h2 className="font-palanquin text-4xl font-bold sm:max-w-sm text-center leading-[68px]">
          Sign Up from <span className="text-coral-red">Updates</span> & Newsletter
        </h2>
      </div>
      <div className=" flex items-center lg:max-w-[40%] gap-5 p-2.5 sm:border max-sm:flex-col sm:border-slate-gray rounded-full w-full">
        <input type="text" className="input"
          placeholder="subscribe@nike.com"/>
        <Button label={"Sign Up"}/>
      </div>
    </section>
  )
}

export default Subscribe
