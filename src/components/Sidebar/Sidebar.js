import logo from '../../icons/0.75x/logo.png'
import support from '../../icons/0.75x/support.png';
import logout from '../../icons/0.75x/logout.png';
import settings from '../../icons/0.75x/settings.png';
import manage from '../../icons/0.75x/manage.png';
import dashboard from '../../icons/0.75x/dashboard.png';
import invoice from '../../icons/0.75x/invoices.png';
import project from '../../icons/0.75x/project.png';

import './Sidebar.css';
import { useState } from 'react';

function Sidebar({ onMenuClick }) {
  const [activeMenu, setActiveMenu] = useState(0);


  const menuArray = [
    {
      text: 'Dashboard',
      icon: dashboard,
    },
    {
      text: 'Manage',
      icon: manage,
    },
    {
      text: 'invoices',
      icon: invoice,
    },
    {
      text: 'settings',
      icon: settings,
    },

  ]

  const handleMenuLink = (index, menutext) => {
    setActiveMenu(index)
    onMenuClick(menutext)
  }

  return (
    <div className="sidebar w-[336px] max-w-[336px] capitalize h-[100%] 
    flex flex-col justify-center text-base font-medium text-black 
    ">
      {/* logo*/}
      <div className="min-h-[105.29px] flex justify-center items-center ">
        <img src={logo} alt="logo" />
      </div>


      {/* menu-list */}
      <div className='flex justify-between items-center flex-col h-full'>
        <ul className="list-menu">

          {
            menuArray.map((menu, index) => (
              <button onClick={()=> handleMenuLink(index, menu.text.toLocaleLowerCase())} type='button' key={index}
               className={`list-menu-item ${activeMenu === index  ? 'active-menu' : '' }`}>
                <div className='w-32'>
                  <div className='menu-text-icon'>
                    <span><img src={menu.icon} alt={`icon-${menu.icon}`} /></span>
                    <span>{menu.text}</span>
                  </div>
                </div>
              </button>
            ))
          }

        </ul>


        {/* bottom support and exit content */}
        <div className='border-t w-full'>
          <ul>
            <li className='list-menu-item '>
              <div className='w-32'>
                <div className='menu-text-icon'>
                  <span><img src={support} alt='icon-support' /></span>
                  <span>Support</span>
                </div>
              </div>
            </li>

            <li className='list-menu-item '>
              <div className='w-32'>
                <div className='menu-text-icon'>
                  <span><img src={logout} alt='icon-support' /></span>
                  <span>logout</span>
                </div>
              </div>
            </li>
          </ul>
        </div>


      </div>


    </div>
  );
}

export default Sidebar;
