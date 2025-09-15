import { useState } from "react";
import { ArrowLeft, Gift, Star, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import adacLogo from "@/assets/adac-logo.svg";
import drillImage from "@/assets/drill.jpg";
import compressorImage from "@/assets/compressor.jpg";
import jumperCablesImage from "@/assets/jumper-cables.jpg";
import jumpstarterImage from "@/assets/jumpstarter.jpg";
import dashcamImage from "@/assets/dashcam.jpg";
import hoodieImage from "@/assets/hoodie.jpg";
import cookwareImage from "@/assets/cookware.jpg";
import suitcaseImage from "@/assets/suitcase.jpg";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  features: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Mannesmann Elektronik Akkubohrschrauber Set",
    category: "Werkzeug",
    image: drillImage,
    rating: 4.7,
    reviews: 156,
    description: "Professioneller Akkubohrschrauber mit 20V Li-Ion Akku. Perfekt für alle Schraubarbeiten am Fahrzeug und in der Werkstatt. Inklusive umfangreichem Zubehör-Set.",
    features: ["20V Li-Ion Akku", "LED-Arbeitsleuchte", "2-Gang Getriebe", "Schnellspannbohrfutter", "Umfangreiches Bit-Set", "Transportkoffer inklusive"]
  },
  {
    id: 2,
    name: "Kompressor 10bar",
    category: "Luftdruck",
    image: compressorImage,
    rating: 4.5,
    reviews: 89,
    description: "Kompakter 12V Kompressor für schnelles Aufpumpen von Reifen. Digitale Druckanzeige und automatische Abschaltung.",
    features: ["12V Anschluss", "Digitale Anzeige", "Auto-Stop Funktion", "Verschiedene Aufsätze", "3m Anschlusskabel"]
  },
  {
    id: 3,
    name: "Starthilfekabel SKS 35",
    category: "Starthilfe",
    image: jumperCablesImage,
    rating: 4.8,
    reviews: 234,
    description: "Professionelles Starthilfekabel für Fahrzeuge bis 35mm². Vollkupfer-Leitungen für optimale Stromübertragung.",
    features: ["35mm² Querschnitt", "Vollkupfer-Leitungen", "Isolierte Zangen", "3m Kabellänge", "TÜV geprüft"]
  },
  {
    id: 4,
    name: "AEG Jumpstarter USB-C Li-Ion Akku 3x 4000 mA",
    category: "Starthilfe",
    image: jumpstarterImage,
    rating: 4.6,
    reviews: 127,
    description: "Mobiler Jumpstarter mit 12000 mAh Kapazität. Startet Fahrzeuge bis 3L Benzin oder 2.5L Diesel. Mit USB-C und kabelloser Ladefunktion.",
    features: ["12000 mAh Kapazität", "USB-C Schnellladung", "LED-Taschenlampe", "Kabellose Ladefunktion", "Sicherheitsschutz", "Kompakte Bauweise"]
  },
  {
    id: 5,
    name: "Nextbase Piqo 1K Dash Cam",
    category: "Dashcam",
    image: dashcamImage,
    rating: 4.9,
    reviews: 89,
    description: "Ultra-kompakte Dashcam mit 1080p Aufzeichnung. WiFi Übertragung und G-Sensor für automatische Unfallaufzeichnung.",
    features: ["1080p Full HD", "WiFi Übertragung", "G-Sensor", "Parküberwachung", "Loop-Aufzeichnung", "Smartphone App"]
  },
  {
    id: 6,
    name: "ADAC Luftrettung Kapuzenjacke Herzlinie",
    category: "Bekleidung",
    image: hoodieImage,
    rating: 4.7,
    reviews: 156,
    description: "Hochwertige Kapuzenjacke mit ADAC Luftrettung Design. 80% Baumwolle, 20% Polyester für optimalen Tragekomfort.",
    features: ["80% Baumwolle", "Kängurutasche", "Herzlinie Design", "Verschiedene Größen", "Pflegeleicht", "ADAC Luftrettung Logo"]
  },
  {
    id: 7,
    name: "Brunner Topfset Terralta",
    category: "Camping",
    image: cookwareImage,
    rating: 4.6,
    reviews: 78,
    description: "Komplettes Camping-Kochset aus eloxiertem Aluminium. Antihaftbeschichtung und stapelbare Konstruktion für platzsparende Aufbewahrung.",
    features: ["Eloxiertes Aluminium", "Antihaftbeschichtung", "Stapelbar", "Hitzebeständige Griffe", "Spülmaschinenfest", "Inkl. Transportbeutel"]
  },
  {
    id: 8,
    name: "Samsonite Trolley Wavebreaker Disney 55",
    category: "Reisegepäck",
    image: suitcaseImage,
    rating: 4.8,
    reviews: 142,
    description: "Handgepäck-Trolley im Disney Design. 4 Rollen, TSA-Schloss und robuste Polypropylen-Schale für sicheres Reisen.",
    features: ["55cm Handgepäck", "4 Rollen-System", "TSA-Schloss", "Polypropylen-Schale", "Disney Design", "Ausziehgriff"]
  }
];

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleSelectGift = (product: Product) => {
    console.log("Gift selected:", product.name);
    // Handle gift selection logic here
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen adac-gradient">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-black/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <ArrowLeft className="w-6 h-6 text-foreground" />
            <div className="flex items-center gap-2">
              <img src={adacLogo} alt="ADAC Logo" className="h-8 w-auto" />
              <span className="text-lg font-semibold text-foreground">online-shop</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Main Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            122 Jahre ADAC - Ein Grund zum Feiern!
          </h1>
          <p className="text-lg text-foreground mb-8 max-w-4xl mx-auto">
            Anlässlich unseres 122. Jubiläums möchten wir uns bei unseren treuen Mitgliedern und Kunden bedanken
          </p>
        </div>

        {/* Gift Section */}
        <div className="bg-adac-yellow-dark/20 rounded-2xl p-6 md:p-8 mb-8">
          <div className="flex items-center justify-center mb-4">
            <Gift className="w-6 h-6 text-foreground mr-2" />
            <h2 className="text-2xl font-bold text-foreground">
              Exklusive Jubiläums-Geschenke
            </h2>
          </div>
          
          <div className="text-center mb-6">
            <p className="text-foreground mb-4 leading-relaxed">
              Seit 122 Jahren steht der ADAC seinen Mitgliedern zur Seite. Als Zeichen unserer Dankbarkeit 
              für Ihr Vertrauen und Ihre Treue, haben wir eine exklusive Auswahl hochwertiger Produkte 
              zusammengestellt, die wir Ihnen <strong>völlig kostenlos</strong> als Geschenk anbieten.
            </p>
            <p className="text-foreground mb-6">
              Diese symbolischen Geschenke sind unsere Art, "Danke" zu sagen - für 122 Jahre 
              gemeinsame Fahrt, für Ihr Vertrauen in schwierigen Situationen und für Ihre Loyalität über all die 
              Jahre hinweg.
            </p>
            
            <div className="bg-adac-yellow-dark/30 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-center mb-2">
                <span className="text-2xl mr-2">✨</span>
                <span className="font-bold text-foreground">
                  Alle Produkte sind 100% KOSTENLOS - Keine versteckten Kosten, nur unsere Dankbarkeit
                </span>
                <span className="text-2xl ml-2">✨</span>
              </div>
            </div>
          </div>

          <div className="bg-white/90 rounded-xl p-4 mb-6">
            <p className="text-sm text-gray-700">
              <strong>Wichtiger Hinweis:</strong> Jeder Kunde kann <strong>ein (1)</strong> kostenloses Geschenk aus 
              unserer exklusiven Jubiläums-Kollektion auswählen. Wählen Sie sorgfältig 
              das Geschenk aus, das Ihnen am besten gefällt.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-foreground rounded-full mr-2"></div>
              <Gift className="w-4 h-4 mr-1" />
              <span>Kostenlose Geschenke</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
              <span>📦 Kostenloser Versand</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-adac-orange rounded-full mr-2"></div>
              <span>🏆 122 Jahre Erfahrung</span>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <span className="text-2xl mr-2">🎉</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Wählen Sie Ihr kostenloses Jubiläums-Geschenk
            </h2>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => handleProductClick(product)}
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded-full text-xs">
                  Verfügbar
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-1 text-sm leading-tight">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-600 mb-2">{product.category}</p>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600 ml-1">
                    {product.rating} ({product.reviews} Bewertungen)
                  </span>
                </div>

                <Button className="w-full gift-button text-white font-semibold py-2 text-xs">
                  <Gift className="w-3 h-3 mr-1" />
                  Dieses Geschenk wählen
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={handleCloseModal}>
        <DialogContent className="max-w-2xl bg-white p-0 overflow-hidden z-50">
          {selectedProduct && (
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">
                      {selectedProduct.name}
                    </h2>
                    <p className="text-sm text-gray-600">{selectedProduct.category}</p>
                  </div>
                  <button
                    onClick={handleCloseModal}
                    className="text-gray-400 hover:text-gray-600 p-1"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <Button 
                  onClick={() => handleSelectGift(selectedProduct)}
                  className="w-full gift-button text-white font-bold py-3 mb-4"
                >
                  <Gift className="w-4 h-4 mr-2" />
                  Dieses Geschenk auswählen
                </Button>

                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(selectedProduct.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    {selectedProduct.rating} ({selectedProduct.reviews} Bewertungen)
                  </span>
                </div>

                <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                  {selectedProduct.description}
                </p>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Eigenschaften:</h3>
                  <ul className="space-y-2">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="md:w-1/2">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Shop;