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
        <div className="relative w-full min-h-screen flex flex-col">
          {/* Background Image Section */}
          {hasBackgroundImage && backgroundImage && (
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                height: "100vh",
                zIndex: -1,
              }}
            />
          )}
          <Header />
          <main
            className={`flex-1 pt-4 px-8 md:px-16 ${hasBackgroundImage && backgroundImage ? "relative z-10" : ""}`}
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
