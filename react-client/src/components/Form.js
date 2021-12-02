import React from "react";
import axios from 'axios';


export default class Form extends React.Component {  
    // const [first_name, setFirstName] = useState('');
    // const [last_name, setLastName] = useState('');
    // const [occupation, setOccupation] = useState('');

    state = {       
        first_name: '',
        last_name: '',
        occupation: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            [event.target.name]: event.target.value,
            [event.target.name]: event.target.value,
        
        })

    }
    handleSubmit = event => {

        // fetch('/users', {
        //     method: 'POST',
        //     body: JSON.stringify({

        //     })
        // })

        event.preventDefault();
        const user = {
            first_name: this.state.first_name, 
            last_name: this.state.last_name,
            occupation: this.state.occupation
        };
        
        console.log(user)


        axios
            .post("http://localhost:3000/users", {user})
            .then(res=>{
                console.log(res);
                console.log(res.data)
            })

    }


    render(){

        return (
            <form onSubmit={this.handleSubmit}>
                <label>First Name</label>
                <input type='text' name="first_name" onChange={this.handleChange}/><br/>
                <label>Last Name: </label>
                <input type='text' name="last_name" onChange={this.handleChange}/><br/>
                <label>Occupation: </label>
                <input type='text' name="occupation" onChange={this.handleChange}/><br/>
                <button type='submit'>Submit</button>
            </form>
        );
    };
}
