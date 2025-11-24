import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideQuote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  avatarUrl: string;
  testimonial: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'John Doe',
    title: 'CEO, Company A',
    avatarUrl: 'https://ui-avatars.com/api/?name=John+Doe',
    testimonial:
      'This product has completely transformed our workflow.  We\'ve seen a significant increase in productivity and our team loves it. Highly recommended!',
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Marketing Manager, Company B',
    avatarUrl: 'https://ui-avatars.com/api/?name=Jane+Smith',
    testimonial:
      'The customer support is outstanding.  Any time we have a question, they are quick to respond and provide helpful solutions.  A truly great company to work with.',
  },
  {
    id: 3,
    name: 'Peter Jones',
    title: 'Software Engineer, Company C',
    avatarUrl: 'https://ui-avatars.com/api/?name=Peter+Jones',
    testimonial:
      'The ease of integration with our existing systems was a huge selling point for us.  It saved us a lot of time and resources. A fantastic product!',
  },
  {
    id: 4,
    name: 'Alice Brown',
    title: 'Project Manager, Company D',
    avatarUrl: 'https://ui-avatars.com/api/?name=Alice+Brown',
    testimonial:
      'We were struggling with [problem], but this solution completely solved it. We are incredibly grateful for the efficiency and effectiveness of the platform.',
  },
];


const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-12 bg-secondary/50 dark:bg-secondary/30">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8 text-primary dark:text-primary-foreground">
          What Our Customers Are Saying
        </h2>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent className="-ml-1 md:ml-0">
            {testimonialsData.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 px-2 md:px-4">
                <Card className="h-full bg-card text-card-foreground shadow-md dark:bg-card/80">
                  <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 text-left">
                      <CardTitle className="text-sm font-medium">{testimonial.name}</CardTitle>
                      <CardDescription className="text-xs text-muted-foreground">
                        {testimonial.title}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="py-4 text-sm">
                    <LucideQuote className="inline-block w-4 h-4 text-muted-foreground mr-2" />
                    {testimonial.testimonial}
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;