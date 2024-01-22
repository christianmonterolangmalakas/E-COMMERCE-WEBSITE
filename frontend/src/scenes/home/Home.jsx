import ShoppingList from "./ShoppingList";
import Subscribe from "./Subscribe";
import MainCarousel from "./MainCarousel";
import BrowseCollection from "./BrowseCollection";

function Home() {
  return (
    <div className="home">
      <MainCarousel />
      <BrowseCollection />
      <ShoppingList />
      <Subscribe />
    </div>
  );
}

export default Home;
