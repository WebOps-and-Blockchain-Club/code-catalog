"use client";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


const Login = () => {
    const router = useRouter();
    const [error, setError] = useState("");
    const { data: session, status: sessionStatus } = useSession();

    useEffect(() => {
        if (sessionStatus === "authenticated") {
            router.replace("/dashboard");
        }
    }, [sessionStatus, router]);



    if (sessionStatus === "loading") {
        return <h1>Loading...</h1>;
    }

    return (
        sessionStatus !== "authenticated" && (
            <div className="">
                <div className="">
                    <h1 className="">Login</h1>
                    <button
                        className=""
                        onClick={() => {
                            signIn("github");
                        }}
                    >
                        Sign In with Github
                    </button>
                </div>
            </div>
        )
    );
};

export default Login;