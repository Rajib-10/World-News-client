import { NavLink, Outlet } from "react-router-dom";
import { GrArticle } from "react-icons/gr";
import { PiUsersThin } from "react-icons/pi";
import { FaUser } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#7F66DB] text-white p-4 ">
        <ul className="menu p-4 space-y-4">
          <li>
            <NavLink
              to="/Dashboard/allUser"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline font-bold" : ""
              }
            >
              <div className="flex  items-center gap-2">
                <PiUsersThin />
                All Users
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Dashboard/allArticle"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline font-bold" : ""
              }
            >
              <div className="flex  items-center gap-2">
                <GrArticle />
                All Article
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Dashboard/addPublisher"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline font-bold" : ""
              }
            >
              <div className="flex  items-center gap-2">
                <FaUser />
                Add Publisher
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
