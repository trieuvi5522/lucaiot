export type Locale = "en" | "vi";

export interface TranslationStrings {
  /* Navigation */
  navHome: string;
  navAbout: string;
  navServices: string;
  navUseCases: string;
  navContact: string;

  /* CTA */
  primaryCTA: string;
  viewServices: string;
  startNow: string;
  readMore: string;
  learnMore: string;
  requestPlan: string;
  sendMessage: string;
  viewAllUseCases: string;
  viewPlans: string;
  contactForConsultation: string;
  bookConsultation: string;
  bookFreeConsultation: string;
  backToServices: string;
  backToUseCases: string;
  readCaseStudy: string;

  /* Home */
  homeHeroTitle: string;
  homeHeroHighlight: string;
  homeHeroDesc: string;
  homeHostingTitle: string;
  homeHostingSubtitle: string;
  homeHostingNote: string;
  homeServicesTitle: string;
  homeServicesSubtitle: string;
  homeServicesNote: string;
  homeWhoTitle: string;
  homeWhoSubtitle: string;
  homeProcessTitle: string;
  homeProcessSubtitle: string;
  homeExpertiseTitle: string;
  homeExpertiseSubtitle: string;
  homeUseCasesTitle: string;
  homeUseCasesSubtitle: string;
  homeCtaTitle: string;
  homeCtaDesc: string;

  /* Who I Help */
  whoIndividualTitle: string;
  whoIndividualDesc: string;
  whoBusinessTitle: string;
  whoBusinessDesc: string;
  whoTechnicalTitle: string;
  whoTechnicalDesc: string;

  /* Process Steps */
  processStep1Title: string; processStep1Desc: string;
  processStep2Title: string; processStep2Desc: string;
  processStep3Title: string; processStep3Desc: string;
  processStep4Title: string; processStep4Desc: string;
  processStep5Title: string; processStep5Desc: string;
  processStep6Title: string; processStep6Desc: string;

  /* Expertise */
  expertiseProtocolsTitle: string; expertiseProtocolsDesc: string;
  expertiseCloudTitle: string; expertiseCloudDesc: string;
  expertiseDashboardTitle: string; expertiseDashboardDesc: string;
  expertiseSecurityTitle: string; expertiseSecurityDesc: string;

  /* About */
  aboutHeroLabel: string;
  aboutGreeting: string;
  aboutIntro1: string;
  aboutIntro2: string;
  aboutFocusTitle: string;
  aboutFocus1: string; aboutFocus2: string; aboutFocus3: string;
  aboutFocus4: string; aboutFocus5: string; aboutFocus6: string;
  aboutExpertiseTitle: string;
  aboutProcessTitle: string;
  aboutProcessSubtitle: string;
  aboutWhyTitle: string;
  aboutCtaTitle: string;
  aboutCtaDesc: string;

  /* About - Process Steps */
  aboutStep1Title: string; aboutStep1Desc: string;
  aboutStep2Title: string; aboutStep2Desc: string;
  aboutStep3Title: string; aboutStep3Desc: string;
  aboutStep4Title: string; aboutStep4Desc: string;
  aboutStep5Title: string; aboutStep5Desc: string;
  aboutStep6Title: string; aboutStep6Desc: string;

  /* About - Why Work With Me */
  aboutWhy1Title: string; aboutWhy1Desc: string;
  aboutWhy2Title: string; aboutWhy2Desc: string;
  aboutWhy3Title: string; aboutWhy3Desc: string;
  aboutWhy4Title: string; aboutWhy4Desc: string;
  aboutWhy5Title: string; aboutWhy5Desc: string;
  aboutWhy6Title: string; aboutWhy6Desc: string;

  /* About - Skills */
  aboutSkills: string[];

  /* Services page */
  servicesHeroLabel: string;
  servicesHeroTitle: string;
  servicesHeroDesc: string;
  servicesHostingSubtitle: string;
  servicesHostingNote: string;
  servicesIotSubtitle: string;
  servicesIotNote: string;

  /* Use Cases page */
  useCasesHeroLabel: string;
  useCasesHeroTitle: string;
  useCasesHeroDesc: string;
  useCasesEmpty: string;

  /* Contact page */
  contactHeroLabel: string;
  contactHeroTitle: string;
  contactHeroDesc: string;
  contactDirectTitle: string;
  contactGuideTitle: string;
  contactGuide1: string; contactGuide2: string;
  contactGuide3: string; contactGuide4: string;
  contactThankTitle: string;
  contactThankDesc: string;
  contactSendAnother: string;
  contactFailedPrefix: string;
  contactRetryMsg: string;

  /* Service Detail */
  sdHosting: string;
  sdService: string;
  sdWhoFor: string;
  sdProblems: string;
  sdIncluded: string;
  sdCapabilities: string;
  sdProcess: string;
  sdPricingPlans: string;
  sdPricing: string;
  sdPricingCustom: string;
  sdPricingCustomDesc: string;
  sdFaq: string;
  sdRelated: string;
  sdRelatedServices: string;
  sdRelatedUseCases: string;
  sdCtaTitle: string;
  sdCtaDesc: string;
  sdNotFound: string;

  /* Use Case Detail */
  udChallenge: string;
  udSolution: string;
  udOutcomes: string;
  udServicesUsed: string;
  udCtaTitle: string;
  udCtaDesc: string;
  udNotFound: string;
  udTechHighlights: string;
  udFeature: string;
  udApproach: string;
  udBenefit: string;

  /* Form */
  formFullName: string;
  formEmail: string;
  formMessage: string;
  formMessagePlaceholder: string;
  formNotes: string;
  formNotesPlaceholder: string;
  formSending: string;

  /* Pricing Table */
  pricingFeatures: string;
  pricingMostPopular: string;

  /* Modal */
  modalRequestSent: string;
  modalThanks: string;
  modalGetBack: string;
  modalClose: string;
  modalContactDirectly: string;

  /* Footer */
  footerDesc: string;
  footerQuickLinks: string;
  footerContact: string;
}

const en: TranslationStrings = {
  navHome: "Home",
  navAbout: "About",
  navServices: "Services",
  navUseCases: "Use Cases",
  navContact: "Contact",

  primaryCTA: "Contact for Consultation",
  viewServices: "All Services",
  startNow: "Start",
  readMore: "Read More",
  learnMore: "Learn More",
  requestPlan: "Request this plan",
  sendMessage: "Send Message",
  viewAllUseCases: "View All Use Cases",
  viewPlans: "View all plans",
  contactForConsultation: "Book a free consultation",
  bookConsultation: "Book a Consultation",
  bookFreeConsultation: "Book a free consultation",
  backToServices: "All Services",
  backToUseCases: "All Use Cases",
  readCaseStudy: "Read case study",

  /* Home */
  homeHeroTitle: "Design End-to-End",
  homeHeroHighlight: "IoT Solutions",
  homeHeroDesc: "From industrial protocols to cloud dashboards — I work with you to design, deploy, and operate IoT systems that give you real-time visibility and device control.",
  homeHostingTitle: "Hosting",
  homeHostingSubtitle: "Managed cloud hosting for your IoT platforms — stable, secure, and ready to scale, so you can focus on building your solution.",
  homeHostingNote: "Transparent pricing for all hosting plans",
  homeServicesTitle: "IoT Services",
  homeServicesSubtitle: "End-to-end IoT design, deployment, and consulting tailored to your requirements.",
  homeServicesNote: "Custom IoT projects",
  homeWhoTitle: "Who I Help",
  homeWhoSubtitle: "IoT solutions for individuals, businesses, and technical teams.",
  homeProcessTitle: "End-to-End Process",
  homeProcessSubtitle: "From discovery to operation — I work with you through every stage of your IoT project.",
  homeExpertiseTitle: "Technical Expertise",
  homeExpertiseSubtitle: "Deep knowledge in industrial protocols, cloud platforms, and IoT infrastructure.",
  homeUseCasesTitle: "Use Cases",
  homeUseCasesSubtitle: "Real-world IoT implementations delivering measurable results.",
  homeCtaTitle: "Ready to Start Your IoT Project?",
  homeCtaDesc: "Share your requirements and I'll help you shape the right IoT solution for reliable monitoring and operations.",

  whoIndividualTitle: "Individual Clients",
  whoIndividualDesc: "Smart home solutions — lighting, climate, security, and energy monitoring tailored to your lifestyle.",
  whoBusinessTitle: "Business Clients",
  whoBusinessDesc: "Industrial monitoring, energy management, machine status tracking, scheduling, data storage, and automated alerts.",
  whoTechnicalTitle: "Technical Teams",
  whoTechnicalDesc: "Node-RED & ThingsBoard hosting, infrastructure setup, technical consulting, and managed IoT operations.",

  processStep1Title: "Requirement Discovery", processStep1Desc: "Understand your operations, goals, and constraints.",
  processStep2Title: "Solution Design", processStep2Desc: "Architecture, protocol selection, and data flow planning.",
  processStep3Title: "Device Selection", processStep3Desc: "Choose the right sensors, gateways, and controllers.",
  processStep4Title: "Connectivity & Integration", processStep4Desc: "Connect devices using industrial protocols and cloud APIs.",
  processStep5Title: "Dashboard & Automation", processStep5Desc: "Build monitoring dashboards, alerts, and scheduling.",
  processStep6Title: "Operation & Maintenance", processStep6Desc: "Ongoing support, updates, backups, and optimization.",

  expertiseProtocolsTitle: "Industrial Protocols", expertiseProtocolsDesc: "RS485, Modbus RTU/TCP, OPC UA, TCP/IP",
  expertiseCloudTitle: "Cloud & Edge Integration", expertiseCloudDesc: "MQTT, REST APIs, Node-RED, ThingsBoard, InfluxDB",
  expertiseDashboardTitle: "Dashboards & Monitoring", expertiseDashboardDesc: "Real-time visualization, alerts, scheduling, data storage",
  expertiseSecurityTitle: "Security & Reliability", expertiseSecurityDesc: "SSL/TLS, access control, automated backups, 99.9% uptime",

  /* About */
  aboutHeroLabel: "About Me",
  aboutGreeting: "Hi! I'm Triều Vĩ, but you can call me Luca — welcome to my website 😄😄",
  aboutIntro1: "I'm an Automation Engineer and IoT specialist based in Vietnam. I've worked with local and international partners to deliver a wide range of IoT systems — from Industrial IoT (IIoT) and Smart Buildings to high-tech agriculture.",
  aboutIntro2: "My working philosophy can be summed up in two words: \"Sustainable\" and \"Scalable\". Instead of focusing on short-term fixes, I design systems that can scale flexibly, operate reliably with professional practices, and maintain strong security.",
  aboutFocusTitle: "What I Focus On",
  aboutFocus1: "Industrial IoT Architecture & Deployment",
  aboutFocus2: "Multi-Protocol Interoperability (Modbus, OPC UA, MQTT, etc.)",
  aboutFocus3: "Cloud IoT Infrastructure & Ecosystems (ThingsBoard, Node-RED)",
  aboutFocus4: "Real-time Operational Visibility & Automation",
  aboutFocus5: "Smart Home Design & Intelligent Integration",
  aboutFocus6: "Full-Lifecycle Project Delivery & Maintenance",
  aboutExpertiseTitle: "Technical Expertise",
  aboutProcessTitle: "How I Work",
  aboutProcessSubtitle: "End-to-end process from discovery to operation.",
  aboutWhyTitle: "Why Clients Work With Me",
  aboutCtaTitle: "Let's Build Something Together",
  aboutCtaDesc: "Whether you need consulting, hosting, or a full IoT deployment — I'm here to help.",

  aboutStep1Title: "Requirement Discovery", aboutStep1Desc: "Understand your operations, goals, and constraints.",
  aboutStep2Title: "Solution Design", aboutStep2Desc: "Architecture, protocol selection, and data flow planning.",
  aboutStep3Title: "Device Selection", aboutStep3Desc: "Choose the right sensors, gateways, and controllers.",
  aboutStep4Title: "Connectivity & Integration", aboutStep4Desc: "Connect devices using industrial protocols and cloud APIs.",
  aboutStep5Title: "Dashboard & Automation", aboutStep5Desc: "Build monitoring dashboards, alerts, and scheduling.",
  aboutStep6Title: "Operation & Maintenance", aboutStep6Desc: "Ongoing support, updates, backups, and optimization.",

  aboutWhy1Title: "Direct Technical Ownership", aboutWhy1Desc: "I'll be with you throughout entire technical stack —from field-level connectivity to advanced cloud logic—ensuring no detail is overlooked.",
  aboutWhy2Title: "Field-Proven Protocol Expertise", aboutWhy2Desc: "Beyond theory, I understand the nuances and limitations of industrial protocols in harsh, real-world deployment environments.",
  aboutWhy3Title: "From Concept to Commissioning", aboutWhy3Desc: "I don't just design; I stay on-site (or on-call) through testing and handover to ensure your system is fully operational and production-ready.",
  aboutWhy4Title: "Pragmatic & Scalable Solutions", aboutWhy4Desc: "I prioritize reliable, maintainable architectures that balance high performance with your actual operational needs and budget constraints.",
  aboutWhy5Title: "Frictionless Communication", aboutWhy5Desc: "You work directly with me. This flat structure ensures fast responses, clear technical alignment, and zero \"lost in translation\" moments.",
  aboutWhy6Title: "Long-Term Operational Mindset", aboutWhy6Desc: "I build for the future. My support continues long after deployment, focusing on system health, proactive maintenance, and ongoing optimization.",

  aboutSkills: [
    "Industrial Connectivity & Protocols: RS485, Modbus RTU/TCP, OPC UA, MQTT, TCP/IP",
    "Field-to-Cloud Integration: connecting sensors, PLCs, gateways, and controllers to higher-level systems.",
    "Edge & Cloud Orchestration: Developing robust workflows using Node-RED and ThingsBoard (PE/CE).",
    "Data Visualization & Operations: Designing intuitive, real-time dashboards for monitoring, alerting, and scheduling.",
    "Data Engineering & Telemetry: Building resilient telemetry pipelines and long-term data storage strategies.",
    "Infrastructure Resilience: Implementing maintainable deployment practices, backups, and system reliability.",
  ],

  /* Services */
  servicesHeroLabel: "What I Offer",
  servicesHeroTitle: "Services Offer",
  servicesHeroDesc: "From hosting infrastructure management to end-to-end IoT system design and deployment — I'm always ready to support you with optimized solutions for every stage of growth.",
  servicesHostingSubtitle: "Managed cloud hosting for your IoT platforms — stable, secure, and ready to scale.",
  servicesHostingNote: "All hosting services include transparent public pricing — view each service page for detailed plans and comparison.",
  servicesIotSubtitle: "End-to-end IoT consulting, design, and deployment tailored to your requirements.",
  servicesIotNote: "Every IoT project is unique —",

  /* Use Cases */
  useCasesHeroLabel: "Real Results",
  useCasesHeroTitle: "Use Cases",
  useCasesHeroDesc: "Real-world IoT applications and solution patterns.",
  useCasesEmpty: "Use cases coming soon.",

  /* Contact */
  contactHeroLabel: "Get In Touch",
  contactHeroTitle: "Contact",
  contactHeroDesc: "Ready to start your IoT project? Let's talk.",
  contactDirectTitle: "Direct Contact",
  contactGuideTitle: "What to Include",
  contactGuide1: "Your project goal or problem to solve",
  contactGuide2: "Devices or equipment involved",
  contactGuide3: "Dashboard or monitoring needs",
  contactGuide4: "Expected timeline",
  contactThankTitle: "Thank You!",
  contactThankDesc: "Your message has been sent. I'll get back to you within 24 hours.",
  contactSendAnother: "Send Another Message",
  contactFailedPrefix: "Failed to send:",
  contactRetryMsg: "Please try again or contact me directly:",

  /* Service Detail */
  sdHosting: "Hosting",
  sdService: "Service",
  sdWhoFor: "Who Is This For?",
  sdProblems: "Common Problems",
  sdIncluded: "What's Included",
  sdCapabilities: "Technical Capabilities",
  sdProcess: "How It Works",
  sdPricingPlans: "Pricing Plans",
  sdPricing: "Pricing",
  sdPricingCustom: "Every project is unique. Contact me for a free consultation and custom quote.",
  sdPricingCustomDesc: "I'll assess your requirements and provide a detailed proposal with timeline and pricing.",
  sdFaq: "Frequently Asked Questions",
  sdRelated: "Related",
  sdRelatedServices: "Related Services",
  sdRelatedUseCases: "Related Use Cases",
  sdCtaTitle: "Ready to Get Started?",
  sdCtaDesc: "Get a free consultation and let's discuss your project.",
  sdNotFound: "Service Not Found",

  /* Use Case Detail */
  udChallenge: "The Challenge",
  udSolution: "The Solution",
  udOutcomes: "Outcomes & Benefits",
  udServicesUsed: "Services Used",
  udCtaTitle: "Want Similar Results?",
  udCtaDesc: "Let's discuss how IoT can transform your operations.",
  udNotFound: "Use Case Not Found",
  udTechHighlights: "Technical Highlights",
  udFeature: "Feature",
  udApproach: "Technical Approach",
  udBenefit: "Benefit",

  /* Form */
  formFullName: "Full Name *",
  formEmail: "Email *",
  formMessage: "Message *",
  formMessagePlaceholder: "Describe your project requirements...",
  formNotes: "Notes / Requirements",
  formNotesPlaceholder: "Any specific requirements or questions...",
  formSending: "Sending…",

  /* Pricing */
  pricingFeatures: "Features",
  pricingMostPopular: "Most Popular",

  /* Modal */
  modalRequestSent: "Request Sent!",
  modalThanks: "Thanks for choosing my service",
  modalGetBack: "I'll get back to you as soon as possible",
  modalClose: "Close",
  modalContactDirectly: "Or contact directly:",

  /* Footer */
  footerDesc: "End-to-end IoT consulting, design, deployment, and maintenance services.",
  footerQuickLinks: "Quick Links",
  footerContact: "Contact",
};

const vi: TranslationStrings = {
  navHome: "Trang chủ",
  navAbout: "Giới thiệu",
  navServices: "Dịch vụ",
  navUseCases: "Ứng dụng",
  navContact: "Liên hệ",

  primaryCTA: "Liên hệ ngay",
  viewServices: "Tất cả dịch vụ",
  startNow: "Bắt đầu",
  readMore: "Xem thêm",
  learnMore: "Tìm hiểu thêm",
  requestPlan: "Yêu cầu gói này",
  sendMessage: "Gửi tin nhắn",
  viewAllUseCases: "Xem tất cả ứng dụng",
  viewPlans: "Xem tất cả gói dịch vụ",
  contactForConsultation: "Đặt lịch tư vấn miễn phí",
  bookConsultation: "Liên hệ tư vấn",
  bookFreeConsultation: "Đặt lịch tư vấn miễn phí",
  backToServices: "Tất cả dịch vụ",
  backToUseCases: "Tất cả ứng dụng",
  readCaseStudy: "Xem chi tiết",

  /* Home */
  homeHeroTitle: "Thiết kế giải pháp",
  homeHeroHighlight: "IoT toàn diện",
  homeHeroDesc: "Từ giao thức công nghiệp đến dashboard trên cloud — tôi đồng hành cùng bạn trong việc thiết kế, triển khai và vận hành hệ thống IoT, giúp bạn giám sát và điều khiển thiết bị theo thời gian thực.",
  homeHostingTitle: "Hosting",
  homeHostingSubtitle: "Dịch vụ cloud hosting được quản lý cho nền tảng IoT của bạn — ổn định, bảo mật và sẵn sàng mở rộng, để bạn tập trung vào giải pháp thay vì hạ tầng.",
  homeHostingNote: "Tất cả gói hosting có giá công khai, minh bạch",
  homeServicesTitle: "Dịch vụ IoT",
  homeServicesSubtitle: "Thiết kế, triển khai và tư vấn IoT toàn diện theo yêu cầu của bạn.",
  homeServicesNote: "Dự án IoT theo yêu cầu",
  homeWhoTitle: "Đối tượng phục vụ",
  homeWhoSubtitle: "Giải pháp IoT cho cá nhân, doanh nghiệp và đội ngũ kỹ thuật.",
  homeProcessTitle: "Quy trình triển khai end-to-end",
  homeProcessSubtitle: "Từ khảo sát nhu cầu đến vận hành thực tế — tôi đồng hành cùng bạn trong từng giai đoạn của dự án IoT.",
  homeExpertiseTitle: "Chuyên môn kỹ thuật",
  homeExpertiseSubtitle: "Kiến thức chuyên sâu về giao thức công nghiệp, nền tảng cloud và hạ tầng IoT.",
  homeUseCasesTitle: "Ứng dụng thực tế",
  homeUseCasesSubtitle: "Các triển khai IoT thực tế mang lại kết quả đo lường được.",
  homeCtaTitle: "Sẵn sàng bắt đầu dự án IoT của bạn?",
  homeCtaDesc: "Hãy chia sẻ nhu cầu của bạn, tôi sẽ cùng bạn xây dựng giải pháp IoT phù hợp để giám sát và vận hành hiệu quả hơn.",

  whoIndividualTitle: "Khách hàng cá nhân",
  whoIndividualDesc: "Giải pháp nhà thông minh — chiếu sáng, điều hoà, an ninh và giám sát năng lượng phù hợp với phong cách sống.",
  whoBusinessTitle: "Khách hàng doanh nghiệp",
  whoBusinessDesc: "Giám sát công nghiệp, quản lý năng lượng, theo dõi trạng thái máy, lập lịch, lưu trữ dữ liệu và cảnh báo tự động.",
  whoTechnicalTitle: "Đội ngũ kỹ thuật",
  whoTechnicalDesc: "Hỗ trợ đội kỹ thuật triển khai và vận hành hệ thống IoT với hosting Node-RED/ThingsBoard, thiết lập hạ tầng và tư vấn kỹ thuật khi cần.",

  processStep1Title: "Khảo sát yêu cầu", processStep1Desc: "Tìm hiểu hoạt động, mục tiêu và ràng buộc của bạn.",
  processStep2Title: "Thiết kế giải pháp", processStep2Desc: "Kiến trúc, lựa chọn giao thức và lập kế hoạch luồng dữ liệu.",
  processStep3Title: "Lựa chọn thiết bị", processStep3Desc: "Chọn cảm biến, gateway và bộ điều khiển phù hợp.",
  processStep4Title: "Kết nối & Tích hợp", processStep4Desc: "Kết nối thiết bị bằng giao thức công nghiệp và API cloud.",
  processStep5Title: "Dashboard & Tự động hoá", processStep5Desc: "Xây dựng dashboard giám sát, cảnh báo và lập lịch.",
  processStep6Title: "Vận hành & Bảo trì", processStep6Desc: "Hỗ trợ liên tục, cập nhật, sao lưu và tối ưu hoá.",

  expertiseProtocolsTitle: "Giao thức công nghiệp", expertiseProtocolsDesc: "RS485, Modbus RTU/TCP, OPC UA, TCP/IP",
  expertiseCloudTitle: "Cloud & Edge", expertiseCloudDesc: "MQTT, REST APIs, Node-RED, ThingsBoard, InfluxDB",
  expertiseDashboardTitle: "Dashboard & Giám sát", expertiseDashboardDesc: "Hiển thị thời gian thực, cảnh báo, lập lịch, lưu trữ dữ liệu",
  expertiseSecurityTitle: "Bảo mật & Độ tin cậy", expertiseSecurityDesc: "SSL/TLS, kiểm soát truy cập, sao lưu tự động, uptime 99.9%",

  /* About */
  aboutHeroLabel: "Giới thiệu",
  aboutGreeting: "Xin chào ! Tôi là Triều Vĩ nhưng bạn có thể gọi tôi là Luca, chào mừng bạn đến website của tôi 😄😄",
  aboutIntro1: "Là 1 kỹ sư tự động hóa và chuyên viên IoT đang sinh sống tại Việt Nam. Tôi đã cùng các đối tác trong và ngoài nước triển khai nhiều hệ thống IoT đa dạng - từ Công nghiệp (IIoT), Tòa nhà thông minh (Smart Building) đến Nông nghiệp công nghệ cao.",
  aboutIntro2: "Triết lý làm việc của tôi gói gọn trong hai chữ: \"Bền vững\" và \"Mở rộng\". Thay vì chỉ tập trung vào giải pháp tức thời, tôi chú trọng việc thiết kế các hệ thống có khả năng mở rộng (scalable) linh hoạt, đảm bảo vận hành chuyên nghiệp với độ ổn định cao và tính bảo mật tuyệt đối.",
  aboutFocusTitle: "Lĩnh vực chuyên môn",
  aboutFocus1: "Thiết kế cấu trúc & Triển khai Hệ thống IoT Công nghiệp",
  aboutFocus2: "Tích hợp & Đồng bộ Đa giao thức Công nghiệp",
  aboutFocus3: "Xây dựng Hệ sinh thái & Hạ tầng IoT trên Đám mây (ThingsBoard, Node-RED)",
  aboutFocus4: "Giám sát Vận hành & Tự động hóa Thời gian thực",
  aboutFocus5: "Thiết kế & Tích hợp Giải pháp Nhà thông minh",
  aboutFocus6: "Quản lý Dự án Toàn diện từ Khảo sát đến Bảo trì",
  aboutExpertiseTitle: "Năng lực kỹ thuật",
  aboutProcessTitle: "Cách tôi làm việc",
  aboutProcessSubtitle: "Quy trình toàn diện từ khảo sát đến vận hành.",
  aboutWhyTitle: "Tại sao chọn tôi",
  aboutCtaTitle: "Hãy cùng xây dựng",
  aboutCtaDesc: "Dù bạn cần tư vấn, hosting hay triển khai IoT toàn diện — tôi sẵn sàng hỗ trợ.",

  aboutStep1Title: "Khảo sát yêu cầu", aboutStep1Desc: "Tìm hiểu hoạt động, mục tiêu và ràng buộc của bạn.",
  aboutStep2Title: "Thiết kế giải pháp", aboutStep2Desc: "Kiến trúc, lựa chọn giao thức và lập kế hoạch luồng dữ liệu.",
  aboutStep3Title: "Lựa chọn thiết bị", aboutStep3Desc: "Chọn cảm biến, gateway và bộ điều khiển phù hợp.",
  aboutStep4Title: "Kết nối & Tích hợp", aboutStep4Desc: "Kết nối thiết bị bằng giao thức công nghiệp và API cloud.",
  aboutStep5Title: "Dashboard & Tự động hoá", aboutStep5Desc: "Xây dựng dashboard giám sát, cảnh báo và lập lịch.",
  aboutStep6Title: "Vận hành & Bảo trì", aboutStep6Desc: "Hỗ trợ liên tục, cập nhật, sao lưu và tối ưu hoá.",

  aboutWhy1Title: "Trực tiếp làm chủ công nghệ", aboutWhy1Desc: "Tôi đồng hành cùng bạn trong toàn bộ các khâu kỹ thuật cốt lõi—từ kết nối thiết bị hiện trường đến logic đám mây—đảm bảo mọi chi tiết đều được kiểm soát chặt chẽ.",
  aboutWhy2Title: "Kinh nghiệm thực chiến về Giao thức", aboutWhy2Desc: "Không chỉ dừng lại ở lý thuyết, tôi am hiểu sâu sắc các đặc thù và giới hạn của giao thức công nghiệp trong các môi trường triển khai thực tế khắc nghiệt.",
  aboutWhy3Title: "Từ ý tưởng đến Vận hành thực tế", aboutWhy3Desc: "Không chỉ dừng lại ở bản vẽ. Tôi đồng hành xuyên suốt quá trình chạy thử và bàn giao để đảm bảo hệ thống sẵn sàng đi vào sản xuất ổn định.",
  aboutWhy4Title: "Giải pháp thực tiễn & Linh hoạt", aboutWhy4Desc: "Tôi ưu tiên các kiến trúc ổn định, dễ bảo trì, giúp cân bằng giữa hiệu suất cao với nhu cầu vận hành thực tế và ngân sách của doanh nghiệp.",
  aboutWhy5Title: "Hợp tác trực tiếp & Minh bạch", aboutWhy5Desc: "Bạn làm việc trực tiếp với tôi. Quy trình tinh gọn này giúp phản hồi nhanh chóng, thống nhất về kỹ thuật và loại bỏ mọi rào cản trong giao tiếp.",
  aboutWhy6Title: "Tư duy đồng hành dài hạn", aboutWhy6Desc: "Tôi xây dựng hệ thống cho tương lai. Tôi vẫn sẽ hỗ trợ bạn sau khi triển khai, tập trung vào tính ổn định hệ thống, bảo trì và tối ưu hóa liên tục.",

  aboutSkills: [
    "Giao thức & Kết nối Công nghiệp: RS485, Modbus RTU/TCP, OPC UA, MQTT, TCP/IP",
    "Tích hợp Hiện trường lên Cloud: kết nối cảm biến, PLC, gateway và bộ điều khiển đến tầng cao hơn trong hệ thống",
    "Xây dựng luồng xử lý Edge & Cloud: với Node-RED và ThingsBoard (PE/CE)",
    "Trực quan hóa & Vận hành: Thiết kế dashboard phục vụ giám sát thời gian thực, cảnh báo và vận hành",
    "Thu thập dữ liệu & Telemetry: Xây dựng luồng dữ liệu telemetry ổn định và lưu trữ dữ liệu dài hạn.",
    "Xây dựng Hạ tầng ổn định: Triển khai hệ thống theo tiêu chí vận hành bền vững, sao lưu và bảo trì chuyên nghiệp.",
  ],

  /* Services */
  servicesHeroLabel: "Dịch vụ cung cấp",
  servicesHeroTitle: "Dịch vụ",
  servicesHeroDesc: "Từ quản trị hạ tầng hosting đến thiết kế và triển khai hệ thống IoT toàn diện — Tôi đồng hành cùng bạn với giải pháp tối ưu theo từng giai đoạn phát triển.",
  servicesHostingSubtitle: "Giải pháp hosting Node-RED và ThingsBoard — bảo mật, ổn định, sẵn sàng mở rộng.",
  servicesHostingNote: "Tất cả dịch vụ hosting đều có giá công khai minh bạch — xem trang từng dịch vụ để so sánh chi tiết.",
  servicesIotSubtitle: "Tư vấn, thiết kế, tích hợp giải pháp IoT end-to-end cho hệ thống công nghiệp và smart home.",
  servicesIotNote: "Mỗi dự án IoT là duy nhất —",

  /* Use Cases */
  useCasesHeroLabel: "Kết quả thực tế",
  useCasesHeroTitle: "Ứng dụng thực tế",
  useCasesHeroDesc: "Các ứng dụng IoT thực tế và mô hình giải pháp.",
  useCasesEmpty: "Các ứng dụng sẽ sớm được cập nhật.",

  /* Contact */
  contactHeroLabel: "Liên hệ",
  contactHeroTitle: "Liên hệ",
  contactHeroDesc: "Sẵn sàng bắt đầu dự án IoT? Hãy trao đổi ngay.",
  contactDirectTitle: "Liên hệ trực tiếp",
  contactGuideTitle: "Thông tin nên bao gồm",
  contactGuide1: "Mục tiêu dự án hoặc vấn đề cần giải quyết",
  contactGuide2: "Thiết bị hoặc máy móc liên quan",
  contactGuide3: "Nhu cầu dashboard hoặc giám sát",
  contactGuide4: "Thời gian dự kiến",
  contactThankTitle: "Cảm ơn bạn!",
  contactThankDesc: "Tin nhắn đã được gửi. Tôi sẽ phản hồi trong vòng 24 giờ.",
  contactSendAnother: "Gửi tin nhắn khác",
  contactFailedPrefix: "Gửi thất bại:",
  contactRetryMsg: "Vui lòng thử lại hoặc liên hệ trực tiếp:",

  /* Service Detail */
  sdHosting: "Hosting",
  sdService: "Dịch vụ",
  sdWhoFor: "Dành cho ai?",
  sdProblems: "Vấn đề thường gặp",
  sdIncluded: "Bao gồm những gì",
  sdCapabilities: "Năng lực kỹ thuật",
  sdProcess: "Quy trình thực hiện",
  sdPricingPlans: "Bảng giá",
  sdPricing: "Giá dịch vụ",
  sdPricingCustom: "Mỗi dự án là duy nhất. Liên hệ để tư vấn miễn phí và nhận báo giá riêng.",
  sdPricingCustomDesc: "Tôi sẽ đánh giá yêu cầu và cung cấp đề xuất chi tiết với timeline và báo giá.",
  sdFaq: "Câu hỏi thường gặp",
  sdRelated: "Liên quan",
  sdRelatedServices: "Dịch vụ liên quan",
  sdRelatedUseCases: "Ứng dụng liên quan",
  sdCtaTitle: "Sẵn sàng bắt đầu?",
  sdCtaDesc: "Tư vấn miễn phí và cùng thảo luận dự án của bạn.",
  sdNotFound: "Không tìm thấy dịch vụ",

  /* Use Case Detail */
  udChallenge: "Thách thức",
  udSolution: "Giải pháp",
  udOutcomes: "Kết quả & Lợi ích",
  udServicesUsed: "Dịch vụ đã sử dụng",
  udCtaTitle: "Muốn kết quả tương tự?",
  udCtaDesc: "Hãy trao đổi về cách IoT có thể chuyển đổi hoạt động của bạn.",
  udNotFound: "Không tìm thấy ứng dụng",
  udTechHighlights: "Điểm nổi bật kỹ thuật",
  udFeature: "Tính năng",
  udApproach: "Phương pháp kỹ thuật",
  udBenefit: "Lợi ích",

  /* Form */
  formFullName: "Họ và tên *",
  formEmail: "Email *",
  formMessage: "Tin nhắn *",
  formMessagePlaceholder: "Mô tả yêu cầu dự án của bạn...",
  formNotes: "Ghi chú / Yêu cầu",
  formNotesPlaceholder: "Yêu cầu cụ thể hoặc câu hỏi...",
  formSending: "Đang gửi…",

  /* Pricing */
  pricingFeatures: "Tính năng",
  pricingMostPopular: "Phổ biến nhất",

  /* Modal */
  modalRequestSent: "Đã gửi yêu cầu!",
  modalThanks: "Cảm ơn bạn đã chọn dịch vụ của tôi",
  modalGetBack: "Tôi sẽ liên hệ lại cho bạn trong thời gian sớm nhất",
  modalClose: "Đóng",
  modalContactDirectly: "Liên hệ trực tiếp với tôi:",

  /* Footer */
  footerDesc: "Tư vấn, thiết kế, triển khai và bảo trì IoT toàn diện.",
  footerQuickLinks: "Liên kết nhanh",
  footerContact: "Liên hệ",
};

export const translations: Record<Locale, TranslationStrings> = { en, vi };
