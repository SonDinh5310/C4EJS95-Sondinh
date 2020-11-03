const validateReview = () => {
  if (reviewInput.value && isCheckedReview()) {
    submitBtn.disabled = false;
    addClass(warning, "d-none");
  } else {
    submitBtn.disabled = true;
    removeClass(warning, "d-none");
  }
};

const isCheckedReview = () => {
  let checked = false;
  for (let i = 1; i <= 5; i++) {
    if (document.getElementById(i).checked === true) {
      return i;
      checked = true;
    }
  }
  return checked;
};

const checkBoxFunc = (id) => {
  for (let i = 1; i <= 5; i++) {
    document.getElementById(i).checked = false;
  }
  document.getElementById(id).checked = true;
};
