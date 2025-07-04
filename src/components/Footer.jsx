import React from "react";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white py-6 text-center text-sm text-gray-600 border-t border-indigo-200">
      <p className="flex items-center justify-center gap-1">
        Built  by <span className="font-semibold text-indigo-700">Meda Suneel</span>
      </p>
      <p className="mt-1">© {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  );
}
