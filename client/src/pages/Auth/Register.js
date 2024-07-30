import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import "../../styles/AuthStyles.css";

const Register = () => {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");
    const [answer,setAnswer] = useState("");
    const navigate = useNavigate();

    //form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post("/api/v1/auth/register", {
            name,
            email,
            password,
            phone,
            address,
            answer
          });
          if (res && res.data.success) {
            toast.success(res.data && res.data.message);
            navigate("/login");
          } else {
            toast.error(res.data.message);
          }
        } catch (error) {
          console.log(error);
          toast.error("Something went wrong");
        }
      };
    

  return (
  <Layout title="Register - Eommerce App">
    <div className='form-container' style={{ minHeight: "90vh" }}>
    <form onSubmit={handleSubmit}>
        <h4 className="title">REGISTER FORM</h4>
        <div className="mb-3">
            <input 
                value={name}
                onChange={(e)=>setName(e.target.value)}
                type="text" 
                className="form-control" 
                id="exampleInputName" 
                placeholder='Enter Your Name'
                required
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
                required
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
                required
            />
        </div>

        <div className="mb-3">
            <input 
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                type="text" 
                className="form-control" id="exampleInputPhone" 
                placeholder='10-digir Phone No.'
                required
            />
        </div>

        <div className="mb-3">
            <input 
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                type="text" 
                className="form-control" id="exampleInputAddress" 
                placeholder='Write Your Address'
                required
            />
        </div>
        
        <div className="mb-3">
            <input 
                value={answer}
                onChange={(e)=>setAnswer(e.target.value)}
                type="text" 
                className="form-control" 
                id="exampleInputAnswer" 
                placeholder='What is your favorite sports'
                required
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
