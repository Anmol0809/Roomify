const Listing = require("../models/listing"); // Import the Listing model
const Review = require("../models/review"); // Import the Review model

// Controller method to create a new review
module.exports.createReview = async(req, res) => {
    let listing = await Listing.findById(req.params.id); // Find the listing by id
    let newReview = new Review(req.body.review); // Create a new review with the request body data
    newReview.author = req.user._id; // Set the author of the review to the current user
    listing.reviews.push(newReview); // Add the new review to the listing's reviews array
  
    await newReview.save(); // Save the new review to the database
    await listing.save(); // Save the updated listing to the database
    req.flash("success", "Review Created"); // Flash a success message
    res.redirect(`/listings/${listing._id}`); // Redirect to the listing's page
};

// Controller method to delete a review
module.exports.destroyReview = async(req, res) => {
    let { id, reviewId } = req.params; // Extract the id and reviewId parameters from the request

    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } }); // Remove the reviewId from the listing's reviews array
    await Review.findByIdAndDelete(reviewId); // Delete the review by reviewId
    req.flash("success", "Review Deleted"); // Flash a success message
    res.redirect(`/listings/${id}`); // Redirect to the listing's page
};
