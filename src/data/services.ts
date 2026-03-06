import { Service } from "./types";
import { ls } from "./types";

export const services: Service[] = [
  {
    id: "nodered-hosting",
    slug: "nodered-hosting",
    title: ls("Node-RED Hosting", "Hosting Node-RED"),
    group: "hosting",
    shortDescription: ls(
      "Managed Node-RED hosting for IoT automation workflows. Deploy and run your flows reliably without spending time on server setup and maintenance.",
      "Dịch vụ hosting Node-RED dành cho các luồng tự động hoá IoT. Bạn có thể triển khai và vận hành flow ổn định mà không mất thời gian lo cấu hình server hay bảo trì hạ tầng."
    ),
    bulletPoints: [
      ls("Fully managed cloud instances with 99.9% uptime", "Instance cloud được quản lý hoàn toàn với uptime 99.9%"),
      ls("Access your Node-RED with custom domain or my domain", "Truy cập Node-RED qua domain riêng của bạn hoặc domain do tôi cung cấp"),
      ls("Powered by super-fast CPUs and NVMe/SSD disks", "Vận hành trên hạ tầng CPU hiệu năng cao và ổ cứng NVMe/SSD tốc độ cao"),
    ],
    heroText: ls(
      "Focus on building your project and leave the infrastructure concerns behind. I'll handle operations and scheduled backups for you, delivering a production-ready Node-RED system so you can start deploying your project immediately.",
      "Tập trung phát triển dự án, gác lại mọi nỗi lo về quản trị hạ tầng. Tôi sẽ thay bạn đảm nhận việc vận hành và sao lưu định kỳ, mang đến cho bạn một hệ thống Node-RED chuẩn 'production-ready' để triển khai dự án ngay lập tức."
    ),
    targetUsers: [
      ls("Automation engineers needing reliable Node-RED infrastructure", "Kỹ sư tự động hoá cần hạ tầng Node-RED đáng tin cậy"),
      ls("System integrators building IoT solutions for clients", "Nhà tích hợp hệ thống xây dựng giải pháp IoT cho khách hàng"),
      ls("Small businesses automating processes without DevOps overhead", "Doanh nghiệp nhỏ tự động hoá quy trình mà không cần DevOps"),
    ],
    painPoints: [
      ls("Self-hosting Node-RED is time-consuming and fragile", "Tự hosting Node-RED tốn thời gian và không ổn định"),
      ls("Scaling flows across multiple sites is complex", "Mở rộng luồng qua nhiều site rất phức tạp"),
      ls("No built-in backup or disaster recovery", "Không có sao lưu hay phục hồi thảm hoạ tích hợp"),
      ls("No experience managing and operating Node-RED in a production environment", "Không có kinh nghiệm quản lý, vận hành Node-RED trong môi trường production."),
    ],
    includedScope: [
      ls("Full access to Node-RED admin UI", "Toàn quyền truy cập Node-RED admin UI"),
      ls("Atomic backups every 24 hours", "Sao lưu atomic mỗi 24 giờ"),
      ls("Node-RED dashboard included", "Bao gồm Node-RED Dashboard"),
      ls("99.9% SLA guarantee", "Cam kết SLA 99.9%"),
      ls("Dedicated IPv4 for each instance", "IPv4 riêng cho từng instance"),
      ls("Help desk support", "Hỗ trợ qua help desk"),
    ],
    technicalCapabilities: [],
    processSteps: [
      { title: ls("Select Plan", "Chọn gói"), description: ls("Choose a hosting plan that fits your workload.", "Chọn gói hosting phù hợp với khối lượng công việc.") },
      { title: ls("Provision", "Khởi tạo"), description: ls("Your instance is live within minutes.", "Instance của bạn hoạt động trong vài phút.") },
      { title: ls("Configure", "Cấu hình"), description: ls("Import flows and configure connections.", "Import luồng và cấu hình kết nối.") },
      { title: ls("Operate", "Vận hành"), description: ls("We handle uptime, backups, and updates.", "Chúng tôi lo uptime, sao lưu và cập nhật.") },
    ],
    pricingType: "public_packages",
    pricingPlans: [
      { name: "Starter", price: "$10", period: "/month", features: [], ctaText: "Get Started", specs: [{ label: "vCPU", value: "1" }, { label: "RAM", value: "1 GB" }, { label: "Disk", value: "10 GB" }] },
      { name: "Hobby", price: "$20", period: "/month", features: [], ctaText: "Get Started", highlighted: true, specs: [{ label: "vCPU", value: "1" }, { label: "RAM", value: "2 GB" }, { label: "Disk", value: "20 GB" }] },
      { name: "Start Up", price: "$30", period: "/month", features: [], ctaText: "Get Started", specs: [{ label: "vCPU", value: "2" }, { label: "RAM", value: "4 GB" }, { label: "Disk", value: "40 GB" }] },
      { name: "Unicorn", price: "$50", period: "/month", features: [], ctaText: "Get Started", specs: [{ label: "vCPU", value: "4" }, { label: "RAM", value: "8 GB" }, { label: "Disk", value: "60 GB" }] },
    ],
    faq: [],
    relatedServiceIds: ["thingsboard-hosting", "industrial-iot"],
    relatedUseCaseIds: ["energy-monitoring", "factory-automation"],
  },
  {
    id: "thingsboard-hosting",
    slug: "thingsboard-hosting",
    title: ls("ThingsBoard Hosting (PE/CE)", "Hosting ThingsBoard (PE/CE)"),
    group: "hosting",
    shortDescription: ls(
      "Managed ThingsBoard cloud hosting for device management, telemetry, dashboards, and alerts. Available for both Professional Edition (PE) and Community Edition (CE).",
      "Dịch vụ ThingsBoard cloud được quản lý cho quản lý thiết bị, telemetry, dashboard và cảnh báo. Hỗ trợ cả phiên bản Professional (PE) và Community (CE)."
    ),
    bulletPoints: [
      ls("Fully managed cloud instances with 99.9% uptime", "Instance cloud được quản lý hoàn toàn với uptime 99.9%"),
      ls("Production-ready ThingsBoard PE or CE instances", "Triển khai ThingsBoard PE hoặc CE sẵn sàng cho môi trường vận hành thực tế"),
      ls("Scalable from 100 to 100,000+ devices", "Khả năng mở rộng từ 100 đến hơn 100.000 thiết bị"),
    ],
    heroText: ls(
      "Enterprise-grade IoT platform without the infrastructure headache. Get ThingsBoard Professional or Community Edition fully managed, so you can focus on building dashboards and connecting devices.",
      "Nền tảng IoT cấp doanh nghiệp mà không đau đầu hạ tầng. ThingsBoard Professional hoặc Community Edition được quản lý hoàn toàn, bạn chỉ cần tập trung xây dashboard và kết nối thiết bị."
    ),
    targetUsers: [
      ls("Companies needing device management at scale", "Doanh nghiệp cần quản lý thiết bị quy mô lớn"),
      ls("Energy management providers", "Nhà cung cấp quản lý năng lượng"),
      ls("Smart building operators and facility managers", "Vận hành toà nhà thông minh và quản lý cơ sở"),
    ],
    painPoints: [
      ls("ThingsBoard self-hosting requires deep DevOps expertise", "Tự hosting ThingsBoard đòi hỏi chuyên môn DevOps sâu"),
      ls("Upgrading between versions risks data loss", "Nâng cấp phiên bản có nguy cơ mất dữ liệu"),
      ls("Performance tuning for large device fleets is complex", "Tối ưu hiệu suất cho lượng thiết bị lớn rất phức tạp"),
    ],
    includedScope: [
      ls("Managed ThingsBoard PE or CE instance", "Instance ThingsBoard PE hoặc CE được quản lý"),
      ls("Database management (PostgreSQL + Cassandra/TimescaleDB)", "Quản lý cơ sở dữ liệu (PostgreSQL + Cassandra/TimescaleDB)"),
      ls("SSL certificates and domain configuration", "Chứng chỉ SSL và cấu hình tên miền"),
      ls("Platform upgrades with zero downtime", "Nâng cấp nền tảng không downtime"),
      ls("Dashboard design consultation", "Tư vấn thiết kế dashboard"),
      ls("Technical support via email and chat", "Hỗ trợ kỹ thuật qua email và chat"),
    ],
    technicalCapabilities: [
      "ThingsBoard PE v3.x or CE latest",
      "MQTT, CoAP, HTTP, LwM2M device APIs",
      "Rule engine with 50+ built-in nodes",
      "White-labeling (PE only)",
      "Integration with external systems via REST API",
    ],
    processSteps: [
      { title: ls("Choose Edition", "Chọn phiên bản"), description: ls("Select PE or CE based on your feature requirements.", "Chọn PE hoặc CE dựa trên yêu cầu tính năng.") },
      { title: ls("Deploy", "Triển khai"), description: ls("We provision your instance with optimized configuration.", "Chúng tôi khởi tạo instance với cấu hình tối ưu.") },
      { title: ls("Onboard Devices", "Kết nối thiết bị"), description: ls("Connect your devices using MQTT, HTTP, or CoAP.", "Kết nối thiết bị bằng MQTT, HTTP hoặc CoAP.") },
      { title: ls("Build Dashboards", "Xây dựng dashboard"), description: ls("Create real-time dashboards with our support.", "Tạo dashboard thời gian thực với sự hỗ trợ của chúng tôi.") },
    ],
    pricingType: "public_packages",
    pricingPlans: [
      { name: "Community", price: "$25", period: "/month", features: ["CE edition", "2 vCPU / 4GB RAM", "Up to 500 devices", "10GB storage", "Daily backups"], ctaText: "Get Started" },
      { name: "Professional", price: "$65", period: "/month", features: ["PE edition", "4 vCPU / 8GB RAM", "Up to 5,000 devices", "50GB storage", "White-labeling", "Priority support"], highlighted: true, ctaText: "Get Started" },
      { name: "Enterprise", price: "$120", period: "/month", features: ["PE edition", "8 vCPU / 16GB RAM", "Unlimited devices", "200GB storage", "HA cluster", "Dedicated engineer", "SLA"], ctaText: "Contact Us" },
    ],
    faq: [
      { question: ls("What is the difference between PE and CE?", "Sự khác biệt giữa PE và CE là gì?"), answer: ls("PE includes white-labeling, advanced RBAC, scheduler, and integrations. CE is open-source with core features.", "PE bao gồm white-labeling, RBAC nâng cao, scheduler và tích hợp. CE là mã nguồn mở với tính năng cốt lõi.") },
      { question: ls("Can I upgrade from CE to PE?", "Tôi có thể nâng cấp từ CE lên PE không?"), answer: ls("Yes. We handle the migration with minimal downtime and no data loss.", "Có. Chúng tôi xử lý di chuyển với downtime tối thiểu và không mất dữ liệu.") },
      { question: ls("Do you support custom widgets?", "Có hỗ trợ widget tuỳ chỉnh không?"), answer: ls("Absolutely. We can develop custom widgets or help you build your own.", "Hoàn toàn. Chúng tôi có thể phát triển widget tuỳ chỉnh hoặc giúp bạn xây dựng.") },
    ],
    relatedServiceIds: ["nodered-hosting", "industrial-iot"],
    relatedUseCaseIds: ["energy-monitoring", "smart-home"],
  },
  {
    id: "industrial-iot",
    slug: "industrial-iot-solutions",
    title: ls("Industrial IoT Consulting & Solutions", "Tư vấn / Cung cấp Giải pháp IoT Công nghiệp"),
    group: "service",
    shortDescription: ls(
      "End-to-end design and implementation of industrial IoT systems — from sensor to cloud.",
      "Thiết kế và triển khai hệ thống IoT công nghiệp trọn gói — từ thiết bị hiện trường/cảm biến đến nền tảng cloud."
    ),
    bulletPoints: [
      ls("Protocol: RS485, Modbus, OPC UA, MQTT, TCP/IP", "Hỗ trợ tích hợp nhiều giao thức: RS485, Modbus, OPC UA, MQTT, TCP/IP"),
      ls("Custom dashboard design for monitoring & alerting", "Thiết kế dashboard theo nhu cầu để giám sát và cảnh báo"),
      ls("Full lifecycle: design → deploy → maintain", "Đồng hành trọn vòng đời dự án: thiết kế → triển khai → vận hành/bảo trì"),
    ],
    heroSubheadline: ls(
      "Digitize your factory, optimize operations, and monitor remotely to improve performance and reduce maintenance costs with centralized data management.",
      "Số hóa nhà máy, điều tiết vận hành, giám sát từ xa giúp tối ưu hiệu suất và cắt giảm chi phí bảo trì với hệ thống quản lý dữ liệu tập trung."
    ),
    heroText: ls("", ""),
    introBlock: ls(
      "Connect both legacy and modern machines, collect real-time data, and turn it into clear dashboards—so you can make faster, more accurate operational decisions.",
      "Kết nối máy móc cũ lẫn mới, thu thập dữ liệu thời gian thực và biến chúng thành những biểu đồ trực quan, giúp bạn ra quyết định quản trị chính xác hơn bao giờ hết."
    ),
    targetUsers: [],
    painPoints: [],
    painPointCards: [
      {
        title: ls("Siloed data", "Dữ liệu rời rạc"),
        description: ls(
          "Machines run independently with no unified view to evaluate performance.",
          "Máy móc hoạt động độc lập, không có sự liên kết dữ liệu tổng thể để đánh giá hiệu suất."
        ),
        icon: "Database",
      },
      {
        title: ls("Reactive maintenance", "Bảo trì thụ động"),
        description: ls(
          "Issues are fixed only after failure, causing downtime and unexpected costs.",
          "Chỉ sửa chữa khi máy đã hỏng, gây đình trệ sản xuất và tốn kém chi phí phát sinh."
        ),
        icon: "Wrench",
      },
      {
        title: ls("Resource waste", "Lãng phí tài nguyên"),
        description: ls(
          "Limited visibility into electricity, water, and material usage by time window or shift.",
          "Không kiểm soát được chính xác lượng điện, nước, nguyên liệu tiêu thụ theo từng khung giờ."
        ),
        icon: "Zap",
      },
      {
        title: ls("People dependency", "Phụ thuộc nhân sự"),
        description: ls(
          "Manual monitoring is error-prone, subjective, and leads to slow reporting.",
          "Quy trình giám sát thủ công, dễ sai sót, thiếu tính khách quan và báo cáo chậm trễ."
        ),
        icon: "Users",
      },
    ],
    includedScope: [],
    offerCards: [
      {
        title: ls("Multi-protocol connectivity", "Kết nối đa giao thức"),
        description: ls(
          "Use Node-RED to connect Modbus, OPC UA, MQTT, HTTP, and more across Siemens, Mitsubishi, Schneider, etc.",
          "Sử dụng Node-RED để 'nói chuyện' với mọi thiết bị (Modbus, OPC-UA, MQTT, HTTP...) từ các hãng lớn như Siemens, Mitsubishi, Schneider..."
        ),
        icon: "Network",
      },
      {
        title: ls("Visual monitoring", "Giám sát trực quan"),
        description: ls(
          "Cloud dashboards for web/mobile access—reports, control, and insights anywhere.",
          "Triển khai giao diện điều khiển hiện đại trên Cloud, cho phép bạn xem báo cáo và quản lý mọi lúc mọi nơi qua Web/Mobile."
        ),
        icon: "LayoutDashboard",
      },
      {
        title: ls("Optimized IoT hosting", "Hạ tầng Hosting tối ưu"),
        description: ls(
          "Purpose-built cloud hosting for 24/7 operation, low latency, and strong security.",
          "Cung cấp dịch vụ Cloud chuyên dụng cho IoT, đảm bảo hệ thống vận hành 24/7 với độ trễ cực thấp và bảo mật cao."
        ),
        icon: "Cloud",
      },
      {
        title: ls("Smart alerts", "Cảnh báo thông minh"),
        description: ls(
          "Instant notifications via Telegram, Email, or SMS when anomalies occur—so issues are handled fast.",
          "Hệ thống tự động gửi thông báo tức thời qua Telegram, Email, SMS ngay khi có thông số bất thường, giúp xử lý sự cố ngay lập tức."
        ),
        icon: "BellRing",
      },
    ],
    technicalCapabilities: [],
    processSteps: [
      { title: ls("Discovery & consulting", "Khảo sát & Tư vấn"), description: ls("Assess your current infrastructure and real operational needs.", "Trực tiếp đánh giá hạ tầng hiện tại và nhu cầu thực tế của nhà máy.") },
      { title: ls("Architecture design", "Thiết kế kiến trúc"), description: ls("Select sensors/gateways and design an optimal data-flow architecture.", "Lựa chọn phần cứng (Sensor/Gateway) và xây dựng cấu trúc luồng dữ liệu tối ưu.") },
      { title: ls("Deployment & integration", "Triển khai & Kết nối"), description: ls("Configure field devices and enable edge data collection/processing.", "Cấu hình thiết bị tại hiện trường để thu thập và xử lý dữ liệu tại biên (Edge Computing).") },
      { title: ls("Dashboard build", "Xây dựng giao diện"), description: ls("Create web/app dashboards tailored to your operations.", "Thiết lập Dashboard giám sát trên Web/App theo yêu cầu riêng, phù hợp với nghiệp vụ của bạn.") },
      { title: ls("Handover & operations", "Vận hành & Chuyển giao"), description: ls("Train your team and provide ongoing maintenance and periodic upgrades.", "Đào tạo nhân sự vận hành và cung cấp dịch vụ bảo trì, nâng cấp định kỳ.") },
    ],
    pricingType: "contact_for_quote",
    hidePricing: true,
    faq: [],
    relatedServiceIds: ["nodered-hosting", "thingsboard-hosting", "iot-consulting"],
    relatedUseCaseIds: ["energy-monitoring", "factory-automation"],
    sectionTitles: {
      painPoints: ls("Solve the Problems You Face", "Giải quyết các vấn đề của bạn"),
      included: ls("What I Offer", "Giải pháp của tôi"),
      process: ls("Implementation Process", "Quy trình triển khai"),
    },
    sectionIntros: {
      painPoints: ls(
        "From real-world operations, I've seen the barriers that typically block performance improvements:",
        "Trong quá trình vận hành thực tế, tôi hiểu những rào cản mà bạn đang đối mặt:"
      ),
      included: ls(
        "I design systems for flexibility, reliability, and cost efficiency—so your data becomes actionable and valuable.",
        "Tôi sẽ thiết kế hệ thống tập trung vào tính linh hoạt, sự ổn định và tối ưu chi phí cho doanh nghiệp, đảm bảo dữ liệu được sử dụng đúng cách và có giá trị."
      ),
      process: ls(
        "I work with you through five structured steps to ensure the system goes live successfully:",
        "Tôi đồng hành cùng bạn qua 5 bước chặt chẽ để đảm bảo hệ thống đi vào hoạt động hiệu quả nhất:"
      ),
    },
  },
  {
    id: "smart-home-iot",
    slug: "smart-home-iot-solutions",
    title: ls("Smart Home Solutions", "Giải pháp Nhà thông minh"),
    group: "service",
    shortDescription: ls(
      "Design and integrate smart home systems tailored to your lifestyle, with a focus on convenience, energy efficiency, and easy day-to-day control.",
      "Thiết kế và tích hợp hệ thống nhà thông minh phù hợp với nhu cầu sử dụng thực tế, ưu tiên sự tiện nghi, tiết kiệm năng lượng và dễ vận hành hằng ngày."
    ),
    bulletPoints: [
      ls("Custom smart home design tailored to your lifestyle", "Thiết kế giải pháp nhà thông minh theo nhu cầu và thói quen sử dụng của bạn"),
      ls("Integration with popular platforms (Home Assistant, SmartThings, etc.)", "Tích hợp với các nền tảng phổ biến (Home Assistant, SmartThings, v.v.)"),
      ls("Energy monitoring and automated scheduling", "Giám sát năng lượng và tự động hoá theo lịch"),
    ],
    heroText: ls(
      "Transform your home into an intelligent living space. From lighting and climate control to security and energy management — we design and integrate smart home systems that work seamlessly together.",
      "Biến ngôi nhà thành không gian sống thông minh. Từ chiếu sáng và điều hoà đến an ninh và quản lý năng lượng — chúng tôi thiết kế và tích hợp hệ thống nhà thông minh hoạt động liền mạch."
    ),
    targetUsers: [
      ls("Homeowners wanting integrated smart home systems", "Chủ nhà muốn hệ thống nhà thông minh tích hợp"),
      ls("Property developers adding smart features to new builds", "Nhà phát triển bất động sản thêm tính năng thông minh"),
      ls("Tech enthusiasts seeking advanced home automation", "Người đam mê công nghệ tìm kiếm tự động hoá nhà nâng cao"),
    ],
    painPoints: [
      ls("Too many disconnected smart devices", "Quá nhiều thiết bị thông minh không kết nối"),
      ls("No unified control or dashboard", "Không có điều khiển hoặc dashboard thống nhất"),
      ls("Complex setup with no professional support", "Cài đặt phức tạp mà không có hỗ trợ chuyên nghiệp"),
      ls("Energy waste from unoptimized systems", "Lãng phí năng lượng do hệ thống chưa tối ưu"),
    ],
    includedScope: [
      ls("Home assessment and requirements gathering", "Khảo sát nhà và thu thập yêu cầu"),
      ls("System architecture and device selection", "Kiến trúc hệ thống và lựa chọn thiết bị"),
      ls("Installation and integration", "Lắp đặt và tích hợp"),
      ls("Custom dashboard and mobile control setup", "Thiết lập dashboard và điều khiển di động"),
      ls("User training and documentation", "Đào tạo người dùng và tài liệu"),
      ls("Post-installation support", "Hỗ trợ sau lắp đặt"),
    ],
    technicalCapabilities: [
      "Zigbee, Z-Wave, Wi-Fi, Bluetooth LE protocols",
      "Home Assistant, Tuya, SmartThings integration",
      "Energy monitoring with real-time dashboards",
      "Voice control via Alexa, Google Home",
      "Custom automation rules and scenes",
    ],
    processSteps: [
      { title: ls("Consultation", "Tư vấn"), description: ls("Discuss your lifestyle needs and preferences.", "Trao đổi nhu cầu và sở thích cuộc sống.") },
      { title: ls("Design", "Thiết kế"), description: ls("Create a tailored smart home architecture.", "Tạo kiến trúc nhà thông minh tuỳ chỉnh.") },
      { title: ls("Install", "Lắp đặt"), description: ls("Professional installation and integration.", "Lắp đặt và tích hợp chuyên nghiệp.") },
      { title: ls("Configure", "Cấu hình"), description: ls("Set up automations, scenes, and dashboards.", "Thiết lập tự động hoá, cảnh và dashboard.") },
      { title: ls("Support", "Hỗ trợ"), description: ls("Ongoing support and optimization.", "Hỗ trợ liên tục và tối ưu hoá.") },
    ],
    pricingType: "contact_for_quote",
    faq: [
      { question: ls("Will this work with my existing devices?", "Có hoạt động với thiết bị hiện tại không?"), answer: ls("We assess your current setup and integrate compatible devices into a unified system.", "Chúng tôi đánh giá hệ thống hiện tại và tích hợp thiết bị tương thích vào hệ thống thống nhất.") },
      { question: ls("Do I need a hub?", "Tôi có cần hub không?"), answer: ls("It depends on your setup. We recommend the best approach based on your device ecosystem.", "Tuỳ thuộc hệ thống. Chúng tôi đề xuất cách tiếp cận tốt nhất dựa trên hệ sinh thái thiết bị.") },
      { question: ls("Can I control everything from my phone?", "Có thể điều khiển mọi thứ từ điện thoại không?"), answer: ls("Yes. We set up mobile dashboards and voice control for complete remote access.", "Có. Chúng tôi thiết lập dashboard di động và điều khiển giọng nói để truy cập từ xa hoàn toàn.") },
    ],
    relatedServiceIds: ["iot-consulting"],
    relatedUseCaseIds: ["smart-home"],
  },
  {
    id: "iot-consulting",
    slug: "iot-consulting",
    title: ls("End-to-End IoT Consulting", "Tư vấn giải pháp IoT toàn diện"),
    group: "service",
    shortDescription: ls(
      "Strategic IoT consulting from concept to deployment. Architecture design, technology selection, and project planning for your IoT initiatives.",
      "Tư vấn giải pháp IoT từ giai đoạn ý tưởng đến triển khai thực tế, bao gồm thiết kế kiến trúc, lựa chọn công nghệ và lập kế hoạch triển khai phù hợp."
    ),
    bulletPoints: [
      ls("System architecture consulting aligned with your goals and budget", "Tư vấn kiến trúc hệ thống phù hợp với mục tiêu và ngân sách"),
      ls("Support for vendor evaluation and hardware selection", "Hỗ trợ đánh giá thiết bị/nhà cung cấp và lựa chọn phần cứng phù hợp"),
      ls("Deployment planning, cost estimation, and early risk identification", "Hỗ trợ lập kế hoạch triển khai, ước tính chi phí và nhận diện rủi ro sớm"),
    ],
    heroText: ls(
      "Navigate the complexity of IoT with expert guidance. From feasibility studies to full deployment, we provide the strategic consulting you need to make your IoT projects succeed.",
      "Vượt qua sự phức tạp của IoT với hướng dẫn chuyên gia. Từ nghiên cứu khả thi đến triển khai đầy đủ, chúng tôi cung cấp tư vấn chiến lược cần thiết để dự án IoT thành công."
    ),
    targetUsers: [
      ls("CTOs and IT directors planning IoT initiatives", "CTO và giám đốc IT lập kế hoạch sáng kiến IoT"),
      ls("Startups building IoT products", "Startup xây dựng sản phẩm IoT"),
      ls("Enterprises modernizing legacy systems", "Doanh nghiệp hiện đại hoá hệ thống cũ"),
    ],
    painPoints: [
      ls("Unsure which IoT platform or protocol to choose", "Không chắc chọn nền tảng hoặc giao thức IoT nào"),
      ls("Previous IoT projects failed or stalled", "Dự án IoT trước đã thất bại hoặc đình trệ"),
      ls("Lack of in-house IoT expertise", "Thiếu chuyên môn IoT nội bộ"),
      ls("Need to validate a concept before investing", "Cần xác nhận ý tưởng trước khi đầu tư"),
    ],
    includedScope: [
      ls("Feasibility study and proof of concept", "Nghiên cứu khả thi và proof of concept"),
      ls("Architecture and technology stack design", "Thiết kế kiến trúc và technology stack"),
      ls("Vendor and platform evaluation", "Đánh giá nhà cung cấp và nền tảng"),
      ls("Project roadmap and milestone planning", "Lộ trình dự án và kế hoạch mốc quan trọng"),
      ls("Budget estimation and ROI analysis", "Ước tính ngân sách và phân tích ROI"),
      ls("Technical team mentoring and knowledge transfer", "Hướng dẫn đội ngũ kỹ thuật và chuyển giao kiến thức"),
    ],
    technicalCapabilities: [
      "Multi-protocol architecture (MQTT, HTTP, CoAP, LoRaWAN)",
      "Cloud platform evaluation (AWS IoT, Azure IoT, self-hosted)",
      "Edge computing strategy",
      "Security architecture and best practices",
      "Scalability and performance planning",
    ],
    processSteps: [
      { title: ls("Assessment", "Đánh giá"), description: ls("Deep dive into your goals, constraints, and existing systems.", "Tìm hiểu sâu mục tiêu, ràng buộc và hệ thống hiện tại.") },
      { title: ls("Strategy", "Chiến lược"), description: ls("Develop a comprehensive IoT roadmap and architecture.", "Phát triển lộ trình IoT và kiến trúc toàn diện.") },
      { title: ls("Validation", "Xác nhận"), description: ls("Build a proof of concept to validate the approach.", "Xây dựng proof of concept để xác nhận hướng tiếp cận.") },
      { title: ls("Execution Support", "Hỗ trợ triển khai"), description: ls("Guide implementation and provide ongoing advisory.", "Hướng dẫn triển khai và tư vấn liên tục.") },
    ],
    pricingType: "contact_for_quote",
    faq: [
      { question: ls("Do you only consult or also implement?", "Bạn chỉ tư vấn hay cũng triển khai?"), answer: ls("We do both. We can consult on strategy and also handle full implementation if needed.", "Cả hai. Chúng tôi có thể tư vấn chiến lược và cũng triển khai đầy đủ nếu cần.") },
      { question: ls("What industries do you work with?", "Bạn làm việc với ngành nào?"), answer: ls("We work across manufacturing, energy, agriculture, smart buildings, and consumer IoT.", "Chúng tôi làm việc trong sản xuất, năng lượng, nông nghiệp, toà nhà thông minh và IoT tiêu dùng.") },
      { question: ls("How long is a typical consulting engagement?", "Thời gian tư vấn thông thường là bao lâu?"), answer: ls("Engagements range from a 2-week assessment to multi-month advisory retainers.", "Từ đánh giá 2 tuần đến tư vấn dài hạn nhiều tháng.") },
    ],
    relatedServiceIds: ["industrial-iot", "smart-home-iot"],
    relatedUseCaseIds: ["energy-monitoring", "factory-automation"],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);

export const hostingServices = services.filter((s) => s.group === "hosting");
export const customServices = services.filter((s) => s.group === "service");
