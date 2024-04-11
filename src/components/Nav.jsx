import { hamburger } from "../assets/icons"
import { headerLogo } from "../assets/images"
import { navLinks } from "../constants"
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
                <img src={headerLogo} alt="Logo" width={129} height={29}
                className=" m-0 w-[130px] h-[29px]"
                />
            </a>
            <ul className="flex-1 flex justify-center gap-16 max-xl:hidden">
                {navLinks.map((link)=>(
                    <li key={link.label}>
                        <a href={link.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-xl:hidden wide:mr-24'>
                <a href='/'>Sign in</a>
                <span>/</span>
                <a href='/'>Explore now</a>
            </div>
            <div className="hidden max-xl:block">
                <img src={hamburger} alt="hamburgerLogo" className="w-[25px] h-[25px]"/>
            </div>
        </nav>
    </header>
  )
}

export default Nav
