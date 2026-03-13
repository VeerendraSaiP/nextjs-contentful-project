"use client";

import { useMsal } from "@azure/msal-react";
import { loginRequest } from "@/lib/msalConfig";
import { useState } from "react";

interface CTAData {
  title?: string;
  buttonText?: string;
}

interface CTAProps {
  data: CTAData;
}

export default function CTA({ data }: CTAProps) {
  const { instance, accounts } = useMsal();
  const [error, setError] = useState<string | null>(null);
  const isLoggedIn = accounts && accounts.length > 0;

  const handleLogin = async () => {
    setError(null);
    try {
      await instance.loginPopup(loginRequest);
    } catch (err: any) {
      setError(err?.message || "Login failed");
    }
  };

  const handleLogout = async () => {
    setError(null);
    try {
      await instance.logoutPopup();
    } catch (err: any) {
      setError(err?.message || "Logout failed");
    }
  };

  return (
    <section className="text-center py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto">
        {isLoggedIn && (
          <div className="mb-4 p-2 bg-white text-blue-600 rounded shadow text-center">
            <b>Name:</b> {accounts[0]?.name} <br />
            <b>Email:</b> {accounts[0]?.username}
          </div>
        )}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          {data?.title}
        </h2>
        {error && (
          <div className="mb-2 text-red-600 text-sm text-center">{error}</div>
        )}
        {!isLoggedIn ? (
          <button
            onClick={handleLogin}
            className="inline-block bg-white text-blue-600 font-semibold px-6 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-full transition-all hover:bg-gray-100 hover:scale-105 shadow-lg"
          >
            {data?.buttonText || "Login with Microsoft"}
          </button>
        ) : (
          <button
            onClick={handleLogout}
            className="inline-block bg-gray-600 text-white font-semibold px-6 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-full transition-all hover:bg-gray-700 hover:scale-105 shadow-lg"
          >
            Logout
          </button>
        )}
      </div>
    </section>
  );
}