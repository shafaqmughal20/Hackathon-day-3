'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Nav2 from '@/components/Nav2';
import HeroLinks from '@/components/HeroLinks';
import Link from 'next/link';

interface Product {
  name: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

const availableProducts = [
  { name: "Burger", price: 10.99, image: "/cart1.png" },
  { name: "Fresh Lime", price: 3.49, image: "/cart2.png" },
  { name: "Pizza", price: 9.99, image: "/cart3.png" },
  { name: "Chocolate Muffin", price: 4.49, image: "/cart4.png" },
  { name: "Cheese Butter", price: 11.99, image: "/cart5.png" },
];

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleAddToCart = (product: Product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.name === product.name);
    if (existingItemIndex > -1) {
      const updatedItems = cartItems.map((item, index) =>
        index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleQuantityChange = (index: number, newQuantity: number) => {
    const updatedItems = cartItems.map((item, i) =>
      i === index ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
  };

  const handleRemoveItem = (index: number) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const handleApplyCoupon = () => {
    if (couponCode === "DISCOUNT10") {
      setDiscount(0.1); // 10% discount
    } else {
      setDiscount(0);
    }
  };

  const cartSubtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCharges = 30.0;
  const totalAmount = cartSubtotal - cartSubtotal * discount + shippingCharges;

  return (
    <div className="bg-white font-sans">
      <Nav2 />
      <HeroLinks heading="Shopping Cart" url1="Home" url2="Shopping Cart" />
      <header className="bg-cover bg-center h-36 md:h-48 flex items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-bold text-black tracking-wide">Shopping Cart</h1>
      </header>
      <main className="py-8 px-4 sm:px-8 md:px-16 text-black lg:px-28">
        <section>
          <h2 className="text-lg font-semibold mb-4">Available Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {availableProducts.map((product, index) => (
              <div key={index} className="border rounded-lg p-4 text-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="mx-auto mb-2"
                />
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-gray-500">${product.price.toFixed(2)}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-orange-500 text-white px-4 py-2 mt-2 rounded"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <table className="w-full border-collapse text-sm md:text-base">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-2 md:p-4 font-semibold">Product</th>
                  <th className="p-2 md:p-4 font-semibold">Price</th>
                  <th className="p-2 md:p-4 font-semibold">Quantity</th>
                  <th className="p-2 md:p-4 font-semibold">Total</th>
                  <th className="p-2 md:p-4 font-semibold">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2 md:p-4 flex items-center">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="w-12 h-12 object-cover rounded mr-2"
                      />
                      <span>{item.name}</span>
                    </td>
                    <td className="p-2 md:p-4">${item.price.toFixed(2)}</td>
                    <td className="p-2 md:p-4">
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(index, parseInt(e.target.value) || 0)}
                        className="w-12 border rounded px-2 py-1 text-center"
                        min="1"
                      />
                    </td>
                    <td className="p-2 md:p-4">${(item.price * item.quantity).toFixed(2)}</td>
                    <td
                      className="p-2 md:p-4 text-red-500 cursor-pointer"
                      onClick={() => handleRemoveItem(index)}
                    >
                      &times;
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-8">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <h2 className="text-lg font-semibold mb-2">Coupon Code</h2>
            <div className="flex items-center">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter your code"
                className="flex-grow border rounded-l px-4 py-2"
              />
              <button
                onClick={handleApplyCoupon}
                className="bg-orange-500 text-white px-6 py-2 rounded-r font-semibold"
              >
                Apply
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex justify-between mb-3">
                <span>Cart Subtotal</span>
                <span>${cartSubtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-3">
                <span>Discount</span>
                <span>${(cartSubtotal * discount).toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-3">
                <span>Shipping Charges</span>
                <span>${shippingCharges.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <span>Total Amount</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              <button className="w-full bg-orange-500 text-white mt-4 py-3 rounded font-semibold">
                <Link href={"/checkout"}>Proceed to Checkout</Link>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShoppingCart;


// Shopping Cart Component
// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import Nav2 from '@/components/Nav2';
// import Hero from "@/app/shop/Hero"

// const initialCartItems = [
//   { name: "Burger", price: 10.99, quantity: 2, image: "/cart1.png" },
//   { name: "Fresh Lime", price: 3.49, quantity: 1, image: "/cart2.png" },
//   { name: "Pizza", price: 9.99, quantity: 4, image: "/cart3.png" },
//   { name: "Chocolate Muffin", price: 4.49, quantity: 1, image: "/cart4.png" },
//   { name: "Cheese Butter", price: 11.99, quantity: 3, image: "/cart5.png" },
// ];

// const ShoppingCart: React.FC = () => {
//   const [cartItems, setCartItems] = useState(initialCartItems);
//   const [couponCode, setCouponCode] = useState("");
//   const [discount, setDiscount] = useState(0);

//   const handleQuantityChange = (index: number, newQuantity: number) => {
//     const updatedItems = cartItems.map((item, i) =>
//       i === index ? { ...item, quantity: newQuantity } : item
//     );
//     setCartItems(updatedItems);
//   };

//   const handleRemoveItem = (index: number) => {
//     setCartItems(cartItems.filter((_, i) => i !== index));
//   };

//   const handleApplyCoupon = () => {
//     if (couponCode === "DISCOUNT10") {
//       setDiscount(0.1); // 10% discount
//     } else {
//       setDiscount(0);
//     }
//   };

//   const cartSubtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const shippingCharges = 30.0;
//   const totalAmount = cartSubtotal - cartSubtotal * discount + shippingCharges;

//   return (
//     <div className="bg-white text-black font-sans">
//       <Nav2 />
//       <Hero />
//       <header
//         className="bg-cover bg-center h-36 md:h-48 flex items-center justify-center"
//         style={{ backgroundImage: 'url(/path/to/header-bg.jpg)' }}
//       >
//         <h1 className="text-3xl md:text-5xl font-bold text-black tracking-wide">Shopping Cart</h1>
//       </header>
//       <main className="py-8 px-4 sm:px-8 md:px-16 lg:px-28">
//         <table className="w-full border-collapse text-sm md:text-base">
//           <thead>
//             <tr className="bg-gray-100 text-left">
//               <th className="p-2 md:p-4 font-semibold">Product</th>
//               <th className="p-2 md:p-4 font-semibold">Price</th>
//               <th className="p-2 md:p-4 font-semibold">Quantity</th>
//               <th className="p-2 md:p-4 font-semibold">Total</th>
//               <th className="p-2 md:p-4 font-semibold">Remove</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cartItems.map((item, index) => (
//               <tr key={index} className="border-b">
//                 <td className="p-2 md:p-4 flex items-center">
//                   <Image
//                     src={item.image}
//                     alt={item.name}
//                     width={50}
//                     height={50}
//                     className="w-12 h-12 md:w-16 md:h-16 object-cover rounded mr-2 md:mr-4"
//                   />
//                   <span className="truncate">{item.name}</span>
//                 </td>
//                 <td className="p-2 md:p-4">${item.price.toFixed(2)}</td>
//                 <td className="p-2 md:p-4">
//                   <input
//                     type="number"
//                     value={item.quantity}
//                     onChange={(e) => handleQuantityChange(index, parseInt(e.target.value) || 0)}
//                     className="w-12 md:w-16 border rounded px-1 md:px-2 py-1 text-center"
//                     min="0"
//                   />
//                 </td>
//                 <td className="p-2 md:p-4">${(item.price * item.quantity).toFixed(2)}</td>
//                 <td
//                   className="p-2 md:p-4 text-red-500 cursor-pointer"
//                   onClick={() => handleRemoveItem(index)}
//                 >
//                   &times;
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-8">
//           <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
//             <h2 className="text-lg font-semibold mb-2">Coupon Code</h2>
//             <div className="flex items-center">
//               <input
//                 type="text"
//                 value={couponCode}
//                 onChange={(e) => setCouponCode(e.target.value)}
//                 placeholder="Enter your code"
//                 className="flex-grow border rounded-l px-4 py-2"
//               />
//               <button
//                 onClick={handleApplyCoupon}
//                 className="bg-blue-500 text-white px-4 py-2 rounded-r"
//               >
//                 Apply
//               </button>
//             </div>
//           </div>

//           <div className="w-full lg:w-1/2">
//             <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
//             <ul className="list-none space-y-2">
//               <li className="flex justify-between">
//                 <span>Subtotal:</span>
//                 <span>${cartSubtotal.toFixed(2)}</span>
//               </li>
//               <li className="flex justify-between">
//                 <span>Discount:</span>
//                 <span>${(cartSubtotal * discount).toFixed(2)}</span>
//               </li>
//               <li className="flex justify-between">
//                 <span>Shipping:</span>
//                 <span>${shippingCharges.toFixed(2)}</span>
//               </li>
//               <li className="flex justify-between font-bold">
//                 <span>Total:</span>
//                 <span>${totalAmount.toFixed(2)}</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ShoppingCart;
