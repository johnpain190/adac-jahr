import { memo } from "react";
import adacLogo from "@/assets/adac-logo.svg";

const AdacHeader = memo(() => {
  return (
    <header className="w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 text-center">
        <div className="flex justify-center mb-8">
          <img 
            src={adacLogo} 
            alt="ADAC Logo" 
            className="h-16 md:h-20 lg:h-24 w-auto"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
          />
        </div>
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
          122 Jahre ADAC
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-foreground font-medium">
          Ein Grund zum Feiern!
        </p>
      </div>
    </header>
  );
});

export default AdacHeader;