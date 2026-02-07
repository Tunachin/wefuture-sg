import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../context/store";
import useLocalData from "../hooks/useLocalData";
import ThemeProvider from "../context/theme/provider";
import LanguageProvider from "../context/locales";
import {GlobalStyle} from "../styles/global";
import '../styles/font.css'

function UData(){
  useLocalData()
  return <>
    <GlobalStyle/>
  </>
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>
          <UData/>
          <LanguageProvider>
            <Component {...pageProps} />
          </LanguageProvider>
      </ThemeProvider>
    </Provider>
  );
}
