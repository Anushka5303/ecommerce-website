import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'

const Register = () => {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");

  return (
  <Layout title="Register - Eommerce App">
    <div className='register'>
    <h1>Register Page</h1>
    <form>
    
        <div className="mb-3">
            <input 
                value={name}
                onChange={(e)=>setName(e.target.value)}
                type="text" 
                className="form-control" 
                id="exampleInputEmail1" 
                placeholder='Enter Your Name'
            />
        </div>
        
        <div className="mb-3">
            <input 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                placeholder='example@eg.com'
            />
        </div>


        <div className="mb-3">
            <input 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                type="password" 
                className="form-control" id="exampleInputPassword1" 
                placeholder='Enter your 
                password'
            />
        </div>

        <div className="mb-3">
            <input 
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                type="text" 
                className="form-control" id="exampleInputPassword1" 
                placeholder='10-digir Phone No.'
            />
        </div>

        <div className="mb-3">
            <input 
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                type="text" 
                className="form-control" id="exampleInputPassword1" 
                placeholder='Write Your Address'
            />
        </div>
    
        <button type="submit" className="btn btn-primary">
            Submit
        </button>
    </form>

    </div>

  </Layout>
  )
}

export default Register
