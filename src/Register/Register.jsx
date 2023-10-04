
import { useContext } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { AuthContext } from '../providers/Authprovider';

const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        console.log(name, photo, email, password)

        createUser(email, password)
        .then(resutl =>{
            console.log(resutl)
        })
        .catch(error =>{
            console.log(error)
        })
    }


    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-3xl font-Poppins text-center font-medium mt-5">Please Register</h1>
            <form onSubmit={handleRegister} className="w-1/2 mx-auto mt-10">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="text" placeholder="Photo Url" name='photo' className="input input-bordered" required />
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <p>Already You Have account Please?<a className='text-blue-600 font-bold font-Poppins' href="/login">Login</a></p>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-secondary">Register</button>
                </div>
            </form>
        </div>
    );
};

export default Register;