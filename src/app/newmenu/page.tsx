// // import { sanityFetch } from "@/sanity/lib/live";
// // import { foodQuery,chefQuery } from "@/sanity/lib/queries";


// // type Product = {
// //   name: string;
// //   category: string;
// //   price: number;
// //   originalPrice: number;
// //   tags: string[];
// //   image: string;
// //   description: string;
// //   available: boolean;
// // };

// // type Chef = {
// //   name: string;
// //   position: string;
// //   experience: string;
// //   speciality: string;
// //   image: string;
// //   description: string;
// //   available: boolean;
// // }

// // export default async function ProductPage() {
// //   // Fetch products using the sanityFetch function and the query
// //   const response = await sanityFetch({ query: foodQuery });
// //   const products: Product[] = response.data;

// //   return (
// //     <div className="p-6 bg-gray-100 min-h-screen">
// //       <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {/* Map over the products and display each one */}
// //         {products.map((product) => (
// //           <div
// //             key={product.name}
// //             className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
// //           >
// //             <img
// //               src={product.image}
// //               alt={product.name}
// //               className="w-full h-48 object-cover"
// //             />
// //             <div className="p-4">
// //               <h2 className="text-xl font-semibold text-gray-800">
// //                 {product.name}
// //               </h2>
// //               <p className="text-sm text-gray-600">
// //                 {product.category}
// //               </p>
// //               <p className="mt-2 text-gray-700">{product.description}</p>
// //               <div className="flex items-center justify-between mt-4">
// //                 <span className="text-lg font-bold text-green-600">
// //                   ${product.price.toFixed(2)}
// //                 </span>
// //                 <span className="line-through text-gray-400">
// //                   ${product.originalPrice.toFixed(2)}
// //                 </span>
// //               </div>
// //               <div className="flex items-center justify-between mt-4">
// //                 <span
// //                   className={`px-2 py-1 rounded text-sm ${
// //                     product.available
// //                       ? "bg-green-100 text-green-600"
// //                       : "bg-red-100 text-red-600"
// //                   }`}
// //                 >
// //                   {product.available ? "Available" : "Out of Stock"}
// //                 </span>
// //                 <span className="text-xs text-gray-500">
// //                   {product.tags.join(", ")}
// //                 </span>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// import { sanityFetch } from "@/sanity/lib/live";
// import { foodQuery, chefQuery } from "@/sanity/lib/queries";

// type Product = {
//   name: string;
//   category: string;
//   price: number;
//   originalPrice: number;
//   tags: string[];
//   image: string;
//   description: string;
//   available: boolean;
// };

// type Chef = {
//   name: string;
//   position: string;
//   experience: string;
//   speciality: string;
//   image: string;
//   description: string;
//   available: boolean;
// };

// export default async function ProductPage() {
//   // Fetch products and chefs using the sanityFetch function and their respective queries
//   const productResponse = await sanityFetch({ query: foodQuery });
//   const products: Product[] = productResponse.data;

//   const chefResponse = await sanityFetch({ query: chefQuery });
//   const chefs: Chef[] = chefResponse.data;

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {/* Map over the products and display each one */}
//         {products.map((product) => (
//           <div
//             key={product.name}
//             className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
//               <p className="text-sm text-gray-600">{product.category}</p>
//               <p className="mt-2 text-gray-700">{product.description}</p>
//               <div className="flex items-center justify-between mt-4">
//                 <span className="text-lg font-bold text-green-600">
//                   ${product.price.toFixed(2)}
//                 </span>
//                 <span className="line-through text-gray-400">
//                   ${product.originalPrice.toFixed(2)}
//                 </span>
//               </div>
//               <div className="flex items-center justify-between mt-4">
//                 <span
//                   className={`px-2 py-1 rounded text-sm ${
//                     product.available
//                       ? "bg-green-100 text-green-600"
//                       : "bg-red-100 text-red-600"
//                   }`}
//                 >
//                   {product.available ? "Available" : "Out of Stock"}
//                 </span>
//                 <span className="text-xs text-gray-500">
//                   {product.tags.join(", ")}
//                 </span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <h1 className="text-3xl font-bold text-center mb-8 mt-12">Our Chefs</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {/* Map over the chefs and display each one */}
//         {chefs.map((chef) => (
//           <div
//             key={chef.name}
//             className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
//           >
//             <img
//               src={chef.image}
//               alt={chef.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold text-gray-800">{chef.name}</h2>
//               <p className="text-sm text-gray-600">{chef.position}</p>
//               <p className="mt-2 text-gray-700">{chef.speciality}</p>
//               <p className="mt-2 text-gray-500 text-sm">{chef.description}</p>
//               <div className="flex items-center justify-between mt-4">
//                 <span
//                   className={`px-2 py-1 rounded text-sm ${
//                     chef.available
//                       ? "bg-green-100 text-green-600"
//                       : "bg-red-100 text-red-600"
//                   }`}
//                 >
//                   {chef.available ? "Available" : "Not Available"}
//                 </span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import { sanityFetch } from "@/sanity/lib/live";
import { foodQuery, chefQuery } from "@/sanity/lib/queries";
import imageUrlBuilder from '@sanity/image-url'; // Import image URL builder

type Product = {
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  tags: string[];
  image: string;
  description: string;
  available: boolean;
};

type Chef = {
  name: string;
  position: string;
  experience: string;
  speciality: string;
  image: string;
  description: string;
  available: boolean;
};

// Create an image URL builder instance
const builder = imageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'krp11thn',
  dataset: 'production',
});

function urlFor(source: any) {
  return builder.image(source); // This will generate the correct image URL
}

export default async function ProductPage() {
  // Fetch products and chefs using the sanityFetch function and their respective queries
  const productResponse = await sanityFetch({ query: foodQuery });
  const products: Product[] = productResponse.data;

  const chefResponse = await sanityFetch({ query: chefQuery });
  const chefs: Chef[] = chefResponse.data;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Map over the products and display each one */}
        {products.map((product) => (
          <div
            key={product.name}
            className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
          >
            <img
              src={urlFor(product.image).url()} // Use the image URL builder
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
              <p className="text-sm text-gray-600">{product.category}</p>
              <p className="mt-2 text-gray-700">{product.description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-bold text-green-600">
                  ${product.price.toFixed(2)}
                </span>
                <span className="line-through text-gray-400">
                  ${product.originalPrice.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    product.available
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {product.available ? "Available" : "Out of Stock"}
                </span>
                <span className="text-xs text-gray-500">
                  {product.tags.join(", ")}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-3xl font-bold text-center mb-8 mt-12">Our Chefs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Map over the chefs and display each one */}
        {chefs.map((chef) => (
          <div
            key={chef.name}
            className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
          >
            <img
              src={urlFor(chef.image).url()} // Use the image URL builder
              alt={chef.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{chef.name}</h2>
              <p className="text-sm text-gray-600">{chef.position}</p>
              <p className="mt-2 text-gray-700">{chef.speciality}</p>
              <p className="mt-2 text-gray-500 text-sm">{chef.description}</p>
              <div className="flex items-center justify-between mt-4">
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    chef.available
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {chef.available ? "Available" : "Not Available"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
