const getReviews = async () => {
  const reviews = await fetch(
    "https://www.bokadirekt.se/api/places/getEmployeeReviews/88002"
  );
  return reviews;
};
