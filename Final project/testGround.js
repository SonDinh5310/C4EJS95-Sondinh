const user = [
  {
    id: 1,
    name: "user name 1",
    age: 18,
    address: "Address 1",
  },
  {
    id: 2,
    name: "user name 2",
    age: 18,
    address: "Address 2",
  },
];

const hotel = [
  {
    id: 1,
    name: "hotel A",
    address: "address A",
  },
  {
    id: 2,
    name: "hotel B",
    address: "address B",
  },
];

const room = [
  {
    id: 1,
    hotelId: 1,
    roomCap: 2,
    roomName: "The room",
  },
  {
    id: 2,
    hotelId: 2,
    roomCap: 2,
    roomName: "The room 2",
  },
];

const reviewsHotel = [
  {
    id: 1,
    hotelId: 1,
    userId: 1,
    comment: "Good",
    star: 4,
  },
  {
    id: 2,
    hotelId: 1,
    userId: 1,
    comment: "Bad",
    star: 2,
  },
  {
    id: 3,
    userId: 2,
    hotelId: 1,
    comment: "Good",
    star: 4,
  },
];

const booking = [
  {
    id: 1,
    userId: 1,
    hotelId: 1,
    roomId: 1,
  },
  {
    id: 2,
    userId: 3,
    hotelId: 2,
    roomId: 1,
  },
  {
    id: 3,
    userId: 2,
    hotelId: 2,
    roomId: 2,
  },
];

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
const getUserById = (id) => {
  return user.find((data) => data.id === id);
};
const getHotelById = (id) => {
  return hotel.find((data) => data.id === id);
};
const data = getHotelReviews();
console.log("review Data ", data);

const reviewDisplay = document.getElementById("review-display"),
  reviewInput = document.getElementById("review-input"),
  submitBtn = document.getElementById("submit-btn");

const showReviews = () => {
  getHotelReviews();
  for (let review of data) {
    reviewDisplay.innerHTML += `
    <h2>${review.user.name}</h2>
      <h3>Rate: ${review.star} stars</h3>
      <p>${review.comment}</p>
    </div>
    `;
  }
};
showReviews();

const getUserReview = () => {
  const result
}