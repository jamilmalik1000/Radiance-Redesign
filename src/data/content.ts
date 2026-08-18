import {
  BatteryCharging,
  Building2,
  Camera,
  Factory,
  Flame,
  Home,
  Lightbulb,
  ShieldCheck,
  SunMedium,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import residentialSolar from "../assets/stock/residential-solar.jpg";
import commercialSolar from "../assets/stock/commercial-solar.jpg";
import industrialSolar from "../assets/generated/future-infrastructure-concept.jpg";
import inverterStorage from "../assets/stock/inverter-storage.jpg";
import securitySmartHome from "../assets/stock/security-smart-home.jpg";
import smartAutomation from "../assets/stock/smart-automation.jpg";
import fireSafety from "../assets/stock/fire-safety.jpg";
export const contact = {
  phoneDisplay: "0322 5566555",
  phone: "tel:+923225566555",
  whatsappDisplay: "0320 5422223",
  whatsapp:
    "https://wa.me/923205422223?text=Hello%20Radiance%20Tek%2C%20I%20would%20like%20a%20consultation.",
  email: "info@radiancetek.com.pk",
  address: "2nd Floor, 30 Giga, Downtown Rd, Sector A, DHA Phase II, Islamabad",
  hours: "Monday–Saturday, 9:00 am–5:00 pm",
};
export type Solution = {
  slug: string;
  title: string;
  range: string;
  ideal: string;
  description: string;
  benefits: string[];
  icon: LucideIcon;
  image: string;
  imageAlt: string;
};
export const solutions: Solution[] = [
  {
    slug: "residential-solar",
    title: "Residential solar",
    range: "5–25 kW",
    ideal: "Homes of all sizes",
    description:
      "Grid-tied or hybrid systems designed around household energy requirements.",
    benefits: [
      "Lower grid dependence",
      "Hybrid backup option",
      "Net-metering compatible",
    ],
    icon: Home,
    image: residentialSolar,
    imageAlt: "Solar panels installed on a residential rooftop",
  },
  {
    slug: "commercial-solar",
    title: "Commercial solar",
    range: "25–100 kW",
    ideal: "Offices, schools, hospitals & restaurants",
    description:
      "Tailored systems that help businesses manage energy costs and operational demand.",
    benefits: [
      "Designed for site demand",
      "Operational cost control",
      "Professional installation",
    ],
    icon: Building2,
    image: commercialSolar,
    imageAlt: "Rooftop solar panels representing commercial solar systems",
  },
  {
    slug: "industrial-solar",
    title: "Industrial solar",
    range: "100 kW–2 MW+",
    ideal: "Factories, warehouses & large facilities",
    description:
      "Large-scale systems engineered to match the requirements of industrial operations.",
    benefits: [
      "Large-load capability",
      "Site-specific design",
      "Maintenance support",
    ],
    icon: Factory,
    image: industrialSolar,
    imageAlt:
      "Concept visualization of large-scale solar and connected energy infrastructure",
  },
];
export type Service = {
  slug: string;
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
  color: string;
  image: string;
  imageAlt: string;
};
export const services: Service[] = [
  {
    slug: "solar-energy",
    title: "Solar & energy solutions",
    description: "Connected generation, storage and e-mobility infrastructure.",
    items: [
      "Hybrid solar",
      "Off-grid solar",
      "Solar tube wells",
      "Solar streetlights",
      "Battery energy storage systems (BESS)",
      "EV chargers",
      "Net metering",
      "Electrical services",
      "Fabrication",
      "Support services",
    ],
    icon: SunMedium,
    color: "gold",
    image: commercialSolar,
    imageAlt: "Solar panels forming part of an integrated energy system",
  },
  {
    slug: "security-access-control",
    title: "Security & access control",
    description:
      "Integrated protection and controlled movement for modern sites.",
    items: [
      "CCTV cameras",
      "Electric security fencing",
      "Intrusion detection",
      "Biometric access control",
      "Gate automation",
      "Boom gates",
      "Electronic article surveillance",
    ],
    icon: ShieldCheck,
    color: "cyan",
    image: securitySmartHome,
    imageAlt: "Connected security and smart-home monitoring devices",
  },
  {
    slug: "smart-home-automation",
    title: "Smart-home automation",
    description:
      "Responsive controls for comfort, efficiency and everyday access.",
    items: [
      "Environment control",
      "Energy conservation",
      "Smart panels and switches",
      "Gate automation",
      "Automated doorbells",
    ],
    icon: Lightbulb,
    color: "amber",
    image: smartAutomation,
    imageAlt: "Smart-home controls, lighting and connected devices",
  },
  {
    slug: "fire-safety",
    title: "Fire safety & firefighting",
    description:
      "Detection, alerting and first-response equipment for safer properties.",
    items: [
      "Addressable & conventional fire alarms",
      "Fire sprinkler systems",
      "Fire hose reels",
      "Fire detectors",
      "Smoke detectors",
      "Gas-leakage detectors",
      "CO₂ fire extinguishers",
      "DCP fire extinguishers",
    ],
    icon: Flame,
    color: "amber",
    image: fireSafety,
    imageAlt: "Wall-mounted fire alarm representing fire-safety systems",
  },
];
export const products = [
  {
    title: "Solar panels",
    text: "Photovoltaic cells convert sunlight into direct-current electricity.",
    icon: SunMedium,
    image: residentialSolar,
    imageAlt: "Photovoltaic solar panels on a rooftop",
  },
  {
    title: "Inverters",
    text: "Inverters convert DC electricity into AC power used by homes and businesses.",
    icon: Zap,
    image: inverterStorage,
    imageAlt:
      "Technician working with a solar inverter and storage installation",
  },
  {
    title: "Batteries",
    text: "Energy storage makes generated power available when sunlight is unavailable.",
    icon: BatteryCharging,
    image: inverterStorage,
    imageAlt: "Battery storage and inverter equipment during installation",
  },
];
export const testimonials = [
  {
    name: "Syed Owais Bokhari",
    quote:
      "Excellent and personalised service with outstanding products. The best part is the after-sales service, with a dedicated team to address queries.",
  },
  {
    name: "Asif Hussain",
    quote:
      "I had a 10 kW system installed about six months ago. I had a great experience with the company and installation team; they worked professionally and used good-quality products.",
  },
  {
    name: "Adil Ali",
    quote:
      "It was an outstanding experience dealing with Radiance Tek for solar installation. A professional technical team—highly recommended for solar solutions.",
  },
  {
    name: "Abdur Rauf",
    quote:
      "The staff and management are cooperative, responsible and technically sound. Their response is quick and they provide doorstep service when required.",
  },
];
export const articles = [
  {
    slug: "why-winter-solar-pakistan",
    title: "Why winter can be a smart time to consider solar",
    category: "Solar education",
    date: "Archive article",
    excerpt:
      "Understanding winter generation, net metering and practical maintenance considerations.",
  },
  {
    slug: "solar-battery-guide",
    title: "Lithium-ion vs lead-acid solar batteries",
    category: "Energy storage",
    date: "Archive article",
    excerpt:
      "A plain-language look at two common battery chemistries and their trade-offs.",
  },
  {
    slug: "solar-jobs-pakistan",
    title: "How solar can support job opportunities in Pakistan",
    category: "Industry",
    date: "Archive article",
    excerpt:
      "How manufacturing, installation, maintenance, sales and training connect to solar growth.",
  },
];
export const cities = [
  "Islamabad",
  "Rawalpindi",
  "Peshawar",
  "Karachi",
  "Sialkot",
  "Lahore",
];
export const divisions = [
  { label: "Energy generation", icon: SunMedium },
  { label: "Energy storage", icon: BatteryCharging },
  { label: "EV charging", icon: Zap },
  { label: "Smart infrastructure", icon: Camera },
];
