import { lazy, Suspense, memo } from "react";

// Lazy load components for better performance
const AdacHeader = lazy(() => import("@/components/AdacHeader"));
const AnniversaryCardOptimized = lazy(() => import("@/components/AnniversaryCardOptimized"));

const Index = memo(() => {
  return (
    <div className="min-h-screen adac-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="h-24 animate-pulse bg-muted/20 rounded-lg mb-8"></div>}>
          <AdacHeader />
        </Suspense>
        
        <main className="flex justify-center items-start pb-8 sm:pb-16 lg:pb-24">
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
            <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20 rounded-lg"></div>}>
              <AnniversaryCardOptimized />
            </Suspense>
          </div>
        </main>
      </div>
    </div>
  );
});

export default Index;
