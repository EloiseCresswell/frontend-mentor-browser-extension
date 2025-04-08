import "./Nav.scss";
import ImageIcon from "../../assets/images/logo.svg";
import DarkIcon from "../../assets/images/icon-moon.svg";
import LightIcon from "../../assets/images/icon-sun.svg";

type Props = {
  darkMode: Boolean;
  setDarkMode: Function;
};
function Nav({ darkMode, setDarkMode }: Props) {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`nav-bar ${darkMode ? "nav-bar-dark" : "nav-bar-light"}`}>
      <img src={ImageIcon} alt="Extensions Logo" />
      <button
        onClick={toggleDarkMode}
        className={`nav-button ${
          darkMode ? "nav-button-dark" : "nav-button-light"
        }`}
      >
        <img
          src={darkMode ? LightIcon : DarkIcon}
          alt={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          height="20px"
        />
      </button>
    </div>
  );
}

export default Nav;
