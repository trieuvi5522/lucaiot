import { Service } from "./types";

export const services: Service[] = [
  {
    id: "nodered-hosting",
    slug: "nodered-hosting",
    title: "Node-RED Hosting",
    group: "hosting",
    shortDescription:
      "Managed Node-RED instances for IoT flow automation. Deploy, scale, and monitor your flows without worrying about infrastructure.",
    bulletPoints: [
      "Fully managed cloud instances with 99.9% uptime",
      "Pre-installed industrial nodes (Modbus, OPC UA, MQTT)",
      "Automated backups and one-click restore",
    ],
    heroText:
      "Focus on building automation flows, not managing servers. Our managed Node-RED hosting gives you production-ready instances with industrial protocol support out of the box.",
    targetUsers: [
      "Automation engineers needing reliable Node-RED infrastructure",
      "System integrators building IoT solutions for clients",
      "Small businesses automating processes without DevOps overhead",
    ],
    painPoints: [
      "Self-hosting Node-RED is time-consuming and fragile",
      "Scaling flows across multiple sites is complex",
      "No built-in backup or disaster recovery",
    ],
    includedScope: [
      "Dedicated cloud instance",
      "SSL/TLS encryption",
      "Daily automated backups",
      "Custom domain support",
      "Email & chat support",
      "Pre-installed palette of industrial nodes",
    ],
    technicalCapabilities: [
      "Node-RED v3.x latest stable",
      "Modbus TCP/RTU, OPC UA, MQTT, HTTP nodes",
      "PostgreSQL / InfluxDB integrations",
      "Dashboard UI included",
      "Git-based version control for flows",
    ],
    processSteps: [
      { title: "Select Plan", description: "Choose a hosting plan that fits your workload." },
      { title: "Provision", description: "Your instance is live within minutes." },
      { title: "Configure", description: "Import flows and configure connections." },
      { title: "Operate", description: "We handle uptime, backups, and updates." },
    ],
    pricingType: "public_packages",
    pricingPlans: [
      {
        name: "Starter",
        price: "$15",
        period: "/month",
        features: ["1 vCPU / 1GB RAM", "5GB storage", "Community nodes", "Daily backups", "Email support"],
        ctaText: "Get Started",
      },
      {
        name: "Professional",
        price: "$35",
        period: "/month",
        features: ["2 vCPU / 2GB RAM", "20GB storage", "Industrial nodes included", "Hourly backups", "Priority support", "Custom domain"],
        highlighted: true,
        ctaText: "Get Started",
      },
      {
        name: "Enterprise",
        price: "$75",
        period: "/month",
        features: ["4 vCPU / 4GB RAM", "50GB storage", "Full node library", "Real-time replication", "Dedicated support", "SLA guarantee"],
        ctaText: "Contact Us",
      },
    ],
    faq: [
      { question: "Can I migrate my existing flows?", answer: "Yes. Export your flows as JSON and import them directly into your hosted instance." },
      { question: "What Node-RED version do you run?", answer: "We always run the latest stable v3.x release with security patches applied within 48 hours." },
      { question: "Is there a free trial?", answer: "We offer a 7-day free trial on the Starter plan. No credit card required." },
    ],
    relatedServiceIds: ["thingsboard-hosting", "industrial-iot"],
    relatedUseCaseIds: ["energy-monitoring", "factory-automation"],
  },
  {
    id: "thingsboard-hosting",
    slug: "thingsboard-hosting",
    title: "ThingsBoard Hosting (PE/CE)",
    group: "hosting",
    shortDescription:
      "Managed ThingsBoard platform for device management, dashboards, and data visualization. Professional and Community editions available.",
    bulletPoints: [
      "Production-ready ThingsBoard PE or CE instances",
      "Custom dashboard design and configuration support",
      "Scalable from 100 to 100,000+ devices",
    ],
    heroText:
      "Enterprise-grade IoT platform without the infrastructure headache. Get ThingsBoard Professional or Community Edition fully managed, so you can focus on building dashboards and connecting devices.",
    targetUsers: [
      "Companies needing device management at scale",
      "Energy management providers",
      "Smart building operators and facility managers",
    ],
    painPoints: [
      "ThingsBoard self-hosting requires deep DevOps expertise",
      "Upgrading between versions risks data loss",
      "Performance tuning for large device fleets is complex",
    ],
    includedScope: [
      "Managed ThingsBoard PE or CE instance",
      "Database management (PostgreSQL + Cassandra/TimescaleDB)",
      "SSL certificates and domain configuration",
      "Platform upgrades with zero downtime",
      "Dashboard design consultation",
      "Technical support via email and chat",
    ],
    technicalCapabilities: [
      "ThingsBoard PE v3.x or CE latest",
      "MQTT, CoAP, HTTP, LwM2M device APIs",
      "Rule engine with 50+ built-in nodes",
      "White-labeling (PE only)",
      "Integration with external systems via REST API",
    ],
    processSteps: [
      { title: "Choose Edition", description: "Select PE or CE based on your feature requirements." },
      { title: "Deploy", description: "We provision your instance with optimized configuration." },
      { title: "Onboard Devices", description: "Connect your devices using MQTT, HTTP, or CoAP." },
      { title: "Build Dashboards", description: "Create real-time dashboards with our support." },
    ],
    pricingType: "public_packages",
    pricingPlans: [
      {
        name: "Community",
        price: "$25",
        period: "/month",
        features: ["CE edition", "2 vCPU / 4GB RAM", "Up to 500 devices", "10GB storage", "Daily backups"],
        ctaText: "Get Started",
      },
      {
        name: "Professional",
        price: "$65",
        period: "/month",
        features: ["PE edition", "4 vCPU / 8GB RAM", "Up to 5,000 devices", "50GB storage", "White-labeling", "Priority support"],
        highlighted: true,
        ctaText: "Get Started",
      },
      {
        name: "Enterprise",
        price: "$120",
        period: "/month",
        features: ["PE edition", "8 vCPU / 16GB RAM", "Unlimited devices", "200GB storage", "HA cluster", "Dedicated engineer", "SLA"],
        ctaText: "Contact Us",
      },
    ],
    faq: [
      { question: "What is the difference between PE and CE?", answer: "PE includes white-labeling, advanced RBAC, scheduler, and integrations. CE is open-source with core features." },
      { question: "Can I upgrade from CE to PE?", answer: "Yes. We handle the migration with minimal downtime and no data loss." },
      { question: "Do you support custom widgets?", answer: "Absolutely. We can develop custom widgets or help you build your own." },
    ],
    relatedServiceIds: ["nodered-hosting", "industrial-iot"],
    relatedUseCaseIds: ["energy-monitoring", "smart-home"],
  },
  {
    id: "industrial-iot",
    slug: "industrial-iot-solutions",
    title: "Industrial IoT Solutions",
    group: "service",
    shortDescription:
      "End-to-end design and implementation of industrial IoT systems — from sensor to cloud. Modbus, OPC UA, RS485, and more.",
    bulletPoints: [
      "Protocol expertise: RS485, Modbus, OPC UA, MQTT, TCP/IP",
      "Custom dashboard design for monitoring & alerting",
      "Full lifecycle: design → deploy → maintain",
    ],
    heroText:
      "Bridge the gap between your industrial equipment and the cloud. We design and deploy IoT systems that give you real-time visibility into your operations with reliable, industrial-grade protocols.",
    targetUsers: [
      "Factory and plant managers seeking operational visibility",
      "Energy companies monitoring distributed assets",
      "Facility managers optimizing building systems",
    ],
    painPoints: [
      "Legacy equipment lacks connectivity",
      "No centralized view of operations across sites",
      "Downtime and faults detected too late",
      "Data silos between OT and IT systems",
    ],
    includedScope: [
      "Site assessment and system architecture design",
      "Hardware selection and procurement guidance",
      "Communication protocol implementation",
      "Cloud platform setup and integration",
      "Custom dashboard and alert system",
      "Commissioning and handover",
      "Post-deployment support and maintenance",
    ],
    technicalCapabilities: [
      "RS485, Modbus RTU/TCP, OPC UA, BACnet",
      "MQTT, HTTP, WebSocket cloud integration",
      "Edge gateways: Raspberry Pi, industrial PLCs, Teltonika",
      "Time-series databases: InfluxDB, TimescaleDB",
      "Visualization: ThingsBoard, Grafana, custom dashboards",
    ],
    processSteps: [
      { title: "Discovery", description: "Understand your operations, equipment, and goals." },
      { title: "Architecture", description: "Design the system topology, protocols, and data flow." },
      { title: "Implementation", description: "Deploy hardware, configure protocols, build dashboards." },
      { title: "Testing", description: "End-to-end validation and performance testing." },
      { title: "Handover", description: "Training, documentation, and ongoing support." },
    ],
    pricingType: "contact_for_quote",
    faq: [
      { question: "Do you work with legacy equipment?", answer: "Yes. We specialize in connecting legacy industrial devices using RS485, Modbus, and serial protocols." },
      { question: "Can you integrate with our existing SCADA?", answer: "Yes. We design systems that complement your existing infrastructure, not replace it." },
      { question: "What is the typical project timeline?", answer: "Most projects range from 4–12 weeks depending on scope and complexity." },
    ],
    relatedServiceIds: ["nodered-hosting", "thingsboard-hosting", "iot-consulting"],
    relatedUseCaseIds: ["energy-monitoring", "factory-automation"],
  },
  {
    id: "smart-home-iot",
    slug: "smart-home-iot-solutions",
    title: "Smart Home IoT Solutions",
    group: "service",
    shortDescription:
      "Design and integrate smart home systems for comfort, energy efficiency, and security. Tailored solutions for modern living.",
    bulletPoints: [
      "Custom smart home design tailored to your lifestyle",
      "Integration with popular platforms (Home Assistant, Tuya, etc.)",
      "Energy monitoring and automated scheduling",
    ],
    heroText:
      "Transform your home into an intelligent living space. From lighting and climate control to security and energy management — we design and integrate smart home systems that work seamlessly together.",
    targetUsers: [
      "Homeowners wanting integrated smart home systems",
      "Property developers adding smart features to new builds",
      "Tech enthusiasts seeking advanced home automation",
    ],
    painPoints: [
      "Too many disconnected smart devices",
      "No unified control or dashboard",
      "Complex setup with no professional support",
      "Energy waste from unoptimized systems",
    ],
    includedScope: [
      "Home assessment and requirements gathering",
      "System architecture and device selection",
      "Installation and integration",
      "Custom dashboard and mobile control setup",
      "User training and documentation",
      "Post-installation support",
    ],
    technicalCapabilities: [
      "Zigbee, Z-Wave, Wi-Fi, Bluetooth LE protocols",
      "Home Assistant, Tuya, SmartThings integration",
      "Energy monitoring with real-time dashboards",
      "Voice control via Alexa, Google Home",
      "Custom automation rules and scenes",
    ],
    processSteps: [
      { title: "Consultation", description: "Discuss your lifestyle needs and preferences." },
      { title: "Design", description: "Create a tailored smart home architecture." },
      { title: "Install", description: "Professional installation and integration." },
      { title: "Configure", description: "Set up automations, scenes, and dashboards." },
      { title: "Support", description: "Ongoing support and optimization." },
    ],
    pricingType: "contact_for_quote",
    faq: [
      { question: "Will this work with my existing devices?", answer: "We assess your current setup and integrate compatible devices into a unified system." },
      { question: "Do I need a hub?", answer: "It depends on your setup. We recommend the best approach based on your device ecosystem." },
      { question: "Can I control everything from my phone?", answer: "Yes. We set up mobile dashboards and voice control for complete remote access." },
    ],
    relatedServiceIds: ["iot-consulting"],
    relatedUseCaseIds: ["smart-home"],
  },
  {
    id: "iot-consulting",
    slug: "iot-consulting",
    title: "End-to-End IoT Consulting",
    group: "service",
    shortDescription:
      "Strategic IoT consulting from concept to deployment. Architecture design, technology selection, and project management for your IoT initiatives.",
    bulletPoints: [
      "Technology-agnostic architecture consulting",
      "Vendor evaluation and hardware selection",
      "Project planning, budgeting, and risk assessment",
    ],
    heroText:
      "Navigate the complexity of IoT with expert guidance. From feasibility studies to full deployment, we provide the strategic consulting you need to make your IoT projects succeed.",
    targetUsers: [
      "CTOs and IT directors planning IoT initiatives",
      "Startups building IoT products",
      "Enterprises modernizing legacy systems",
    ],
    painPoints: [
      "Unsure which IoT platform or protocol to choose",
      "Previous IoT projects failed or stalled",
      "Lack of in-house IoT expertise",
      "Need to validate a concept before investing",
    ],
    includedScope: [
      "Feasibility study and proof of concept",
      "Architecture and technology stack design",
      "Vendor and platform evaluation",
      "Project roadmap and milestone planning",
      "Budget estimation and ROI analysis",
      "Technical team mentoring and knowledge transfer",
    ],
    technicalCapabilities: [
      "Multi-protocol architecture (MQTT, HTTP, CoAP, LoRaWAN)",
      "Cloud platform evaluation (AWS IoT, Azure IoT, self-hosted)",
      "Edge computing strategy",
      "Security architecture and best practices",
      "Scalability and performance planning",
    ],
    processSteps: [
      { title: "Assessment", description: "Deep dive into your goals, constraints, and existing systems." },
      { title: "Strategy", description: "Develop a comprehensive IoT roadmap and architecture." },
      { title: "Validation", description: "Build a proof of concept to validate the approach." },
      { title: "Execution Support", description: "Guide implementation and provide ongoing advisory." },
    ],
    pricingType: "contact_for_quote",
    faq: [
      { question: "Do you only consult or also implement?", answer: "We do both. We can consult on strategy and also handle full implementation if needed." },
      { question: "What industries do you work with?", answer: "We work across manufacturing, energy, agriculture, smart buildings, and consumer IoT." },
      { question: "How long is a typical consulting engagement?", answer: "Engagements range from a 2-week assessment to multi-month advisory retainers." },
    ],
    relatedServiceIds: ["industrial-iot", "smart-home-iot"],
    relatedUseCaseIds: ["energy-monitoring", "factory-automation"],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);

export const hostingServices = services.filter((s) => s.group === "hosting");
export const customServices = services.filter((s) => s.group === "service");
