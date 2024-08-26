import Layout from "@/components/layout/layout";
import BgTreeBW from "@/assets/images/pexels-ian-panelo-7169401.jpg";

const Home = () => {
  return (
    <Layout backgroundImage={BgTreeBW.src} hasBackgroundImage>
      {/* Content Above Background Image */}
      <div className="text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Site</h1>
        <p className="text-xl">
          This section appears above the background image.
        </p>
      </div>

      {/* Content Below Background Image */}
      <div className="py-12 px-4">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-lg">
          This section appears below the background image. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          Sed cursus ante dapibus diam.
        </p>
      </div>
    </Layout>
  );
};

export default Home;
