import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Gift, Shield, Check, Truck, Award, Star } from "lucide-react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTextFading, setIsTextFading] = useState(false);
  const navigate = useNavigate();

  const loadingSteps = [
    { text: "Anmeldung wird verarbeitet...", icon: Shield, color: "text-gray-700" },
    { text: "Sicherheitsprüfung läuft...", icon: Check, color: "text-gray-800" },
    { text: "Jubiläums-Katalog wird geladen...", icon: Gift, color: "text-black" },
    { text: "Geschenke werden vorbereitet...", icon: Award, color: "text-gray-700" },
    { text: "Versandoptionen werden geprüft...", icon: Truck, color: "text-gray-800" },
    { text: "Finalisierung...", icon: Star, color: "text-black" }
  ];

  const updateText = useCallback(() => {
    setIsTextFading(true);
    setTimeout(() => {
      setCurrentTextIndex(prev => (prev + 1) % loadingSteps.length);
      setIsTextFading(false);
    }, 300);
  }, [loadingSteps.length]);

  useEffect(() => {
    // Slower progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 1.5 + 0.5; // Much slower speed
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            navigate('/shop');
          }, 1200);
          return 100;
        }
        return newProgress;
      });
    }, 120); // Slower interval

    // Text rotation
    const textInterval = setInterval(updateText, 2200); // Slower text changes

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [navigate, updateText]);

  const currentStep = loadingSteps[currentTextIndex];
  const IconComponent = currentStep.icon;

  return (
    <div className="min-h-screen adac-gradient flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements - matching landing page */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-20 h-20 bg-black rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-black rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '5s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-black rounded-full animate-bounce" style={{ animationDelay: '3s', animationDuration: '6s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-black rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '4.5s' }}></div>
      </div>

      <div className="text-center relative z-10 px-6 max-w-lg mx-auto">
        {/* Main Loading Circle */}
        <div className="relative mb-12 animate-fade-in">
          <div className="w-40 h-40 mx-auto relative">
            {/* Outer glow ring - black theme */}
            <div className="absolute inset-0 rounded-full bg-black/10 animate-pulse"></div>
            
            {/* Progress ring */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="rgba(0,0,0,0.15)"
                strokeWidth="3"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="rgba(0,0,0,0.8)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 45}`}
                strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                className="transition-all duration-500 ease-out"
              />
            </svg>
            
            {/* Center content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className={`mb-2 transition-all duration-300 ${currentStep.color}`}>
                  <IconComponent className="w-8 h-8 mx-auto animate-pulse" />
                </div>
                <div className="text-2xl font-bold text-black">
                  {Math.round(progress)}%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="w-full max-w-sm mx-auto mb-6">
            <div className="h-3 bg-black/10 rounded-full overflow-hidden backdrop-blur-sm">
              <div 
                className="h-full bg-black transition-all duration-700 ease-out rounded-full relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Loading Text */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className={`transition-all duration-300 ${isTextFading ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'}`}>
            <p className="text-lg font-semibold text-black mb-2">
              {currentStep.text}
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-black/50">
              <div className="w-1 h-1 bg-black/40 rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-black/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1 h-1 bg-black/40 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>

        {/* Status Indicators */}
        <div className="grid grid-cols-3 gap-4 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          {loadingSteps.slice(0, 3).map((step, index) => {
            const StepIcon = step.icon;
            const isActive = currentTextIndex === index;
            const isCompleted = currentTextIndex > index;
            
            return (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className={`
                  w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300
                  ${isCompleted ? 'bg-black shadow-lg shadow-black/25' : 
                    isActive ? 'bg-black/80 shadow-lg shadow-black/25 animate-pulse' : 
                    'bg-black/20 backdrop-blur-sm'}
                `}>
                  <StepIcon className={`w-5 h-5 ${isCompleted ? 'text-white' : isActive ? 'text-white' : 'text-black/60'}`} />
                </div>
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${isCompleted ? 'bg-black' : isActive ? 'bg-black/80 animate-pulse' : 'bg-black/20'}`}></div>
              </div>
            );
          })}
        </div>

        {/* Completion Message */}
        {progress >= 100 && (
          <div className="mt-8 animate-fade-in">
            <div className="glass-effect rounded-2xl p-6 border border-black/20 bg-white/20">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Check className="w-6 h-6 text-black" />
                <span className="text-lg font-semibold text-black">Abgeschlossen!</span>
              </div>
              <p className="text-sm text-black/70">
                Weiterleitung zum Geschenke-Shop...
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;