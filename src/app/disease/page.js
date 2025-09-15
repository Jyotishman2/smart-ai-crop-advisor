"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DiseasePrediction() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setResult(null); // clear previous result
    }
  };

  const handlePrediction = () => {
    // Mock result — replace later with AI model
    setResult({
      disease: "Leaf Blight",
      solution: "Use copper-based fungicides\n Avoid water logging\n Ensure proper crop spacing",
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-green-200 flex flex-col items-center py-10 px-4">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-green-700 mb-2 flex items-center gap-2">
        🌿 Disease Prediction
      </h1>
      <p className="text-gray-600 mb-8 text-center">
        Upload or capture a leaf image to detect plant diseases using AI.
      </p>

      {/* Upload Card */}
      <Card className="w-full max-w-2xl shadow-xl rounded-2xl">
        <CardContent className="p-8 flex flex-col items-center space-y-6">
          {/* Upload box */}
          <label
            htmlFor="file-upload"
            className="w-full h-40 border-2 border-dashed border-green-400 rounded-xl flex flex-col justify-center items-center cursor-pointer hover:bg-green-50 transition"
          >
            <span className="text-green-600 font-medium">📷 Click or Drag & Drop</span>
            <span className="text-sm text-gray-500">Leaf image (JPG/PNG)</span>
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={handleImageUpload}
          />

          {/* Image Preview */}
          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-48 h-48 relative rounded-xl overflow-hidden shadow-lg"
            >
              <Image src={image} alt="Leaf" fill className="object-cover" />
            </motion.div>
          )}

          {/* Predict Button */}
          <Button
            onClick={handlePrediction}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
             Predict Disease
          </Button>

          {/* Result */}
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full bg-green-50 border border-green-200 rounded-xl p-6 shadow-md text-center"
            >
              <h2 className="text-xl font-bold text-red-600 mb-2">
                 Detected: {result.disease}
              </h2>
              <p className="text-gray-700 whitespace-pre-line">{result.solution}</p>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
