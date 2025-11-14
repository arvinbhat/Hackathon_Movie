import React from "react";
const reviews = [
  {
    id: 1,
    title: "Titanic",
    rating: 9,
    text: "An emotionally charged masterpiece. Beautiful cinematography!",
    updated: "2023-05-15",
  },
  {
    id: 2,
    title: "Avatar",
    rating: 8,
    text: "Groundbreaking visuals but the story is predictable.",
    updated: "2023-04-22",
  },
  {
    id: 3,
    title: "Frozen",
    rating: 7,
    text: "Great animation and songs, but targeted more towards kids.",
    updated: "2023-03-10",
  },
];

function RatingBadge({ value }) {
  return (
    <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-600 text-white">
      {value}/10
    </span>
  );
}

export default function MyReviews({ data = reviews }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">My Reviews</h1>

      <div className="space-y-6">
        {data.map((r) => (
          <div
            key={r.id}
            className="border rounded-lg p-5 bg-white shadow-sm mb-2"
          >
            <div className="flex items-start justify-between">
              <h2 className="text-xl font-semibold flex items-center">
                {r.title}
                <RatingBadge value={r.rating} />
              </h2>
            </div>

            <p className="mt-3 text-gray-700">{r.text}</p>

            <div className="mt-5 text-sm text-gray-500">
              Last updated: {r.updated}
            </div>

            <div className="mt-4 flex gap-3">
              <button className="btn btn-success">Edit</button>
              <button className="btn btn-primary ml-2">Share</button>
              <button className="btn btn-danger ml-2">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
