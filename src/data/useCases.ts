import { UseCase } from "./types";

export const useCases: UseCase[] = [
  {
    id: "energy-monitoring",
    slug: "energy-monitoring",
    title: "Real-Time Energy Monitoring for Manufacturing",
    shortDescription:
      "Deployed a multi-site energy monitoring system with RS485/Modbus sensors, real-time dashboards, and automated alerting — reducing energy costs by 18%.",
    industry: "Manufacturing",
    challenge:
      "A manufacturing company with 3 facilities had no visibility into energy consumption patterns. Monthly utility bills were high but they couldn't identify waste or optimize usage.",
    solution:
      "We deployed energy meters connected via RS485/Modbus to edge gateways, streaming data to a ThingsBoard dashboard. Automated alerts notify operators of anomalies, and scheduled reports track consumption trends.",
    results: [
      "18% reduction in energy costs within 6 months",
      "Real-time visibility across all 3 sites from a single dashboard",
      "Automated alerts reduced response time from hours to minutes",
      "ROI achieved within 4 months",
    ],
    servicesUsed: ["industrial-iot", "thingsboard-hosting"],
  },
  {
    id: "factory-automation",
    slug: "factory-automation",
    title: "Factory Machine Status Monitoring",
    shortDescription:
      "Built a real-time machine status monitoring system using OPC UA and Node-RED, enabling predictive maintenance and reducing unplanned downtime by 35%.",
    industry: "Industrial Automation",
    challenge:
      "A factory with 50+ machines had no centralized monitoring. Operators relied on manual checks and machines often failed without warning, causing costly production delays.",
    solution:
      "We connected machines via OPC UA to Node-RED flows, aggregating status data into a ThingsBoard dashboard with real-time alerts and maintenance scheduling.",
    results: [
      "35% reduction in unplanned downtime",
      "Centralized monitoring of 50+ machines",
      "Predictive maintenance scheduling based on real data",
      "Operator efficiency improved by 25%",
    ],
    servicesUsed: ["industrial-iot", "nodered-hosting", "thingsboard-hosting"],
  },
  {
    id: "smart-home",
    slug: "smart-home-integration",
    title: "Luxury Smart Home Integration",
    shortDescription:
      "Designed and integrated a complete smart home system covering lighting, climate, security, and energy monitoring for a 300m² modern residence.",
    industry: "Residential",
    challenge:
      "A homeowner had purchased multiple smart devices from different brands but they didn't work together. There was no unified control and automations were unreliable.",
    solution:
      "We unified all devices under Home Assistant, created custom automations for lighting scenes, climate scheduling, and security. A wall-mounted dashboard and mobile app provide full control.",
    results: [
      "All devices unified under a single platform",
      "30% energy savings through smart scheduling",
      "One-touch scenes for different times of day",
      "Remote monitoring and control via mobile app",
    ],
    servicesUsed: ["smart-home-iot"],
  },
];

export const getUseCaseBySlug = (slug: string): UseCase | undefined =>
  useCases.find((u) => u.slug === slug);
