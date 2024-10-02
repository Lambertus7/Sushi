import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to the Homepage!</h1>
      <Footer />
    </div>
  );
};
export default Homepage;

// Next step on our roadmap on completing this website is our landing page. Our Homepage.
// It will comprise of the following:
// Design & Structure: Include a hero section with the restaurant name, logo, and a featured image (maybe sushi or the interior of the restaurant).
// Content: Welcome message, key services (dine-in, takeout, delivery), and a call-to-action like "View Menu" or "Make a Reservation."
// Components:
// Navigation Bar (links to Menu, About, Contact)
// Maybe even a subnavbar for the menu itself.
// Hero Section with a big banner image
// Featured Sushi Items or Chef’s Special
// Footer (already created)
// At the end of all of this, think of a way to incorporate Redux maybe even context provider
