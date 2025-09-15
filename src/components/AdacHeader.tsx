import adacLogo from "@/assets/adac-logo.svg";

const AdacHeader = () => {
  return (
    <header className="w-full">
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="flex justify-center mb-8">
          <img 
            src={adacLogo} 
            alt="ADAC Logo" 
            className="h-16 md:h-20 w-auto"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          122 Jahre ADAC
        </h1>
        <p className="text-xl md:text-2xl text-foreground font-medium">
          Ein Grund zum Feiern!
        </p>
      </div>
    </header>
  );
};

export default AdacHeader;