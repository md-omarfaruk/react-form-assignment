import React,{useState} from 'react';
import "./Form.css";


const Form = () => {

const [inputs, setInputs] = useState({});
     const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
            const handleSubmit = (event) => {
            event.preventDefault();   
            console.log(inputs);
            setInputs('');
            }

    const formReset = ()=>{
            setInputs('');
            
    } 
    

    return (
        <div className="form">
            <h1>Md. Omar Faruk</h1>
            
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account</p>
                <hr/>

                <form onSubmit={handleSubmit}>
                    <label>Email
                    <input 
                    placeholder='Enter Email'
                    type="text" 
                    name="email" 
                    value={inputs.email || ""} 
                    onChange={handleChange}
                    
                    />
                    </label>
                    <label>Enter Password:
                    <input 
                        placeholder='Enter password'
                        type="password" 
                        name="password" 
                        value={inputs.password || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    <label>Repeat Password:
                    <input 
                        placeholder='Repeat password'
                        type="password" 
                        name="RepeatPass" 
                        value={inputs.RepeatPass || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    <label><input type="checkbox" defaultChecked />Remember me</label>

                    <p>By creating an account you agree to our <a href="#terms" className="terms">Terms &amp; Privacy</a>.</p>

                    <button type="button" className="cancel" onClick={formReset}>Cancel</button>
                    <button type="submit" className="sign-up">Sign Up</button>
                </form>
                    
       
        </div>
    );
};

export default Form;