import { useState } from "react";
import { ArrowLeft, Gift, Star, Check, X, ShoppingBag, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
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
  badge?: string;
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
    features: ["20V Li-Ion Akku", "LED-Arbeitsleuchte", "2-Gang Getriebe", "Schnellspannbohrfutter", "Umfangreiches Bit-Set", "Transportkoffer inklusive"],
    badge: "Bestseller"
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
    features: ["35mm² Querschnitt", "Vollkupfer-Leitungen", "Isolierte Zangen", "3m Kabellänge", "TÜV geprüft"],
    badge: "TÜV Geprüft"
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
    features: ["1080p Full HD", "WiFi Übertragung", "G-Sensor", "Parküberwachung", "Loop-Aufzeichnung", "Smartphone App"],
    badge: "Premium"
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
    features: ["55cm Handgepäck", "4 Rollen-System", "TSA-Schloss", "Polypropylen-Schale", "Disney Design", "Ausziehgriff"],
    badge: "Limitiert"
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
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen adac-gradient">
      {/* Professional Header */}
      <header className="glass-effect border-b border-white/20 sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <ArrowLeft className="w-5 h-5 text-foreground" />
              </button>
              <div className="flex items-center gap-3">
                <img src={adacLogo} alt="ADAC Logo" className="h-8 w-auto" />
                <div className="h-6 w-px bg-white/30"></div>
                <span className="text-lg font-medium text-foreground">online-shop</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="hidden sm:flex">
                <ShoppingBag className="w-3 h-3 mr-1" />
                Jubiläums-Shop
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 lg:mb-6 leading-tight">
            122 Jahre ADAC
            <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mt-2">
              Ein Grund zum Feiern!
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-foreground/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Anlässlich unseres 122. Jubiläums möchten wir uns bei unseren treuen Mitgliedern und Kunden bedanken
          </p>
        </div>

        {/* Premium Gift Section */}
        <div className="glass-effect rounded-3xl p-6 lg:p-10 mb-12 lg:mb-16 border border-white/20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-2xl mb-4">
              <Gift className="w-8 h-8 text-foreground" />
            </div>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Exklusive Jubiläums-Geschenke
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6 text-foreground/90">
              <p className="text-base lg:text-lg leading-relaxed">
                Seit 122 Jahren steht der ADAC seinen Mitgliedern zur Seite. Als Zeichen unserer Dankbarkeit 
                für Ihr Vertrauen und Ihre Treue, haben wir eine exklusive Auswahl hochwertiger Produkte 
                zusammengestellt, die wir Ihnen <strong className="text-foreground">völlig kostenlos</strong> als Geschenk anbieten.
              </p>
              
              <div className="glass-effect rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-adac-orange mr-2" />
                  <span className="font-semibold text-lg text-foreground">
                    100% KOSTENLOS - Keine versteckten Kosten
                  </span>
                </div>
              </div>

              <div className="bg-white/90 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-adac-orange mt-0.5 flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-medium text-gray-800 mb-1">Wichtiger Hinweis:</p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Jeder Kunde kann <strong>ein (1)</strong> kostenloses Geschenk aus 
                      unserer exklusiven Jubiläums-Kollektion auswählen. Wählen Sie sorgfältig 
                      das Geschenk aus, das Ihnen am besten gefällt.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <Gift className="w-4 h-4 text-foreground" />
                <span className="text-sm font-medium">Kostenlose Geschenke</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium">📦 Kostenloser Versand</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-adac-orange rounded-full"></div>
                <span className="text-sm font-medium">🏆 122 Jahre Erfahrung</span>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section Header */}
        <div className="text-center mb-10 lg:mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-2xl mb-6">
            <span className="text-3xl">🎉</span>
          </div>
          <h2 className="font-display text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-4">
            Wählen Sie Ihr kostenloses Jubiläums-Geschenk
          </h2>
          <p className="text-base lg:text-lg text-foreground/80 max-w-2xl mx-auto">
            Hochwertige Produkte aus verschiedenen Kategorien - speziell für Sie ausgewählt
          </p>
        </div>

        {/* Professional Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="professional-card cursor-pointer group"
              onClick={() => handleProductClick(product)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <Badge className="bg-black text-white text-xs font-medium">
                    Verfügbar
                  </Badge>
                </div>
                {product.badge && (
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-adac-orange text-white text-xs font-medium">
                      {product.badge}
                    </Badge>
                  </div>
                )}
              </div>
              
              <div className="p-5 lg:p-6">
                <div className="mb-3">
                  <Badge variant="outline" className="text-xs mb-2">
                    {product.category}
                  </Badge>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm lg:text-base leading-tight line-clamp-2">
                    {product.name}
                  </h3>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600 font-medium">
                    {product.rating}
                  </span>
                  <span className="text-xs text-gray-400">
                    ({product.reviews})
                  </span>
                </div>

                <Button className="w-full gift-button text-white font-semibold py-2.5 text-sm group-hover:shadow-lg">
                  <Gift className="w-4 h-4 mr-2" />
                  Dieses Geschenk wählen
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Product Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={handleCloseModal}>
        <DialogContent className="max-w-4xl bg-white p-0 overflow-hidden z-50 border-0">
          {selectedProduct && (
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-6 lg:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {selectedProduct.category}
                      </Badge>
                      {selectedProduct.badge && (
                        <Badge className="bg-adac-orange text-white text-xs">
                          {selectedProduct.badge}
                        </Badge>
                      )}
                    </div>
                    <h2 className="font-display text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                      {selectedProduct.name}
                    </h2>
                  </div>
                  <button
                    onClick={handleCloseModal}
                    className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <Button 
                  onClick={() => handleSelectGift(selectedProduct)}
                  className="w-full gift-button text-white font-bold py-4 mb-6 text-base"
                >
                  <Gift className="w-5 h-5 mr-2" />
                  Dieses Geschenk auswählen
                </Button>

                <div className="flex items-center gap-3 mb-6">
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
                  <span className="font-semibold text-gray-900">
                    {selectedProduct.rating}
                  </span>
                  <span className="text-sm text-gray-500">
                    ({selectedProduct.reviews} Bewertungen)
                  </span>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {selectedProduct.description}
                </p>

                <div>
                  <h3 className="font-display text-lg font-semibold text-gray-900 mb-4">Eigenschaften:</h3>
                  <ul className="space-y-3">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:w-1/2 relative">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent lg:hidden"></div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Shop;