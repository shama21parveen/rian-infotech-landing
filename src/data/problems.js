import { ChartNoAxesCombined, Clock, Rocket, ShieldAlert, Unplug } from "lucide-react";

export const problems = [
  {
    icon: Clock,
    motion: "spin",
    tone: "paper",
    title: "Manual work eats your week",
    text: "Teams copy data between tools, chase approvals and repeat the same tasks every day. Growth slows because people are busy, not productive.",
    chips: ["Copy-paste", "Spreadsheets", "Follow-ups", "Reports"],
  },
  {
    icon: Unplug,
    motion: "shake",
    tone: "brand",
    title: "Tools that don't talk to each other",
    text: "CRM, support, billing and analytics live in separate silos. Nobody has one clear picture of the business.",
    chips: ["CRM", "Billing", "Support", "Analytics"],
  },
  {
    icon: Rocket,
    motion: "launch",
    tone: "accent",
    title: "Products that ship too slowly",
    text: "Great ideas get stuck in long build cycles, unclear scope and technical debt, while competitors move faster.",
    chips: ["Delays", "Scope creep", "Tech debt"],
  },
  {
    icon: ChartNoAxesCombined,
    motion: "shake",
    tone: "surface",
    title: "Decisions run on stale data",
    text: "Teams wait for reports, export CSVs and debate different numbers. By the time the signal is clear, the moment has already moved.",
    chips: ["Dashboards", "CSV exports", "Forecasts", "KPIs"],
  },
  {
    icon: ShieldAlert,
    motion: "spin",
    tone: "mint",
    title: "Quality breaks as work scales",
    text: "Small process gaps become missed checks, support noise and fragile releases. Growth adds pressure before the system is ready.",
    chips: ["QA gaps", "Incidents", "Handoffs", "Rework"],
  },
];
