const PRICE_DETAILS_ENDPOINT = "api/priceDetails";
const REVIEWS_ENDPOINT = "api/reviews";

// mock responses
const priceDetails = [
  {
    title: "infrastructure",
    price: "$15",
    per: "Per host, per month",
    content: "Centralize your monitoring of systems and services",
    firstDetail: "- 250+ integrations",
    secondDetail: "- Out-of-the-box dashboards",
    thirdDetail: "- 15-month metric retention",
  },
  {
    title: "apm",
    price: "$31",
    per: "Per host, per month",
    content: "Centralize your monitoring of systems and services",
    firstDetail: "- Java, Ruby, Python, Go, Node, and more",
    secondDetail: "- Out-of-the-box application health dashboards",
    thirdDetail: "- 1 million trace events per host included",
  },
  {
    title: "log management",
    price: "$1.27",
    per: "Per host, per month",
    content: "Centralize your monitoring of systems and services",
    firstDetail: "- Collect from any source",
    secondDetail: "- Automated & custom processing",
    thirdDetail: "- Fully integrated with Infrastructure and APM",
  },
];

const reviews = [
  {
    author: "Valentino Volonghi",
    role: "Chief Technology Officer",
    review:
      "“Datadog has been instrumental in managing our real-time infrastructure, globally distributed in 5 data centers across hundreds of instances, and thousands of different metrics and dimensions for each host. I can't believe there was a time when we didn't have Datadog.”",
    latest: true,
  },
  {
    review: "sample...",
    latest: false,
  },
];

async function getPriceDetails() {
  //   const res = await fetch(PRICE_DETAILS_ENDPOINT);
  //   return await res.json();
  return priceDetails;
}

async function getReviews() {
  //   const res = await fetch(REVIEWS_ENDPOINT);
  //   return await res.json();
  return reviews;
}

export { getPriceDetails, getReviews };
