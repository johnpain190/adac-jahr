import { memo } from "react";
import AdacHeader from "@/components/AdacHeader";
import AnniversaryCardOptimized from "@/components/AnniversaryCardOptimized";

const Index = memo(() => {
  return (
    <div className="min-h-screen adac-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AdacHeader />
        
        <main className="flex justify-center items-start pb-8 sm:pb-16 lg:pb-24">
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
            <AnniversaryCardOptimized />
          </div>
        </main>
      </div>
    </div>
  );
});

export default Index;
