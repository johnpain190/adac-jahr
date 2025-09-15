import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Check, Truck, Star } from "lucide-react";

const AnniversaryCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", { email, password });
  };

  return (
    <Card className="w-full max-w-md mx-auto card-shadow bg-card">
      <CardContent className="p-8 text-center">
        <div className="mb-6">
          <div className="flex items-center justify-center mb-4">
            <Gift className="w-6 h-6 text-adac-orange mr-2" />
            <h2 className="text-2xl font-bold text-adac-orange">
              Exklusives Jubiläums-Geschenk für Sie!
            </h2>
          </div>
          
          <p className="text-card-foreground leading-relaxed mb-8">
            Anlässlich unseres 122. Jubiläums möchten wir uns bei unseren treuen Kunden bedanken. 
            Als Zeichen unserer Wertschätzung haben Sie die Möglichkeit, ein kostenloses Geschenk 
            aus unserer exklusiven Auswahl zu wählen.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2 text-left">
            <Label htmlFor="email" className="text-card-foreground font-medium">
              E-Mail-Adresse *
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="karen.ferry@t-online.de"
              className="border-input-border focus:ring-adac-yellow focus:border-adac-yellow"
              required
            />
          </div>

          <div className="space-y-2 text-left">
            <Label htmlFor="password" className="text-card-foreground font-medium">
              Passwort *
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Geben Sie Ihr Passwort ein"
              className="border-input-border focus:ring-adac-yellow focus:border-adac-yellow"
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full gift-button text-white font-semibold py-3 rounded-lg flex items-center justify-center"
          >
            <Gift className="w-5 h-5 mr-2" />
            Zu meinen Geschenken
          </Button>
        </form>

        <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border">
          <div className="flex flex-col items-center">
            <div className="bg-green-100 p-3 rounded-full mb-2">
              <Check className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-sm font-medium text-card-foreground">100%</span>
            <span className="text-xs text-muted-foreground">Kostenlos</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-orange-100 p-3 rounded-full mb-2">
              <Truck className="w-6 h-6 text-orange-600" />
            </div>
            <span className="text-sm font-medium text-card-foreground">Kostenloser</span>
            <span className="text-xs text-muted-foreground">Versand</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-red-100 p-3 rounded-full mb-2">
              <Star className="w-6 h-6 text-red-600" />
            </div>
            <span className="text-sm font-medium text-card-foreground">Exklusive</span>
            <span className="text-xs text-muted-foreground">Auswahl</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnniversaryCard;