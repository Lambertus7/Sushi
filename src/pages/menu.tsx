import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const MenuPage = () => {
  return (
    <div>
      <Navbar />
      <h2>Have a look at our 素晴らし menu</h2>
      <Footer />
    </div>
  );
};
export default MenuPage;

// Design: Create a visually appealing list of sushi items.
// Content: Sushi categories (Maki Rolls, Nigiri, Sashimi, etc.), prices, and descriptions.
// Components:
// Dynamic list of menu items (can be fetched from an API or a static file for now).
// A filter for categories of sushi (e.g., Vegetarian, Chef’s Special).
