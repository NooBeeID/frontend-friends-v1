import localforage from "localforage";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from '../api/auth'

function Register() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');

    const navigate = useNavigate();

    const registration = async () => {
        try {
            await register({ email, password: pass, img_url: photoUrl }); 
            navigate('/');
        } catch(err) {
            console.log(err);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="bg-white p-8 w-1/4 flex flex-col justify-center">
                <div className="mb-4 flex flex-col">
                    <h1 className="text-3xl font-bold">NBID Friends</h1>
                    <p>Daftar dan cari teman terbaikmu disini</p>
                </div>
                <div className="mb-4">
                    <label className="font-bold">
                        Email
                        <input
                            className="w-full p-2 font-normal border-2 border-gray-400 rounded-lg"
                            onChange={({ target }) => setEmail(target.value)}
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="font-bold">
                        Password
                        <input
                            type="password"
                            className="w-full p-2 font-normal border-2 border-gray-400 rounded-lg"
                            onChange={({ target }) => setPass(target.value)}
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="font-bold">
                        Photo URL
                        <input
                            type="text"
                            className="w-full p-2 font-normal border-2 border-gray-400 rounded-lg"
                            onChange={({ target }) => setPhotoUrl(target.value)}
                        />
                    </label>
                </div>
                <div className="flex flex-col items-center">
                    <button
                        className="p-2 bg-yellow-400 w-full rounded-lg"
                        onClick={() => registration()}
                    >
                        Register
                    </button>
                    <span className="mt-8 mb-4">Atau</span>
                    <Link className="w-full" to="/">
                        <button className="p-2 bg-gray-200 w-full rounded-lg">Login</button>
                    </Link>
                </div> 
            </div>
        </div>
    );
}

export default Register
