"use client";

import { ChangeEvent, useState, } from "react"
import {useRegisterMutation} from "@/store/features/auth";
import TextField from "./TextField"
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const fieldInfo: Array<Array<string>> = [
    ["text", "name", "Full Name"],
    ["text", "email", "Email"],
    ["password", "password", "Password"]
]

const SignupForm = () => {
    const [formData, setFormData] = useState<{
        email: string;
        password: string;
        name: string;
    }>({
        email: '',
        password: '',
        name: '',
    });

    const message = useSelector((state: RootState) => state.user.message);
    const router = useRouter();

    const [registerUser, registerResult] = useRegisterMutation();

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSignup =  () => {
         registerUser(formData);

        if(registerResult.isSuccess){
            toast(message)
            console.log("message")
            router.push("/signin")
        }
        else{
            
        }
    }

    return (
        <>
        <div className="flex flex-col text-left gap-6 bg-white text-gray-500 font-login border-0 rounded-lg md:px-14 px-10 pt-10 pb-10 w-full">
            <h2 className="text-[1.5rem] font-bold text-black">Register</h2>
            <p className="text-[0.9] mb-6">Hey, enter your detail to sign up
            </p>
            {fieldInfo.map((field) => (
                <TextField
                    key={field[1]}
                    type={field[0]}
                    name={field[1]}
                    id={field[1]}
                    placeholder={field[2]}
                    value={formData[`${fieldInfo[1]}`]}
                    onChange={handleInputChange}
                />
            ))}
            <button className="bg-blue-800 mt-8 rounded-md border-0 text-white py-4" onClick={handleSignup} >
                Sign up
            </button>
        </div>
        </>
    )
}



export default SignupForm;