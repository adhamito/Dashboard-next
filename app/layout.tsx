'use client';


import "./globals.css";
import Header from "./components/header";
import SideBar from "./components/sidebar";
import PageWrapper from "./components/pagewrapper";
import React, { useState } from "react";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [Toggle, setToggle] = useState(true); 

    return (
        <html lang="en">
            <body>
                <div className="flex min-h-screen">
                    <SideBar Toggle={Toggle} /> 
                    <div className="flex flex-col w-full">
                        <Header Toggle={Toggle} setToggle={setToggle} /> 
                        <PageWrapper>
                            {children}
                        </PageWrapper>
                    </div>
                </div>
            </body>
        </html>
    );
}
