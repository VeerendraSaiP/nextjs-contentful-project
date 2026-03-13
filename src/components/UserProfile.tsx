"use client";
import { useMsal } from "@azure/msal-react";

export default function UserProfile() {
  const { accounts } = useMsal();
  if (!accounts || accounts.length === 0) return null;
  const user = accounts[0];
  return (
    <div className="mb-4 p-2 bg-white text-blue-600 rounded shadow text-center">
      <b>Name:</b> {user.name} <br />
      <b>Email:</b> {user.username}
    </div>
  );
}