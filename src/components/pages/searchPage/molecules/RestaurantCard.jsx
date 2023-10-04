import StarRating from "../../../common/atoms/StarRating";
import WishButton from "../../../common/atoms/WishButton";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="m-2 rounded-br-2xl rounded-tr-2xl bg-white px-4 shadow-md">
      <div className="flex">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="my-4 h-32 w-24 rounded-xl"
        />
        <div className="m-2 text-base font-semibold text-[#FF4800]">
          <div className="mb-2">{restaurant.name}</div>
          <span className="text-xs text-gray-400">{restaurant.summary}</span>
          <div className="mt-2">
            <StarRating averageScore={restaurant.averageScore} />
          </div>
        </div>
        <div className="mt-2">
          <WishButton initialIsWished={restaurant.liked} />
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;