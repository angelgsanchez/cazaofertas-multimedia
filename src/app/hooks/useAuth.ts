// Ruta: src/hooks/useAuth.ts
import { useState, useEffect } from "react";

export const useAuth = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const checkUser = () => {
      const savedUser = localStorage.getItem("user_session");
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      } else {
        setUser(null);
      }
    };

    checkUser();
    window.addEventListener("storage", checkUser);
    return () => window.removeEventListener("storage", checkUser);
  }, []);

  const getAvatarContent = () => {
    if (!user) return { char: "", color: "bg-gray-500" };
    const name = user.name || user.email;
    const char = name.charAt(0).toUpperCase();

    const colors: { [key: string]: string } = {
      A: "bg-red-500", B: "bg-blue-500", C: "bg-green-500", D: "bg-yellow-600",
      E: "bg-purple-500", F: "bg-pink-500", G: "bg-indigo-500", H: "bg-orange-500",
      J: "bg-[#e91e63]", 
    };

    return { char, color: colors[char] || "bg-primary" };
  };

  const logout = () => {
    localStorage.removeItem("user_session");
    window.location.href = "/"; // Redirigir al inicio
  };

  return { user, avatar: getAvatarContent(), logout };
};