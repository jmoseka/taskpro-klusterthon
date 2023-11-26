import { useEffect, useState } from "react";
import Mainbar from "../Mainbar/Mainbar";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router";

function Home() {

  let navigate = useNavigate()

  useEffect(()=>{
    let bizToken = localStorage.getItem('bizToken')
    if(bizToken){
      navigate('/dashboard')
    }
    else if(!bizToken){
      navigate('/signin')
    }
  })

  const [selectedMenu, setSelectedMenu] = useState('dashboard');

  const handleMenuClick = (menuItem) => {
    setSelectedMenu(menuItem);
  };


  return (
    <div className="mx-auto flex h-[100vh]  pb-1 ">
      <Sidebar onMenuClick={handleMenuClick} />
      <Mainbar selectedMenu={selectedMenu} />
    </div>
  );
}

export default Home;
