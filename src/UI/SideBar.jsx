import { Link, NavLink } from "react-router-dom";
import logo from "../../public/Images/logo.png";
// import AddBtn from "./AddBtn";
// import LogOut from "../Components/Auth/LogOut";

function SideBar() {
  return (
    <>
      <div className="side-bar">
        <div className="log-img">
          <Link to="/home">
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>
        </div>
        <nav className="side-bar-nav">
          <ul className="side-bar-ul">
            <li className="side-bar-li">
              <NavLink to="/home" className="side-bar-link">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1191_815)">
                    <path
                      d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z"
                      fill="#6882B6"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1191_815">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Dashboard
              </NavLink>
            </li>
            <li className="side-bar-li">
              <NavLink to="/airtime" className="side-bar-link">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.6638 15.771C17.6638 15.771 16.5052 16.909 16.2212 17.2427C15.7587 17.7363 15.2137 17.9693 14.4992 17.9693C14.4305 17.9693 14.3573 17.9693 14.2886 17.9648C12.9284 17.8779 11.6644 17.3478 10.7164 16.8953C8.12431 15.643 5.8482 13.8652 3.95678 11.612C2.3951 9.73359 1.35093 7.99687 0.659397 6.13217C0.233485 4.99415 0.0777753 4.1075 0.146471 3.27113C0.192268 2.7364 0.398354 2.29308 0.778469 1.91374L2.34015 0.355256C2.56455 0.14502 2.8027 0.0307617 3.03626 0.0307617C3.32478 0.0307617 3.55835 0.204435 3.7049 0.350686C3.70948 0.355256 3.71406 0.359827 3.71864 0.364397C3.998 0.624906 4.26362 0.894556 4.54298 1.18249C4.68495 1.32874 4.8315 1.47499 4.97805 1.62581L6.22831 2.87351C6.71376 3.35797 6.71376 3.80586 6.22831 4.29032C6.0955 4.42286 5.96727 4.5554 5.83446 4.68337C5.44976 5.07642 5.75196 4.77483 5.35353 5.13132C5.34437 5.14046 5.33521 5.14503 5.33063 5.15417C4.93677 5.54722 5.01005 5.93113 5.09248 6.19164C5.09706 6.20535 5.10164 6.21906 5.10622 6.23277C5.43138 7.01887 5.88935 7.75926 6.58547 8.64134L6.59005 8.64591C7.85404 10.1998 9.18673 11.411 10.6568 12.3387C10.8446 12.4576 11.0369 12.5536 11.2201 12.645C11.385 12.7272 11.5407 12.8049 11.6735 12.8872C11.6918 12.8963 11.7101 12.91 11.7285 12.9192C11.8842 12.9969 12.0307 13.0334 12.1819 13.0334C12.562 13.0334 12.8001 12.7958 12.878 12.7181L13.7757 11.8222C13.9314 11.6668 14.1787 11.4795 14.4672 11.4795C14.7511 11.4795 14.9847 11.6577 15.1267 11.8131C15.1312 11.8177 15.1312 11.8177 15.1358 11.8222L17.6592 14.3405C18.1309 14.8067 17.6638 15.771 17.6638 15.771Z"
                    fill="#6882B6"
                  />
                </svg>
                Buy Airtime
              </NavLink>
            </li>
            <li className="side-bar-li">
              <NavLink to="/data" className="side-bar-link">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.61243 12.2041C9.14078 8.70189 14.8614 8.70189 18.3897 12.2041M8.80675 15.3748C10.5709 13.6237 13.4312 13.6237 15.1954 15.3748M12.0011 18.5455L12.0198 18.5269M2.40039 9.40162C7.70232 4.13891 16.2985 4.13891 21.6004 9.40162"
                    stroke="#6882B6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Buy Data
              </NavLink>
            </li>
            <li className="side-bar-li">
              <NavLink to="/subscriptions" className="side-bar-link">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.40002 20.4001L12 16.8001L15.6 20.4001M4.80002 16.8001H19.2C20.5255 16.8001 21.6 15.7256 21.6 14.4001V6.0001C21.6 4.67461 20.5255 3.6001 19.2 3.6001H4.80002C3.47454 3.6001 2.40002 4.67461 2.40002 6.0001V14.4001C2.40002 15.7256 3.47454 16.8001 4.80002 16.8001Z"
                    stroke="#6882B6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Tv Subscription
              </NavLink>
            </li>
            <li className="side-bar-li">
              <NavLink to="/bills" className="side-bar-link">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.2222 14.4888L9.51105 21.5999L18.7555 11.6443L13.7777 8.7999L14.4888 2.3999L5.24438 12.3555L10.2222 14.4888Z"
                    stroke="#6882B6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Pay Electric Bill
              </NavLink>
            </li>
            <li className="side-bar-li">
              <NavLink to="/airtime-to-cash" className="side-bar-link">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.21216 18.7881C1.46313 15.0391 1.46313 8.96071 5.21217 5.21168C7.5821 2.84174 10.8829 1.96995 13.9376 2.5963M19.7396 6.31751C22.505 10.0741 22.188 15.3887 18.7886 18.7881C16.3431 21.2336 12.9064 22.0839 9.77169 21.339M17.8377 7.86043V4.26043L21.4377 4.26043L17.8377 7.86043ZM6.06008 16.0366V19.6366H2.46008L6.06008 16.0366Z"
                    stroke="#6882B6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Airtime To Cash
              </NavLink>
            </li>
            <li className="side-bar-li">
              <NavLink to="/transactions" className="side-bar-link">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.79995 7.8H16.2M7.79995 12.6H16.2M5.75995 3H18.24C19.1015 3 19.8 3.80589 19.8 4.8V21L17.2 19.2L14.6 21L12 19.2L9.39995 21L6.79995 19.2L4.19995 21V4.8C4.19995 3.80589 4.89839 3 5.75995 3Z"
                    stroke="#6882B6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Transaction History
              </NavLink>
            </li>
            <li className="side-bar-li">
              <NavLink to="/help" className="side-bar-link">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.84615 12.0005V7.95453C5.85817 7.15923 6.027 6.37412 6.34298 5.64418C6.65896 4.91424 7.11587 4.25383 7.68754 3.70077C8.2592 3.14771 8.93438 2.71288 9.67439 2.4212C10.4144 2.12952 11.2047 1.98671 12 2.00097C12.7953 1.98671 13.5856 2.12952 14.3256 2.4212C15.0656 2.71288 15.7408 3.14771 16.3125 3.70077C16.8841 4.25383 17.341 4.91424 17.657 5.64418C17.973 6.37412 18.1418 7.15923 18.1538 7.95453V12.0005M15.0769 20.077C15.893 20.077 16.6756 19.7529 17.2526 19.1758C17.8297 18.5988 18.1538 17.8163 18.1538 17.0002V13.5389M15.0769 20.077C15.0769 20.587 14.8743 21.0761 14.5137 21.4368C14.153 21.7974 13.6639 22 13.1538 22H10.8462C10.3361 22 9.84698 21.7974 9.48633 21.4368C9.12569 21.0761 8.92308 20.587 8.92308 20.077C8.92308 19.567 9.12569 19.0779 9.48633 18.7173C9.84698 18.3566 10.3361 18.154 10.8462 18.154H13.1538C13.6639 18.154 14.153 18.3566 14.5137 18.7173C14.8743 19.0779 15.0769 19.567 15.0769 20.077ZM3.53846 9.69291H5.07692C5.28094 9.69291 5.47659 9.77395 5.62085 9.9182C5.76511 10.0624 5.84615 10.2581 5.84615 10.4621V15.0773C5.84615 15.2813 5.76511 15.4769 5.62085 15.6212C5.47659 15.7654 5.28094 15.8465 5.07692 15.8465H3.53846C3.13044 15.8465 2.73912 15.6844 2.4506 15.3959C2.16209 15.1074 2 14.7161 2 14.3081V11.2313C2 10.8233 2.16209 10.432 2.4506 10.1435C2.73912 9.85499 3.13044 9.69291 3.53846 9.69291ZM20.4615 15.8465H18.9231C18.7191 15.8465 18.5234 15.7654 18.3791 15.6212C18.2349 15.4769 18.1538 15.2813 18.1538 15.0773V10.4621C18.1538 10.2581 18.2349 10.0624 18.3791 9.9182C18.5234 9.77395 18.7191 9.69291 18.9231 9.69291H20.4615C20.8696 9.69291 21.2609 9.85499 21.5494 10.1435C21.8379 10.432 22 10.8233 22 11.2313V14.3081C22 14.7161 21.8379 15.1074 21.5494 15.3959C21.2609 15.6844 20.8696 15.8465 20.4615 15.8465Z"
                    stroke="#6882B6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Help and Support
              </NavLink>
            </li>

            <div className="sidebar">
              <li className="side-bar-li">
                <NavLink to="/help" className="side-bar-link">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.78019 3.59998H5.07431C4.51268 3.59998 3.97405 3.82122 3.57691 4.21505C3.17977 4.60888 2.95667 5.14302 2.95667 5.69998V18.3C2.95667 18.8569 3.17977 19.3911 3.57691 19.7849C3.97405 20.1787 4.51268 20.4 5.07431 20.4H8.78019M9.04338 12H21.0434M21.0434 12L16.4582 7.19998M21.0434 12L16.4582 16.8"
                      stroke="#6882B6"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Logout
                </NavLink>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default SideBar;
