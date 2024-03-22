"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


export default function ProfilePage() {
    const [data, setData] = useState<any>({});
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const logout = async () => {
        try {
            setLoading(true);
            const response = await axios.get("/api/users/logout")
            console.log("response =======>", response);
            router.push("/login");
        } catch (error: any) {
            console.error(error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    async function fetchUserData() {
        try {
            setLoading(true);
            const response = await axios.get("/api/users/me");
            console.log("response =======>", response.data.data);

            setData(response.data.data);
        } catch (error: any) {
            console.error(error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }


    return (
        <div className="flex items-center min-h-screen flex-col m-0 p-0 box-border">
            <nav className="min-h-[10vh] w-full bg-gray-100 flex justify-between items-center px-8">

                <Link href={`/profile/${data._id}`}>Hello, {data.username}</Link>

                <button
                    className="w-20 h-10 bg-gray-950 p-2 text-white rounded-sm"
                    onClick={logout}
                >
                    Logout
                </button>
            </nav>
            <div className="min-h-[90vh] w-full bg-white flex items-center justify-center">
                <div className="h-96 w-96 bg-red-100 flex flex-col items-start justify-evenly p-10">
                    <h1 className="font-bold">Id : {data._id}</h1>
                    <h1 className="font-bold">Name : {data.username}</h1>
                    <h1 className="font-bold">Admin : {data.isAdmin.toString()}</h1>
                    <h1 className="font-bold">Email : {data.email} </h1>
                    <h1 className="font-bold">Verified : {data.isVerified.toString()} </h1>
                </div>
            </div>
        </div>
    )
}