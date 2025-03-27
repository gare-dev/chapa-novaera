import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react"
import AlertProvider from "@/context/AlertContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <AlertProvider>
        <Component {...pageProps} />
      </AlertProvider>
    </>
  )
}
