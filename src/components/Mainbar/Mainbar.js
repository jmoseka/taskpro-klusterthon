import Dashboard from "../Dashboard/Dashboard";
import Invoice from "../Invoices/Invoice";
import Manage from "../Manage/Manage";
import MessageBoard from "../MessageBoard/MessageBoard";
import './Mainbar.css';

function Mainbar({ selectedMenu }) {
    const component = selectedMenu;

    return (
        <div className="px-10 pt-6 w-full flex flex-col overflow-auto">

            <MessageBoard />


            {
                component === 'dashboard' ?
                    <Dashboard />
                    :
                    component === 'manage' ?
                        <Manage />
                        :
                        component === 'invoices' ?
                            <Invoice />
                            :
                            <Dashboard />
            }
        </div>
    );
}

export default Mainbar;