import type { AppProps } from "next/app";
import { ThemeProvider } from "@/components/themeContext";
import "@/app/globals.css"; // Import global styles

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
