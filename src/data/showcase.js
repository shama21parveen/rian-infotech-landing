import {
  Inbox, Bot, MessageSquare, BarChart3,
  Users, Mail, Database,
  Package, Zap, Truck,
} from "lucide-react";

export const cases = [
  {
    id: "support",
    label: "AI Automation",
    title: "Smart support desk",
    text: "Incoming tickets are sorted, answered and escalated automatically, so agents only handle what truly needs a human.",
    nodes: [
      { icon: Inbox, label: "Ticket received", sub: "Email, chat and forms in one inbox" },
      { icon: Bot, label: "AI classifies and drafts", sub: "Intent, priority and a suggested reply" },
      { icon: MessageSquare, label: "Agent reviews", sub: "One click to approve or edit" },
      { icon: BarChart3, label: "Insights dashboard", sub: "Response times and trends, live" },
    ],
    metrics: [
      { value: "62%", label: "Faster replies" },
      { value: "3x", label: "Tickets per agent" },
      { value: "24/7", label: "Coverage" },
    ],
  },
  {
    id: "sales",
    label: "Custom Software",
    title: "Sales pipeline automation",
    text: "Leads are captured, scored and followed up without manual data entry, and the CRM always stays current.",
    nodes: [
      { icon: Users, label: "Lead captured", sub: "Website, ads and referrals" },
      { icon: Bot, label: "AI scores and enriches", sub: "Company data and buying intent" },
      { icon: Mail, label: "Follow-up sent", sub: "Personalised, right on time" },
      { icon: Database, label: "CRM updated", sub: "No copy-paste, no stale records" },
    ],
    metrics: [
      { value: "40%", label: "More qualified leads" },
      { value: "8h", label: "Saved weekly" },
      { value: "0", label: "Manual entries" },
    ],
  },
  {
    id: "inventory",
    label: "Product Development",
    title: "Inventory intelligence platform",
    text: "Stock levels, demand forecasts and reorders live in one platform, so shelves stay full and cash stays free.",
    nodes: [
      { icon: Package, label: "Stock synced", sub: "Every warehouse and store channel" },
      { icon: Zap, label: "Demand forecast", sub: "Seasonality and sales signals" },
      { icon: Truck, label: "Auto reorder", sub: "Suppliers notified at the right moment" },
      { icon: BarChart3, label: "Live dashboard", sub: "Stock health at a glance" },
    ],
    metrics: [
      { value: "35%", label: "Fewer stockouts" },
      { value: "2x", label: "Faster planning" },
      { value: "1", label: "Source of truth" },
    ],
  },
];