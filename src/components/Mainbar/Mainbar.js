import Dashboard from "../Dashboard/Dashboard";
import Invoice from "../Invoices/Invoice";
import Manage from "../Manage/Manage";
import './Mainbar.css';

function Mainbar({ selectedMenu }) {
    const component = selectedMenu;

    return (
        <div className="px-10 py-6 w-full overflow-auto">
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