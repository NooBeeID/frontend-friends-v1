import localforage from 'localforage';
import { useEffect, useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { profile } from '../../api/auth';

export default function HomeLayout() {
    const [profileData, setProfile] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetch() {
            const { data } = await profile();
            setProfile(data.payload);
        }
        fetch();
    }, []);

    const logout = () => {
        localforage.removeItem('token');
        navigate('/');
    };

    return (
        <div className="flex justify-center min-h-screen p-8">
            <div className='w-11/12 flex'>
                <div>
                    <aside className='w-64 bg-white rounded-lg p-4 flex flex-col mr-6'>
                        <div className='flex flex-col items-center mb-4'>
                            <div className='rounded-full border border-gray-500 h-24 w-24'>
                                <img src={profileData?.img_url || "/icon_user.svg"} alt="user" className='w-full h-full rounded-full' />
                            </div>
                            <h1 className='text-3xl'>{profileData?.email || 'Ahmad Reza'}</h1>
                        </div>
                        <ul className='flex-1 my-4'>
                            <NavLink to="/dashboard/" className={({ isActive }) => `${isActive ? 'font-bold text-black active-link' : 'text-gray-400'} px-4 my-2 items-center flex`}>
                                <span className="mr-3">
                                    <img src="/search.svg" alt="search" className="p-2" />
                                </span>
                                Search
                            </NavLink>
                            <NavLink to="/dashboard/contacts" className={({ isActive }) => `${isActive ? 'font-bold text-black active-link' : 'text-gray-400'} px-4 my-2 items-center  flex`}>
                                <span className="mr-3">
                                    <img src="/users.svg" className="p-2" alt="search" />
                                </span>
                                My Friends
                            </NavLink>
                        </ul>
                        <button onClick={() => logout()} className='p-2 bg-red-600 text-white text-center rounded-lg'>
                            Logout
                        </button>
                    </aside>
                </div>
                <main className='flex-1 p-4 bg-white rounded-lg'>
                    <Outlet />
                </main> 
            </div>
        </div>
    );
}
