'use client';
import "./globals.css";
import Header from "./header";
import SideBar from "./components/SideBar/index";
import PageWrapper from "./components/PageWrapper";
import React, { useState } from "react";
import { ThemeProvider } from "./theme-provider";


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [Toggle, setToggle] = useState(true); 

    return (
        <html lang="en">
          <ThemeProvider
           attribute="class"
           defaultTheme="system"
           enableSystem
           disableTransitionOnChange>
            <body>
                <div className="flex min-h-screen">
                    <SideBar Toggle={Toggle} /> 
                    <div className="flex flex-col w-full">
                        <Header Toggle={Toggle} setToggle={setToggle} /> 
                        <PageWrapper Toggle={Toggle}>
                            {children}
                        </PageWrapper>
                    </div>
                </div>
            </body>
            </ThemeProvider>
        </html>
    );
}
