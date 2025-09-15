"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const navItems = [
  { name: "Home", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
 { name: "Records", href: "/records" },
  { name: "Disease Prediction", href: "/disease" }, // 🌿 New Section
];


  return (
    <nav className="sticky top-0 z-50 bg-green-100 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold text-white-700">
        Smart AI Crop Advisor
        </h1>

        {/* Nav Links */}
        <div className="flex gap-8">
          {navItems.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <Link
                href={item.href}
                className="relative text-green-800 font-medium hover:text-green-600 transition"
              >
                {item.name}
                {/* Underline hover effect */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </nav>
  );
}
