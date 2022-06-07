import "./style.css";
import logo from "../../assets/icons/logo.svg";
import checkoutIcon from "../../assets/icons/sacola.svg";
import Search from "components/Search";

const Header = () => {
  return (
    <div className="header-container">
      <div>
        <img src={logo} alt="El geladon" />
        <h1>El Geladon</h1>
      </div>
      <div>
        <Search />
      </div>
      <img src={checkoutIcon} alt="Sacola de compras" />
    </div>
  );
};

export default Header;
