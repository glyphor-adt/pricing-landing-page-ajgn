import React from "react";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle"; // Assuming you have a ModeToggle component
import { Toaster } from "@/components/ui/toaster";

const App: React.FC = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen bg-background text-foreground font-sans">
        <div className="container mx-auto px-4 py-8">
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold tracking-tight">My Landing Page</h1>
            <ModeToggle />
          </header>
          <main>{children}</main>
          <footer className="mt-12 py-4 text-center text-muted-foreground border-t">
            &copy; {new Date().getFullYear()} My Company. All rights reserved.
          </footer>
        </div>
      </div>
      <Toaster />
    </ThemeProvider>
  );
};

export default App;