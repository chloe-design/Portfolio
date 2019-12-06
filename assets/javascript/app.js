var firebaseConfig = {
    apiKey: "AIzaSyBv9VXG9-X0K1Du0NuktqSLGCEMCOsS2yo",
    authDomain: "portfolio-2b0f1.firebaseapp.com",
    databaseURL: "https://portfolio-2b0f1.firebaseio.com",
    projectId: "portfolio-2b0f1",
    storageBucket: "portfolio-2b0f1.appspot.com",
    messagingSenderId: "821375315125",
    appId: "1:821375315125:web:b4ce458c248304e003a2fc",
    measurementId: "G-CX7L3LQSH5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// variable to reference the database
var database = firebase.database();

// initial values
var name = "";
var email = "";
var message = "";

// captures button click for submit button
$("#submit").on("click", function (event) {
    event.preventDefault();

    // grabs user input
    name = $("#contactname").val().trim();
    email = $("#email").val().trim();
    message = $("#contactMessage").val();

    // pushing information to database
    database.ref().push({
        name: name,
        email: email,
        message: message,
    });

    // empties form after user clicks submit
    $("#contactname").val("");
    $("#email").val("");
    $("#contactMessage").val("");

});

database.ref().on("child_added", function (snapshot) {

    console.log(snapshot.val());

}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});

//***** Slick Carousel *****

$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});  