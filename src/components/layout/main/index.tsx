import "@/app/globals.css";
import Header from "@/components/layout/main/header";
import Footer from "@/components/layout/main/footer";
import { ThemeProvider } from "@/context/ThemeContext";
import SafeHydrate from "@/components/hooks/SafeHydrate";

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
      <SafeHydrate>
        <div className="relative w-full min-h-screen flex flex-col px-8">
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
            className={`flex-1 py-4 px-8 ${hasBackgroundImage && backgroundImage ? "relative z-10" : ""}`}
          >
            {children}
          </main>
          <Footer />
        </div>
      </SafeHydrate>
    </ThemeProvider>
  );
};

export default Layout;
