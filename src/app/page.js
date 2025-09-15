"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import FloatingLeaf from "@/components/FloatingLeaf";
import Image from "next/image";
import ChatAssistant from "@/components/ChatAssistant";






export default function Home() {
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const location = formData.get("location");
    const period = formData.get("period");
    const year = formData.get("year");
    const soil = formData.get("soil");
    const cropPref = formData.get("cropPref");
    const irrigation = formData.get("irrigation");

    console.log("User Input:", { location, period, year, soil, cropPref, irrigation });

    // Mock result — replace later with API call
    setResult({
      crop: "Rice",
      reason: `Best match for ${location}, ${period} ${year} (${soil || "default soil"}, ${irrigation || "rainfed"})`,
      image: "/rice.jpg",
    });
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-green-50 to-green-200 flex flex-col">
      {/* Floating leaves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingLeaf delay={0} left={10} />
        <FloatingLeaf delay={3} left={30} />
        <FloatingLeaf delay={6} left={50} />
        <FloatingLeaf delay={9} left={70} />
        <FloatingLeaf delay={12} left={85} />
      </div>

      {/* Header */}
      <header className="py-8 text-center relative z-10">
        <h1 className="text-4xl font-bold text-green-700">🌱 Smart AI Crop Advisor</h1>
        <p className="text-gray-600 mt-2">Your AI-powered farming assistant</p>
      </header>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-4 relative z-10">
        <motion.div
          className="w-full max-w-2xl bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Form */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Location */}
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-gray-700">Location</label>
              <Input type="text" name="location" placeholder="e.g. Silchar ,Assam" className="mt-1" required />
            </div>

            {/* Season */}
            <div>
              <label className="text-sm font-medium text-gray-700"> Period</label>
              <select name="period" className="mt-1 p-2 border rounded w-full" required>
                <option value="">Select Period</option>
                <option value="Kharif">January</option>
                <option value="Rabi">February</option>
                <option value="Zaid">March</option>
                <option value="Annual">April</option>
                <option value="Annual">May</option>
                <option value="Annual">June</option>
                <option value="Annual">July</option>
                <option value="Annual">August</option>
                <option value="Annual">September</option>
                <option value="Annual">October</option>
                <option value="Annual">Nov</option>
                <option value="Annual">Dec</option>
              </select>
            </div>

        

            {/* Soil Type (optional) */}
            <div>
              <label className="text-sm font-medium text-gray-700"> Soil Type (Optional)</label>
              <select name="soil" className="mt-1 p-2 border rounded w-full">
                <option value="">Select Soil Type</option>
                <option value="Alluvial">Alluvial</option>
                <option value="Black">Black</option>
                <option value="Red">Red</option>
                <option value="Laterite">Laterite</option>
                <option value="Sandy">Sandy</option>
                <option value="Clay">Clay</option>
              </select>
            </div>

            {/* Crop Preference (optional) */}
            <div>
              <label className="text-sm font-medium text-gray-700"> Crop Preference (Optional)</label>
              <Input type="text" name="cropPref" placeholder="e.g. Rice, Wheat" className="mt-1" />
            </div>

            {/* Irrigation Availability (optional) */}
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-gray-700"> Irrigation Availability</label>
              <select name="irrigation" className="mt-1 p-2 border rounded w-full">
                <option value="">Select Irrigation Type</option>
                <option value="Rainfed">Rainfed</option>
                <option value="Canal">Canal</option>
                <option value="Tube well">Tube well</option>
                <option value="Drip">Drip</option>
              </select>
            </div>

            {/* Submit */}
            <div className="md:col-span-2 flex justify-center mt-4">
              <Button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform"
              >
                🌾 Get Recommendation
              </Button>
            </div>
          </form>

          {/* Result */}
          {result && (
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="shadow-lg rounded-2xl">
                <CardContent className="p-6 text-center space-y-4">
                  {result.image && (
                    <Image
                      src={result.image}
                      alt={result.crop}
                      width={100}
                      height={100}
                      className="mx-auto rounded-full shadow-lg"
                    />
                  )}
                  <h2 className="text-2xl font-bold text-green-700">{result.crop}</h2>
                  <p className="text-gray-600">{result.reason}</p>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </div>
       <ChatAssistant />
      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 relative z-10">
        SIH 2025
      </footer>
    </main>
  );
}
