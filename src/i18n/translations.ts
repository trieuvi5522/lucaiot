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
  servicesHostingNote: string;
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
  viewServices: "View Services",
  startNow: "Start",
  readMore: "Read More",
  learnMore: "Learn More",
  requestPlan: "Request this plan",
  sendMessage: "Send Message",
  viewAllUseCases: "View All Use Cases",
  viewPlans: "View plans",
  contactForConsultation: "Contact for a free consultation",
  backToServices: "All Services",
  backToUseCases: "All Use Cases",
  readCaseStudy: "Read case study",

  /* Home */
  homeHeroTitle: "Design End-to-End",
  homeHeroHighlight: "IoT Solutions",
  homeHeroDesc: "From industrial protocols to cloud dashboards — I design, deploy, and maintain IoT systems that give you real-time visibility and control over your operations.",
  homeHostingTitle: "Hosting",
  homeHostingSubtitle: "Managed cloud hosting for your IoT platforms. Focus on building, not infrastructure.",
  homeHostingNote: "All hosting plans include transparent public pricing →",
  homeServicesTitle: "IoT Services",
  homeServicesSubtitle: "End-to-end IoT design, deployment, and consulting tailored to your requirements.",
  homeServicesNote: "Custom IoT projects →",
  homeWhoTitle: "Who I Help",
  homeWhoSubtitle: "IoT solutions for individuals, businesses, and technical teams.",
  homeProcessTitle: "End-to-End Process",
  homeProcessSubtitle: "From discovery to operation — I handle every stage of your IoT project.",
  homeExpertiseTitle: "Technical Expertise",
  homeExpertiseSubtitle: "Deep knowledge in industrial protocols, cloud platforms, and IoT infrastructure.",
  homeUseCasesTitle: "Use Cases",
  homeUseCasesSubtitle: "Real-world IoT implementations delivering measurable results.",
  homeCtaTitle: "Ready to Connect Your World?",
  homeCtaDesc: "Let's discuss how IoT can transform your operations. Get a free consultation today.",

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
  aboutIntro1: "I'm an IoT specialist and automation engineer based in Vietnam with a passion for bridging the gap between industrial equipment and the digital world. I help businesses and individuals gain real-time visibility into their operations through reliable, well-engineered IoT systems.",
  aboutIntro2: "My work spans from wiring RS485 sensors on factory floors to building cloud-based dashboards that monitor thousands of data points. I specialize in industrial communication protocols, cloud IoT platforms, and creating end-to-end solutions that are practical, maintainable, and scalable.",
  aboutFocusTitle: "What I Focus On",
  aboutFocus1: "Industrial IoT system design and deployment",
  aboutFocus2: "Communication protocol integration (RS485, Modbus, OPC UA, MQTT)",
  aboutFocus3: "Cloud IoT platforms (Node-RED, ThingsBoard PE/CE)",
  aboutFocus4: "Real-time dashboards, monitoring, and alert systems",
  aboutFocus5: "Smart home design and integration",
  aboutFocus6: "End-to-end project delivery from concept to maintenance",
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

  aboutWhy1Title: "Hands-On Engineering", aboutWhy1Desc: "From wiring RS485 on the factory floor to deploying cloud dashboards — I handle every layer of the IoT stack.",
  aboutWhy2Title: "Deep Protocol Knowledge", aboutWhy2Desc: "Extensive experience with industrial communication protocols and their real-world quirks and limitations.",
  aboutWhy3Title: "End-to-End Delivery", aboutWhy3Desc: "I don't just design — I deploy, commission, document, and maintain. Full lifecycle responsibility.",
  aboutWhy4Title: "Practical Solutions", aboutWhy4Desc: "I focus on what works in production, not theoretical architectures. Every solution is built for real-world reliability.",
  aboutWhy5Title: "Direct Communication", aboutWhy5Desc: "You work directly with me — no account managers, no layers. Clear, fast, and transparent collaboration.",
  aboutWhy6Title: "Long-Term Support", aboutWhy6Desc: "I provide ongoing maintenance, monitoring, and optimization after deployment. Your system evolves with your needs.",

  aboutSkills: [
    "RS485 / Modbus RTU & TCP", "OPC UA / BACnet", "MQTT / HTTP / WebSocket / CoAP",
    "Node-RED Development & Hosting", "ThingsBoard (PE & CE)", "InfluxDB / TimescaleDB",
    "Grafana / Custom Dashboards", "Raspberry Pi / Edge Gateways", "Home Assistant / Tuya / Zigbee",
    "Docker / Linux Server Admin", "Python / JavaScript / TypeScript", "AWS IoT / Azure IoT Hub",
  ],

  /* Services */
  servicesHeroLabel: "What I Offer",
  servicesHeroTitle: "Services Offer",
  servicesHeroDesc: "From hosting to end-to-end IoT design and implementation.",
  servicesHostingNote: "All hosting services include transparent public pricing — view each service page for detailed plans and comparison.",
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
  modalGetBack: "We'll get back to you within 24 hours.",
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

  primaryCTA: "Liên hệ tư vấn ngay",
  viewServices: "Xem dịch vụ",
  startNow: "Bắt đầu",
  readMore: "Xem thêm",
  learnMore: "Tìm hiểu thêm",
  requestPlan: "Yêu cầu gói này",
  sendMessage: "Gửi tin nhắn",
  viewAllUseCases: "Xem tất cả ứng dụng",
  viewPlans: "Xem gói dịch vụ",
  contactForConsultation: "Liên hệ tư vấn miễn phí",
  backToServices: "Tất cả dịch vụ",
  backToUseCases: "Tất cả ứng dụng",
  readCaseStudy: "Xem chi tiết",

  /* Home */
  homeHeroTitle: "Thiết kế giải pháp",
  homeHeroHighlight: "IoT toàn diện",
  homeHeroDesc: "Từ giao thức công nghiệp đến dashboard trên cloud — tôi thiết kế, triển khai và vận hành hệ thống IoT giúp bạn giám sát và điều khiển hoạt động theo thời gian thực.",
  homeHostingTitle: "Hosting",
  homeHostingSubtitle: "Hosting cloud được quản lý cho nền tảng IoT của bạn. Tập trung xây dựng, không lo hạ tầng.",
  homeHostingNote: "Tất cả gói hosting đều có giá công khai minh bạch →",
  homeServicesTitle: "Dịch vụ IoT",
  homeServicesSubtitle: "Thiết kế, triển khai và tư vấn IoT toàn diện theo yêu cầu của bạn.",
  homeServicesNote: "Dự án IoT tuỳ chỉnh →",
  homeWhoTitle: "Đối tượng phục vụ",
  homeWhoSubtitle: "Giải pháp IoT cho cá nhân, doanh nghiệp và đội ngũ kỹ thuật.",
  homeProcessTitle: "Quy trình toàn diện",
  homeProcessSubtitle: "Từ khảo sát đến vận hành — tôi phụ trách mọi giai đoạn dự án IoT của bạn.",
  homeExpertiseTitle: "Chuyên môn kỹ thuật",
  homeExpertiseSubtitle: "Kiến thức chuyên sâu về giao thức công nghiệp, nền tảng cloud và hạ tầng IoT.",
  homeUseCasesTitle: "Ứng dụng thực tế",
  homeUseCasesSubtitle: "Các triển khai IoT thực tế mang lại kết quả đo lường được.",
  homeCtaTitle: "Sẵn sàng kết nối thế giới của bạn?",
  homeCtaDesc: "Hãy trao đổi về cách IoT có thể chuyển đổi hoạt động của bạn. Tư vấn miễn phí ngay hôm nay.",

  whoIndividualTitle: "Khách hàng cá nhân",
  whoIndividualDesc: "Giải pháp nhà thông minh — chiếu sáng, điều hoà, an ninh và giám sát năng lượng phù hợp với phong cách sống.",
  whoBusinessTitle: "Khách hàng doanh nghiệp",
  whoBusinessDesc: "Giám sát công nghiệp, quản lý năng lượng, theo dõi trạng thái máy, lập lịch, lưu trữ dữ liệu và cảnh báo tự động.",
  whoTechnicalTitle: "Đội ngũ kỹ thuật",
  whoTechnicalDesc: "Hosting Node-RED & ThingsBoard, thiết lập hạ tầng, tư vấn kỹ thuật và vận hành IoT được quản lý.",

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
  aboutIntro1: "Tôi là chuyên gia IoT và kỹ sư tự động hoá tại Việt Nam, đam mê kết nối thiết bị công nghiệp với thế giới số. Tôi giúp doanh nghiệp và cá nhân có được tầm nhìn thời gian thực vào hoạt động thông qua các hệ thống IoT đáng tin cậy, được thiết kế chuyên nghiệp.",
  aboutIntro2: "Công việc của tôi trải dài từ đấu nối cảm biến RS485 tại nhà máy đến xây dựng dashboard trên cloud giám sát hàng nghìn điểm dữ liệu. Tôi chuyên về giao thức truyền thông công nghiệp, nền tảng IoT cloud và tạo giải pháp toàn diện thực tế, dễ bảo trì và có khả năng mở rộng.",
  aboutFocusTitle: "Lĩnh vực tập trung",
  aboutFocus1: "Thiết kế và triển khai hệ thống IoT công nghiệp",
  aboutFocus2: "Tích hợp giao thức truyền thông (RS485, Modbus, OPC UA, MQTT)",
  aboutFocus3: "Nền tảng IoT cloud (Node-RED, ThingsBoard PE/CE)",
  aboutFocus4: "Dashboard thời gian thực, giám sát và hệ thống cảnh báo",
  aboutFocus5: "Thiết kế và tích hợp nhà thông minh",
  aboutFocus6: "Cung cấp dự án từ ý tưởng đến bảo trì",
  aboutExpertiseTitle: "Chuyên môn kỹ thuật",
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

  aboutWhy1Title: "Kỹ thuật thực hành", aboutWhy1Desc: "Từ đấu nối RS485 tại nhà máy đến triển khai dashboard cloud — tôi xử lý mọi tầng trong hệ thống IoT.",
  aboutWhy2Title: "Hiểu biết sâu về giao thức", aboutWhy2Desc: "Kinh nghiệm phong phú với các giao thức truyền thông công nghiệp cùng những đặc thù và giới hạn thực tế.",
  aboutWhy3Title: "Cung cấp toàn diện", aboutWhy3Desc: "Không chỉ thiết kế — tôi triển khai, nghiệm thu, tài liệu hoá và bảo trì. Chịu trách nhiệm toàn bộ vòng đời.",
  aboutWhy4Title: "Giải pháp thực tế", aboutWhy4Desc: "Tập trung vào những gì hoạt động trong thực tế, không phải kiến trúc lý thuyết. Mọi giải pháp được xây dựng cho độ tin cậy thực.",
  aboutWhy5Title: "Giao tiếp trực tiếp", aboutWhy5Desc: "Bạn làm việc trực tiếp với tôi — không qua trung gian. Hợp tác rõ ràng, nhanh chóng và minh bạch.",
  aboutWhy6Title: "Hỗ trợ dài hạn", aboutWhy6Desc: "Tôi cung cấp bảo trì, giám sát và tối ưu hoá liên tục sau triển khai. Hệ thống phát triển cùng nhu cầu của bạn.",

  aboutSkills: [
    "RS485 / Modbus RTU & TCP", "OPC UA / BACnet", "MQTT / HTTP / WebSocket / CoAP",
    "Node-RED Development & Hosting", "ThingsBoard (PE & CE)", "InfluxDB / TimescaleDB",
    "Grafana / Custom Dashboards", "Raspberry Pi / Edge Gateways", "Home Assistant / Tuya / Zigbee",
    "Docker / Linux Server Admin", "Python / JavaScript / TypeScript", "AWS IoT / Azure IoT Hub",
  ],

  /* Services */
  servicesHeroLabel: "Dịch vụ cung cấp",
  servicesHeroTitle: "Dịch vụ",
  servicesHeroDesc: "Từ hosting đến thiết kế và triển khai IoT toàn diện.",
  servicesHostingNote: "Tất cả dịch vụ hosting đều có giá công khai minh bạch — xem trang từng dịch vụ để so sánh chi tiết.",
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
  modalGetBack: "Chúng tôi sẽ phản hồi trong vòng 24 giờ.",
  modalClose: "Đóng",
  modalContactDirectly: "Hoặc liên hệ trực tiếp:",

  /* Footer */
  footerDesc: "Tư vấn, thiết kế, triển khai và bảo trì IoT toàn diện.",
  footerQuickLinks: "Liên kết nhanh",
  footerContact: "Liên hệ",
};

export const translations: Record<Locale, TranslationStrings> = { en, vi };
