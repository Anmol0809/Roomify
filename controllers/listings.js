const Listing = require("../models/listing"); // Import the Listing model

// Controller method to display all listings
module.exports.index = async(req, res) => {
    const allListings = await Listing.find({}); // Fetch all listings from the database
    res.render("listings/index.ejs", { allListings }); // Render the index.ejs view with all listings
};

// Controller method to render the form for creating a new listing
module.exports.renderNewForm = (req, res) => {
    res.render("listings/newform.ejs"); // Render the newform.ejs view
};

// Controller method to show a specific listing
module.exports.showListing = async(req, res) => {
    let { id } = req.params; // Extract the id parameter from the request
    const listing = await Listing.findById(id)
        .populate({ path: "reviews", populate: { path: "author" } }) // Populate reviews and their authors
        .populate("owner"); // Populate the owner of the listing
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist"); // Flash an error message if listing not found
        res.redirect("/listings"); // Redirect to the listings page
    }
    res.render("listings/show.ejs", { listing }); // Render the show.ejs view with the listing
};

// Controller method to create a new listing
module.exports.createListing = async(req, res, next) => {
    let url = req.file.path; // Get the file path from the uploaded file
    let filename = req.file.filename; // Get the filename from the uploaded file
    const newlisting = new Listing(req.body.listing); // Create a new listing with the request body data
    newlisting.owner = req.user._id; // Set the owner of the listing to the current user
    newlisting.image = { url, filename }; // Set the image URL and filename
    await newlisting.save(); // Save the new listing to the database
    req.flash("success", "New list created"); // Flash a success message
    res.redirect("/listings"); // Redirect to the listings page
};

// Controller method to render the form for editing a listing
module.exports.renderEditForm = async(req, res) => {
    let { id } = req.params; // Extract the id parameter from the request
    const listing = await Listing.findById(id); // Find the listing by id
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist"); // Flash an error message if listing not found
        res.redirect("/listings"); // Redirect to the listings page
    }
    let originalImageUrl = listing.image.url; // Get the original image URL
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_300,w_250"); // Modify the image URL for resizing
    res.render("listings/edit.ejs", { listing, originalImageUrl }); // Render the edit.ejs view with the listing and modified image URL
};

// Controller method to update a listing
module.exports.updateListing = async(req, res) => {
    let { id } = req.params; // Extract the id parameter from the request
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing }); // Find and update the listing by id
    if (typeof req.file !== "undefined") { // Check if a new file is uploaded
        let url = req.file.path; // Get the file path from the uploaded file
        let filename = req.file.filename; // Get the filename from the uploaded file
        listing.image = { url, filename }; // Update the image URL and filename
        await listing.save(); // Save the updated listing to the database
    }
    req.flash("success", "List updated"); // Flash a success message
    res.redirect(`/listings/${id}`); // Redirect to the updated listing's page
};

// Controller method to delete a listing
module.exports.destroyListing = async(req, res) => {
    let { id } = req.params; // Extract the id parameter from the request
    let deleted = await Listing.findByIdAndDelete(id); // Find and delete the listing by id
    console.log(deleted); // Log the deleted listing
    req.flash("success", "List Deleted"); // Flash a success message
    res.redirect("/listings"); // Redirect to the listings page
};
