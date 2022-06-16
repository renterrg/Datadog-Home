import { getPriceDetails, getReviews } from "./services/homepage.js";

window.onload = function () {
  populatePage();
};

function populatePage() {
  populatePriceDetails();
  populateLatestReview();
}

async function populatePriceDetails() {
  try {
    const priceDetails = await getPriceDetails();
    priceDetails.forEach((detail) => {
      const colClass = detail.title.includes("log")
        ? "price-log-col"
        : `price-${detail.title}-col`;
      const col = document.getElementsByClassName(colClass);
      for (const property in detail) {
        const p = col[0].getElementsByClassName(property);
        p[0].textContent = detail[property];
      }
    });
  } catch (error) {
    console.error(error);
  }
}

async function populateLatestReview() {
  try {
    const reviews = await getReviews();
    let latestReview = reviews.find((review) => review.latest);
    const reviewContainer = document.getElementsByClassName("review-container");
    for (const property in latestReview) {
      const p = reviewContainer[0].getElementsByClassName(property);
      if (p && p[0]) {
        p[0].textContent = latestReview[property];
      }
    }
  } catch (error) {
    console.error(error);
  }
}
