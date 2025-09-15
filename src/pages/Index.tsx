import AdacHeader from "@/components/AdacHeader";
import AnniversaryCard from "@/components/AnniversaryCard";

const Index = () => {
  return (
    <div className="min-h-screen adac-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AdacHeader />
        
        <main className="flex justify-center items-start pb-8 sm:pb-16">
          <div className="w-full max-w-sm sm:max-w-md">
            <AnniversaryCard />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
