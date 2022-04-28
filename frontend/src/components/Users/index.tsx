import * as React from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BASE_URL } from 'requests';
import 'index.css';



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
        alert("tabela atualizada");
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
            baseURL: "http://186.237.57.196:8080",
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
            window.location.replace("/users/");
        });

    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="save-user">
                    <div className="col-md-2 ">
                        <h3>Cadastrar usuario</h3>
                    </div>
                    <div className="row">
                        
                        <div className="col-md-2">
                            <input id="name" className="form-control" type="text" placeholder="Name"/>
                        </div>
                        <div className="col-md-2">
                            <input id="email" className="form-control" type="text" placeholder="Email"/>
                        </div>
                        <div className="col-md-1">
                            <button type="submit" className="btn btn-primary mt-1"> save </button>
                        </div>
                        <div className="col-md-2">
                            <Link to="/">
                                <button className="btn btn-secondary mt-1">Voltar</button>
                            </Link>
                        </div>   
                    </div>
                </div>
                <br/>
            </form>
            

            <div className="container custom-container">
                <div className="row">
                    <div className="col-md-2">
                        <h1>Users</h1>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-primary mt-2" onClick={updateData}> update </button>
                    </div>
                    
                </div>
                <div className="table-box col-md-6">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Email</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                        {users.map((user: { id: number; name: string; email: string; }) => (
                            <tr key={user.id}>
                                <td className="width15">{user.id}</td> 
                                <td >{user.name}</td> 
                                <td >{user.email}</td> 
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>              
        </div>

    );
};

export default Users;