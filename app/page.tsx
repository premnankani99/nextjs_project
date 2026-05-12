import Hero from "../components/Hero";
import About from "../components/About";
import Amenities from "../components/Amenities";
import Places from "../components/Places";
import Rooms from "../components/Rooms";

export const metadata = {
  title: "Hotel Ananta Inn Jaipur | Luxury Hotel in Lal Kothi Tonk Road",
  description: "Experience luxury at Hotel Ananta Inn Jaipur. Best hotel in Lal Kothi near Tonk Road with modern rooms, rooftop terrace, and premium hospitality.",
  keywords: "Hotel Ananta Inn, Jaipur Hotel, Lal Kothi Jaipur, Luxury stay Jaipur, Tonk Road Hotel",
};

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