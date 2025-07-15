import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
  Repeat,
} from "lucide-react";

// Stats Data
export const statsData = [
  {
    value: "50K+",
    label: "Active Users",
  },
  {
    value: "$2B+",
    label: "Transactions Tracked",
  },
  {
    value: "99.9%",
    label: "Uptime",
  },
  {
    value: "4.9/5",
    label: "User Rating",
  },
];

// Features Data
export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "AI-Powered Analytics",
    description:
      "Unlock deep insights into your financial behavior with real-time, AI-driven analytics.",
  },
  {
    icon: <Receipt className="h-8 w-8 text-blue-600" />,
    title: "Smart Receipt Scanner",
    description:
      "Snap and upload receipts to automatically extract, sort, and save expense data instantly.",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "Budget Planning",
    description: 
      "Plan and monitor budgets with AI recommendations tailored to your lifestyle and goals.",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "Multi-Account Support",
    description: "Manage multiple accounts and credit cards in one place",
  },
  {
    icon: <Repeat className="h-8 w-8 text-blue-600" />,
    title: "Recurring Expense Tracking",
    description: 
      "Identify and manage subscriptions and repeating expenses with ease and clarity.",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Automated Financial Insights",
    description: 
      "Get proactive alerts, tips, and recommendations based on your spending patterns and habits.",
  },
];

// How It Works Data
export const howItWorksData = [
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "1. Create Your Account",
    description:
      "Sign up securely in just a few clicks and set up your financial profile in minutes.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "2. Connect & Track",
    description:
      "Link your bank accounts and cards to automatically track and categorize your expenses in real-time.",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "3. Unlock Smart Insights",
    description:
      "Gain personalized, AI-driven insights to optimize your budget, reduce overspending, and meet your financial goals.",
  },
];

// Testimonials Data
export const testimonialsData = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    quote:
      "ExpensIQ completely changed how I handle my business finances. The AI-driven insights helped me uncover spending patterns and cut costs effortlessly.",
  },
  {
    name: "Michael Chen",
    role: "Freelancer",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    quote:
      "The smart receipt scanner has saved me hours every week. No more manual tracking—just scan, sync, and focus on my creative work.",
  },
  {
    name: "Emily Rodriguez",
    role: "Financial Advisor",
    image: "https://randomuser.me/api/portraits/women/74.jpg",
    quote:
      "ExpensIQ is my go-to recommendation for clients. Its multi-currency support, automated reports, and intuitive dashboard are a game-changer for serious investors.",
  },
];
