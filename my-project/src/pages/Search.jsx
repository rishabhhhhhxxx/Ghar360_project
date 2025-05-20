import { Sidebar } from "lucide-react";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ListingItem from "../components/ListingItem";
export default function Search() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [listings, setListings] = useState([]);
  const [showMore, setShowMore] = useState(false);
  console.log(listings);
  const [sidebardata, setSidebardata] = useState({
    searchTerm: "",
    type: "all",
    parking: false,
    furnished: false,
    offer: false,
    sort: "created_at",
    order: "desc",
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    const typeFromUrl = urlParams.get("type");
    const parkingFromUrl = urlParams.get("parking");
    const furnishedFromUrl = urlParams.get("furnished");
    const offerFromUrl = urlParams.get("offer");
    const sortFromUrl = urlParams.get("sort");
    const orderFromUrl = urlParams.get("order");

    if (
      searchTermFromUrl ||
      typeFromUrl ||
      parkingFromUrl ||
      furnishedFromUrl ||
      offerFromUrl ||
      sortFromUrl ||
      orderFromUrl
    ) {
      setSidebardata({
        searchTerm: searchTermFromUrl || "",
        type: typeFromUrl || "all",
        parking: parkingFromUrl === "true" ? true : false,
        furnished: furnishedFromUrl === "true" ? true : false,
        offer: offerFromUrl === "true" ? true : false,
        sort: sortFromUrl || "created_at",
        order: orderFromUrl || "desc",
      });
    }
    const fetchListings = async () => {
      setLoading(true);

      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/listings/get?${searchQuery}`);
      const data = await res.json();

      setListings(data);
      setLoading(false);
    };

    fetchListings();
  }, [location.search]);

  const handleChange = (e) => {
    if (
      e.target.id === "all" ||
      e.target.id === "rent" ||
      e.target.id === "sale"
    ) {
      setSidebardata({ ...sidebardata, type: e.target.id });
    }

    if (e.target.id === "searchTerm") {
      setSidebardata({ ...sidebardata, searchTerm: e.target.value });
    }

    if (
      e.target.id === "parking" ||
      e.target.id === "furnished" ||
      e.target.id === "offer"
    ) {
      setSidebardata({
        ...sidebardata,
        [e.target.id]:
          e.target.checked || e.target.checked === "true" ? true : false,
      });
    }

    if (e.target.id === "sort_order") {
      const sort = e.target.value.split("_")[0] || "created_at";

      const order = e.target.value.split("_")[1] || "desc";

      setSidebardata({ ...sidebardata, sort, order });
    }
    console.log(sidebardata);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    urlParams.set("searchTerm", sidebardata.searchTerm);
    urlParams.set("type", sidebardata.type);
    urlParams.set("parking", sidebardata.parking);
    urlParams.set("furnished", sidebardata.furnished);
    urlParams.set("offer", sidebardata.offer);
    urlParams.set("sort", sidebardata.sort);
    urlParams.set("order", sidebardata.order);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };
  const onShowMoreClick = async () => {
    const numberOfListings = listings.length;
    const startIndex = numberOfListings;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('startIndex', startIndex);
    const searchQuery = urlParams.toString();
    const res = await fetch(`/api/listing/get?${searchQuery}`);
    const data = await res.json();
    if (data.length < 9) {
      setShowMore(false);
    }
    setListings([...listings, ...data]);
  };
  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-4 gap-4">
      {/* Sidebar */}
      <aside className="w-full md:max-w-sm border border-gray-200 rounded-xl p-6 shadow-sm">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Search Term */}
          <div className="flex flex-col">
            <label htmlFor="searchTerm" className="font-semibold mb-1">
              Search Term:
            </label>
            <input
              type="text"
              id="searchTerm"
              placeholder="Search by name, address..."
              className="border rounded-lg p-3"
              value={sidebardata.searchTerm}
              onChange={handleChange}
            />
          </div>

          {/* Type Filters */}
          <div>
            <p className="font-semibold mb-2">Type:</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <label className="flex items-center gap-2">
                <input
                  id="all"
                  type="checkbox"
                  className="w-4 h-4"
                  onChange={handleChange}
                  checked={sidebardata.type === "all"}
                />
                <span>Rent & Sale</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  id="rent"
                  type="checkbox"
                  className="w-4 h-4"
                  onChange={handleChange}
                  checked={sidebardata.type === "rent"}
                />
                <span>Rent</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  id="sale"
                  type="checkbox"
                  className="w-4 h-4"
                  onChange={handleChange}
                  checked={sidebardata.type === "sale"}
                />
                <span>Sale</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  id="offer"
                  type="checkbox"
                  className="w-4 h-4"
                  onChange={handleChange}
                  checked={sidebardata.offer}
                />
                <span>Offer</span>
              </label>
            </div>
          </div>

          {/* Amenities */}
          <div>
            <p className="font-semibold mb-2">Amenities:</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <label className="flex items-center gap-2">
                <input
                  id="parking"
                  type="checkbox"
                  className="w-4 h-4"
                  onChange={handleChange}
                  checked={sidebardata.parking}
                />
                <span>Parking</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  id="furnished"
                  type="checkbox"
                  className="w-4 h-4"
                  onChange={handleChange}
                  checked={sidebardata.furnished}
                />
                <span>Furnished</span>
              </label>
            </div>
          </div>

          {/* Sort Order */}
          <div>
            <label htmlFor="sort_order" className="font-semibold block mb-1">
              Sort:
            </label>
            <select
              onChange={handleChange}
              id="sort_order"
              className="border rounded-lg p-3 w-full"
              defaultValue="createdAt_desc"
            >
              <option value="regularPrice_desc">Price high to low</option>
              <option value="regularPrice_asc">Price low to high</option>
              <option value="createdAt_desc">Latest</option>
              <option value="createdAt_asc">Oldest</option>
            </select>
          </div>

          {/* Submit Button */}
          <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:bg-slate-800 transition">
            Search
          </button>
        </form>
      </aside>

      {/* Results Section */}
      <section className="flex-1">
        <h2 className="text-2xl font-semibold text-slate-700 border-b pb-3 mb-4">
          Listing Results
        </h2>
        <div className="p-7 flex flex-wrap gap-4">
          {!loading && listings.length === 0 && (
            <p className="text-xl text-slate-700">No listing found!</p>
          )}
          {loading && (
            <p className="text-xl text-slate-700 text-center w-full">
              Loading...
            </p>
          )}

          {!loading &&
            listings &&
            listings.map((listing) => (
              <ListingItem key={listing._id} listing={listing} />
            ))}

          {showMore && (
            <button
              onClick={onShowMoreClick}
              className="text-green-700 hover:underline p-7 text-center w-full"
            >
              Show more
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
