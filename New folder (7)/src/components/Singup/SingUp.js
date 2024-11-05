import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function SingUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setErorr] = useState('');

    const navigate = useNavigate();

    const Url_Api = 'https://alrmoz.com/marsa_back/public/en/api/Dashboard/AdminLogin';

    async function handlingForm(e) {
        e.preventDefault();

        const data = {
            email: email,
            password: password
        };

        try {
            const result = await axios.post(Url_Api, data);
            console.log('Data posted successfully:', result.data);
            localStorage.setItem("currentmode", email);
            navigate("/dashboard")
        } catch (error) {
            console.error('Error in posting data:', error.status);
            setErorr(error.status)
        }
    }


    return (
        <div className='bg-[#c6c6c6] h-[500px] w-[30%] mt-[200px] mx-auto rounded-lg'>
            <h1 className='text-[30px] text-center pt-5 text-white font-bold'>Sign-Up</h1>
            <form className='w-[80%] mx-auto' onSubmit={handlingForm}> 
                <div className='my-5'>
                    <input
                        type='email'
                        className='w-full bg-white rounded border-none placeholder:pl-4'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter Your Email'
                        required
                    />
                    {
                        error == 401 && (<p className='text-red-600'>check your email</p>)
                    }
                </div>

                <div className='my-5'>
                    <input
                        type='password'
                        className='w-full rounded border-none placeholder:pl-4'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder='Enter Your Password'
                        required
                    />
                    {
                        error == 401 && (<p className='text-red-600'>check your password</p>)
                    }
                </div>
                <button
                    type='submit'
                    className='bg-blue-800 px-14 py-2 text-center rounded-md text-white mr-[150px]'
                >
                    Send
                </button>
            </form>
        </div>
    );
}
