// import Image from "next/image";
// import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center color bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg">This is the main content area.</p>
      </main>
    </div>
  );
}
