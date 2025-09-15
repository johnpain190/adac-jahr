import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wrench, Smartphone, CreditCard, Truck, CheckCircle } from "lucide-react";
import adacLogo from "@/assets/adac-logo.svg";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("Verbindung wird hergestellt...");
  const navigate = useNavigate();

  const loadingTexts = [
    "Verbindung wird hergestellt...",
    "Daten werden überprüft...",
    "Laden des Katalogs...",
    "Geschenke werden vorbereitet...",
    "Fast fertig..."
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 87) {
          clearInterval(progressInterval);
          // Navigate to shop after loading completes
          setTimeout(() => {
            navigate('/shop');
          }, 1000);
          return 87;
        }
        return prev + 2;
      });
    }, 100);

    const textInterval = setInterval(() => {
      setCurrentText(prev => {
        const currentIndex = loadingTexts.indexOf(prev);
        const nextIndex = (currentIndex + 1) % loadingTexts.length;
        return loadingTexts[nextIndex];
      });
    }, 1500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen adac-gradient flex items-center justify-center">
      <div className="text-center animate-fade-in">
        {/* ADAC Header */}
        <div className="mb-8 animate-fade-in-up">
          <div className="flex justify-center mb-4">
            <img 
              src={adacLogo} 
              alt="ADAC Logo" 
              className="h-16 md:h-20 w-auto"
            />
          </div>
          <p className="text-lg text-foreground font-medium">
            Fahrzeugausstattung & Zubehör
          </p>
        </div>

        {/* Loading Circle */}
        <div className="relative mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="w-24 h-24 mx-auto relative">
            {/* Outer Ring */}
            <div className="absolute inset-0 border-4 border-black/20 rounded-full"></div>
            {/* Inner Ring */}
            <div className="absolute inset-2 border-4 border-black/10 rounded-full animate-spin-slow"></div>
            {/* Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/10 p-3 rounded-full">
                <Wrench className="w-6 h-6 text-foreground" />
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="w-80 max-w-sm mx-auto bg-black/20 rounded-full h-2 mb-3">
            <div 
              className="bg-black h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-lg font-semibold text-foreground">
            {progress}% Abgeschlossen
          </p>
        </div>

        {/* Loading Text */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <p className="text-base text-foreground/80 animate-pulse-fade">
            {currentText}
          </p>
        </div>

        {/* Status Icons */}
        <div className="flex justify-center space-x-4 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
            <Smartphone className="w-6 h-6 text-white" />
          </div>
          <div className="w-12 h-12 bg-adac-orange rounded-full flex items-center justify-center animate-pulse">
            <CreditCard className="w-6 h-6 text-white" />
          </div>
          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;