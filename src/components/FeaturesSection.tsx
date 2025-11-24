import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, ShieldCheck, Lightbulb } from "lucide-react";

const features = [
  {
    title: "Global Reach",
    description:
      "Connect with customers worldwide. Our platform supports multiple languages and currencies, ensuring seamless transactions and communication.",
    icon: <Globe size={48} className="text-primary" />,
  },
  {
    title: "Secure & Reliable",
    description:
      "Your security is our top priority. We use industry-leading encryption and security measures to protect your data and prevent unauthorized access.",
    icon: <ShieldCheck size={48} className="text-primary" />,
  },
  {
    title: "Innovative Solutions",
    description:
      "Stay ahead of the competition with our cutting-edge features and innovative solutions. We are constantly evolving to meet the changing needs of our users.",
    icon: <Lightbulb size={48} className="text-primary" />,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-12 bg-secondary/10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-gray-100">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-md border-none">
              <CardHeader className="space-y-2 text-center">
                {feature.icon}
                <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Intentionally left empty, description already in header for simplicity */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;