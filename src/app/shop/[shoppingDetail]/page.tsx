// // "use client";

// // import HeroLinks from "@/components/HeroLinks";
// // import Nav2 from "@/components/Nav2";
// // import React, { useState } from "react";
// // import Image from "next/image";
// // import { products } from "@/app/constant/products";
// // import Link from "next/link";
// // import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

// // const ShopDetails = ({ params }: { params: { shoppingDetail: string } }) => {
// //   const [quantity, setQuantity] = useState(1);

// //   const increaseQuantity = () => setQuantity((prev) => prev + 1);
// //   const decreaseQuantity = () =>
// //     setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

// //   const data = products.find((p) => p.id === parseInt(params.shoppingDetail));
// //   const [selectedImage] = useState<string[]>(
// //     data?.image || [] // Default to empty array if product data not found
// //   );

  

// //   return (
// //     <div>
// //       <Nav2 />
// //       <HeroLinks heading="Shop Details" url1="Home" url2="Shop Details" />

// //       <section className="my-20">
// //         <div className="max-w-[84%] mx-auto">
// //           <div className="bg-white w-full md:flex-row flex-col py-4 flex justify-center items-center gap-8">
// //             <div className="md:w-[15%] hidden md:flex flex-col gap-2 items-center">
// //               {selectedImage[1] && (
// //                 <Image
// //                   className="shadow-lg"
// //                   src={selectedImage[1]}
// //                   width={132}
// //                   height={129}
// //                   alt="image"
// //                 />
// //               )}
// //               {selectedImage[2] && (
// //                 <Image
// //                   className="shadow-lg"
// //                   src={selectedImage[2]}
// //                   width={132}
// //                   height={129}
// //                   alt="image"
// //                 />
// //               )}
// //               {selectedImage[3] && (
// //                 <Image
// //                   className="shadow-lg"
// //                   src={selectedImage[3]}
// //                   width={132}
// //                   height={129}
// //                   alt="image"
// //                 />
// //               )}
// //             </div>
// //             <div className="md:w-[491px] shadow-lg">
// //               {selectedImage[0] && (
// //                 <Image
// //                   src={selectedImage[0]}
// //                   width={4000}
// //                   height={4000}
// //                   alt="image"
// //                 />
// //               )}
// //             </div>

// //             {/* Right Side - Details */}
// //             <div className="lg:w-2/3 space-y-4">
// //               <span className="px-3 py-1 bg-green-200 text-green-800 rounded-md text-sm">
// //                 In stock
// //               </span>
// //               <h1 className="text-3xl font-bold text-gray-800">{data?.name}</h1>
// //               <p className="text-gray-600">
// //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
// //                 quidem esse, veniam doloribus exercitationem modi. Illum
// //                 consequatur distinctio eligendi ut. Enim voluptatibus temporibus
// //                 illum repellat cupiditate doloremque officia magni quae.
// //               </p>
// //               <div className="text-2xl font-bold text-gray-800">
// //                 {data?.role}
// //               </div>
// //               <div className="flex items-center gap-2 text-yellow-500">
// //                 <div className="flex items-center">
// //                   {[...Array(5)].map((_, i) => (
// //                     <span key={i}>&#9733;</span>
// //                   ))}
// //                 </div>
// //                 <span className="text-gray-500">{"1"} Rating</span>
// //                 <span className="text-gray-400">| {"5"} Reviews</span>
// //               </div>

// //               <div className="flex items-center gap-4">
// //                 <div className="flex items-center border border-gray-500 overflow-hidden w-[120px]">
// //                   <button
// //                     onClick={decreaseQuantity}
// //                     className="w-1/3 h-full text-lg font-bold text-gray-600 hover:bg-gray-200 flex justify-center items-center"
// //                   >
// //                     -
// //                   </button>
// //                   <div className="w-1/3 h-full flex justify-center border-l border-r border-gray-500  items-center text-lg font-medium text-gray-800 border-x">
// //                     {quantity}
// //                   </div>
// //                   <button
// //                     onClick={increaseQuantity}
// //                     className="w-1/3 h-full text-lg font-bold text-gray-600 hover:bg-gray-200 flex justify-center items-center"
// //                   >
// //                     +
// //                   </button>
// //                 </div>

// //                 <button className="px-4 py-2 border border-gray-300 bg-textp  ">
// //                   Add to Wishlist
// //                 </button>
// //               </div>

// //               <div className="text-gray-500 space-y-1">
// //                 <p>
// //                   <span className="font-bold text-gray-800">Category:</span>
// //                 </p>
// //                 <p>
// //                   <span className="font-bold text-gray-800">Tag:</span>
// //                 </p>
// //               </div>

// //               <div className="flex items-center gap-2">
// //                 <span className="font-bold text-gray-800">Share:</span>
// //                 <div className="flex gap-3 text-gray-800">
// //                   <Link href="#">
// //                     <FaFacebook />
// //                   </Link>
// //                   <Link href="#">
// //                     <FaInstagram />
// //                   </Link>
// //                   <Link href="#">
// //                     <FaLinkedin />
// //                   </Link>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       <section className=" px-4 md:px-[135px] max-w-[1320px] mx-auto pt-20 pb-24">
// //         {/* Heading Section */}

// //         <div className="flex justify-between w-full">
// //           <p className="lg:text-4xl md:text-3xl sm:text-2xl text-xl Headings pb-5 text-black">Similar Products</p>
// //           <p>a</p>
// //         </div>

// //         {/* Images Grid Section */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
// //           {/* Chef 1 */}
// //           <div>
// //             <div className="flex-1 ">
// //               <Image
// //                 src={"/food1.png"}
// //                 alt={"meal"}
// //                 width={1000}
// //                 height={1000}
// //                 className="w-full h-full object-cover rounded-t-lg"
// //               />
// //             </div>
// //             <div className="p-4 ">
// //               <h3 className="text-gray-800 font-bold text-lg">Fresh lime</h3>
// //               <p className="text-gray-600">32$</p>
// //             </div>
// //           </div>


// //           <div>
// //             <div className="flex-1">
// //               <Image
// //                 src={"/food2.png"}
// //                 alt={"meal"}
// //                 width={1000}
// //                 height={1000}
// //                 className="w-full h-full object-cover rounded-t-lg"
// //               />
// //             </div>
// //             <div className="p-4 ">
// //               <h3 className="text-gray-800 font-bold text-lg">Fresh lime</h3>
// //               <p className="text-gray-600">32$</p>
// //             </div>
// //           </div>


// //           <div>
// //             <div className="flex-1">
// //               <Image
// //                 src={"/food3.png"}
// //                 alt={"meal"}
// //                 width={1000}
// //                 height={1000}
// //                 className="w-full h-full object-cover rounded-t-lg"
// //               />
// //             </div>
// //             <div className="p-4 ">
// //               <h3 className="text-gray-800 font-bold text-lg">Fresh lime</h3>
// //               <p className="text-gray-600">32$</p>
// //             </div>
// //           </div>



// //           <div>
// //             <div className="flex-1">
// //               <Image
// //                 src={"/food4.png"}
// //                 alt={"meal"}
// //                 width={1000}
// //                 height={1000}
// //                 className="w-full h-full object-cover rounded-t-lg"
// //               />
// //             </div>
// //             <div className="p-4 ">
// //               <h3 className="text-gray-800 font-bold text-lg">Fresh lime</h3>
// //               <p className="text-gray-600">32$</p>
// //             </div>
// //           </div>







// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default ShopDetails;


// 'use client';

// import React, { createContext, useContext, useState, ReactNode } from 'react';
// import Image from 'next/image';

// // Sample Products
// const products = [
//   {
//     id: 1,
//     name: 'Fresh Lime',
//     price: 32,
//     image: ['/food1.png', '/food2.png', '/food3.png'],
//   },
//   {
//     id: 2,
//     name: 'Juicy Mango',
//     price: 40,
//     image: ['/food4.png', '/food1.png', '/food2.png'],
//   },
// ];

// // Cart Context
// type CartItem = {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
//   image: string;
// };

// type CartContextType = {
//   cartItems: CartItem[];
//   addToCart: (item: CartItem) => void;
// };

// const CartContext = createContext<CartContextType | undefined>(undefined);

// const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   const addToCart = (item: CartItem) => {
//     setCartItems((prev) => {
//       const existingItem = prev.find((cartItem) => cartItem.id === item.id);
//       if (existingItem) {
//         return prev.map((cartItem) =>
//           cartItem.id === item.id
//             ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
//             : cartItem
//         );
//       }
//       return [...prev, item];
//     });
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };

// // Main Component
// const ShopDetails = () => {
//   const [quantity, setQuantity] = useState(1);
//   const { addToCart, cartItems } = useCart();

//   const data = products[0]; // Select the first product as an example
//   const [selectedImage] = useState<string[]>(data?.image || []);

//   const handleAddToCart = () => {
//     if (data) {
//       addToCart({
//         id: data.id,
//         name: data.name,
//         price: data.price,
//         quantity,
//         image: data.image[0],
//       });
//       alert(`${data.name} added to cart!`);
//     }
//   };

//   return (
//     <div>
//       <h1 className="text-3xl font-bold">Shop Details</h1>
//       <div className="flex gap-8 my-8">
//         {/* Product Image */}
//         <div>
//           {selectedImage[0] && (
//             <Image
//               src={selectedImage[0]}
//               width={400}
//               height={400}
//               alt="Product Image"
//             />
//           )}
//         </div>

//         {/* Product Details */}
//         <div>
//           <h2 className="text-2xl font-semibold">{data?.name}</h2>
//           <p className="text-gray-600">Price: ${data?.price.toFixed(2)}</p>
//           <div className="flex items-center gap-4 my-4">
//             {/* Quantity Selector */}
//             <div className="flex items-center border border-gray-500">
//               <button
//                 onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
//                 className="px-3 py-1 text-lg font-bold text-gray-600 hover:bg-gray-200"
//               >
//                 -
//               </button>
//               <span className="px-4 py-1 text-lg">{quantity}</span>
//               <button
//                 onClick={() => setQuantity((prev) => prev + 1)}
//                 className="px-3 py-1 text-lg font-bold text-gray-600 hover:bg-gray-200"
//               >
//                 +
//               </button>
//             </div>

//             {/* Add to Cart Button */}
//             <button
//               onClick={handleAddToCart}
//               className="px-4 py-2 bg-blue-500 text-white rounded font-semibold"
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Cart Section */}
//       <h2 className="text-2xl font-bold mt-8">Shopping Cart</h2>
//       <ul className="list-disc pl-6">
//         {cartItems.map((item) => (
//           <li key={item.id} className="my-2">
//             {item.name} - {item.quantity} x ${item.price.toFixed(2)} = $
//             {(item.quantity * item.price).toFixed(2)}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// // App Wrapper
// const App = () => {
//   return (
//     <CartProvider>
//       <ShopDetails />
//     </CartProvider>
//   );
// };

// export default App;

// App.js
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import Image from 'next/image';

// Sample Products
const products = [
  {
    id: 1,
    name: 'Fresh Lime',
    price: 32,
    image: ['/food1.png', '/food2.png', '/food3.png'],
  },
  {
    id: 2,
    name: 'Juicy Mango',
    price: 40,
    image: ['/food4.png', '/food1.png', '/food2.png'],
  },
];

// Cart Context
type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// ShopDetails Component
const ShopDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, cartItems, removeFromCart, clearCart } = useCart();

  const data = products[0]; // Select the first product as an example
  const [selectedImage] = useState<string[]>(data?.image || []);

  const handleAddToCart = () => {
    if (data) {
      addToCart({
        id: data.id,
        name: data.name,
        price: data.price,
        quantity,
        image: data.image[0],
      });
      alert(`${data.name} added to cart!`);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Shop Details</h1>
      <div className="flex gap-8 my-8">
        {/* Product Image */}
        <div>
          {selectedImage[0] && (
            <Image
              src={selectedImage[0]}
              width={400}
              height={400}
              alt="Product Image"
            />
          )}
        </div>

        {/* Product Details */}
        <div>
          <h2 className="text-2xl font-semibold">{data?.name}</h2>
          <p className="text-gray-600">Price: ${data?.price.toFixed(2)}</p>
          <div className="flex items-center gap-4 my-4">
            {/* Quantity Selector */}
            <div className="flex items-center border border-gray-500">
              <button
                onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                className="px-3 py-1 text-lg font-bold text-gray-600 hover:bg-gray-200"
              >
                -
              </button>
              <span className="px-4 py-1 text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="px-3 py-1 text-lg font-bold text-gray-600 hover:bg-gray-200"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="px-4 py-2 bg-blue-500 text-white rounded font-semibold"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Cart Section */}
      <h2 className="text-2xl font-bold mt-8">Shopping Cart</h2>
      <ul className="list-disc pl-6">
        {cartItems.map((item) => (
          <li key={item.id} className="my-2 flex justify-between items-center">
            <span>
              {item.name} - {item.quantity} x ${item.price.toFixed(2)} = $
              {(item.quantity * item.price).toFixed(2)}
            </span>
            <button
              onClick={() => removeFromCart(item.id)}
              className="ml-4 px-2 py-1 bg-red-500 text-white rounded"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      {cartItems.length > 0 && (
        <button
          onClick={clearCart}
          className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
        >
          Clear Cart
        </button>
      )}
    </div>
  );
};

// App Wrapper
const App = () => {
  return (
    <CartProvider>
      <ShopDetails />
    </CartProvider>
  );
};

export default App;


// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import Image from 'next/image';

// // Mock product data
// const products = [
//   { id: 1, name: 'Fresh Lime', price: 32, image: '/food1.png' },
//   { id: 2, name: 'Juicy Mango', price: 40, image: '/food2.png' },
// ];

// type CartItem = {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
//   image: string;
// };

// const ProductPage = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   const [cart, setCart] = useState<CartItem[]>([]);
//   const [quantity, setQuantity] = useState(1);

//   // Find the product based on the dynamic ID
//   const product = products.find((p) => p.id === parseInt(id as string));

//   if (!product) return <p>Product not found!</p>;

//   // Add to cart function
//   const handleAddToCart = () => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((item) => item.id === product.id);
//       if (existingItem) {
//         return prevCart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         );
//       }
//       return [...prevCart, { ...product, quantity }];
//     });
//     setQuantity(1); // Reset quantity
//   };

//   // Remove item from cart
//   const handleRemoveFromCart = (id: number) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//   };

//   // Clear the entire cart
//   const handleClearCart = () => {
//     setCart([]);
//   };

//   // Calculate total price
//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className="p-8">
//       {/* Product Details Section */}
//       <div className="border-b pb-6">
//         <Image src={product.image} alt={product.name} width={400} height={400} />
//         <h1 className="text-3xl font-bold">{product.name}</h1>
//         <p className="text-xl text-gray-600">Price: ${product.price.toFixed(2)}</p>

//         <div className="flex items-center gap-4 mt-4">
//           <button
//             onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
//             className="px-4 py-2 bg-gray-200 rounded"
//           >
//             -
//           </button>
//           <span>{quantity}</span>
//           <button
//             onClick={() => setQuantity((prev) => prev + 1)}
//             className="px-4 py-2 bg-gray-200 rounded"
//           >
//             +
//           </button>
//         </div>

//         <button
//           onClick={handleAddToCart}
//           className="mt-4 px-6 py-2 bg-blue-500 text-white rounded"
//         >
//           Add to Cart
//         </button>
//       </div>

//       {/* Cart Section */}
//       <div className="mt-8">
//         <h2 className="text-2xl font-bold">Shopping Cart</h2>
//         {cart.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <>
//             <ul className="mt-4 space-y-4">
//               {cart.map((item) => (
//                 <li key={item.id} className="flex items-center justify-between">
//                   <div>
//                     <p className="font-bold">{item.name}</p>
//                     <p>
//                       {item.quantity} x ${item.price.toFixed(2)}
//                     </p>
//                   </div>
//                   <button
//                     onClick={() => handleRemoveFromCart(item.id)}
//                     className="px-4 py-2 bg-red-500 text-white rounded"
//                   >
//                     Remove
//                   </button>
//                 </li>
//               ))}
//             </ul>
//             <div className="mt-6">
//               <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
//               <button
//                 onClick={handleClearCart}
//                 className="mt-4 px-6 py-2 bg-red-500 text-white rounded"
//               >
//                 Clear Cart
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;


// 'use client';

// import { useState } from 'react';
// import { useParams } from 'next/navigation';
// import Image from 'next/image';

// // Mock product data
// const products = [
//   { id: 1, name: 'Fresh Lime', price: 32, image: '/food1.png' },
//   { id: 2, name: 'Juicy Mango', price: 40, image: '/food2.png' },
// ];

// type CartItem = {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
//   image: string;
// };

// const ProductPage = () => {
//   const { id } = useParams(); // Get the dynamic route parameter
//   const [cart, setCart] = useState<CartItem[]>([]);
//   const [quantity, setQuantity] = useState(1);

//   // Find the product based on the dynamic ID
//   const product = products.find((p) => p.id === parseInt(id as string));

//   if (!product) return <p>Product not found!</p>;

//   // Add to cart function
//   const handleAddToCart = () => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((item) => item.id === product.id);
//       if (existingItem) {
//         return prevCart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         );
//       }
//       return [...prevCart, { ...product, quantity }];
//     });
//     setQuantity(1); // Reset quantity
//   };

//   // Remove item from cart
//   const handleRemoveFromCart = (id: number) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//   };

//   // Clear the entire cart
//   const handleClearCart = () => {
//     setCart([]);
//   };

//   // Calculate total price
//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className="p-8">
//       {/* Product Details Section */}
//       <div className="border-b pb-6">
//         <Image src={product.image} alt={product.name} width={400} height={400} />
//         <h1 className="text-3xl font-bold">{product.name}</h1>
//         <p className="text-xl text-gray-600">Price: ${product.price.toFixed(2)}</p>

//         <div className="flex items-center gap-4 mt-4">
//           <button
//             onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
//             className="px-4 py-2 bg-gray-200 rounded"
//           >
//             -
//           </button>
//           <span>{quantity}</span>
//           <button
//             onClick={() => setQuantity((prev) => prev + 1)}
//             className="px-4 py-2 bg-gray-200 rounded"
//           >
//             +
//           </button>
//         </div>

//         <button
//           onClick={handleAddToCart}
//           className="mt-4 px-6 py-2 bg-blue-500 text-white rounded"
//         >
//           Add to Cart
//         </button>
//       </div>

//       {/* Cart Section */}
//       <div className="mt-8">
//         <h2 className="text-2xl font-bold">Shopping Cart</h2>
//         {cart.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <>
//             <ul className="mt-4 space-y-4">
//               {cart.map((item) => (
//                 <li key={item.id} className="flex items-center justify-between">
//                   <div>
//                     <p className="font-bold">{item.name}</p>
//                     <p>
//                       {item.quantity} x ${item.price.toFixed(2)}
//                     </p>
//                   </div>
//                   <button
//                     onClick={() => handleRemoveFromCart(item.id)}
//                     className="px-4 py-2 bg-red-500 text-white rounded"
//                   >
//                     Remove
//                   </button>
//                 </li>
//               ))}
//             </ul>
//             <div className="mt-6">
//               <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
//               <button
//                 onClick={handleClearCart}
//                 className="mt-4 px-6 py-2 bg-red-500 text-white rounded"
//               >
//                 Clear Cart
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;
