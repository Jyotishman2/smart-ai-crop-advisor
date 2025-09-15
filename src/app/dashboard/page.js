"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import ChatAssistant from "@/components/ChatAssistant"; // reuse chatbot

export default function Dashboard() {
  // Mock data
  const recommendation = {
    crop: "Rice",
    location: "Silchar, Assam",
    reason: "Based on soil pH (6.5), high rainfall (202mm), and season (Kharif).",
  };

  const weather = {
    temp: 28,
    humidity: 78,
    rainfall: "Moderate showers",
    wind: "12 km/h",
  };

  const cropCalendar = {
    sowing: "June – July",
    harvesting: "October – November",
  };

  const schemes = [
    {
      title: "PM-Kisan Samman Nidhi Yojana",
      desc: "Financial assistance of ₹6000/year to eligible farmers.",
    },
    {
      title: "Pradhan Mantri Fasal Bima Yojana",
      desc: "Insurance coverage & financial support for crop loss due to natural calamities.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-green-200">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-green-700 text-center py-8">
        🌾 Farmer Dashboard
      </h1>

      {/* Top Stats Bar */}
      <div className="bg-gradient-to-r from-green-700 to-green-900 text-white py-6 shadow-md">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
          <div className="text-center">
            <p className="text-2xl font-bold">12</p>
            <p className="text-sm text-green-200">Total Recommendations</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">5</p>
            <p className="text-sm text-green-200">Locations Covered</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">220mm</p>
            <p className="text-sm text-green-200">Avg Rainfall</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">8</p>
            <p className="text-sm text-green-200">Crops Suggested</p>
          </div>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto py-10 px-6">
        {/* 1. Crop Recommendation */}
        <motion.div whileHover={{ scale: 1.02 }} className="transition-transform">
          <Card className="shadow-lg rounded-2xl">
            <CardContent className="p-6 space-y-3">
              <h2 className="text-2xl font-bold text-green-700 flex items-center gap-2">
                 Crop Recommendation
              </h2>
              <p className="text-lg">
                <span className="font-semibold">Crop:</span> {recommendation.crop}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Location:</span> {recommendation.location}
              </p>
              <p className="text-gray-600 leading-relaxed">{recommendation.reason}</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* 2. Weather Overview */}
        <motion.div whileHover={{ scale: 1.02 }} className="transition-transform">
          <Card className="shadow-lg rounded-2xl">
            <CardContent className="p-6 space-y-3">
              <h2 className="text-2xl font-bold text-green-700 flex items-center gap-2">
                 Weather Overview
              </h2>
              <ul className="space-y-2 text-lg">
                <li> Temperature: {weather.temp} °C</li>
                <li> Humidity: {weather.humidity}%</li>
                <li>Rainfall: {weather.rainfall}</li>
                <li> Wind: {weather.wind}</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* 5. Crop Calendar */}
        <motion.div whileHover={{ scale: 1.02 }} className="transition-transform">
          <Card className="shadow-lg rounded-2xl">
            <CardContent className="p-6 space-y-3">
              <h2 className="text-2xl font-bold text-green-700 flex items-center gap-2">
                📅 Crop Calendar
              </h2>
              <p className="text-lg">
                <span className="font-semibold">Sowing:</span> {cropCalendar.sowing}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Harvest:</span> {cropCalendar.harvesting}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* 6. Govt Schemes */}
        <motion.div whileHover={{ scale: 1.02 }} className="transition-transform">
          <Card className="shadow-lg rounded-2xl">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-green-700 flex items-center gap-2">
                🏛 Govt Schemes & Alerts
              </h2>
              {schemes.map((scheme, idx) => (
                <div
                  key={idx}
                  className="bg-green-50 hover:bg-green-100 transition p-4 rounded-lg border border-green-200 shadow-sm"
                >
                  <h3 className="font-semibold text-green-800 text-lg">{scheme.title}</h3>
                  <p className="text-sm text-gray-600">{scheme.desc}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Quick Chatbot */}
      <ChatAssistant />
    </main>
  );
}
