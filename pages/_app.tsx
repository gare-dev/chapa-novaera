import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react"
import AlertProvider from "@/context/AlertContext";
import { locale, loadMessages } from "devextreme/localization";
import ptMessages from "devextreme/localization/messages/pt.json";

loadMessages(ptMessages);
locale("pt");

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
