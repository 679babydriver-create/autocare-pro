import { Car, Fuel, Wrench, DollarSign, Shield, Bell, BarChart3, Zap, Calendar, Settings } from 'lucide-react'

export const FEATURES = [
  {
    icon: Car,
    title: 'Vehicle Management',
    description: 'Manage multiple vehicles with detailed specifications and information.',
  },
  {
    icon: Fuel,
    title: 'Fuel Tracking',
    description: 'Monitor fuel consumption and analyze fuel economy trends.',
  },
  {
    icon: Calendar,
    title: 'Maintenance Scheduler',
    description: 'Never miss a service with intelligent maintenance reminders.',
  },
  {
    icon: Wrench,
    title: 'Repair History',
    description: 'Keep detailed records of all repairs with invoices and photos.',
  },
  {
    icon: DollarSign,
    title: 'Expense Tracking',
    description: 'Track all vehicle-related expenses with categorization.',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Receive timely alerts for maintenance, insurance, and more.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'View comprehensive reports and insights about your vehicles.',
  },
  {
    icon: Zap,
    title: 'Predictive Maintenance',
    description: 'Get AI-powered predictions for upcoming maintenance needs.',
  },
  {
    icon: Shield,
    title: 'Insurance Management',
    description: 'Track policy details and renewal dates effortlessly.',
  },
  {
    icon: Settings,
    title: 'Cloud Backup',
    description: 'All your data is securely backed up in the cloud.',
  },
]

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Create an Account',
    description: 'Sign up with your email and create a secure account.',
  },
  {
    step: 2,
    title: 'Add Your Vehicle',
    description: 'Enter your vehicle details including make, model, and VIN.',
  },
  {
    step: 3,
    title: 'Track Services & Fuel',
    description: 'Record maintenance, repairs, and fuel consumption.',
  },
  {
    step: 4,
    title: 'Receive Reminders',
    description: 'Get notified about upcoming maintenance and insurance renewals.',
  },
  {
    step: 5,
    title: 'View Reports',
    description: 'Analyze your vehicle data with detailed analytics and reports.',
  },
]

export const TESTIMONIALS = [
  {
    name: 'James Mitchell',
    role: 'Car Enthusiast',
    content: 'AutoCare Pro has transformed how I maintain my vehicles. No more missed services!',
    avatar: '👨‍💼',
  },
  {
    name: 'Sarah Johnson',
    role: 'Fleet Manager',
    content: 'Managing 50+ vehicles has never been easier. The analytics are incredibly insightful.',
    avatar: '👩‍💼',
  },
  {
    name: 'Michael Chen',
    role: 'Business Owner',
    content: 'The predictive maintenance feature has saved us thousands in unexpected repairs.',
    avatar: '👨‍💼',
  },
  {
    name: 'Emma Williams',
    role: 'Daily Commuter',
    content: 'Love how intuitive the app is. Tracking fuel economy has helped me save money.',
    avatar: '👩‍🦱',
  },
]

export const FAQ_ITEMS = [
  {
    question: 'How many vehicles can I manage?',
    answer: 'You can manage unlimited vehicles on AutoCare Pro. There are no restrictions on the number of vehicles you add to your account.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, all your data is encrypted and stored securely in the cloud with industry-standard security measures.',
  },
  {
    question: 'Can I export my data?',
    answer: 'Absolutely! You can export all your reports as PDF or CSV files for backup or sharing.',
  },
  {
    question: 'Does AutoCare Pro work offline?',
    answer: 'The web app requires an internet connection, but we\'re developing an offline-capable mobile app.',
  },
  {
    question: 'How accurate are the predictive maintenance alerts?',
    answer: 'Our predictions are based on manufacturer guidelines, your driving patterns, and historical data. Accuracy improves over time.',
  },
  {
    question: 'Is there a mobile app?',
    answer: 'Currently, AutoCare Pro is web-based and responsive for mobile browsers. Native apps are in development.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers for subscription payments.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription anytime without penalties. Your data will be preserved for 30 days.',
  },
]

export const PRICING_PLANS = [
  {
    name: 'Basic',
    price: '$4.99',
    period: 'per month',
    features: [
      'Up to 2 vehicles',
      'Basic fuel tracking',
      'Service reminders',
      'Expense tracking',
      'Basic analytics',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$9.99',
    period: 'per month',
    features: [
      'Up to 10 vehicles',
      'Advanced fuel tracking',
      'Predictive maintenance',
      'Repair history',
      'Advanced analytics',
      'Insurance management',
      'Cloud backup',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'per year',
    features: [
      'Unlimited vehicles',
      'Advanced fuel tracking',
      'Predictive maintenance',
      'Full repair history',
      'Advanced analytics',
      'Insurance management',
      'Cloud backup',
      'Priority 24/7 support',
      'Custom integrations',
      'Dedicated account manager',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]
