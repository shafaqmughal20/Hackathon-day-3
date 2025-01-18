// "use client"

// import React, { useState, useEffect } from 'react'

// interface Component {
//   name: string,
//   category: string,
//   price: number,
//   orignalprice: number,
//   tags: [string],
//   image: string,
//   description: string,
//   available: boolean
// }

// export default function Product() {
//   const [product, setProduct] = useState<Component[]>([]);

//   useEffect(() => {
//     const data = async () => {
//       try {
//         const response = await fetch('https://sanity-nextjs-rouge.vercel.app/api/foods');
//         const json = await response.json();
//         setProduct(json);
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     }
//     data();
//   }, []);

//   return (
//     <div className="flex flex-wrap gap-6 justify-center p-6">
//       {
//         product.map((item, index) => (
//           <div key={index} className="border p-4 rounded-lg">
//             <img src={item.image} alt={item.name} className="w-full h-64 object-cover rounded-md" />
//             <h3 className="text-xl font-semibold mt-4">{item.name}</h3>
//             <p className="text-gray-500">{item.category}</p>
//             <p className="text-lg font-bold mt-2">${item.price}</p>
//             <p className="line-through text-gray-400">${item.orignalprice}</p>
//             <p className="text-sm text-gray-600 mt-2">{item.description}</p>
//             <div className="mt-4">
//               {item.available ? (
//                 <span className="text-green-500">Available</span>
//               ) : (
//                 <span className="text-red-500">Out of stock</span>
//               )}
//             </div>
//           </div>
//         ))
//       }
//     </div>
//   )
// }

"use client"

import React, { useState, useEffect } from 'react'

interface Component {
  name: string,
  category: string,
  price: number,
  orignalprice: number,
  tags: [string],
  image: string,
  description: string,
  available: boolean
}

interface Chef {
  name: string,
  specialty: string,
  image: string,
  description: string
}

export default function Product() {
  const [product, setProduct] = useState<Component[]>([]);
  const [chefs, setChefs] = useState<Chef[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching product data
        const productResponse = await fetch('https://sanity-nextjs-rouge.vercel.app/api/foods');
        const productJson = await productResponse.json();
        setProduct(productJson);

        // Fetching chef data
        const chefResponse = await fetch('https://sanity-nextjs-rouge.vercel.app/api/chefs');
        const chefJson = await chefResponse.json();
        setChefs(chefJson);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {/* Product List */}
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-4">Products</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {
            product.map((item, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <img src={item.image} alt={item.name} className="w-full h-64 object-cover rounded-md" />
                <h3 className="text-xl font-semibold mt-4">{item.name}</h3>
                <p className="text-gray-500">{item.category}</p>
                <p className="text-lg font-bold mt-2">${item.price}</p>
                <p className="line-through text-gray-400">${item.orignalprice}</p>
                <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                <div className="mt-4">
                  {item.available ? (
                    <span className="text-green-500">Available</span>
                  ) : (
                    <span className="text-red-500">Out of stock</span>
                  )}
                </div>
              </div>
            ))
          }
        </div>
      </div>

      {/* Chef List */}
      <div className="w-full mt-8">
        <h2 className="text-2xl font-bold mb-4">Our Chefs</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {
            chefs.map((chef, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <img src={chef.image} alt={chef.name} className="w-full h-64 object-cover rounded-md" />
                <h3 className="text-xl font-semibold mt-4">{chef.name}</h3>
                <p className="text-gray-500">{chef.specialty}</p>
                <p className="text-sm text-gray-600 mt-2">{chef.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
