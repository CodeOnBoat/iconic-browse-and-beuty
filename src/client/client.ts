export type review = {
  id: string;
  review: { score: number; text: string };
  createdAt: string;
  author: { name: string };
};

export const getReviews = async () => {
  const reviews = await fetch(
    "https://us-central1-iconic-2c1d7.cloudfunctions.net/app/reviews"
  );
  return reviews.json();
};
