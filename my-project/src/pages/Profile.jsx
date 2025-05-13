import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  updateUserSuccess,
  updateUserFailure,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  SignOutUserStart,
  SignOutUserFailure,
  SignOutUserSuccess,
} from "../redux/user/userSlice";

export default function Profile() {
  const fileRef = useRef(null);
  const dispatch = useDispatch();
  const { currentUser, loading, error } = useSelector((state) => state.user);

  const [image, setImage] = useState(currentUser.avatar);
  const [username, setUsername] = useState(currentUser.username);
  const [email, setEmail] = useState(currentUser.email);
  const [password, setPassword] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      setUploading(true);
      const res = await fetch("http://localhost:3000/api/upload/image", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setImage(data.url);
      } else {
        alert(data.message || "Image upload failed");
      }
    } catch (err) {
      console.error("Image upload failed", err);
      alert("Image upload failed!");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `http://localhost:3000/api/user/update/${currentUser._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            password,
            avatar: image,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        dispatch(updateUserSuccess(data));
        alert("Profile updated successfully");
      } else {
        dispatch(updateUserFailure(data.message || "Update failed"));
        alert(data.message || "Update failed");
      }
    } catch (err) {
      console.error("Update failed", err);
      dispatch(updateUserFailure("Update failed due to server error"));
      alert("Update failed");
    }
  };
  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };
  const handleSignOut = async () => {
    try {
      dispatch(SignOutUserStart());
      const res = await fetch(`http://localhost:3000/api/auth/signout/`);
      const data = await res.json();
      if (data.success === false) {
        dispatch(SignOutUserFailure(data.message));
        return;
      }
      dispatch(SignOutUserSuccess(data));
    } catch (error) {
      dispatch(SignOutUserFailure(error.message));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
          onChange={handleFileChange}
        />

        <img
          onClick={() => fileRef.current.click()}
          src={
            image ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
          alt="profile"
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
        />

        {uploading && (
          <p className="text-center text-sm text-gray-500">
            Uploading image...
          </p>
        )}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-3 rounded-lg"
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="New Password (optional)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-3 rounded-lg"
        />

        <button
          type="submit"
          className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80"
          disabled={uploading || loading}
        >
          {loading ? "Updating..." : "Update"}
        </button>

        {error && (
          <p className="text-center text-red-500 text-sm mt-2">{error}</p>
        )}

        <Link
          className="bg-green-700 text-white p-3 rounded-lg uppercase text-center hover:opacity-95"
          to={"/create-listing"}
        >
          Create Listing
        </Link>
      </form>

      <div className="flex justify-between mt-5">
        <span
          onClick={handleDeleteUser}
          className="text-red-700 cursor-pointer"
        >
          Delete account
        </span>
        <span onClick={handleSignOut} className="text-red-700 cursor-pointer">
          Sign out
        </span>
      </div>
    </div>
  );
}
