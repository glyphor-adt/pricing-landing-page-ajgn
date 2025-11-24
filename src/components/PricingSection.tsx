import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon } from "@radix-ui/react-icons";

interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  buttonHref: string;
}

const pricingPlans: PricingPlan[] = [
  {
    title: "Basic",
    price: "$9",
    description: "Perfect for small projects.",
    features: [
      "1 User",
      "5 Projects",
      "Community Support",
    ],
    buttonText: "Get Started",
    buttonHref: "#",
  },
  {
    title: "Pro",
    price: "$29",
    description: "For growing teams.",
    features: [
      "5 Users",
      "Unlimited Projects",
      "Priority Support",
      "Advanced Analytics",
    ],
    isPopular: true,
    buttonText: "Upgrade to Pro",
    buttonHref: "#",
  },
  {
    title: "Enterprise",
    price: "$99",
    description: "For large organizations.",
    features: [
      "Unlimited Users",
      "Unlimited Projects",
      "24/7 Support",
      "Custom Integrations",
      "Dedicated Account Manager",
    ],
    buttonText: "Contact Us",
    buttonHref: "#",
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-12 bg-zinc-50 dark:bg-zinc-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
          Choose the Right Plan
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 mb-8">
          Start with our free plan and upgrade as you grow.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={plan.isPopular ? "border-2 border-primary" : ""}>
              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl font-bold">{plan.title}</CardTitle>
                <CardDescription className="text-zinc-500 dark:text-zinc-400">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-4xl font-extrabold">{plan.price}</div>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zinc-500 dark:text-zinc-400">
                      <CheckCircleIcon className="w-4 h-4 mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <a href={plan.buttonHref}>{plan.buttonText}</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;