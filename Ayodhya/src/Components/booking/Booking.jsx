import React, { useState } from 'react';
import { useAuth } from '../../AuthContext';

import Bookingcard from './Bookingcard';
import LoginForm from '../LoginForm';


const ayodhyaAccommodations = {
    places: [
      {
        type: "Hotel",
        name: "The Ramayana Hotel",
        image:"https://q-xx.bstatic.com/xdata/images/hotel/max500/372757624.jpg?k=42cca0eca2a3fddf8a6749de6f3e3cfefedee8586c90cfee373c1788110ffb74&o=" ,
        description:
          "Offering a comfortable stay near Ayodhya's center, The Ramayana Hotel features well-appointed rooms, a multi-cuisine restaurant, and a peaceful ambiance.",
        price: 1500, // Nightly rate estimate
        amenities: ["Wi-Fi", "Restaurant", "Laundry service"],
        facilities:[" Swimming-pool"],
        Games:["Indoor-Game",]
       
      },
      {
        type: "Hotel",
        name: "Royal Heritage Hotel & Resort",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/485313847.jpg?k=2be06797769c35c5e94bb332195bb9e0f133d92f860c5d65d6a7e04676117c44&o=&hp=1",
        description:
          "This luxurious resort boasts spacious rooms, a swimming pool, a spa, a gym, and extensive event facilities, perfect for a relaxing or celebratory stay.",
        price: 3000, // Nightly rate estimate
        amenities: ["Wi-Fi", "Restaurant", "Spa", "Gym" ],
     
        facilities:["Swimming-pool"],
        Games:["Indoor-Game",]
      },
      {
        type: "Hotel",
        name: "Cygnett Collection KK Hotel",
        image: "https://traveltradejournal.com/wp-content/uploads/2023/12/facade-640x482.jpg",
        description:
          "A modern hotel providing a blend of comfort and style, Cygnett Collection offers contemporary rooms, an on-site restaurant, and business amenities.",
        price: 2200, // Nightly rate estimate
        amenities: ["Wi-Fi", "Restaurant", "Business center"],
   
        facilities:["Swimming-pool"],
        Games:["Indoor-Game",]
      },
      {
        type: "Hotel (Unique Experience)",
        name: "Tent City Ayodhya (Saryu or Brahma Kund)",
        image: "https://www.tentcityayodhya.com/brahmakund/images/gallry04.jpg",
        description:
          "For a unique experience, consider Tent City. Choose between locations by the Saryu River or Brahma Kund. Enjoy nature while still having access to essential amenities.",
        price: 1000, // Nightly rate estimate
        amenities: ["Restaurant", "Basic amenities (may vary by location)"],
     
        facilities:["Swimming-pool"],
        Games:["Indoor-Game",]
      },
      {
        type: "Hotel",
        name: "Park Inn by Radisson Ayodhya",
        image: "https://media.radissonhotels.net/image/park-inn-by-radisson-ayodhya/exterior/16256-159277-f77199693_4k.jpg?impolicy=CustomCrop&cwidth=800&cheight=610",
        description:
          "This globally recognized hotel brand offers a blend of international standards and local touches. Enjoy modern amenities and a convenient location close to the city center.",
        price: 2500, // Nightly rate estimate
        amenities: ["Wi-Fi", "Restaurant, Bar, Fitness center"],
       
        
        facilities:["Swimming-pool"],
        Games:["Indoor-Game",]
      },
      {
        type: "Hotel (Heritage)",
        name: "Kamay The Kohinoor Palace",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/213800421.jpg?k=eef79452470fdcd802a98b423b8cfd0a0157e96920519f2ef1951e8aa3df876e&o=&hp=1",
        description:
          "This heritage hotel offers a unique stay in a beautifully restored palace. Experience a blend of old-world charm and modern comforts.",
        price: 2800, // Nightly rate estimate
        amenities: ["Wi-Fi", "Restaurant", "Spa"],

        facilities:["Swimming-pool"],
        Games:["Indoor-Game",]
      },
      {
        type: "Hotel",
        name: "Hotel Samiksha Inn",
        image:"https://cf.bstatic.com/xdata/images/hotel/square600/533241626.webp?k=a142a11861f7ea049f8d84f3f90982ac270543a074ac0127d41cb0165ff3cff6&o=" ,
        description:
          "Set in Ayodhya and within 1.4 km of Ram Mandir, Hotel Samiksha Inn features a terrace, non-smoking rooms, and free WiFi throughout the property. The hotel has family rooms.",
        price: 1500, // Nightly rate estimate
        amenities: ["Wi-Fi", "Restaurant", "Laundry service"],
        facilities:[" Swimming-pool"],
        Games:["Indoor-Game",]
       
      },
      {
        type: "Hotel",
        name: "Hotel Shree Venktesh Nilayam ",
        image: "https://cf.bstatic.com/xdata/images/hotel/square600/526109025.webp?k=d453d1cccc4cc63ea4f883e42a6a7318ebf6ce304cf258a322ba57cbab75aeff&o=",
        description:
          "Hotel Shree Venktesh Nilayam 300 m from Ram Janam Bhumi is offering accommodation in Ayodhya. This 4-star hotel offers room service, a 24-hour front desk and free WiFi.",
        price: 3000, // Nightly rate estimate
        amenities: ["Wi-Fi", "Restaurant", "Spa", "Gym" ],
     
        facilities:["Swimming-pool"],
        Games:["Indoor-Game",]
      },

    ]
}
        
export default function Booking() {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);
  return (
    isLoggedIn?
  <>
        <div className='Card_div1'>
    <div className='Card_div2'>
    <div >
      {/* Map over the places array and render Bookingcard for each accommodation */}
      {ayodhyaAccommodations.places.map((accommodation, index) => (
        <Bookingcard key={index} accommodation={accommodation} />
        ))}
    </div>
    </div>
    </div>
        </>:
        <LoginForm />
  );
};

