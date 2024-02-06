"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session }: any = useSession();
  return (
    <div>
      <ul className="">
        <div>
          <Link href="/">
            <li>Home</li>
          </Link>
        </div>
        <div className="">
          {!session ? (
            <div>
              <a href="/login">
                <li>Login</li>
              </a>
              <div>
              <a href="/login/user">As User</a>
              <br />
              <a href="/login/org">As Organization</a>
              </div>

            </div>
          ) : (
            <>
              {session.user?.email}
              <li>
                <button
                  onClick={() => {
                    signOut();
                  }}
                  className=""
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;