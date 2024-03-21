"use client";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


export default function SignupPage() {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [loading,setLoading] = useState(false);

    const router = useRouter();

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup",user)
            console.log("response =======>",response);
            router.push("/login");
        } catch (error:any) {
            console.error(error);
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen flex-row m-0 p-0 box-border">

            <div className="min-h-screen w-2/4 bg-gray-900 flex items-center justify-center text-center">
                <h1 className="font-extrabold text-9xl text-gray-500">Register</h1>

            </div>

            <div className="min-h-screen w-2/4 flex justify-center flex-col pl-52">

                <h1 className="font-extrabold text-2xl">Create Account</h1>
                <h1 className="font-light text-gray-600 mt-3 text-sm">Create an account so you can explore the site</h1>

                <input
                    id="username"
                    type="text"
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    placeholder="Please give your username"
                    className="h-10 w-96 p-2 mb-5 mt-16 "
                />

                <input
                    id="email"
                    type="email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    placeholder="Please give your email"
                    className="h-10 w-96 p-2 mb-5"
                />

                <input
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    placeholder="Please give your password"
                    className="h-10 w-96 p-2 mb-5"
                />

                <button
                    className="w-96 bg-gray-950 h-10 p-2 text-white rounded-sm mt-8"
                    onClick={onSignup}
                >
                    Signup
                </button>
                <Link
                    href="/login"
                    className="w-96 bg-white h-10 p-2 text-gray-800 rounded-sm border  border-gray-900 mt-6 text-center"

                >
                    Already have an account? Login
                </Link>
            </div>

        </div>
    )
}