import { useEffect, useState } from "react";
import Mainbar from "../Mainbar/Mainbar";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router";
import logo from '../../icons/2x/logo.png'

function Home() {

  let navigate = useNavigate()
  const [openScreen, setOpenScreen] = useState(true)



  useEffect(() => {
    let bizToken = localStorage.getItem('bizToken')
    if (bizToken) {
      setOpenScreen(false)
      navigate('/dashboard')
    }
    else if (!bizToken) {
      navigate('/signin')
    }

  },[navigate])

  const [selectedMenu, setSelectedMenu] = useState('dashboard');

  const handleMenuClick = (menuItem) => {
    setSelectedMenu(menuItem);
  };


  return (
    <div className="h-[100vh] w-[100vh]">
      {
        openScreen ?
          <div className="h-[100vh] w-[100vh] bg-veryGreen flex justify-center items-center">
            <img src={logo} alt="bizhub logo"/>

          </div>

          :

          <div className="relative mx-auto flex h-[100vh] ">
            <Sidebar onMenuClick={handleMenuClick} />
            <Mainbar selectedMenu={selectedMenu} />
          </div>

      }

    </div>
  );
}

export default Home;
