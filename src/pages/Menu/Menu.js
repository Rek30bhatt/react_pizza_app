import MenuItems from "../../component/MenuItems/MenuItems";
import { MenuList } from "../../Helpers/MenuList";
import "./Menu.css";
function Menu() {
  return (
    <div className="menu">
    <h1 className="menuTitle">Our Menu</h1>
    <div className="menuList">
        {MenuList.map((ele, index) => {
          return (
            <MenuItems  key ={index} image={ele.image} name={ele.name} price={ele.price} />
          );
        })}
      </div>
    </div>
  );
}
export default Menu;
