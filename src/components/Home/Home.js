import { useState } from "react";
import Mainbar from "../Mainbar/Mainbar";
import Sidebar from "../Sidebar/Sidebar";

function Home() {
  const [selectedMenu, setSelectedMenu] = useState('dashboard');

  const handleMenuClick = (menuItem) => {
    setSelectedMenu(menuItem);
  };


  return (
    <div className="mx-auto flex max-h-[1117px] h-[100vh] max-w-[1728px] pb-1 ">
      <Sidebar onMenuClick={handleMenuClick} />
      <Mainbar selectedMenu={selectedMenu} />
    </div>
  );
}

export default Home;
