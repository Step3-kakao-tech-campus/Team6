import { getHomeHandler } from "./get/home";
import {
  getSearchFestivalHandler,
  getSearchHandler,
  getSearchRestaurantHandler,
  getSearchTouristSpotHandler,
} from "./get/search";
import {
  getRestaurantCalendarHandler,
  getRestaurantHandler,
} from "./get/restaurant";
import { getFestivalCalendarHandler, getFestivalHandler } from "./get/festival";
import {
  getReviewedHandler,
  getMyReviewHandler,
  getMyReviewsHandler,
  getFestivalReviewHandler,
  getRestaurantReviewHandler,
  getTouristSpotReviewHandler,
} from "./get/review";
import { getTouristSpotHandler } from "./get/touristSpot";
import { searchFoodHandler, getFoodHandler } from "./get/food";
import { getWishlistHandler } from "./get/wishlist";
import { loginHandler, registerHandler } from "./account/account";
import { editUserHandler, getUserinfoHandler } from "./get/userinfo";
import {
  getFestivalReservationHandler,
  getRestaurantReservationHandler,
} from "./get/reservation";
import {
  postFestivalReservationHandler,
  postRestaurantReservationHandler,
} from "./post/reservation";
import {
  postFestivalReviewHandler,
  postRestaurantReviewHandler,
  postTouristSpotReviewHandler,
} from "./post/review";
import { deleteWishHandler, postWishHandler } from "./post/wishlist";
import { patchReviewHandler } from "./patch/review";
import { deleteReviewHandler } from "./delete/review";

export const handlers = [
  getSearchHandler,
  getSearchRestaurantHandler,
  getSearchFestivalHandler,
  getSearchTouristSpotHandler,
  getHomeHandler,
  getRestaurantHandler,
  getFestivalHandler,
  getTouristSpotHandler,
  searchFoodHandler,
  getFoodHandler,
  getWishlistHandler,
  postWishHandler,
  deleteWishHandler,
  loginHandler,
  registerHandler,
  getUserinfoHandler,
  editUserHandler,

  // Calendar
  getRestaurantCalendarHandler,
  getFestivalCalendarHandler,

  // Reservations
  postRestaurantReservationHandler,
  getRestaurantReservationHandler,
  postFestivalReservationHandler,
  getFestivalReservationHandler,
  // Reviews

  getReviewedHandler,
  getMyReviewHandler,
  getMyReviewsHandler,
  getFestivalReviewHandler,
  getRestaurantReviewHandler,
  getTouristSpotReviewHandler,

  postRestaurantReviewHandler,
  postFestivalReviewHandler,
  postTouristSpotReviewHandler,

  deleteReviewHandler,

  patchReviewHandler,
];
