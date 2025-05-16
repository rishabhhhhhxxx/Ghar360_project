import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CreateListing() {
  const { currentUser } = useSelector((state) => state.user);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    address: "",
    regularPrice: 0,
    discountPrice: 0,
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    offer: false,
    type: "sell",
  });
  const navigate = useNavigate();

  const handleImageUpload = async () => {
    setUploading(true);
    const urls = [];
    for (const file of files) {
      const formData = new FormData();
      formData.append("image", file);
      const res = await fetch("http://localhost:3000/api/upload/image", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        urls.push(data.url);
      } else {
        alert("Image upload failed");
      }
    }
    setUploading(false);
    setImageUrls(urls);
    console.log("Uploaded image URLs:", urls);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (imageUrls.length < 1)
        return alert("Please upload at least one image");
      if (formData.regularPrice < formData.discountPrice) {
        return alert("Discount must be lower than regular price");
      }

      setLoading(true);
      setError(false);
      const res = await fetch("http://localhost:3000/api/listings/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          imageUrls,
          userRef: currentUser._id,
        }),
      });

      const data = await res.json();
      if (!res.ok) return alert(data.message || "Failed to create listing");

      alert("Listing created successfully");
      navigate(`/listing/${data._id}`);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  console.log(formData);

  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">
        Create a Listing
      </h1>
      <form className="flex flex-col sm:flex-row gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="Name"
            className="border p-3 rounded-lg"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <textarea
            placeholder="Description"
            className="border p-3 rounded-lg"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="Address"
            className="border p-3 rounded-lg"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            required
          />
          <div className="flex gap-6 flex-wrap">
            <label className="flex gap-2">
              <input
                type="radio"
                name="type"
                value="sell"
                checked={formData.type === "sell"}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
              />
              Sell
            </label>
            <label className="flex gap-2">
              <input
                type="radio"
                name="type"
                value="rent"
                checked={formData.type === "rent"}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
              />
              Rent
            </label>
            <label className="flex gap-2">
              <input
                type="checkbox"
                checked={formData.parking}
                onChange={(e) =>
                  setFormData({ ...formData, parking: e.target.checked })
                }
              />
              Parking spot
            </label>
            <label className="flex gap-2">
              <input
                type="checkbox"
                checked={formData.furnished}
                onChange={(e) =>
                  setFormData({ ...formData, furnished: e.target.checked })
                }
              />
              Furnished
            </label>
            <label className="flex gap-2">
              <input
                type="checkbox"
                checked={formData.offer}
                onChange={(e) =>
                  setFormData({ ...formData, offer: e.target.checked })
                }
              />
              Offer
            </label>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <input
                type="number"
                className="p-3 border border-gray-300 rounded-lg"
                value={formData.bedrooms}
                onChange={(e) =>
                  setFormData({ ...formData, bedrooms: +e.target.value })
                }
              />
              <p>Beds</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                className="p-3 border border-gray-300 rounded-lg"
                value={formData.bathrooms}
                onChange={(e) =>
                  setFormData({ ...formData, bathrooms: +e.target.value })
                }
              />
              <p>Baths</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                className="p-3 border border-gray-300 rounded-lg"
                value={formData.regularPrice}
                onChange={(e) =>
                  setFormData({ ...formData, regularPrice: +e.target.value })
                }
              />
              <div className="flex flex-col items-center">
                <p>Regular price</p>
                <span className="text-xs">($ / month)</span>
              </div>
            </div>
            {formData.offer && (
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  className="p-3 border border-gray-300 rounded-lg"
                  value={formData.discountPrice}
                  onChange={(e) =>
                    setFormData({ ...formData, discountPrice: +e.target.value })
                  }
                  min="0"
                />
                <div className="flex flex-col items-center">
                  <p>Discounted price</p>
                  <span className="text-xs">($ / month)</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-4">
          <p className="font-semibold">
            Images:
            <span className="font-normal text-gray-600 ml-2">
              The first image will be the cover (max 6)
            </span>
          </p>
          <div className="flex gap-4">
            <input
              className="p-3 border border-gray-300 rounded w-full"
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => {
                const selectedFiles = Array.from(e.target.files).slice(0, 6);
                console.log("Selected files:", selectedFiles);
                setFiles(selectedFiles);
              }}
            />
            <button
              type="button"
              onClick={handleImageUpload}
              className="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg"
              disabled={uploading}
            >
              {uploading ? "Uploading..." : "Upload"}
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {imageUrls.map((url, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center border p-2 rounded"
              >
                <img
                  src={url}
                  alt={`upload-${idx}`}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() =>
                    setImageUrls((prev) => {
                      const updated = prev.filter((_, i) => i !== idx);
                      console.log("Updated image URLs after delete:", updated);
                      return updated;
                    })
                  }
                  className="text-red-700 hover:underline"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95"
            disabled={uploading}
          >
            {loading ? "Creating..." : "Create Listing"}
          </button>
        </div>
      </form>
    </main>
  );
}
