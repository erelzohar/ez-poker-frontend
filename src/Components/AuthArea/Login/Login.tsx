import "./Login.css";
import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import Store from '../../../Redux/Store';
import { userLoggedInAction } from '../../../Redux/AuthState';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import UserModel from '../../../Models/UserModel';
import CredentialsModel from '../../../Models/CredentialsModel';
import globals from '../../../Services/Globals';
import { useForm } from "react-hook-form";
import JwtAxios from "../../../Services/JwtAxios"

function Login(): JSX.Element {

    const navigate = useNavigate();
    const { register, handleSubmit, formState } = useForm<CredentialsModel>({
        defaultValues: { email: '', password: '' },
        mode: 'onBlur'
    });

    async function submit(credentials: CredentialsModel) {
        try {
            const response = await JwtAxios.post<UserModel>(globals.loginUrl, credentials);
            console.log(response);
            
            Store.dispatch(userLoggedInAction(response.data));
            toast.success("Logged-in successfully.");
            navigate("/home");
        }
        catch (error) {
            // toast.error(error as string);
            console.log(error);
            
        }
    }

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(submit)}
            sx={{
                '& .MuiTextField-root': { width: '100%' },
            }}
        >
            <div>
                <TextField
                    required
                    id="email-input"
                    label="Email"
                    type="string"
                    variant="standard"
                    autoFocus
                    {...register('email', {
                        required: { value: true, message: "Please enter a valid email." },
                        pattern: { value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, message: "Please enter a valid email." },
                        minLength: { value: 9, message: "Please enter a valid email." }
                    })}
                    error={formState.errors.email && formState.dirtyFields.email}
                    helperText={formState.dirtyFields.email && formState.touchedFields.email && formState.errors.email?.message}
                />

                <TextField
                    required
                    id="password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                    {...register('password', {
                        required: { value: true, message: "Please enter your password." },
                        minLength: { value: 6, message: "Your password is too short." }
                    })}
                    error={formState.errors.password && formState.dirtyFields.password}
                    helperText={formState.dirtyFields.password && formState.touchedFields.password && formState.errors.password?.message}
                />


            </div>
            <Button variant="contained" color="success" size='large' type='submit' disabled = {!formState.isValid}>
                Success
            </Button>
        </Box>
    );
}

export default Login;
