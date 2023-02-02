import React, { useState } from 'react';

import './Auth.css';
import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

const Auth = () => {
    const [isLoginMode, setIsLoginMode] = useState(true);

    const [formState, inputHandler, setFormData] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        },
    }, false);

    const authSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    };

    const switchModeHandler = () => {
        if (!isLoginMode) {
            setFormData({
                ...formState.inputs,
                name: undefined
            }, formState.inputs.email.isValid && formState.inputs.password.isValid);
        } else {
            setFormData({
                ...formState.inputs,
                name: {
                    value: '',
                    isValid: false
                }
            }, false);
        }
        setIsLoginMode(prevMode => !prevMode);
    };

    return (
        <Card className="authentication">
            <h2>Login Required</h2>
            <hr />
            <form onSubmit={authSubmitHandler}>
                {!isLoginMode && (
                    <Input
                        element="input" 
                        id="name" 
                        type="text" 
                        label="Name" 
                        validators={[VALIDATOR_REQUIRE]} 
                        errorText="PLease enter a name."
                        onInput={inputHandler}
                    />
                )}
                <Input 
                    element="input" 
                    id="email" 
                    type="email" 
                    label="E-mail" 
                    validators={[VALIDATOR_EMAIL()]} 
                    errorText="PLease enter a valid e-mail."
                    onInput={inputHandler}
                />
                <Input 
                    element="input" 
                    id="password" 
                    type="password" 
                    label="Password" 
                    validators={[VALIDATOR_MINLENGTH(7)]} 
                    errorText="PLease enter a valid password. (Min. length 7 characters)"
                    onInput={inputHandler}
                />
                <Button type="submit" disabled={!formState.isValid}>
                    {isLoginMode ? 'LOGIN' : 'SIGN-UP'}
                </Button>
            </form>
            <Button inverse onClick={switchModeHandler}>
                Switch to {isLoginMode ? 'SIGN-UP' : 'LOGIN'}
            </Button>
        </Card>
    );
};

export default Auth;