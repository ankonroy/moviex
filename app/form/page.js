"use client";
import Inp from "@/components/inp";
import Input from "@/components/input";
import Navbar from "@/components/navbar";
import Submitbtn from "@/components/submitbtn";
import Textarea from "@/components/textarea";
// import { ThemeProvider } from "next-themes";
import Link from "next/link";
import { useState } from "react";

export default function Form() {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleAddComment = (e) => {
    e.preventDefault();
    if (name && email && message) {
      const newComment = { name, email, message };
      setComments([newComment, ...comments]);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  console.log(name);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100 text-center">
            Leave your comment
          </h2>
          <form onSubmit={handleAddComment}>
            {/* Name Field */}
            <Input title="Full Name">
              <Inp
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="name"
              />
            </Input>

            {/* Email Field */}
            <Input title="Email Address">
              <Inp
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
            </Input>

            {/* Message Field */}
            <Input title="Your message">
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Input>

            {/* Submit Button */}
            <Submitbtn />
          </form>

          {/* Comments List */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Comments
            </h3>
            {comments.length > 0 ? (
              <ul className="mt-4 space-y-4">
                {comments.map((comment, index) => (
                  <li
                    key={index}
                    className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow"
                  >
                    <p className="font-bold text-gray-800 dark:text-gray-100">
                      {comment.name}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      {comment.email}
                    </p>
                    <p className="mt-2 text-gray-800 dark:text-gray-200">
                      {comment.message}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                No comments yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
