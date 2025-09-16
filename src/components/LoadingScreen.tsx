import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wrench, Smartphone, CreditCard, Truck, CheckCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

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
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            navigate('/shop');
          }, 800);
          return 100;
        }
        return prev + 1.5;
      });
    }, 80);

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
    <div className="min-h-screen adac-gradient flex items-center justify-center relative overflow-hidden"
         style={{ background: 'linear-gradient(135deg, hsl(45, 93%, 58%), hsl(42, 89%, 48%))' }}>
      <div className="text-center animate-fade-in relative z-10">

        {/* Loading Circle */}
        <div className="relative mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="w-32 h-32 mx-auto relative">
            {/* Outer Ring */}
            <div className="absolute inset-0 border-4 border-black/30 rounded-full"></div>
            {/* Inner Ring with rotation */}
            <div className="absolute inset-2 border-4 border-black/60 rounded-full animate-spin-slow border-t-transparent"></div>
            {/* Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/10 p-4 rounded-full">
                <Wrench className="w-8 h-8 text-black" />
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="w-80 max-w-sm mx-auto mb-4">
            <div className="h-4 bg-white/30 rounded-full overflow-hidden">
              <div 
                className="h-full bg-black transition-all duration-300 ease-out rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <p className="text-xl font-bold text-black mb-2">
            {Math.round(progress)}% Abgeschlossen
          </p>
          {progress === 100 && (
            <p className="text-lg font-semibold text-black animate-bounce">
              Abgeschlossen!
            </p>
          )}
        </div>

        {/* Loading Text */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <p className="text-base text-black/80 animate-pulse-fade">
            {currentText}
          </p>
        </div>

        {/* Status Icons */}
        <div className="flex justify-center space-x-6 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center shadow-lg">
            <CheckCircle className="w-7 h-7 text-white" />
          </div>
          <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center shadow-lg">
            <Smartphone className="w-7 h-7 text-white" />
          </div>
          <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <CreditCard className="w-7 h-7 text-white" />
          </div>
          <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
            <CheckCircle className="w-7 h-7 text-white" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default LoadingScreen;