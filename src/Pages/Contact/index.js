import React, {useState} from 'react'
import "./style.css"

export default function Home() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState("")
  const [val,setVal] = useState("")


  const handleChange = e=>{
    if(e.target.name==="name"){
        setName(e.target.value)
         // email is an example of signup only field, not in use for this app
    }else if(e.target.name==="email"){
        setEmail(e.target.value)
    } 
    else {
        setMsg(e.target.value)
    }
  }
  
  function ValidateEmail(toTest) 
  {
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(toTest))
    {
      return (true)
    }
      return (false)
  }
  
  const handleSubmit = e =>{
    e.preventDefault()
    if(!name){
      console.log('inside of this if statement')
      setVal('Please enter a name')
    }else if (!email){
      setVal('Please enter an email')
    }else if (!msg){
      setVal('Please enter an msg')
    }
    else{
      const emailVal = ValidateEmail(email)
      if(!emailVal){
        setVal('please enter a valid email')
      }else{
        setVal('submitted form')
      }
    }

  }

  return (
    <main className="Contact">
        <h2>Contact Me!</h2>    
        <form onSubmit = {handleSubmit} id = 'contactForm'> 
          <label for = 'name'>Name: </label>
          <input onChange={handleChange} value = {name} name = 'name' type= 'text' placeholder='' />

          <label for = 'email'>Email: </label>
          <input onChange={handleChange} value = {email} name = 'email' type= 'text' placeholder='' />

          <label for = 'msg'>Message: </label>
          <textarea onChange={handleChange} value = {msg} name = 'msg' />
          <p> {val} </p>
          <button id = 'formSubmit' type='submit'>Submit </button> 
          
        </form>    
    </main>
  )
}