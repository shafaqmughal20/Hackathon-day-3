// // "use client"

// // import { useState, FormEvent } from "react";

// // export default function Home() {
// //   const [formData, setFormData] = useState({
// //     fromAddress: { name: "", address_line1: "", city_locality: "", postal_code: "", country_code: "US" },
// //     toAddress: { name: "", address_line1: "", city_locality: "", postal_code: "", country_code: "US" },
// //     packageDetails: { weight: { value: 1, unit: "ounce" } },
// //   });

// //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();

// //     const response = await fetch("/api/shipping", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify(formData),
// //     });

// //     const data = await response.json();
// //     if (data.success) {
// //       alert("Shipment Created: " + JSON.stringify(data.shipment));
// //     } else {
// //       alert("Error: " + data.error);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <h1>ShipEngine Integration</h1>
// //       {/* From Address */}
// //       <input type="text" placeholder="From Name" onChange={(e) => setFormData({ ...formData, fromAddress: { ...formData.fromAddress, name: e.target.value } })} />
// //       <input type="text" placeholder="From Address Line 1" onChange={(e) => setFormData({ ...formData, fromAddress: { ...formData.fromAddress, address_line1: e.target.value } })} />
// //       <input type="text" placeholder="From City" onChange={(e) => setFormData({ ...formData, fromAddress: { ...formData.fromAddress, city_locality: e.target.value } })} />
// //       <input type="text" placeholder="From Postal Code" onChange={(e) => setFormData({ ...formData, fromAddress: { ...formData.fromAddress, postal_code: e.target.value } })} />

// //       {/* To Address */}
// //       <input type="text" placeholder="To Name" onChange={(e) => setFormData({ ...formData, toAddress: { ...formData.toAddress, name: e.target.value } })} />
// //       <input type="text" placeholder="To Address Line 1" onChange={(e) => setFormData({ ...formData, toAddress: { ...formData.toAddress, address_line1: e.target.value } })} />
// //       <input type="text" placeholder="To City" onChange={(e) => setFormData({ ...formData, toAddress: { ...formData.toAddress, city_locality: e.target.value } })} />
// //       <input type="text" placeholder="To Postal Code" onChange={(e) => setFormData({ ...formData, toAddress: { ...formData.toAddress, postal_code: e.target.value } })} />

// //       {/* Package Details */}
// //       <input 
// //         type="number" 
// //         placeholder="Weight (ounce)" 
// //         onChange={(e) => setFormData({ 
// //           ...formData, 
// //           packageDetails: { 
// //             ...formData.packageDetails, 
// //             weight: { value: parseFloat(e.target.value), unit: "ounce" } 
// //           } 
// //         })} 
// //       />

// //       <button type="submit">Create Shipment</button>
// //     </form>
// //   );
// // }


// // "use client";

// // import { useState } from "react";

// // export default function Home() {
// //   const [formData, setFormData] = useState({
// //     fromAddress: { name: "", address_line1: "", city_locality: "", postal_code: "", country_code: "US" },
// //     toAddress: { name: "", address_line1: "", city_locality: "", postal_code: "", country_code: "US" },
// //     packageDetails: { weight: { value: 1, unit: "ounce" } },
// //   });

// //   const handleSubmit = async (e:any) => {
// //     e.preventDefault();

// //     const response = await fetch("/api/shipping", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify(formData),
// //     });

// //     const data = await response.json();
// //     if (data.success) {
// //       alert("Shipment Created: " + JSON.stringify(data.shipment));
// //     } else {
// //       alert("Error: " + data.error);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
// //       <form
// //         onSubmit={handleSubmit}
// //         className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full space-y-6"
// //       >
// //         <h1 className="text-2xl font-bold text-gray-700 text-center">
// //           ShipEngine Integration
// //         </h1>

// //         <div className="space-y-4">
// //           <h2 className="text-lg font-semibold text-gray-600">From Address</h2>
// //           <input
// //             type="text"
// //             placeholder="From Name"
// //             className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
// //             onChange={(e) =>
// //               setFormData({ ...formData, fromAddress: { ...formData.fromAddress, name: e.target.value } })
// //             }
// //           />
// //           <input
// //             type="text"
// //             placeholder="From Address Line 1"
// //             className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
// //             onChange={(e) =>
// //               setFormData({ ...formData, fromAddress: { ...formData.fromAddress, address_line1: e.target.value } })
// //             }
// //           />
// //           <input
// //             type="text"
// //             placeholder="From City"
// //             className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
// //             onChange={(e) =>
// //               setFormData({ ...formData, fromAddress: { ...formData.fromAddress, city_locality: e.target.value } })
// //             }
// //           />
// //           <input
// //             type="text"
// //             placeholder="From Postal Code"
// //             className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
// //             onChange={(e) =>
// //               setFormData({ ...formData, fromAddress: { ...formData.fromAddress, postal_code: e.target.value } })
// //             }
// //           />
// //         </div>

// //         <div className="space-y-4">
// //           <h2 className="text-lg font-semibold text-gray-600">To Address</h2>
// //           <input
// //             type="text"
// //             placeholder="To Name"
// //             className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
// //             onChange={(e) =>
// //               setFormData({ ...formData, toAddress: { ...formData.toAddress, name: e.target.value } })
// //             }
// //           />
// //           <input
// //             type="text"
// //             placeholder="To Address Line 1"
// //             className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
// //             onChange={(e) =>
// //               setFormData({ ...formData, toAddress: { ...formData.toAddress, address_line1: e.target.value } })
// //             }
// //           />
// //           <input
// //             type="text"
// //             placeholder="To City"
// //             className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
// //             onChange={(e) =>
// //               setFormData({ ...formData, toAddress: { ...formData.toAddress, city_locality: e.target.value } })
// //             }
// //           />
// //           <input
// //             type="text"
// //             placeholder="To Postal Code"
// //             className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
// //             onChange={(e) =>
// //               setFormData({ ...formData, toAddress: { ...formData.toAddress, postal_code: e.target.value } })
// //             }
// //           />
// //         </div>

// //         <div className="space-y-4">
// //           <h2 className="text-lg font-semibold text-gray-600">Package Details</h2>
// //           <input
// //             type="number"
// //             placeholder="Weight (ounce)"
// //             className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
// //             onChange={(e) =>
// //               setFormData({
// //                 ...formData,
// //                 packageDetails: { ...formData.packageDetails, weight: { value: parseFloat(e.target.value), unit: "ounce" } },
// //               })
// //             }
// //           />
// //         </div>

// //         <button
// //           type="submit"
// //           className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
// //         >
// //           Create Shipment
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }


// "use client";

// import { useState } from "react";

// export default function Home() {
//   const [formData, setFormData] = useState({
//     fromAddress: { name: "", address_line1: "", city_locality: "", postal_code: "", country_code: "US" },
//     toAddress: { name: "", address_line1: "", city_locality: "", postal_code: "", country_code: "US" },
//     packageDetails: { weight: { value: 1, unit: "ounce" } },
//   });

//   const handleSubmit = async (e:any) => {
//     e.preventDefault();

//     const response = await fetch("/api/shipping", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     const data = await response.json();
//     if (data.success) {
//       alert("Shipment Created: " + JSON.stringify(data.shipment));
//     } else {
//       alert("Error: " + data.error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full space-y-6"
//       >
//         <h1 className="text-2xl font-bold text-gray-700 text-center">
//           ShipEngine Integration
//         </h1>

//         <div className="space-y-4">
//           <h2 className="text-lg font-semibold text-gray-600">From Address</h2>
//           <input
//             type="text"
//             placeholder="From Name"
//             className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200 text-black"
//             onChange={(e) =>
//               setFormData({ ...formData, fromAddress: { ...formData.fromAddress, name: e.target.value } })
//             }
//           />
//           <input
//             type="text"
//             placeholder="From Address Line 1"
//             className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200 text-black"
//             onChange={(e) =>
//               setFormData({ ...formData, fromAddress: { ...formData.fromAddress, address_line1: e.target.value } })
//             }
//           />
//           <input
//             type="text"
//             placeholder="From City"
//             className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200 text-black"
//             onChange={(e) =>
//               setFormData({ ...formData, fromAddress: { ...formData.fromAddress, city_locality: e.target.value } })
//             }
//           />
//           <input
//             type="text"
//             placeholder="From Postal Code"
//             className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200 text-black"
//             onChange={(e) =>
//               setFormData({ ...formData, fromAddress: { ...formData.fromAddress, postal_code: e.target.value } })
//             }
//           />
//         </div>

//         <div className="space-y-4">
//           <h2 className="text-lg font-semibold text-gray-600">To Address</h2>
//           <input
//             type="text"
//             placeholder="To Name"
//             className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200 text-black"
//             onChange={(e) =>
//               setFormData({ ...formData, toAddress: { ...formData.toAddress, name: e.target.value } })
//             }
//           />
//           <input
//             type="text"
//             placeholder="To Address Line 1"
//             className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200 text-black"
//             onChange={(e) =>
//               setFormData({ ...formData, toAddress: { ...formData.toAddress, address_line1: e.target.value } })
//             }
//           />
//           <input
//             type="text"
//             placeholder="To City"
//             className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200 text-black"
//             onChange={(e) =>
//               setFormData({ ...formData, toAddress: { ...formData.toAddress, city_locality: e.target.value } })
//             }
//           />
//           <input
//             type="text"
//             placeholder="To Postal Code"
//             className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200 text-black"
//             onChange={(e) =>
//               setFormData({ ...formData, toAddress: { ...formData.toAddress, postal_code: e.target.value } })
//             }
//           />
//         </div>

//         <div className="space-y-4">
//           <h2 className="text-lg font-semibold text-gray-600">Package Details</h2>
//           <input
//             type="number"
//             placeholder="Weight (ounce)"
//             className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200 text-black"
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 packageDetails: { ...formData.packageDetails, weight: { value: parseFloat(e.target.value), unit: "ounce" } },
//               })
//             }
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
//         >
//           Create Shipment
//         </button>
//       </form>
//     </div>
//   );
// }
