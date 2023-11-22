import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-stone-800 text-stone-200 flex items-center justify-between px-4 py-4 sm:px-6">
      <p className="text-stone-300 font-semibold uppercase space-x-4 text-sm md:text-base">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
