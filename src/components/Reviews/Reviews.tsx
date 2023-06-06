import React, { useEffect, useState } from "react";
import { getReviews, review } from "../../client/client";
import { StarsWidget } from "./StarsWidget";
import { Rating } from "@mui/material";
import "./Reviews.css";
import { ComponentHeader } from "../ComponentHeader/ComponentHeader";
import Bokadirect from "../../images/bokadirekt.png";

export const Reviews = () => {
  const [reviews, setReviews] = useState<review[]>([]);
  const [showReviews, setShowReviews] = useState<boolean>(false);

  useEffect(() => {
    const getRev = async () => {
      getReviews().then((r) => setReviews(r));
    };
    getRev();
  }, []);

  const formatDateString = (dateString: string) => {
    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.getMonth() + 1; // Note: Months are zero-based, so we add 1
    const year = date.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
  };

  return (
    <div className="reviews-container">
      <ComponentHeader title="Betyg och recensioner" direction="right" />
      <div className="avg-score-container">
        <div className="score-logo-container">
          <h1 className="avg-score">4.9</h1>
          <img src={Bokadirect} className="bokadirect-logo" />
        </div>
        <label>Från Bokadirekt</label>
        <div className="score-logo-container">
          <Rating value={5.9} /> <label>(140+)</label>
        </div>
      </div>
      <div className="review-list">
        {reviews.slice(0, 4).map((r) => {
          return (
            <div className="review-container">
              <div className="review-header">
                <img src="" className="review-header-image" />
                <h1 className="review-header-name">{r.author.name}</h1>
                <h3 className="review-header-date">
                  {formatDateString(r.createdAt)}
                </h3>
              </div>
              <Rating value={r.review.score} />
              <p className="review-text">{r.review.text}</p>
            </div>
          );
        })}
      </div>
      <button
        className="reviews-show-more-button"
        onClick={() => setShowReviews(!showReviews)}
      >
        {showReviews ? "Visa mindre" : "Visa mer"}
      </button>
      {showReviews && (
        <div className="review-list absolute">
          {reviews.slice(4).map((r) => {
            return (
              <div className="review-container">
                <div className="review-header">
                  <img src="" className="review-header-image" />
                  <h1 className="review-header-name">{r.author.name}</h1>
                  <h3 className="review-header-date">
                    {formatDateString(r.createdAt)}
                  </h3>
                </div>
                <Rating value={r.review.score} />
                <p className="review-text">{r.review.text}</p>
              </div>
            );
          })}
        </div>
      )}
      {showReviews && (
        <button
          className="reviews-show-more-button"
          onClick={() => setShowReviews(!showReviews)}
        >
          Visa mindre
        </button>
      )}
    </div>
  );
};
