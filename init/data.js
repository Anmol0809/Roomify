const sampleListings = [
    {
        title: "Mountain Retreat",
        Description: "Secluded cabin in the woods",
        image:{
            filename:"listingimage",
            url:"https://th.bing.com/th/id/OIP.Xz2H4yR59ei01Pcg1DUlEgHaE7?w=297&h=197&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        },

        price: 1500,
        location: "Manali, HP",
        country: "INDIA",
    },
    {
        title: "Beachside Bungalow",
        Description: "Sunny escape with ocean views",
        image:{
            filename:"listingimage",
            url:"https://th.bing.com/th/id/OIP.4Uu8_7lA1CDHkgMj0jFBswHaE7?w=319&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        },
        price: 2000,
        location: "Goa",
        country: "INDIA",
    },
    {
        title: "Urban Loft",
        Description: "Modern apartment in the city center",
        image:{
            filename:"listingimage",
            url:"https://th.bing.com/th/id/OIP.tBPkQA6r8sGRmCpBjPveewHaE7?w=283&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        },
        price: 1800,
        location: "Mumbai, MH",
        country: "INDIA",
    },
    {
        title: "Desert Oasis",
        Description: "Luxurious villa with private pool",
        image:{
            filename:"listingimage",
            url:"https://th.bing.com/th/id/OIP.cjrTcySvCo6ZRAgIS2_pXQHaFi?w=202&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        },
        price: 2500,
        location: "Jaisalmer, RJ",
        country: "INDIA",
    },
    {
        title: "Countryside Cottage",
        Description: "Charming cottage with garden",
        image:{
            filename:"listingimage",
            url:"http://ts4.mm.bing.net/th?id=OIP.CAn46Ri1tBkGhGUfRybpwAAAAA&pid=15.1",
        },
        price: 1300,
        location: "Shimla, HP",
        country: "INDIA",
    },
    {
        title: "Coastal Villa",
        Description: "Spacious villa with ocean views",
        image:{
            filename:"listingimage",
            url:"https://th.bing.com/th/id/OIP.zno5CrqtyLzuSnVA1EpX_wHaE8?w=242&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        },        
        price: 2200,
        location: "Malibu, CA",
        country: "USA"
    },
    {
        title: "City Apartment",
        Description: "Modern apartment in downtown",
        image:{
            filename:"listingimage",
            url:"https://th.bing.com/th/id/OIP.-OxrgGfGYgDTtLGrr8RnGAHaE7?w=242&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        },        
        price: 1800,
        location: "New York, NY",
        country: "USA"
    },
    {
        title: "Lake House",
        Description: "Cozy house by the lake",
        image:{
            filename:"listingimage",
            url:"https://th.bing.com/th/id/OIP.tk_dPaC-d4ooHPWO_Tl5fQHaEt?w=239&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        },        
        price: 1400,
        location: "Lake Tahoe, NV",
        country: "USA"
    },
    {
        title: "Mountain Cabin",
        Description: "Rustic cabin in the mountains",
        image:{
            filename:"listingimage",
            url:"https://th.bing.com/th/id/OIP.OlqvOElpfL9IhqMlwT-lYwHaE0?w=292&h=190&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        },        
        price: 1600,
        location: "Aspen, CO",
        country: "USA"
    },
    {
        title: "Desert Retreat",
        Description: "Luxurious house in the desert",
        image:{
            filename:"listingimage",
            url:"https://th.bing.com/th/id/OIP.9BRIBuF0kQVxOkpYtAaGugHaEc?w=269&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        },        
        price: 2300,
        location: "Phoenix, AZ",
        country: "USA"
    },
    {
        title: "Forest Lodge",
        Description: "Lodge surrounded by forest",
        image:{
            filename:"listingimage",
            url:"https://th.bing.com/th/id/OIP.1OXy7P1TBJiKJhFLtgK0NgHaEK?w=273&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        },        
        price: 1500,
        location: "Portland, OR",
        country: "USA"
    },
    {
        title: "Country Farmhouse",
        Description: "Charming farmhouse with fields",
        image:{
            filename:"listingimage",
            url:"https://th.bing.com/th/id/OIP.FkG-I2OK_TyIcWDJH2s3IgHaEK?w=303&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        },        
        price: 1700,
        location: "Nashville, TN",
        country: "USA"
    },
    {
        title: "Riverside Cottage",
        Description: "Cottage by the river",
        image:{
            filename:"listingimage",
            url:"https://th.bing.com/th/id/OIP.jq8WXnlr6EqZ2mHgwMOAIwHaHa?w=232&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        },        
        price: 1200,
        location: "Salzburg",
        country: "AUSTRIA"
    },
    {
        title: "Urban Flat",
        Description: "Modern flat in the city",
        image:{
            filename:"listingimage",
            url:"https://th.bing.com/th/id/OIP.qiRVxiIM7JL28YAXQtYLpAHaDt?w=341&h=174&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        },        
        price: 1900,
        location: "Vienna",
        country: "AUSTRIA"
    },
    {
        title: "Beach House",
        Description: "House with private beach",
        image:{
            filename:"listingimage",
            url:"https://th.bing.com/th/id/OIP.piSHRiS2QFn9JvW1X_bKEQHaFj?w=309&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        },        
        price: 2400,
        location: "Gold Coast",
        country: "AUSTRALIA"
    },
    {
        title: "Suburban Home",
        Description: "Family home in the suburbs",
        image:{
            filename:"listingimage",
            url:"https://th.bing.com/th/id/OIP.a-0VVig5UXFVnx2Rrw24ygHaE8?w=265&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        },        
        price: 1700,
        location: "Sydney",
        country: "AUSTRALIA"
    },
    {
        title: "Countryside Villa",
        Description: "Villa in the countryside",
        image:{
            filename:"listingimage",
            url:"https://th.bing.com/th/id/OIP.KLFwaAadf7dyGZnJ16ksMQHaE8?w=263&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        },        
        price: 2100,
        location: "Tuscany",
        country: "ITALY"
    },
    {
        title: "Mountain Lodge",
        Description: "Lodge in the mountains",
        image:{
            filename:"listingimage",
            url:"https://th.bing.com/th/id/OIP.pwTBFGsMbiDm8Hc7WGk_7QHaE8?rs=1&pid=ImgDetMain",
        },        
        price: 2000,
        location: "Cortina d'Ampezzo",
        country: "ITALY"
    },
    {
        title: "Beachfront Condo",
        Description: "Condo with beach access",
        image:{
            filename:"listingimage",
            url:"https://th.bing.com/th/id/OIP.t-HUhACLo6cAINnNcrEfQQHaEW?w=305&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        },        
        price: 2200,
        location: "Nice",
        country: "FRANCE"
    },
    {
        title: "Chalet",
        Description: "Chalet in the Alps",
        image:{
            filename:"listingimage",
            url:"https://th.bing.com/th/id/OIP.jZlOLTPixGT43JTX4UEhfQHaED?w=243&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        },        
        price: 2300,
        location: "Chamonix",
        country: "FRANCE"
    },
    {
        title: "Penthouse",
        Description: "Luxury penthouse in the city",
        image:{
            filename:"listingimage",
            url:"https://th.bing.com/th/id/OIP.oDDm7_2mB99ny4hCnzIO5wHaDt?w=297&h=175&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        },        
        price: 2600,
        location: "Paris",
        country: "FRANCE"
    },
    {
        title: "Log Cabin",
        Description: "Cozy log cabin in the woods",
        image:{
            filename:"listingimage",
            url:"https://cdn.pixabay.com/photo/2022/05/03/12/33/cabin-7171636_1280.jpg",
        },        
        price: 1400,
        location: "Whistler",
        country: "CANADA"
    },
    {
        title: "Ski Chalet",
        Description: "Chalet near ski slopes",
        image:{
            filename:"listingimage",
            url:"https://th.bing.com/th/id/OIP.ZH9odfKz_MLQEeEvng9HxAHaFj?w=232&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        },        
        price: 2400,
        location: "Banff",
        country: "CANADA"
    },
    {
        title: "Lakefront Cottage",
        Description: "Cottage with lake views",
        image:{
            filename:"listingimage",
            url:"https://th.bing.com/th/id/OIP.kD3Wy7hYVaBPFdvxg_wpXQHaDt?w=296&h=174&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        },        
        price: 1500,
        location: "Muskoka",
        country: "CANADA"
    },
    {
        title: "Urban Loft",
        Description: "Loft in the city center",
        image:{
            filename:"listingimage",
            url:"https://unsplash.com/photos/black-leather-couch-with-gray-throw-pillwo-s95oB2n9jng",
        },        
        price: 1700,
        location: "Toronto",
        country: "CANADA"
    },
    {
        title: "Oceanfront Villa",
        Description: "Villa with ocean views",
        image:{
            filename:"listingimage",
            url:"https://th.bing.com/th/id/OIP.OQuyN7z9mUxjp7O1Z0uCJAHaE8?w=296&h=197&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        },        
        price: 2600,
        location: "Santorini",
        country: "GREECE"
    },
    {
        title: "Island Bungalow",
        Description: "Bungalow on a private island",
        image:{
            filename:"listingimage",
            url:"https://th.bing.com/th/id/OIP.yMKI32UBBQF3pQQ8xmf_JwHaE8?w=284&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        },        
        price: 2800,
        location: "Mykonos",
        country: "GREECE"
    },
    {
        title: "Forest Cabin",
        Description: "Cabin in the forest",
        image:{
            filename:"listingimage",
            url:"https://blog.weekendthrill.com/wp-content/uploads/2017/01/1-compressed.jpg",
        },        
        price: 1400,
        location: "Ranikhet, UK",
        country: "INDIA"
    },
    {
        title: "City Penthouse",
        Description: "Penthouse in the city",
        image:{
            filename:"listingimage",
            url:"https://th.bing.com/th/id/OIP.J9QqUM5zjP56FNV0Uda5vAHaEv?w=279&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        },        
        price: 2100,
        location: "Mumbai, MH",
        country: "INDIA"
    },
    {
        title: "Lakeside House",
        Description: "House by the lake",
        image:{
            filename:"listingimage",
            url:"https://www.addressguru.in/images/1852011000.jpg",
        },        
        price: 1500,
        location: "Nainital, UK",
        country: "INDIA"
    }
    
  ];
  
  module.exports = { data: sampleListings }; 