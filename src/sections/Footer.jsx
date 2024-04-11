import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer id="footer" className="max-container">
      <div className="flex gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="footer logo" width={150} height={46} className="mb-5"/>
          </a>
          <p className="text-white-400 font-montserrat text-base leading-normal sm:max-w-lg my-5">
            Get shoes ready for the new term at your 
            nearest Nike store. Find Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex gap-8 my-10">
            {socialMedia.map((social)=>{
              return(
                <div  key={social.alt} className="bg-white w-11 h-11 rounded-full flex items-center justify-center">
                  <a href={"/"}>
                    <img src={social.src} alt={social.alt} />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex flex-wrap justify-between w-full">
          {footerLinks.map((section)=>{
            return(
              <div key={section.title} className="mb-10">
                <h3 className="font-palanquin text-white text-2xl font-medium mb-6">{section.title}</h3>
                <ul>
                  {section.links.map((link , index)=>(
                    <li key={index} className="font-montserrat text-white-400 text-base mt-3 leading-normal hover:text-slate-gray">
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-5">
          <img src={copyrightSign} alt="copyright icon" />
          <p className="font-montserrat text-white-400 text-sm">
            Copyright. All rights reserved.
          </p>
        </div>
        <div className="flex">
          <p className="text-white-400 font-montserrat text-sm">
            Terms of Use. Privacy Policy.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
