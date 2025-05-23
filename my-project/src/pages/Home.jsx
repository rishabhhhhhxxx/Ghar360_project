
// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import SwiperCore from 'swiper';
// import 'swiper/css/bundle';
// import ListingItem from '../components/ListingItem';

// SwiperCore.use([Navigation]);
//   const dummySliderImages = [
//     "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1920&q=80",
//     "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
//     "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1920&q=80",
//     "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1920&q=80",
//   ];




// export default function Home() {
//   const [offerListings, setOfferListings] = useState([]);
//   const [saleListings, setSaleListings] = useState([]);
//   const [rentListings, setRentListings] = useState([]);

//   useEffect(() => {
//     const fetchOfferListings = async () => {
//       try {
//         const res = await fetch('/api/listings/get?offer=true&limit=4');
//         const data = await res.json();
//         setOfferListings(data);
//         fetchRentListings();
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     const fetchRentListings = async () => {
//       try {
//         const res = await fetch('/api/listings/get?type=rent&limit=4');
//         const data = await res.json();
//         setRentListings(data);
//         fetchSaleListings();
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     const fetchSaleListings = async () => {
//       try {
//         const res = await fetch('/api/listings/get?type=sell&limit=4');
//         const data = await res.json();
//         setSaleListings(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchOfferListings();
//   }, []);

//   return (
//     <div>
//       Header with logo and title
//       <header className="flex items-center gap-4 p-6 max-w-6xl mx-auto">
//         <img
//           src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=80&q=80"
//           alt="Ghar360 Logo"
//           className="w-12 h-12 rounded-full object-cover"
//         />
//         <h1 className="text-3xl font-extrabold text-slate-700">Ghar360</h1>
//       </header>

//       {/* Hero Section */}
//       <section className="flex flex-col gap-6 p-8 px-4 max-w-6xl mx-auto">
//         <h2 className="text-slate-700 font-bold text-3xl lg:text-6xl">
//           Find your next <span className="text-slate-500">perfect</span> place
//           with ease
//         </h2>
//         <p className="text-gray-500 text-sm sm:text-base max-w-xl leading-relaxed">
//           Ghar360 is the best place to find your next perfect place to live.
//           <br />
//           We have a wide range of properties for you to choose from.
//         </p>
//         <Link
//           to={'/search'}
//           className="text-sm text-blue-700 font-semibold hover:underline"
//         >
//           Let's get started...
//         </Link>
//       </section>

//       {/* Swiper Slider with dummy images */}
//       <Swiper navigation className="max-w-6xl mx-auto h-[500px] rounded-lg overflow-hidden shadow-lg">
//         {dummySliderImages.map((url, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="w-full h-full bg-center bg-cover"
//               style={{ backgroundImage: `url(${url})` }}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Listing sections */}
//       <main className="max-w-6xl mx-auto p-4 flex flex-col gap-10 my-10">
//         {offerListings.length > 0 && (
//           <section>
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-2xl font-semibold text-slate-600">Recent Offers</h3>
//               <Link
//                 to={'/search?offer=true'}
//                 className="text-blue-700 text-sm font-semibold hover:underline"
//               >
//                 Show more offers
//               </Link>
//             </div>
//             <div className="flex flex-wrap gap-6">
//               {offerListings.map((listing) => (
//                 <ListingItem listing={listing} key={listing._id} />
//               ))}
//             </div>
//           </section>
//         )}
//         {rentListings.length > 0 && (
//           <section>
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-2xl font-semibold text-slate-600">
//                 Recent Places for Rent
//               </h3>
//               <Link
//                 to={'/search?type=rent'}
//                 className="text-blue-700 text-sm font-semibold hover:underline"
//               >
//                 Show more places for rent
//               </Link>
//             </div>
//             <div className="flex flex-wrap gap-6">
//               {rentListings.map((listing) => (
//                 <ListingItem listing={listing} key={listing._id} />
//               ))}
//             </div>
//           </section>
//         )}
//         {saleListings.length > 0 && (
//           <section>
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-2xl font-semibold text-slate-600">
//                 Recent Places for Sale
//               </h3>
//               <Link
//                 to={'/search?type=sale'}
//                 className="text-blue-700 text-sm font-semibold hover:underline"
//               >
//                 Show more places for sale
//               </Link>
//             </div>
//             <div className="flex flex-wrap gap-6">
//               {saleListings.map((listing) => (
//                 <ListingItem listing={listing} key={listing._id} />
//               ))}
//             </div>
//           </section>
//         )}
//       </main>
//     </div>
//   );
// }
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

SwiperCore.use([Navigation]);
const dummySliderImages = [
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1920&q=80",
];

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listings/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listings/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listings/get?type=sell&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col gap-6 p-8 px-4 max-w-6xl mx-auto">
        <h2 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Find your next <span className="text-slate-500">perfect</span> place
          with ease
        </h2>
        <p className="text-gray-500 text-sm sm:text-base max-w-xl leading-relaxed">
          Ghar360 is the best place to find your next perfect place to live.
          <br />
          We have a wide range of properties for you to choose from.
        </p>
        <Link
          to={'/search'}
          className="text-sm text-blue-700 font-semibold hover:underline"
        >
          Let's get started...
        </Link>
      </section>

      {/* Swiper Slider with dummy images */}
      <Swiper navigation className="max-w-6xl mx-auto h-[500px] rounded-lg overflow-hidden shadow-lg">
        {dummySliderImages.map((url, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-center bg-cover"
              style={{ backgroundImage: `url(${url})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Listing sections */}
      <main className="max-w-6xl mx-auto p-4 flex flex-col gap-10 my-10">
        {offerListings.length > 0 && (
          <section>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold text-slate-600">Recent Offers</h3>
              <Link
                to={'/search?offer=true'}
                className="text-blue-700 text-sm font-semibold hover:underline"
              >
                Show more offers
              </Link>
            </div>
            <div className="flex flex-wrap gap-6">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </section>
        )}
        {rentListings.length > 0 && (
          <section>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold text-slate-600">
                Recent Places for Rent
              </h3>
              <Link
                to={'/search?type=rent'}
                className="text-blue-700 text-sm font-semibold hover:underline"
              >
                Show more places for rent
              </Link>
            </div>
            <div className="flex flex-wrap gap-6">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </section>
        )}
        {saleListings.length > 0 && (
          <section>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold text-slate-600">
                Recent Places for Sale
              </h3>
              <Link
                to={'/search?type=sale'}
                className="text-blue-700 text-sm font-semibold hover:underline"
              >
                Show more places for sale
              </Link>
            </div>
            <div className="flex flex-wrap gap-6">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
