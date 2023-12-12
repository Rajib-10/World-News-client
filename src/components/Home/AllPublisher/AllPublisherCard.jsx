/* eslint-disable react/prop-types */

const AllPublisherCard = ({ publisher }) => {
  return (
    <div>
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border group">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white  rounded-xl bg-clip-border">
          <img src={publisher?.image} className="object-fit w-full h-[300px] group-hover:scale-110" />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="block  text-base antialiased font-bold leading-relaxed text-blue-gray-900">
              {publisher?.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPublisherCard;
