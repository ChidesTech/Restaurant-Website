const bcrypt = require("bcryptjs");

module.exports = data = {
    users:[
        {name: "Desmond",
         email: "dnwosu008@gmail.com",
         password: bcrypt.hashSync("des", 8),
         isAdmin: true,
         isSuper: true,

    },
        {name: "Des",
         email: "des@des.com",
         password: bcrypt.hashSync("des", 8),
         isAdmin: true,
         isSuper: false

    },
        {name: "Fr",
         email: "fr@fr.com",
         password: bcrypt.hashSync("fr", 8),
         isAdmin: false,
         isSuper: false

    },
    
        {name: "Be",
         email: "be@be.com",
         password: bcrypt.hashSync("be", 8),
         isAdmin: false,
         isSuper: true

    }
    ],
    categories:[
        {name: "yes"},
        {name: "no"},
        {name: "es"},
        {name: "gh"},
        {name: "ehhhnhs"},
        {name: "ejhks"},
],

    products:[
        {
         name: "Jollof Rice",
         category: "Rice",
         image: "/images/jollof.jpg",
         rating:0,
         numReviews:0,
         countInStock:10,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 1600
    },
        {
         name: "Egusi Soup",
         category: "Soup",
         image: "/images/egusi.jpg",
         rating:0,
         numReviews:0,
         countInStock:10,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 2000
    },
        {
         name: "Yam And Egg Sauce",
         category: "Tubers",
         image: "/images/yam.jpg",
         rating:0,
         numReviews:0,
         countInStock:10,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 1500
    },
        {
         name: "Yam Porridge",
         category: "Tubers",
         image: "/images/porridge.jpg",
         rating:0,
         numReviews:0,
         countInStock:10,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 1500
    },
        {
         name: "Smoothie",
         category: "Drinks",
         image: "/images/smoothie.jpg",
         rating:0,
         numReviews:0,
         countInStock:10,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 1500
    },
        {
         name: "Shawarma",
         category: "Snacks",
         image: "/images/shawarma.jpg",
         rating:0,
         numReviews:0,
         countInStock:0,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 1700
    },
        {
         name: "Fried Rice",
         category: "Rice",
         image: "/images/friedrice.jpg",
         rating:0,
         numReviews:0,
         countInStock:0,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 2100
    },
        {
         name: "Rice and Chicken Full Meal",
         category: "Full Meal",
         image: "/images/fullmeal.jpg",
         rating:0,
         numReviews:0,
         countInStock:0,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 34100
    },
        {
         name: "Brazillian Porridge",
         category: "Continental Cuisine",
         image: "/images/brazillianpottage.jpg",
         rating:0,
         numReviews:0,
         countInStock:0,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 41700
    },
        {
         name: "Chides Special",
         category: "Special Cuisine",
         image: "/images/continentalcuisine.jpg",
         rating:0,
         numReviews:0,
         countInStock:0,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 19100
    },
        {
         name: "Jollof",
         category: "Thai",
         image: "/images/jollof.jpg",
         rating:0,
         numReviews:0,
         countInStock:10,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 1600
    },
        {
         name: "Egusi Soup",
         category: "Soup",
         image: "/images/egusi.jpg",
         rating:0,
         numReviews:0,
         countInStock:10,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 2000
    },
        {
         name: "White Yam",
         category: "Chinese",
         image: "/images/yam.jpg",
         rating:0,
         numReviews:0,
         countInStock:10,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 1500
    },
        {
         name: "Pottage",
         category: "Brazillian",
         image: "/images/porridge.jpg",
         rating:0,
         numReviews:0,
         countInStock:10,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 1500
    },
      
        {
         name: "Shawarma",
         category: "Snacks",
         image: "/images/shawarma.jpg",
         rating:0,
         numReviews:0,
         countInStock:0,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 1700
    },
        {
         name: "Fried Rice",
         category: "Rice",
         image: "/images/friedrice.jpg",
         rating:0,
         numReviews:0,
         countInStock:0,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 2100
    },  {
        name: "Smoothie",
        category: "Drinks",
        image: "/images/smoothie.jpg",
        rating:0,
        numReviews:0,
        countInStock:10,
        description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
        price: 1500
   },
        {
         name: "Rice and Chicken Full Meal",
         category: "Full Meal",
         image: "/images/fullmeal.jpg",
         rating:0,
         numReviews:0,
         countInStock:0,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 34100
    },
        {
         name: "Brazillian Porridge",
         category: "Continental Cuisine",
         image: "/images/brazillianpottage.jpg",
         rating:0,
         numReviews:0,
         countInStock:0,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 41700
    },
        {
         name: "Chides Special",
         category: "Special Cuisine",
         image: "/images/continentalcuisine.jpg",
         rating:0,
         numReviews:0,
         countInStock:0,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 19100
    },
        {
         name: "Jollof Rice",
         category: "Rice",
         image: "/images/jollof.jpg",
         rating:0,
         numReviews:0,
         countInStock:10,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 1600
    },
        {
         name: "Egusi Soup",
         category: "Soup",
         image: "/images/egusi.jpg",
         rating:0,
         numReviews:0,
         countInStock:10,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 2000
    },
        {
         name: "Yam And Egg Sauce",
         category: "Tubers",
         image: "/images/yam.jpg",
         rating:0,
         numReviews:0,
         countInStock:10,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 1500
    },
        {
         name: "Yam Porridge",
         category: "Tubers",
         image: "/images/porridge.jpg",
         rating:0,
         numReviews:0,
         countInStock:10,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 1500
    },
        {
         name: "Smoothie",
         category: "Drinks",
         image: "/images/smoothie.jpg",
         rating:0,
         numReviews:0,
         countInStock:10,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 1500
    },
        {
         name: "Shawarma",
         category: "Snacks",
         image: "/images/shawarma.jpg",
         rating:0,
         numReviews:0,
         countInStock:0,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 1700
    },
        {
         name: "Fried Rice",
         category: "Rice",
         image: "/images/friedrice.jpg",
         rating:0,
         numReviews:0,
         countInStock:0,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 2100
    },
        {
         name: "Rice and Chicken Full Meal",
         category: "Full Meal",
         image: "/images/fullmeal.jpg",
         rating:0,
         numReviews:0,
         countInStock:0,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 34100
    },
        {
         name: "Brazillian Porridge",
         category: "Continental Cuisine",
         image: "/images/brazillianpottage.jpg",
         rating:0,
         numReviews:0,
         countInStock:0,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 41700
    },
        {
         name: "Chides Special",
         category: "Special Cuisine",
         image: "/images/continentalcuisine.jpg",
         rating:0,
         numReviews:0,
         countInStock:0,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 19100
    },
        {
         name: "Jollof",
         category: "Thai",
         image: "/images/jollof.jpg",
         rating:0,
         numReviews:0,
         countInStock:10,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 1600
    },
        {
         name: "Egusi Soup",
         category: "Soup",
         image: "/images/egusi.jpg",
         rating:0,
         numReviews:0,
         countInStock:10,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 2000
    },
        {
         name: "White Yam",
         category: "Chinese",
         image: "/images/yam.jpg",
         rating:0,
         numReviews:0,
         countInStock:10,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 1500
    },
        {
         name: "Pottage",
         category: "Brazillian",
         image: "/images/porridge.jpg",
         rating:0,
         numReviews:0,
         countInStock:10,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 1500
    },
      
        {
         name: "Shawarma",
         category: "Snacks",
         image: "/images/shawarma.jpg",
         rating:0,
         numReviews:0,
         countInStock:0,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 1700
    },
        {
         name: "Fried Rice",
         category: "Rice",
         image: "/images/friedrice.jpg",
         rating:0,
         numReviews:0,
         countInStock:0,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 2100
    },  {
        name: "Smoothie",
        category: "Drinks",
        image: "/images/smoothie.jpg",
        rating:0,
        numReviews:0,
        countInStock:10,
        description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
        price: 1500
   },
        {
         name: "Rice and Chicken Full Meal",
         category: "Full Meal",
         image: "/images/fullmeal.jpg",
         rating:0,
         numReviews:0,
         countInStock:0,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 34100
    },
        {
         name: "Brazillian Porridge",
         category: "Continental Cuisine",
         image: "/images/brazillianpottage.jpg",
         rating:0,
         numReviews:0,
         countInStock:0,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 41700
    },
        {
         name: "Chides Special",
         category: "Special Cuisine",
         image: "/images/continentalcuisine.jpg",
         rating:0,
         numReviews:0,
         countInStock:0,
         description:"Lorem ipsum sit dolor nwet  cologirum gity unibulasti",
         price: 19100
    },
    ]
}




