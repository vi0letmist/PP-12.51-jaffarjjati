// layout.tsx
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
        {hasBackgroundImage && backgroundImage ? (
          // Background Image Section
          <div
            className={`${
              backgroundImage ? "bg-cover bg-center bg-no-repeat" : ""
            }`}
            style={
              backgroundImage
                ? {
                    backgroundImage: `url(${backgroundImage})`,
                    height: "100vh", // Covers the full initial viewport height
                  }
                : {}
            }
          >
            <Header />
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Content that overlays the background image */}
              <div className="w-full h-full">{children}</div>
            </div>
          </div>
        ) : (
          <>
            <Header />
            {/* Main Content Section with White Background */}
            <main className="flex-1 w-full bg-white">{children}</main>
            <Footer />
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default Layout;
