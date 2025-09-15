import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import adacLogo from "@/assets/adac-logo.svg";

const Index = () => {
  return (
    <div className="min-h-screen adac-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="w-full pt-12 pb-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <img 
                src={adacLogo} 
                alt="ADAC Logo" 
                className="h-16 md:h-20 w-auto"
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              122 Jahre ADAC
            </h1>
            <p className="text-xl md:text-2xl text-foreground font-medium mb-8">
              Ein Grund zum Feiern!
            </p>
            <Link to="/mein-adac">
              <Button className="gift-button text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Zu meinen Geschenken
              </Button>
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Index;
