import React, {useState } from "react";
import '../styles/MasForm.css'


const MasForm = (props) =>{
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [nameError, setNameError] = useState('');
    const [lastNameError, setLastNameError ] = useState('');
    const [email, setEmail]= useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passError, setPassError] = useState('');
    const [conPassword, setConPassword]= useState('');
    const [conPassError, setConPassError]= useState('');


    const onForm=(e)=>{
        e.preventDefault();
    }

    const handleName =(e)=>{
        setName(e.target.value);
        if(name.length < 1){
            setNameError('El nombre debe tener al menos 2 caracteres')
        }else{
            setNameError('');
        }
    }

    const handleLastName =(e)=>{
        setLastName(e.target.value)
        if(lastName.length < 1){
            setLastNameError('El apellido debe tener al menos 2 caracteres')
        }else{
            setLastNameError('')
        }
    }

    
    const handleEmail=(e)=>{
        setEmail(e.target.value);
        if(email.length < 4){
            setEmailError('El correo debe tener al menos 5 caracteres')
        }else{
            setEmailError('')
        }
    }
   

    const handlePassword=(e)=>{
        setPassword(e.target.value)
        if(password.length<7){
            setPassError('La contrasena debe tener al menos 8 caracteres')
        }else{
            setPassError('');
        }
    }

    const confirmPassword=(e,)=>{
        setConPassword(e.target.value);
        if(conPassword !== password){
            setConPassError('Ambos campos no coinciden')
        }else{
            setConPassError('');
        }

        if(conPassword.length > 7){
            setConPassError('este campo supera al anterior')
        }else{
            setConPassError('')
        }
    }


    return(
        <form onSubmit={onForm}>
            <div>
                <label>First Name</label>
                <input type='text' name="name" onChange={handleName} />
            </div>
            {nameError ? <p>{nameError}</p>:'' }
            <div>
                <label>Last Name</label>
                <input type='text' name="lastName" onChange={handleLastName} ></input>
            </div>
            {lastNameError ? <p>{lastNameError}</p>:'' }
            <div>
                <label>Email</label>
                <input type='email' name="email" onChange={handleEmail}></input>
            </div>
            {emailError ? <p>{emailError}</p>:'' }
            <div>
                <label>Password</label>
                <input type='password' name="password" onChange={handlePassword} ></input>
            </div>
            {passError? <p>debe tener al menos 8 caracteres</p>:''}
            <div>
                <label>Confirm Password</label>
                <input type='password' name="conpassword" onChange={confirmPassword} ></input>
            </div>
            {conPassError}
        </form>
    )
}

export default MasForm;