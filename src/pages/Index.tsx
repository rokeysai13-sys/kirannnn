import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    window.location.href = import.meta.env.BASE_URL + "portfolio.html";
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <p className="text-muted-foreground">Redirecting to portfolio...</p>
      </div>
    </div>
  );
};

export default Index;
