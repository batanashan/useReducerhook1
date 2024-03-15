'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { useReducer } from "react";
import { appReducer } from "@/reducer/reducer";
import { init } from "@/utils/init";
import { appCtx } from "@/Context/appContext";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
 const [state,dispatch]= useReducer(appReducer,init)
  return (
    <html lang="en">
      <body className={inter.className}>
<appCtx.Provider value={{state,dispatch}}>
        {children}
        </appCtx.Provider>
        </body>
    </html>
  );
}
