import ActiveLink from "../components/ActiveLink";
import { FaCartPlus, FaHome } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { IoIosAddCircle, IoMdPerson } from "react-icons/io";
import { IoCardOutline, IoHomeOutline, IoLogOutOutline } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import logo from "../assets/QcSpot-Logo-design-2.png";
import { MdComment } from "react-icons/md";
import { useAuth } from "../context/AuthContext";

const DashboardLayout = () => {
  const { logout } = useAuth();
  return (
    <div className="drawer lg:drawer-open min-h-screen bg-gray-50 dark:bg-dark text-black dark:text-white transition-colors duration-200">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content m-2 lg:m-0">
        <label
          htmlFor="my-drawer-2"
          className="fixed text-xl sm:text-2xl md:text-3xl text-btn cursor-pointer rounded-full drawer-button lg:hidden"
        >
          <span>☰</span>
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="p-4 w-56 sm:w-64 lg:w-[280px] duration-300 max-w-sm h-full bg-title bg-btn text-white ">
          <li>
            <div className="flex gap-5 mt-3 mb-5">
              <Link to="/" className="flex justify-center items-center gap-3">
                <img className="w-32" src={logo} alt="" />
              </Link>
            </div>
          </li>
          <li>
            <ActiveLink to="/dashboard/admin-home">
              <div className="flex items-center gap-2 text-sm sm:text-base duration-300">
                <FaHome /> Admin Home
              </div>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink to="/dashboard/users">
              <div className="flex items-center gap-2 text-sm sm:text-base duration-300">
                <IoMdPerson /> All Users
              </div>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink to="/dashboard/add-a-product">
              <div className="flex items-center gap-2 text-sm sm:text-base duration-300">
                <IoIosAddCircle /> Add a Product
              </div>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink to="/dashboard/manage-products">
              <div className="flex items-center gap-2 text-sm sm:text-base duration-300">
                <FaCartPlus /> Manage Products
              </div>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink to="/dashboard/add-an-agent">
              <div className="flex items-center gap-2 text-sm sm:text-base duration-300">
                <IoIosAddCircle /> Add an agent
              </div>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink to="/dashboard/manage-agent">
              <div className="flex items-center gap-2 text-sm sm:text-base duration-300">
                <IoCardOutline /> Manage Agent
              </div>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink to="/dashboard/manage-review">
              <div className="flex items-center gap-2 text-sm sm:text-base duration-300">
                <MdComment /> Manage Review
              </div>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink to="/dashboard/change-password">
              <div className="flex items-center gap-2 text-sm sm:text-base duration-300">
                <RiLockPasswordFill /> Change password
              </div>
            </ActiveLink>
          </li>

          {/* Page break */}
          <div className="border-b border-b-white/40 my-5"></div>

          <li>
            <ActiveLink to="/">
              <div className="flex items-center gap-2 text-sm sm:text-base duration-300">
                <IoHomeOutline /> Back to Home Page
              </div>
            </ActiveLink>
          </li>
          <li onClick={logout}>
            <ActiveLink to="/login">
              <div className="flex items-center gap-2 text-sm sm:text-base duration-300 bg-red-500 rounded px-3 py-1">
                <IoLogOutOutline />
                Logout
              </div>
            </ActiveLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
