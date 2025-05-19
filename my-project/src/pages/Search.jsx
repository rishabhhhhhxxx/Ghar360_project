import React from 'react';

export default function Search() {
  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-4 gap-4">
      {/* Sidebar */}
      <aside className="w-full md:max-w-sm border border-gray-200 rounded-xl p-6 shadow-sm">
        <form className="flex flex-col gap-6">
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
            />
          </div>

          {/* Type Filters */}
          <div>
            <p className="font-semibold mb-2">Type:</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Rent & Sale</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Rent</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Sale</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Offer</span>
              </label>
            </div>
          </div>

          {/* Amenities */}
          <div>
            <p className="font-semibold mb-2">Amenities:</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Parking</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
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
        <div className="flex flex-wrap gap-6">
          {/* Placeholder Items */}
          <div className="w-full text-center text-lg text-slate-500">
            No listings found!
          </div>

          {/* Dummy listings can be added here */}
          <div className="w-full text-center mt-4">
            <button className="text-green-700 hover:underline text-sm">
              Show More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
