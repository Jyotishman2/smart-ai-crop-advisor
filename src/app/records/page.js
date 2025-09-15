"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

// Sample dataset (replace later with API/db)
const cropData = [
  {
    location: "Assam",
    N: 90,
    P: 42,
    K: 43,
    temperature: 20.87,
    humidity: 82.0,
    pH: 6.5,
    rainfall: 202.9,
    crop: "Rice",
  },
  {
    location: "Punjab",
    N: 71,
    P: 54,
    K: 16,
    temperature: 22.61,
    humidity: 63.69,
    pH: 5.74,
    rainfall: 87.7,
    crop: "Maize",
  },
  {
    location: "Bihar",
    N: 40,
    P: 72,
    K: 77,
    temperature: 17.02,
    humidity: 16.98,
    pH: 7.48,
    rainfall: 88.6,
    crop: "Chickpea",
  },
  {
    location: "Madhya Pradesh",
    N: 13,
    P: 60,
    K: 25,
    temperature: 17.13,
    humidity: 20.59,
    pH: 5.68,
    rainfall: 128.2,
    crop: "Kidney Beans",
  },
  {
    location: "Maharashtra",
    N: 27,
    P: 65,
    K: 22,
    temperature: 20.93,
    humidity: 18.28,
    pH: 5.74,
    rainfall: 143.7,
    crop: "Kidney Beans",
  },
];

export default function RecordsPage() {
  const [search, setSearch] = useState("");

  const filteredData = cropData.filter(
    (item) =>
      item.location.toLowerCase().includes(search.toLowerCase()) ||
      item.crop.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-green-200 py-10 px-4">
      <h1 className="text-3xl font-bold text-green-700 text-center mb-6">
         Crop Recommendation Records
      </h1>

      <Card className="max-w-6xl mx-auto shadow-xl rounded-2xl">
        <CardContent className="p-6">
          {/* Search Bar */}
          <div className="mb-4 flex justify-between">
            <input
              type="text"
              placeholder=" Search by location or crop..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border rounded px-4 py-2 w-full md:w-1/3"
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-green-200 rounded-lg">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="p-3 text-left">Location</th>
                  <th className="p-3">N</th>
                  <th className="p-3">P</th>
                  <th className="p-3">K</th>
                  <th className="p-3">Temp (°C)</th>
                  <th className="p-3">Humidity (%)</th>
                  <th className="p-3">pH</th>
                  <th className="p-3">Rainfall (mm)</th>
                  <th className="p-3">Crop</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, idx) => (
                  <tr
                    key={idx}
                    className="text-center border-b hover:bg-green-50 transition"
                  >
                    <td className="p-3 text-left font-medium">{item.location}</td>
                    <td className="p-3">{item.N}</td>
                    <td className="p-3">{item.P}</td>
                    <td className="p-3">{item.K}</td>
                    <td className="p-3">{item.temperature}</td>
                    <td className="p-3">{item.humidity}</td>
                    <td className="p-3">{item.pH}</td>
                    <td className="p-3">{item.rainfall}</td>
                    <td className="p-3 font-semibold text-green-700">
                      {item.crop}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
