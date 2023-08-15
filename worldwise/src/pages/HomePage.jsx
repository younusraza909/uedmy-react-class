import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function HomePage() {
  return (
    <div>
      <PageNav />
      HomePage

      <Link to='/app'>Go to the app</Link>
    </div>
  );
}

export default HomePage;
