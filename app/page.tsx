import Hero from "../components/Hero";
import About from "../components/About";
import Amenities from "../components/Amenities";
import Places from "../components/Places";
import Rooms from "../components/Rooms";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Rooms limit={4} />
      <Places />
      <Amenities />
    </>
  );
}