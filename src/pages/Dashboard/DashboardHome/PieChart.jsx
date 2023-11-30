import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { Chart } from "react-google-charts";

const PieChart = () => {
  const axiosSecure = useAxiosSecure();

  const { data = [] } = useQuery({
    queryKey: ["publisher-count"],
    queryFn: async () => {
      
        const res = await axiosSecure.get("/publisher-count");
        return res.data;
      
    },
  });

  const chartData = [["Publisher", "Count"], ...data.map(entry => [entry._id, entry.count])];

  return (
    <div>
        <h1 className="text-xl md:text-3xl text-[#7B1FA2] text-center my-6" >World NEWS Pie Chart.</h1>
      <Chart
        width={'100%'}
        height={'400px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={chartData}
        options={{
          title: 'Articles by Publisher',
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  );
};

export default PieChart;
