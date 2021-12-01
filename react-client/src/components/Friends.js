import React, { useState, useEffect } from "react";

function Friends(){
    const [data, setData] = useState([{}])
    
    useEffect(() => {
        fetch('/members').then(
        res => res.json()
        ).then(
        data =>{
            setData(data)
            console.log(data)
        }
        )
    }, [])

    return(
        <table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Occupation</th>
            </tr>
            {data.map(data => {
                return (
                    <tr>
                        <td>{data.first_name}</td>
                        <td>{data.last_name}</td>
                        <td>{data.occupation}</td>
                    </tr>
                )
            })}
           
        </table>
    );
    // };
};

export default Friends;

