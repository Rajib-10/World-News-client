import usePublisher from "../../../Hook/usePublisher";
import AllPublisherCard from "./AllPublisherCard";


const AllPublisher = () => {
    const [publishers] = usePublisher()
    return (
        <div className="mt-10">
            <h1 className="text-3xl text-center text-[#7B1FA2]">All Publishers</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {
                publishers?.map(publisher=> <AllPublisherCard key={publisher._id} publisher={publisher} />)
            }
           </div>
        </div>
    );
};

export default AllPublisher;