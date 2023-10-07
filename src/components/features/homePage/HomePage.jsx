import Carousel from "../carousel/Carousel";
import { useQuery } from "react-query";
import { getHome } from "../../../apis/home";
import HorizontalListSection from "../../atoms/HorizontalListSection";
import FestivalPoster from "../../molecules/FestivalPoster";
import PlacePoster from "../../molecules/PlacePoster";
import { utils } from "./utils";
import SectionTitle from "../../atoms/SectionTitle";
import HorizontalListSectionMediaQuery from "../../atoms/HorizontalListSectionMediaQuery";
import SearchBar from "../../molecules/SearchBar";

const dummySlides = [
  {
    image: "https://picsum.photos/200/300",
  },
  {
    image: "https://picsum.photos/200/301",
  },
  {
    image: "https://picsum.photos/200/302",
  },
];

const HomePage = () => {
  const { data } = useQuery("products", () => getHome());
  return (
    <div className={"home-page flex w-full flex-col gap-2 py-2"}>
      <SearchBar />
      <div className={"carousel-wrapper height-flex-layout-small"}>
        <Carousel slides={dummySlides} />
      </div>
      {data && (
        <>
          <SectionTitle title={"Festivals"} />
          <HorizontalListSection>
            {utils(data.festivals) &&
              data.festivals.map((festival, index) => {
                return (
                  <FestivalPoster
                    key={index}
                    image={festival.image}
                    alt={`poster of ${festival.name}`}
                    to={`festival/${festival.id}`}
                  />
                );
              })}
          </HorizontalListSection>
          <SectionTitle title={"Restaurants"} />
          <HorizontalListSectionMediaQuery>
            {utils(data.restaurants) &&
              data.restaurants.map((restaurant, index) => {
                return (
                  <PlacePoster
                    key={index}
                    image={restaurant.image}
                    alt={`poster of ${restaurant.name}`}
                    to={`restaurant/${restaurant.id}`}
                    name={restaurant.name}
                    address={restaurant.address}
                  />
                );
              })}
          </HorizontalListSectionMediaQuery>
          <SectionTitle title={"Tourist Spots"} />
          <HorizontalListSectionMediaQuery>
            {utils(data.touristSpots) &&
              data.touristSpots.map((spot, index) => (
                <PlacePoster
                  key={index}
                  image={spot.image}
                  name={spot.name}
                  address={spot.address}
                  to={`touristSpot/${spot.id}`}
                />
              ))}
          </HorizontalListSectionMediaQuery>
        </>
      )}
      {
        // error && <ErrorSign error={error.response} />
      }
    </div>
  );
};

export default HomePage;
