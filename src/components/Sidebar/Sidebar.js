import logo from '../../icons/0.75x/logo.png'
import support from '../../icons/0.75x/support.png';
import logout from '../../icons/0.75x/logout.png';

import './Sidebar.css';

function Sidebar() {
  const menuArray = [
    {
      text: 'Dashboard',
      icon: { support },
    },
    {
      text: 'Manage',
      icon: { support }
    },
    {
      text: 'invoices',
      icon: { support }
    },
    {
      text: 'projects',
      icon: { support }
    },
    {
      text: 'settings',
      icon: { support }
    },

  ]

  return (
    <div className="sidebar max-w-[336px] capitalize h-[100%] 
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
            menuArray.map((menu) => (
              <li key={menu.text.toLowerCase} className='list-menu-item '>
                <div className='w-32'>
                  <div className='menu-text-icon'>
                    <span><img src={support} alt='icon-support' /></span>
                    <span>{menu.text}</span>
                  </div>
                </div>
              </li>
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
                  <span><img src={support} alt='icon-support' /></span>
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
