import React from "react";
import {Form, FormGroup, Label,Input, Button} from 'reactstrap'
import { signup } from "../service/UserService";
import { useNavigate } from "react-router-dom";
export default function Signup(){
    var userInfo = {
        userId:0,
        name : '',
        password : '',
        email:'',
        role:''
    }
    var navigate = useNavigate();
    const submitForm = (e) => {
        e.preventDefault();



        signup(userInfo).then(
            (response) => {
                
                navigate("/");
            },
            (error) => {
                console.log(error);
            }
        )
    }
    return(
    <div className="container">
            <Form onSubmit={submitForm}>
                <FormGroup>
                    <Label>Username:</Label>
                    <Input required
                    id='name' name='name' type='text' 
                    onChange={(e) => {
                        userInfo.name = e.target.value;
                    }}></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Password:</Label>
                    <Input required
                    id='password' name='password' type='password'
                    onChange={(e) => {
                        userInfo.password = e.target.value;
                    }}></Input>
                </FormGroup>
                <FormGroup>
                    <Label>email:</Label>
                    <Input required
                    id='email' name='email' type='email'
                    onChange={(e) => {
                        userInfo.email = e.target.value;
                    }}></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Role:</Label>
                    <Input required
                    id='role' name='role' type='text'
                    onChange={(e) => {
                        userInfo.role = e.target.value;
                    }}></Input>
                </FormGroup>
                <Button>Signup</Button>
            </Form>
    </div>
    );
}