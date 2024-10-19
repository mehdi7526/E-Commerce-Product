import React, { useState } from "react";

interface Review {
  name: string;
  rating: number;
  comment: string;
}

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([
    { name: "John Doe", rating: 5, comment: "Great product!" },
    { name: "Jane Smith", rating: 4, comment: "Very good quality." },
  ]);

  const [newReview, setNewReview] = useState<Review>({
    name: "",
    rating: 0,
    comment: "",
  });

  const [error, setError] = useState<string>("");

  const addReview = () => {
    // Check if the name field is empty
    if (newReview.name.trim() === "") {
      setError("Name is required");
      return; // Prevent submission
    }

    // Clear error if name is provided
    setError("");

    // Add the new review to the list of reviews
    setReviews([...reviews, newReview]);

    // Reset the form
    setNewReview({ name: "", rating: 0, comment: "" });
  };

  // Function to render stars based on the rating
  const renderStars = (rating: number) => {
    const totalStars = 5;
    const filledStars = "★".repeat(rating);
    const emptyStars = "☆".repeat(totalStars - rating);
    return filledStars + emptyStars;
  };

  // Function to update rating when a star is clicked
  const handleStarClick = (starValue: number) => {
    setNewReview({ ...newReview, rating: starValue });
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold">Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index} className="mt-4">
            <p>
              <strong>{review.name}</strong> ({renderStars(review.rating)})
            </p>
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
      <div className="flex flex-col lg:w-1/2 gap-3 mt-6 ">
        <input
          type="text"
          placeholder="Name"
          value={newReview.name}
          className={`border rounded-lg p-2 ${error ? 'border-red-500' : ''}`}
          onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>} {/* Show error message */}
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => handleStarClick(star)}
              style={{
                cursor: "pointer",
                fontSize: "1.5rem",
                color: star <= newReview.rating ? "gold" : "gray",
              }}
            >
              {star <= newReview.rating ? "★" : "☆"}
            </span>
          ))}
        </div>
        <textarea
          placeholder="Comment"
          className="border rounded-lg p-2"
          value={newReview.comment}
          onChange={(e) =>
            setNewReview({ ...newReview, comment: e.target.value })
          }
        />
        <button
          className="bg-blue-600 text-white w-1/2 lg:w-1/3 self-end rounded-lg py-2"
          onClick={addReview}
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default Reviews;
