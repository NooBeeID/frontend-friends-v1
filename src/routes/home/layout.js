import localforage from 'localforage';
import { Outlet, NavLink, useNavigate } from 'react-router-dom'

export default function HomeLayout() {
    const navigate = useNavigate();

    const logout = () => {
        localforage.removeItem('token');
        navigate('/');
    };

    return (
        <div className='min-h-screen flex'>
            <aside className='w-64 bg-gray-300 pt-16 flex flex-col'>
                <div className='flex flex-col items-center mb-8'>
                    <div className='rounded-full bg-white h-24 w-24 p-4'>
                        <img src="/icon_user.svg" alt="user" className='w-full h-full' />
                    </div>
                    <h1 className='text-3xl'>Contact App</h1>
                </div>
                <ul className='flex-1'>
                    <NavLink to="/dashboard/" className={({ isActive }) => `${isActive ? 'bg-blue-200 text-blue-600' : ''} px-4 py-2 my-4 text-center block`}>
                        Home
                    </NavLink>
                    <NavLink to="/dashboard/contacts" className={({ isActive }) => `${isActive ? 'bg-blue-200 text-blue-600' : ''} px-4 py-2 my-4 text-center block`}>
                        List Kontak
                    </NavLink>
                </ul>
                <button onClick={() => logout()} className='p-2 bg-red-600 text-white text-center'>
                    Logout
                </button>
            </aside>
            <main className='flex-1 p-4'>
                <Outlet />
            </main> 
        </div>
    );
}
