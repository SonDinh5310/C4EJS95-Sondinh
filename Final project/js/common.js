const getUserById = (id) => {
  return user.find((data) => data.id === id);
};
const getHotelById = (id) => {
  return hotel.find((data) => data.id === id);
};
const pushData = (data) => {
  reviewsHotel.push(data);
};
const removeClass = (element, className) => {
  element.classList.remove(className);
};
const addClass = (element, className) => {
  element.classList.add(className);
};
const removeInput = () => {
  for (let i = 1; i <= 5; i++) {
    if (document.getElementById(i).checked === true) {
      document.getElementById(i).checked = false;
    }
  }
  reviewInput.value = "";
};
const getUserReview = () => {
  const reviewData = {
    id: reviewsHotel.length + 1,
    hotelId: parseInt(reviewBtn.getAttribute("hotelId")),
    userId: currentLogin[0].id,
    comment: reviewInput.value,
    star: isCheckedReview(),
  };
  return reviewData;
};
const getHotelReviews = () => {
  const result = [];
  for (let review of reviewsHotel) {
    const reviewsData = {
      id: review.id,
      user: getUserById(review.userId),
      hotel: getHotelById(review.hotelId),
      comment: review.comment,
      star: review.star,
    };
    result.push(reviewsData);
  }
  return result;
};
