import StarRating from "../atoms/StarRating";
import { Link } from "react-router-dom";
import { comma } from "../../utils/convert";
import WishButton from "../atoms/WishButton";
import MapIcon from "../atoms/MapIcon";

const FestivalCard = ({ festival }) => {
  return (
    <div className="shadow-rounded-card mx-4 my-2 px-6 py-2">
      <div className="font-semibold text-[#FF4800]">{festival.name}</div>
      <div className="my-2 flex">
        <img src={festival.image} alt={festival.name} className="h-32 w-24" />
        <div>
          <div className="flex text-sm">
            <MapIcon size={15} color="FF4800" />
            {festival.address}
          </div>
          <div className="text-sm">{festival.period}</div>
          <div className="flex">
            <StarRating averageScore={festival.averageScore} />
            <div>{festival.averageScore}</div>
            <Link to="/festivalReviewList">reviews</Link>
          </div>
          <div className="text-sm">{comma(festival.price)}₩~</div>
          <div>
            <WishButton initialIsWished={festival.liked} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FestivalCard;
