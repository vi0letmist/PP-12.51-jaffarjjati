import "@/app/globals.css";
import Header from "./header";
import Footer from "./footer";
import { ThemeProvider } from "@/components/themeContext";

interface LayoutProps {
  children: React.ReactNode;
  backgroundImage?: string;
  hasBackgroundImage?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  backgroundImage,
  hasBackgroundImage = false,
}) => {
  return (
    <ThemeProvider>
      <div className="relative w-full min-h-screen flex flex-col">
        {/* Background Image Section */}
        {hasBackgroundImage && backgroundImage && (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              height: "100vh", // Covers the full initial viewport height
              zIndex: -1, // Ensure it's behind the content
            }}
          />
        )}
        <Header />
        <main
          className={`flex-1 ${hasBackgroundImage && backgroundImage ? "relative z-10" : ""}`}
        >
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
