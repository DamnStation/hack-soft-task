import { memo } from "react";
import Logo from "../../assets/LogoLogo.svg"
import Profile1 from "../../assets/profile1.svg"

const NavigationBar = () => {

  return (
    <div className="
        flex 
        justify-between 
        bg-white
        sticky 
        top-0
        h-[70px]
        p-3
        z-20
        ">
      <img
        src={Logo}
        alt="Logo"
        className="w-28 hover:scale-110 transition-all"
      />
      <img
        src={Profile1}
        alt="Profile Picture"
        className="right-1 m-1 rounded-full w-9 h-9 hover:scale-110 transition-all "
      />
    </div>
  )
}
export default memo(NavigationBar)