const AdacHeader = () => {
  return (
    <header className="w-full">
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-6xl md:text-7xl font-black text-foreground mb-4 tracking-tight">
          ADAC
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          122 Jahre ADAC
        </h2>
        <p className="text-xl md:text-2xl text-foreground font-medium">
          Ein Grund zum Feiern!
        </p>
      </div>
    </header>
  );
};

export default AdacHeader;