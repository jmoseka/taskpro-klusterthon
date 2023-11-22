import Dashboard from "../Dashboard/Dashboard";
import Invoice from "../Invoices/Invoice,";
import Manage from "../Manage/Manage";

function Mainbar({ selectedMenu }) {
    const component = selectedMenu;

    return (
        <div className="p-6 border w-full border-purple-800">
            {
                component === 'dashboard'?
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