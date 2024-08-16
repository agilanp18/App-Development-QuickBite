// import React from 'react';

// function Offers() {
//   const offers = [
//     {
//       text: "Get 20% off on your first order!",
//       image: "https://www.railrestro.com/img/railrestro_service_img.jpg",
//     },
//     {
//       text: "Free delivery for orders over ₹200.",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlkNXj8_-aHtOZGzEG-RVmUcPdSIwCDQfa4w&s",
//     },
//     {
//       text: "Only on weekend.",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJaalJ0AB8CQqGAr_uvMmY7BLC3-435T4q36UHZRB6EPQEy-9aY-nc1-9iekCX9G12_10&usqp=CAU",
//     },
//   ];

//   return (
//     <div>
//       <h2>Special Offers</h2>
//       {offers.map((offer, index) => (
//         <div key={index} style={{ marginBottom: '20px' }}>
//           <p>{offer.text}</p>
//           <img
//             src={offer.image}
//             alt={`Offer ${index + 1}`}
//             style={{ 
//               width: '100%', 
//               height: '400px', 
//               objectFit: 'cover',
//               border: '10px solid #ccc', // Increase border size to 10px
//               borderRadius: '10px' // Optional: add border radius for rounded corners
//             }}
//           />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Offers;
