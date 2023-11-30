import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hook/useAuth";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import Chart from "react-google-charts";

const DashboardHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data = [] } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");

      return res.data;
    },
  });

  const chartData = [
    ["Collection", "Total"],
    ["Users", data?.users],
    ["Publishers", data?.publishers],
    ["Articles", data?.articles],
    ["premiumArticles", data?.premiumArticles],
  ];

  const options = {
    chart: {
      title: "World News Bar and line Chart",
      subtitle:
        "users,articles, publishers,and premiumArticles total collection",
    },
  };

  return (
    <div>
      <h1 className="text-2xl text-[#7B1FA2]">
        Hey <span className="text-3xl font-bold">{user?.displayName} </span>warm
        Welcome to Dashboard
      </h1>

      <section className="p-6 my-6 dark:bg-gray-800 dark:text-gray-100">
        <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
          <div className="flex justify-center p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex  flex-col justify-center align-middle">
              <p className="text-3xl text-center font-semibold leadi">
                {data?.users}
              </p>
              <p className="capitalize">Users</p>
            </div>
          </div>
          <div className="flex justify-center p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl text-center font-semibold ">
                {data?.publishers}
              </p>
              <p className="capitalize">Publishers</p>
            </div>
          </div>
          <div className="flex justify-center p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl text-center font-semibold ">
                {data?.articles}
              </p>
              <p className="capitalize">Articles</p>
            </div>
          </div>
          <div className="flex justify-center p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl text-center font-semibold ">
                {data?.premiumArticles}
              </p>
              <p className="capitalize">Premium Articles</p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-around items-center flex-col lg:flex-row">
        <div className="w-1/2">
          <Chart
            chartType="Bar"
            data={chartData}
            options={options}
            width="100%"
            height="400px"
          ></Chart>
        </div>

        <div className="w-1/2">
          <Chart
            chartType="LineChart"
            data={chartData}
            options={options}
            width="100%"
            height="400px"
          ></Chart>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
