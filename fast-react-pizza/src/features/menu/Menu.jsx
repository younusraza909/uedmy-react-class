import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";

import MenuItem from "./MenuItem";

function Menu() {
  // React router knows that by using this hook we want data fetched by loader into this component
  const menu = useLoaderData();

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

// Creating a loader so it can called by router in latest router v6
export async function loader() {
  const menu = await getMenu();

  return menu;
}

export default Menu;
