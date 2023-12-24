import { BsPeopleFill } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { TbPremiumRights } from "react-icons/tb";
import CountUp from "react-countup";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import {  JackInTheBox } from "react-awesome-reveal";

const CountingAllUsers = () => {
  const axiosPublic = useAxiosPublic();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      const premiumUsers = res.data.filter(
        (item) => item.premiumUser === "premium"
      );
      const totalUsers = res.data;
      return { totalUsers, premiumUsers };
    },
  });

  const [text] = useTypewriter({
    words: [
      " Users",
      
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <div className="py-10 ">
      <h1 className="text-3xl text-center text-[#7B1FA2]">All <span className="text-2xl text-indigo-700">
          {text} <Cursor cursorStyle="<" />
        </span></h1>
      <JackInTheBox>
      <div className="flex flex-col md:flex-row  justify-between items-center lg:w-[90%] mx-auto bg-base-300 rounded-lg  p-8 gap-8">
        <div className="flex items-center gap-7">
          <div>
            <BsPeopleFill className="text-6xl" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">
              <CountUp end={users?.totalUsers?.length} duration={3} />+
            </h1>
            <h1 className="text-xl font-bold">Total Users</h1>
          </div>
        </div>

        <div className="flex items-center gap-7">
          <div>
            <FaUserPlus className="text-6xl" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">
              <CountUp
                end={users?.totalUsers?.length - users?.premiumUsers?.length}
                duration={3}
              />
              +
            </h1>
            <h1 className="text-xl font-bold">Normal Users</h1>
          </div>
        </div>

        <div className="flex items-center gap-7">
          <div>
            <TbPremiumRights className="text-6xl" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">
              <CountUp end={users?.premiumUsers?.length} duration={3} />+
            </h1>
            <h1 className="text-xl font-bold">Premium Users</h1>
          </div>
        </div>
      </div>
      </JackInTheBox>
    </div>
  );
};

export default CountingAllUsers;
