import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/chrome";
const display = Fraunces({ subsets:["latin"], variable:"--font-display" });
const body = IBM_Plex_Sans({ subsets:["latin"], weight:["400","500","600"], variable:"--font-body" });
export const metadata: Metadata = { title:"TimelessHQ — Digital systems, precisely made", description:"A dev and security collective in Dhaka." };
export default function RootLayout({ children }: Readonly<{children:React.ReactNode}>) { return <html lang="en" className={`${display.variable} ${body.variable}`}><body><Header />{children}<Footer /></body></html>; }
