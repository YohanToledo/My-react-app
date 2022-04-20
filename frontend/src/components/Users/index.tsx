import * as React from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { useState, useEffect } from 'react';
import { BASE_URL } from 'requests';



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

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const name = (event.target as any).name.value;
        const email = (event.target as any).email.value;
        console.log("nome: " + name + " email: " + email);
        
        /*
        if(!validateEmail(email)){
            alert("Email inválido!");
            return;
        } 
        */

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/users/save',
            data: {
                id : null,
                name : name,
                email: email
            }
        }

        axios(config).then(response => {
            console.log(response.data);
        });

    }
    
    return (
        <div>
            <h1>Users</h1>
            <ul>
                    {users.map((user: { name: string; email: string; }) => (
                        <li>{"NAME:  " + user.name + " --- EMAIL: " + user.email}</li> 
                    ))}
            </ul>
            <button className="btn btn-primary" onClick={updateData}> update </button>

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-2">
                        <input id="name" className="form-control" type="text" placeholder="Name"/>
                    </div>
                    <div className="col-md-2">
                        <input id="email" className="form-control" type="text" placeholder="Email"/>
                    </div>
                    <div className="col-md-2">
                        <button type="submit" className="btn btn-primary col-md-6"> save </button>
                    </div>   
                    
                </div>
            </form>
        </div>

    );
};

export default Users;