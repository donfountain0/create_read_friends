import {useState, useEffect} from "react";
import { set } from "react-hook-form";


const Form = () => {  
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [occupation, setOccupation] = useState('');

    const handleSubmit = (e) => {

        fetch('/users', {
            method: 'POST',
            body: JSON.stringify({

            })
        })

        e.preventDefault();
        const blog = {first_name, last_name, occupation};
        
        console.log(blog)


        

    }


    return (
        <form action='/users' onSubmit={handleSubmit} methods="POST">
            <label>First Name</label>
            <input type='text' value={first_name} onChange={(e) => setFirstName(e.target.value)}/><br/>
            <label>Last Name: </label>
            <input type='text' value={last_name} onChange={(e) => setLastName(e.target.value)}/><br/>
            <label>Occupation: </label>
            <input type='text' value={occupation} onChange={(e) => setOccupation(e.target.value)}/><br/>
            <input type='submit' value='create friend'/>
        </form>
    );
};


export default Form;
