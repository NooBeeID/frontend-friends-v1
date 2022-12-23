import localforage from "localforage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from '../api/auth'

function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const navigate = useNavigate();

    const authenticate = async () => {
        try {
            const { data } = await login({ email, password: pass }); 
            localforage.setItem('token', data.payload.token); 
            navigate('/dashboard/');
        } catch(err) {
            console.log(err);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="mb-4 flex flex-col items-center">
                <img src="/icon_user.svg" alt="Contact App"/>
                <h1 className="text-3xl font-bold">Contact App</h1>
            </div>
            <div className="bg-white p-16 w-1/2 h-1/2 flex flex-col justify-center">
                <div className="mb-4">
                    <label>
                        Email
                        <input
                            placeholder="Masukkan email"
                            className="w-full p-2 border border-gray-400 rounded-lg"
                            onChange={({ target }) => setEmail(target.value)}
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label>
                        Password
                        <input
                            type="password"
                            placeholder="Masukkan password"
                            className="w-full p-2 border border-gray-400 rounded-lg"
                            onChange={({ target }) => setPass(target.value)}
                        />
                    </label>
                </div>
                <div>
                    <button
                        className="p-2 bg-blue-400 text-white mr-4"
                        onClick={() => authenticate()}
                    >
                        Login
                    </button>
                    <button className="p-2 bg-gray-200 ">Daftar</button>
                </div>
            </div>
        </div>
    );
}

export default Login
