import Hero from "@/components/sections/home/Hero";
import About from "@/components/sections/home/About";
import LatestWork from "@/components/sections/home/LatestWork";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section>
        <Hero />
      </section>

      {/* About Section*/}
      <section>
        <About />
      </section>

      {/* Latest Work Section*/}
      <section>
        <LatestWork />
      </section>
    </div>
  );
};

export default Home;
