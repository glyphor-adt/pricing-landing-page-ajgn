import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Code, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section
      className={cn(
        'py-24 md:py-32 lg:py-48 bg-background text-foreground',
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            Unlock Your Potential with Our Platform
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8">
            Learn, Build, and Innovate. Join a community of creators and take
            your skills to the next level.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Explore Courses <BookOpen className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="mt-12 flex justify-center space-x-4">
            <Button variant="secondary" size="sm">
                Learn More <Rocket className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="secondary" size="sm">
                View Code <Code className="ml-2 h-4 w-4" />
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;