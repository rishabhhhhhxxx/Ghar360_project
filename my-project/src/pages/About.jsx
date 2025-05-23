import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold mb-6 text-indigo-700 tracking-wide">
        About Ghar360
      </h1>
      <p className="mb-6 text-lg text-gray-700 leading-relaxed">
        At <span className="font-semibold text-indigo-600">Ghar360</span>, we
        specialize in connecting people with their dream homes. Whether you're
        buying, selling, or renting, our expert team is dedicated to delivering
        a seamless and personalized real estate experience in the most
        sought-after neighborhoods.
      </p>
      <p className="mb-6 text-lg text-gray-700 leading-relaxed">
        Our mission is to empower you with expert advice, local market insights,
        and a friendly, transparent approach — guiding you every step of the way
        to make confident and informed decisions.
      </p>
      <p className="mb-6 text-lg text-gray-700 leading-relaxed">
        With years of industry experience and a passion for excellence, the
        Ghar360 team is committed to turning your real estate goals into
        reality. We believe your home journey should be exciting, rewarding, and
        stress-free — and we're here to make sure it is.
      </p>
      <div className="mt-10">
        <Link to="/search">
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors duration-300">
            Explore Listings
          </button>
        </Link>
      </div>
    </section>
  );
}
