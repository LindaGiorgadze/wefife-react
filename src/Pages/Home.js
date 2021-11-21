import './Home.css';
import Background from '../Images/background.jpeg';
import Logo from '../Images/Logo.jpeg';
import {useState} from 'react';
import {Redirect} from 'react-router-dom';
import { useNavigate, Link } from "react-router";

export default function Home() {

    const [switchTo, setSwitchTo] = useState('Register');
    console.log(switchTo)


    return (
        <section className='Home'>
            <div className={switchTo=='Register' ? 'UserForm showRegister' : 'UserForm showLogIn'}>
                <img className='BackgroundImg' src={Background} alt='background'/>
                {
                    switchTo=='Register'
                    ?
                    <div className='RegisterDiv'>
                        <div className='LogoWrap'>
                            <img src={Logo} alt='Logo' className='Logo'/>
                            <h1>WEFIFE</h1>
                        </div>
                        <h2>Get Started</h2>
                        <div className='RegisterSwitchDiv'>
                            <p>Already Have An Account?</p>
                            <button className='RegisterSwitchBtn' onClick={()=> setSwitchTo('LogIn')} >Sign In</button>
                        </div>
                        <form className='RegisterForm' onSubmit={(e)=> e.preventDefault()}>
                            <input type='text' placeholder='Name'/>
                            <input type='email' placeholder='Enter Your Email' />
                            <input type='password' placeholder='Password' />
                            <button type='submit' className='SubmitBtn'>Sign Up</button>
                        </form>
                        <span>By Signing Up, I Agree To The <a href='#'>Therms Of Services</a> And <a href='#'>Privacy Policy</a>.</span>
                    </div>
                :
                    <div className='LogInDiv'>
                        <div className='LogoWrap'>
                            <img src={Logo} alt='Logo' className='Logo'/>
                            <h1>WEFIFE</h1>
                        </div>
                        <div className='WelcomeBanner'>
                        <h3>Welcome Back</h3>
                            <div className='RegisterSwitchDiv'>
                                <p>Not Registered Yet?</p>
                                <button className='RegisterSwitchBtn' onClick={()=> setSwitchTo('Register')} >Sign Up</button>
                            </div>
                        </div>
                        <form className='LogInForm' >
                            <input type='text' placeholder='Name'/>
                            <input type='password' placeholder='Password' />
                            <button type='submit' className='SubmitBtn'>Sign In</button>
                        </form>
                    </div>
                }
            </div>
        </section>
    )
}