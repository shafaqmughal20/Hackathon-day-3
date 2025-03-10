"use client";

import HeroLinks from "@/components/HeroLinks";
import Nav2 from "@/components/Nav2";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Checkout = () => {
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(false);

  return (
    <div>
      <Nav2 />
      <HeroLinks heading="Checkout Page" url1="Home" url2="Checkout" />

      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4 md:px-10">
        <div className="max-w-6xl w-full bg-white rounded-lg flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="w-full md:w-2/3 p-6 md:p-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#333333] Headings">
              Shipping Address
            </h2>

            <form className="grid grid-cols-1 text-[#333333] md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="firstName">Fisrt name</label>
                <input
                  id="firstName"
                  type="text"
                  className="p-3 border focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="lastName">Last name</label>
                <input
                  id="lastName"
                  type="text"
                  className="p-3 border focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  className="p-3 border focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="tel">Phone</label>
                <input
                  id="tel"
                  type="tel"
                  className="p-3 border focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="company">Company</label>
              <input
              id="company"
                type="text"
                
                className="p-3 border focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              </div>

              <div className="flex flex-col">
                <p>Choose country</p>
              <select className="p-3 border focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>Choose country</option>
                <option>USA</option>
                <option>Pakistan</option>
              </select>
              </div>


              <div className="flex flex-col">
                <p>City</p>
              <select className="p-3 border focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>Choose city</option>
                <option>Karachi</option>
                <option>Lahore</option>
              </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="zip">Zip code</label>
              <input
              id="zip"
                type="text"
                
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              </div>


             

              <input
                type="text"
                placeholder="Address 1"
                className="col-span-1 md:col-span-2 p-3 border focus:outline-none focus:ring-2 focus:ring-orange-500"
              />


              <input
                type="text"
                placeholder="Address 2"
                className="col-span-1 md:col-span-2 p-3 border focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

             
            </form>

            <h1 className="text-[#333333] font-bold mt-4">Billing Address</h1>

            <div className=" flex items-center text-[#333333]">
              
              <input
                type="checkbox"
                id="billingSameAsShipping"
                checked={billingSameAsShipping}
                onChange={() =>
                  setBillingSameAsShipping(!billingSameAsShipping)
                }
                className="mr-2"
              />
              <label htmlFor="billingSameAsShipping" className="text-sm">
                Same as shipping address
              </label>
            </div>

            <div className="mt-6 grid md:grid-cols-2 grid-cols-1 gap-4  text-[#333333]">
              <button className="px-4 py-3 border hover:text-white hover:bg-textp text-sm">
                <Link href={"/shopingCart"}>
                Back to cart
                </Link>
              </button>
              <button className="px-4 py-3 bg-textp text-black  text-sm hover:bg-orange-600">
                Proceed to shipping
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/3 bg-gray-50 p-6 text-[#333333] md:p-10 border-t md:border-t-0 md:border-l">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex  items-center space-x-4">
                    <Image
                      src={"/check.png"}
                      alt="Chicken Tikka Kabab"
                      height={100}
                      width={100}
                      className="w-16 h-16 rounded-md object-cover"
                    />
                    <div>
                      <h3 className="text-sm font-medium">
                        Chicken Tikka Kabab
                      </h3>
                      <p className="text-xs text-gray-500">150 gm net</p>
                      <p className="text-xs text-gray-500">$50</p>
                    </div>
                  </div>
                  <p className="text-sm font-medium">$50</p>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Sub-total</span>
                <span>$130</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Discount</span>
                <span>25%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tax</span>
                <span>$54.76</span>
              </div>
            </div>

            <div className="mt-4 border-t pt-4 flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>$432.65</span>
            </div>

            <button className="mt-6 w-full bg-textp text-white py-3 rounded-md hover:bg-orange-600">
              Place an order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

// "use client"

// import { createShipment } from "@/api/shipengine";
// import { useState } from "react";

// const Checkout = () => {
//   const [billingSameAsShipping, setBillingSameAsShipping] = useState(false);
//   const [shippingDetails, setShippingDetails] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     address1: "",
//     address2: "",
//     city: "",
//     country: "",
//     zip: "",
//   });

//   const handleInputChange = (e:any) => {
//     const { id, value } = e.target;
//     setShippingDetails((prev) => ({ ...prev, [id]: value }));
//   };

//   const handlePlaceOrder = async () => {
//     const shipmentDetails = {
//       ship_to: {
//         name: `${shippingDetails.firstName} ${shippingDetails.lastName}`,
//         address_line1: shippingDetails.address1,
//         address_line2: shippingDetails.address2,
//         city_locality: shippingDetails.city,
//         state_province: "CA", // Replace with actual state
//         postal_code: shippingDetails.zip,
//         country_code: shippingDetails.country,
//       },
//       ship_from: {
//         name: "Your Store Name",
//         address_line1: "Your Address",
//         city_locality: "Your City",
//         state_province: "Your State",
//         postal_code: "Your Zip",
//         country_code: "US",
//       },
//       packages: [
//         {
//           weight: {
//             value: 5,
//             unit: "pound",
//           },
//         },
//       ],
//     };

//     try {
//       const shipment = await createShipment(shipmentDetails);
//       console.log("Shipment created:", shipment);
//       alert("Order placed successfully!");
//     } catch (error) {
//       console.error("Error placing order:", error);
//       alert("Failed to place the order. Please try again.");
//     }
//   };

//   return (
//     <div>
//       {/* ...existing code... */}
//       <button
//         className="mt-6 w-full bg-textp text-white py-3 rounded-md hover:bg-orange-600"
//         onClick={handlePlaceOrder}
//       >
//         Place an order
//       </button>
//     </div>
//   );
// };

// export default Checkout;
