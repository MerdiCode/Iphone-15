import { appleImg, bagImg, searchImg } from "../../utils";
import {navLists} from "../constants"

const Navbar = () => {
  return (
 <header className="w-full py-5 sm:px-10 flex px-5 justify-between items-center">
    <nav className="flex w-full screem-max-width ">
        <img src={appleImg} alt="" />
        <div className="flex flex-1 justify-center max-sm:hidden">
            {navLists.map((nav)=>(
                <div key={nav} className="px-5 text-sm text-gray hover:text-white transition-all cursor-pointer">{nav}</div>
            ))}
        </div>
        <div>

        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
            <img src={searchImg} alt="search" width={18} height={18}/>
            <img src={bagImg} alt="bag" width={18} height={18}/>
        </div>
    </nav>
 </header>
  )
}

export default Navbar