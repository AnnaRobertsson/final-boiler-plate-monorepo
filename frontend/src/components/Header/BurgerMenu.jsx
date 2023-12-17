import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
//import { BurgerMenuAnimation } from "./Animations/BurgerMenuAnimation.jsx";
import { useNavStore } from "../../stores/NavStore";
import { userStore } from "../../stores/userStore";
import { LinkButton } from "../Buttons/LinkButton";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledBurgerMenu = styled.div`
  display: block;
  flex-direction: column;
  max-width: 150px;
  padding: 20px;
  border: none;
  border-radius: 20px 0 20px 20px;
`;

const StyledToggleButton = styled.button`
  display: flex;
  justify-content: flex-end;
  background: transparent;
  border: none;
  font-size: 20px;
  /* position: fixed; */
  padding: 0;
  cursor: pointer;
`;

const StyledBurgerLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BurgerMenu = () => {
  const { activePage, setActivePage, burgerMenuOpen, setBurgerMenuOpen } =
    useNavStore();
  const { isLoggedIn } = userStore();

  // const toggleBurgerMenu = () => {
  //   setIsBurgerMenuOpen((prev) => !prev);
  // };

  // Initialize the 'navigate' function from React Router.
  const navigate = useNavigate();

  // Access the 'handleLogout' function from the 'userStore'.
  const storeHandleLogout = userStore((state) => state.handleLogout);

  const closeBurgerMenu = () => {
    setBurgerMenuOpen(false);
  };

  // Function to handle the click event of the logout button.
  const onLogoutClick = () => {
    storeHandleLogout();
    // Additional logic after logout can be added here.
    alert("Log out successful");
    navigate("/"); // You can change this to the login route
  };

  return (
    <StyledBurgerMenu>
      <StyledToggleButton onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}>
        {burgerMenuOpen ? (
          <IoCloseOutline style={{ width: "32px", height: "32px" }} />
        ) : (
          <RxHamburgerMenu style={{ width: "32px", height: "32px" }} />
        )}
      </StyledToggleButton>
      {/* <BurgerMenuAnimation onClick={toggleBurgerMenu} /> */}
      <StyledBurgerLinks>
        <ul className={burgerMenuOpen ? "burger-menu-open" : ""}>
          <li className={activePage === "home" ? "active" : ""}>
            <Link
              to="/"
              onClick={() => {
                setActivePage("home");
                closeBurgerMenu();
              }}
            >
              Home
            </Link>
          </li>
          <li className={activePage === "login" ? "active" : ""}>
            <Link
              to="/login"
              onClick={() => {
                setActivePage("login");
                closeBurgerMenu();
              }}
            >
              Login
            </Link>
          </li>
          <li className={activePage === "register" ? "active" : ""}>
            <Link
              to="/register"
              onClick={() => {
                setActivePage("register");
                closeBurgerMenu();
              }}
            >
              Register
            </Link>
          </li>
          <li className={activePage === "tasks" ? "active" : ""}>
            <Link
              to="/tasks"
              onClick={() => {
                setActivePage("tasks");
                closeBurgerMenu();
              }}
            >
              Task feed
            </Link>
          </li>
          <li className={activePage === "profile" ? "active" : ""}>
            <Link
              to="/profile"
              onClick={() => {
                setActivePage("profile");
                closeBurgerMenu();
              }}
            >
              Profile
            </Link>
          </li>
          <li className={activePage === "about" ? "active" : ""}>
            <Link
              to="/about"
              onClick={() => {
                setActivePage("about");
                closeBurgerMenu();
              }}
            >
              About
            </Link>
          </li>

          {/* Logout button based on user login status */}
          {isLoggedIn ? (
            <li>
              <LinkButton
                to="/"
                className="logout-button"
                buttonName="Log out"
                onClick={onLogoutClick}
              />
            </li>
          ) : null}
        </ul>
      </StyledBurgerLinks>
    </StyledBurgerMenu>
  );
};
