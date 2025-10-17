import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const SplashScreen = () => {
  const [visible, setVisible] = useState(true);
  const [removing, setRemoving] = useState(false);

  useEffect(() => {
    // Start fade out after 1.4s
    const fadeTimer = setTimeout(() => {
      setRemoving(true);
    }, 1400);

    // Complete removal after 2.4s
    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 2400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-1000 ${
        removing ? "opacity-0" : "opacity-100"
      }`}
    >
      <img
        src={logo}
        alt="World of Nuts"
        className="w-40 sm:w-52 md:w-64 animate-fade-in-scale"
      />
    </div>
  );
};

export default SplashScreen;
