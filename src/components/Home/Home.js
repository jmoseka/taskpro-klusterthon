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

  const [selectedMenu, setSelectedMenu] = useState('invoices');

  const handleMenuClick = (menuItem) => {
    setSelectedMenu(menuItem);
  };


  return (
    <div className="relative mx-auto flex h-[100vh] ">
      <Sidebar onMenuClick={handleMenuClick} />
      <Mainbar selectedMenu={selectedMenu} />
    </div>
  );
}

export default Home;
