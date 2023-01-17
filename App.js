import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const Title = () => (
  <img
    className="logo"
    alt="logo"
    src="https://lh3.googleusercontent.com/p/AF1QipMf9w4RomHXrUkQKvrxtPdjp3SLadP05HDzXlH2=w1080-h608-p-no-v0"
  />
);

// React component with different ways of adding a React element, component etc
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const kfc = {
  name: "KFC",
  image:
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb",
  cusines: ["Burgers, American"],
  rating: "4.2",
};

// Config Driven UI
const restaurantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "146970",
      name: "A2B - Adyar Ananda Bhavan",
      uuid: "26d67136-3396-4f6c-b151-bad7611deeb1",
      city: "8",
      area: "Tambaram",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "nmdyq2c0wtwxagv6psv2",
      cuisines: ["South Indian", "North Indian", "Sweets", "Chinese"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 27,
      minDeliveryTime: 27,
      maxDeliveryTime: 27,
      slaString: "27 MINS",
      lastMileTravel: 3.799999952316284,
      slugs: {
        restaurant: "a2b-selayur-tambaram",
        city: "chennai",
      },
      cityState: "8",
      address: "NO 172 & 173, VALACHERRY MAIN ROAD SELAIYUR,CHENNAI- 600073",
      locality: "selaiyur",
      parentId: 22,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "20% off",
        shortDescriptionList: [
          {
            meta: "20% off | Use MISSEDYOU",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 | Use code MISSEDYOU",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "20% OFF",
        shortDescriptionList: [
          {
            meta: "Use MISSEDYOU",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 | Use code MISSEDYOU",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3600,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3600,
        message: "",
        title: "Delivery Charge",
        amount: "3600",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5730506~p=1~eid=00000185-ba3c-179e-43be-cd7d006c0173",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "146970",
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        lastMileTravel: 3.799999952316284,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.4",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "30001",
      name: "KFC",
      uuid: "6eb104d2-ca19-45ae-acee-6e3902004258",
      city: "8",
      area: "Selaiyur",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 23,
      minDeliveryTime: 23,
      maxDeliveryTime: 23,
      slaString: "23 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "kfc-camp-road-velachery",
        city: "chennai",
      },
      cityState: "8",
      address: "No: 208 A, Camp road junction, Chennai 600073",
      locality: "Camp Road",
      parentId: 547,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "20% off",
        shortDescriptionList: [
          {
            meta: "20% off | Use SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 | Use code SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "20% OFF",
        shortDescriptionList: [
          {
            meta: "Use SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 | Use code SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3600,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3600,
        message: "",
        title: "Delivery Charge",
        amount: "3600",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "30001",
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "126915",
      name: "Zaitoon",
      uuid: "a2d2b695-45d6-4013-b714-8a2cc574f06d",
      city: "8",
      area: "Selaiyur",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "ig1evmqqvbpfvlas6kih",
      cuisines: [
        "Arabian",
        "Biryani",
        "Chinese",
        "Indian",
        "Kebabs",
        "Mughlai",
        "Juices",
      ],
      tags: [],
      costForTwo: 45000,
      costForTwoString: "₹450 FOR TWO",
      deliveryTime: 33,
      minDeliveryTime: 33,
      maxDeliveryTime: 33,
      slaString: "33 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "zaitoon-selaiyur-tambaram",
        city: "chennai",
      },
      cityState: "8",
      address: "4A,Camp road, Selaiyur, Tambaram",
      locality: "Camp Road",
      parentId: 4555,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "40% off",
        shortDescriptionList: [
          {
            meta: "40% off | Use MISSEDYOU",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code MISSEDYOU",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "40% OFF",
        shortDescriptionList: [
          {
            meta: "Use MISSEDYOU",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code MISSEDYOU",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "EXCLUSIVE",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3600,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3600,
        message: "",
        title: "Delivery Charge",
        amount: "3600",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "126915",
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.3",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "413129",
      name: "SREE GUPTA BHAVAN",
      uuid: "986b5e54-78c6-49d6-bf0d-58e483a4b62b",
      city: "8",
      area: "Gowrivakkam",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "esajj8slzueyfw7eam6l",
      cuisines: ["Snacks", "Sweets"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 19,
      minDeliveryTime: 19,
      maxDeliveryTime: 19,
      slaString: "19 MINS",
      lastMileTravel: 0.800000011920929,
      slugs: {
        restaurant: "sree-gupta-bhavan-tambaram-tambaram-2",
        city: "chennai",
      },
      cityState: "8",
      address:
        "No.175, Velachery Main Road, Gowrivakkam Village, St, Thoms Mount Block,, Kancheepuram Chennai Tamil Nadu 600073",
      locality: "Kancheepuram",
      parentId: 2521,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "20% off",
        shortDescriptionList: [
          {
            meta: "20% off | Use JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹100 on orders above ₹479 | Use code JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "20% OFF",
        shortDescriptionList: [
          {
            meta: "Use JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹100 on orders above ₹479 | Use code JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2900,
        message: "",
        title: "Delivery Charge",
        amount: "2900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5685945~p=7~eid=00000185-ba3c-179e-43be-cd7f006c0733",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "413129",
        deliveryTime: 19,
        minDeliveryTime: 19,
        maxDeliveryTime: 19,
        lastMileTravel: 0.800000011920929,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.3",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "414800",
      name: "Pizza Hut",
      uuid: "21a83d38-b6ca-4421-94cb-d9433be0dcff",
      city: "8",
      area: "Rajakipakkam",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "vtlw1xacmo2unc1k4o9c",
      cuisines: ["Pizzas"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 28,
      minDeliveryTime: 28,
      maxDeliveryTime: 28,
      slaString: "28 MINS",
      lastMileTravel: 2.0999999046325684,
      slugs: {
        restaurant: "pizza-hut-rajakipakkam-tambaram",
        city: "chennai",
      },
      cityState: "8",
      address:
        "Shop No: 257, Velachery Road, Sembakkam, Rajakipakkam, Chennai Tamil Nadu 600073",
      locality: "Velachery Road",
      parentId: 721,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "40% off",
        shortDescriptionList: [
          {
            meta: "40% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "40% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2900,
        message: "",
        title: "Delivery Charge",
        amount: "2900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "414800",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        lastMileTravel: 2.0999999046325684,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.9",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "17694",
      name: "Shri Balaajee Bhavan",
      uuid: "0d82782b-1955-472b-a583-574b96d8a975",
      city: "8",
      area: "Chromepet",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "bzojun8dqgdjyoojmszv",
      cuisines: ["North Indian", "Chinese", "South Indian", "Tandoor"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 34,
      minDeliveryTime: 34,
      maxDeliveryTime: 34,
      slaString: "34 MINS",
      lastMileTravel: 6.699999809265137,
      slugs: {
        restaurant: "shri-balaajee-bhavan-gst-road-chromepet",
        city: "chennai",
      },
      cityState: "8",
      address:
        "GST Road, Near the Pallavaram, Thoraipakam Road Over Bridge, Chromepet, Chennai",
      locality: "GST Road",
      parentId: 3006,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 5800,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 5800,
        message: "",
        title: "Delivery Charge",
        amount: "5800",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "17694",
        deliveryTime: 34,
        minDeliveryTime: 34,
        maxDeliveryTime: 34,
        lastMileTravel: 6.699999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.5",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
];

const RestaurantCard = ({name, cloudinaryImageId, cuisines,lastMileTravelString} ) => {
  //  const {name, cloudinaryImageId, cuisines,lastMileTravelString} = restaurant.data;
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} />
            <h2> {name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>Distance {lastMileTravelString} </h4>
        </div>
    );
};

const Body = () => {
  return (
    <div className="restaurant-list">
        {
            restaurantList.map((restaurant) =>{
                return ( 
                    <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
                );
            })        
        }
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};
/**
 Layout of our APP
    Header 
        - Logo
        - NavBar (listitems)
        - Card
    Body
        - SearchBar
        - RestaurantList
            - RestaurantCard (many cards)
                -Image
                -Name
                -Rating
                -Cusines
    Footer
        -links
        -Copyright
**/
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
