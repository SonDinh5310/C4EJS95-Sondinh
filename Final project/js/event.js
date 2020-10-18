const reviewDisplay = document.getElementById("review-display"),
  reviewInput = document.getElementById("review-input"),
  submitBtn = document.getElementById("submit-btn"),
  reviewBtn = document.getElementById("review-btn"),
  reviewContainer = document.getElementById("review-container"),
  warning = document.getElementById("warning"),
  backBtn = document.getElementById("back-btn");

submitBtn.addEventListener("click", () => {
  pushData(getUserReview());
  removeInput();
  showReviews();
  submitBtn.disabled = true;
});
reviewBtn.addEventListener("click", () => {
  addClass(reviewBtn, "d-none");
  removeClass(backBtn, "d-none");
  removeClass(reviewContainer, "d-none");
});
backBtn.addEventListener("click", () => {
  removeClass(reviewBtn, "d-none");
  addClass(backBtn, "d-none");
  addClass(reviewContainer, "d-none");
});
reviewInput.addEventListener("keyup", validateReview);
