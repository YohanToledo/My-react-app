import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';



interface User {
    id : number,
    name : string,
    email : string
}

function Users() {
    
    const [users, setUsers] = useState<User[]>([{ id: 0, name: " a", email: " b"}]);
    const [update, setUpdate] = useState(false);
    
    function updateData(){
        setUpdate(true);
    }

    useEffect(() => {
        setUpdate(false);
        axios.get("http://186.237.57.196:8080/users")
        .then((response) => {
            console.log(response.data);
            const responseContent = response.data;
            setUsers(responseContent.content);
        });       
    }, [update]);
    
    return (
        <div>
            <h1>Users</h1>
            <ul>
                    {users.map((user: { name: string; email: string; }) => (
                        <li>{"NAME:  " + user.name + " --- EMAIL: " + user.email}</li> 
                    ))}
            </ul>
            <button className="btn btn-primary" onClick={updateData}> update </button>
        </div>
    );
};

export default Users;