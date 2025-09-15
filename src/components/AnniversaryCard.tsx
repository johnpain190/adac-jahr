import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Check, Truck, Star } from "lucide-react";
import LoadingScreen from "./LoadingScreen";

const AnniversaryCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setIsLoading(true);
      // Simulate form processing
      console.log("Form submitted:", { email, password });
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Card className="w-full card-shadow bg-card">
      <CardContent className="p-6 sm:p-8 text-center">
        <div className="mb-6">
          <div className="flex items-center justify-center mb-4">
            <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-adac-orange mr-2" />
            <h2 className="text-lg sm:text-2xl font-bold text-adac-orange leading-tight">
              Exklusives Jubiläums-Geschenk für Sie!
            </h2>
          </div>
          
          <p className="text-sm sm:text-base text-card-foreground leading-relaxed mb-6 sm:mb-8 px-2">
            Anlässlich unseres 122. Jubiläums möchten wir uns bei unseren treuen Kunden bedanken. 
            Als Zeichen unserer Wertschätzung haben Sie die Möglichkeit, ein kostenloses Geschenk 
            aus unserer exklusiven Auswahl zu wählen.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          <div className="space-y-2 text-left">
            <Label htmlFor="email" className="text-xs sm:text-sm font-semibold text-card-foreground uppercase tracking-wide">
              E-Mail-Adresse *
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 sm:h-12 px-3 sm:px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-adac-yellow focus:border-adac-yellow transition-colors duration-200 bg-white text-gray-900 text-sm sm:text-base"
              required
            />
          </div>

          <div className="space-y-2 text-left">
            <Label htmlFor="password" className="text-xs sm:text-sm font-semibold text-card-foreground uppercase tracking-wide">
              Passwort *
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-11 sm:h-12 px-3 sm:px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-adac-yellow focus:border-adac-yellow transition-colors duration-200 bg-white text-gray-900 text-sm sm:text-base"
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full gift-button text-white font-bold py-3 sm:py-4 h-12 sm:h-14 rounded-lg flex items-center justify-center text-sm sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 mt-6"
          >
            <Gift className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
            Zu meinen Geschenken
          </Button>
        </form>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border">
          <div className="flex flex-col items-center">
            <div className="bg-green-100 p-2 sm:p-3 rounded-full mb-1 sm:mb-2">
              <Check className="w-4 h-4 sm:w-6 sm:h-6 text-green-600" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-card-foreground">100%</span>
            <span className="text-xs text-muted-foreground">Kostenlos</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-orange-100 p-2 sm:p-3 rounded-full mb-1 sm:mb-2">
              <Truck className="w-4 h-4 sm:w-6 sm:h-6 text-orange-600" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-card-foreground">Kostenloser</span>
            <span className="text-xs text-muted-foreground">Versand</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-red-100 p-2 sm:p-3 rounded-full mb-1 sm:mb-2">
              <Star className="w-4 h-4 sm:w-6 sm:h-6 text-red-600" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-card-foreground">Exklusive</span>
            <span className="text-xs text-muted-foreground">Auswahl</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnniversaryCard;