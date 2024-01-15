
import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import "../globals.css";

// use the NextFont inter to create Inter method which has the Google font Latin
const inter = Inter({ subsets: ["latin"] });

// For better SEO
export const metadata: Metadata = {
    title: "TMS",
    description: "Tell Me a Story, where stories are the center of the universe ",
};

// set the function RootLayout to have children props and set children object to ReactNode
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <ClerkProvider
        appearance={{
            baseTheme: dark,
        }}
        >
        <html lang='en'>
            <body className={`${inter.className} bg-dark-1`}>{children}</body>
        </html>
        </ClerkProvider>
    );

}