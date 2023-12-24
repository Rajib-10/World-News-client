import { Slide } from "react-awesome-reveal";
import usePublisher from "../../../Hook/usePublisher";
import AllPublisherCard from "./AllPublisherCard";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const AllPublisher = () => {
    const [publishers] = usePublisher()
    const [text] = useTypewriter({
        words: [
          " Publishers",
          
        ],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40,
      });
    return (
        <div className="mt-10">
            <h1 className="text-3xl text-center text-[#7B1FA2]">All <span className="text-2xl text-indigo-700">
          {text} <Cursor cursorStyle="<" />
        </span></h1>
          <Slide>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {
                publishers?.map(publisher=> <AllPublisherCard key={publisher._id} publisher={publisher} />)
            }
           </div>
          </Slide>
        </div>
    );
};

export default AllPublisher;