// import Image from "next/image";
// import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      <Sidebar />
      <main className="flex-1 p-8 ml-20">
        <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg">This is the main content area.</p>
      </main>
    </div>
  );
}
