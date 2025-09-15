import AdacHeader from "@/components/AdacHeader";
import AnniversaryCard from "@/components/AnniversaryCard";

const Index = () => {
  return (
    <div className="min-h-screen adac-gradient">
      <div className="container mx-auto px-4">
        <AdacHeader />
        
        <main className="flex justify-center items-center pb-16">
          <AnniversaryCard />
        </main>
      </div>
    </div>
  );
};

export default Index;
