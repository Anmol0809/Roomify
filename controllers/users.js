const User = require("../models/user"); // Import the User model

// Controller method to render the signup form
module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs"); // Render the signup.ejs view
};

// Controller method to handle user signup
module.exports.signup = async(req, res) => {
    try {
        let { username, email, password } = req.body; // Extract username, email, and password from the request body
        const newUser = new User({ email, username }); // Create a new User instance with email and username
        const registeredUser = await User.register(newUser, password); // Register the new user with the provided password
        // console.log(registeredUser);
        req.login(registeredUser, (err) => { // Log the user in after registration
            if (err) {
                return next(err); // Handle login error
            }
            req.flash("success", "Welcome to Romify!"); // Flash a success message
            res.redirect("/listings"); // Redirect to the listings page
        });
    } catch (e) {
        req.flash("error", e.message); // Flash an error message if registration fails
        res.redirect("/signup"); // Redirect to the signup page
    }
};

// Controller method to render the login form
module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs"); // Render the login.ejs view
};

// Controller method to handle user login
module.exports.login = async(req, res) => { // Code to execute after successful login
    req.flash("success", "Welcome back to Romify"); // Flash a success message
    let redirectUrl = res.locals.redirectUrl || "/listings"; // Determine the redirect URL after login
    // console.log("Redirecting to:", redirectUrl);
    res.redirect(redirectUrl); // Redirect to the determined URL
};

// Controller method to handle user logout
module.exports.logout = (req, res, next) => {
    req.logout((err) => { // Log the user out
        if (err) {
            return next(err); // Handle logout error
        }
        req.flash("success", "Logged out"); // Flash a success message
        res.redirect("/listings"); // Redirect to the listings page
    });
};
