import { UseCase } from "./types";
import { ls } from "./types";

export const useCases: UseCase[] = [
  {
    id: "energy-monitoring",
    slug: "energy-monitoring",
    title: ls("Real-Time Energy Monitoring for Manufacturing", "Giám sát năng lượng thời gian thực cho sản xuất"),
    shortDescription: ls(
      "Deployed a multi-site energy monitoring system with RS485/Modbus sensors, real-time dashboards, and automated alerting — reducing energy costs by 18%.",
      "Triển khai hệ thống giám sát năng lượng đa site với cảm biến RS485/Modbus, dashboard thời gian thực và cảnh báo tự động — giảm 18% chi phí năng lượng."
    ),
    industry: ls("Manufacturing", "Sản xuất"),
    challenge: ls(
      "A manufacturing company with 3 facilities had no visibility into energy consumption patterns. Monthly utility bills were high but they couldn't identify waste or optimize usage.",
      "Một công ty sản xuất với 3 nhà máy không có tầm nhìn về mô hình tiêu thụ năng lượng. Hoá đơn hàng tháng cao nhưng không thể xác định lãng phí hay tối ưu sử dụng."
    ),
    solution: ls(
      "We deployed energy meters connected via RS485/Modbus to edge gateways, streaming data to a ThingsBoard dashboard. Automated alerts notify operators of anomalies, and scheduled reports track consumption trends.",
      "Chúng tôi triển khai đồng hồ đo năng lượng kết nối qua RS485/Modbus tới edge gateway, truyền dữ liệu đến dashboard ThingsBoard. Cảnh báo tự động thông báo bất thường cho vận hành, báo cáo định kỳ theo dõi xu hướng tiêu thụ."
    ),
    results: [
      ls("18% reduction in energy costs within 6 months", "Giảm 18% chi phí năng lượng trong 6 tháng"),
      ls("Real-time visibility across all 3 sites from a single dashboard", "Tầm nhìn thời gian thực qua cả 3 site từ một dashboard"),
      ls("Automated alerts reduced response time from hours to minutes", "Cảnh báo tự động giảm thời gian phản hồi từ giờ xuống phút"),
      ls("ROI achieved within 4 months", "Hoàn vốn trong 4 tháng"),
    ],
    servicesUsed: ["industrial-iot", "thingsboard-hosting"],
  },
  {
    id: "factory-automation",
    slug: "factory-automation",
    title: ls("Factory Machine Status Monitoring", "Giám sát trạng thái máy nhà máy"),
    shortDescription: ls(
      "Built a real-time machine status monitoring system using OPC UA and Node-RED, enabling predictive maintenance and reducing unplanned downtime by 35%.",
      "Xây dựng hệ thống giám sát trạng thái máy thời gian thực bằng OPC UA và Node-RED, hỗ trợ bảo trì dự đoán và giảm 35% thời gian ngừng ngoài kế hoạch."
    ),
    industry: ls("Industrial Automation", "Tự động hoá công nghiệp"),
    challenge: ls(
      "A factory with 50+ machines had no centralized monitoring. Operators relied on manual checks and machines often failed without warning, causing costly production delays.",
      "Một nhà máy với hơn 50 máy không có giám sát tập trung. Vận hành viên dựa vào kiểm tra thủ công và máy thường hỏng không báo trước, gây trì hoãn sản xuất tốn kém."
    ),
    solution: ls(
      "We connected machines via OPC UA to Node-RED flows, aggregating status data into a ThingsBoard dashboard with real-time alerts and maintenance scheduling.",
      "Chúng tôi kết nối máy qua OPC UA tới luồng Node-RED, tổng hợp dữ liệu trạng thái vào dashboard ThingsBoard với cảnh báo thời gian thực và lập lịch bảo trì."
    ),
    results: [
      ls("35% reduction in unplanned downtime", "Giảm 35% thời gian ngừng ngoài kế hoạch"),
      ls("Centralized monitoring of 50+ machines", "Giám sát tập trung hơn 50 máy"),
      ls("Predictive maintenance scheduling based on real data", "Lập lịch bảo trì dự đoán dựa trên dữ liệu thực"),
      ls("Operator efficiency improved by 25%", "Hiệu suất vận hành viên cải thiện 25%"),
    ],
    servicesUsed: ["industrial-iot", "nodered-hosting", "thingsboard-hosting"],
  },
  {
    id: "smart-home",
    slug: "smart-home-integration",
    title: ls("Luxury Smart Home Integration", "Tích hợp nhà thông minh cao cấp"),
    shortDescription: ls(
      "Designed and integrated a complete smart home system covering lighting, climate, security, and energy monitoring for a 300m² modern residence.",
      "Thiết kế và tích hợp hệ thống nhà thông minh hoàn chỉnh bao gồm chiếu sáng, điều hoà, an ninh và giám sát năng lượng cho biệt thự 300m² hiện đại."
    ),
    industry: ls("Residential", "Nhà ở"),
    challenge: ls(
      "A homeowner had purchased multiple smart devices from different brands but they didn't work together. There was no unified control and automations were unreliable.",
      "Chủ nhà đã mua nhiều thiết bị thông minh từ các hãng khác nhau nhưng chúng không hoạt động cùng nhau. Không có điều khiển thống nhất và tự động hoá không đáng tin."
    ),
    solution: ls(
      "We unified all devices under Home Assistant, created custom automations for lighting scenes, climate scheduling, and security. A wall-mounted dashboard and mobile app provide full control.",
      "Chúng tôi thống nhất tất cả thiết bị dưới Home Assistant, tạo tự động hoá tuỳ chỉnh cho cảnh chiếu sáng, lập lịch điều hoà và an ninh. Dashboard gắn tường và ứng dụng di động cung cấp điều khiển đầy đủ."
    ),
    results: [
      ls("All devices unified under a single platform", "Tất cả thiết bị thống nhất dưới một nền tảng"),
      ls("30% energy savings through smart scheduling", "Tiết kiệm 30% năng lượng qua lập lịch thông minh"),
      ls("One-touch scenes for different times of day", "Cảnh một chạm cho các thời điểm trong ngày"),
      ls("Remote monitoring and control via mobile app", "Giám sát và điều khiển từ xa qua ứng dụng di động"),
    ],
    servicesUsed: ["smart-home-iot"],
  },
  {
    id: "alkes-have-heat-control",
    slug: "alkes-have-heat-control",
    title: ls(
      "Smart Heat Control & Monitoring for 40 Apartments in Denmark",
      "Hệ Thống Điều Khiển & Giám Sát Nhiệt Lượng Thông Minh Cho 40 Căn Hộ Tại Đan Mạch"
    ),
    shortDescription: ls("", ""),
    industry: ls("Smart Building / Heating", "Toà nhà thông minh / Hệ thống sưởi"),
    challenge: ls(
      "A multi-apartment heating system must stay stable even when the internet is unreliable, while allowing per-apartment customization and reducing wasted energy during low-demand hours.",
      "Hệ thống sưởi nhiều căn hộ cần ổn định ngay cả khi Internet chập chờn, cho phép tuỳ biến theo từng căn và giảm lãng phí điện năng trong các khung giờ thấp điểm."
    ),
    solution: ls(
      "A 3-layer architecture: Shelly runs local control offline, Node-RED orchestrates MQTT mapping and retained configuration, and Datacake provides a single operations dashboard with timer-based energy saving and manual override.",
      "Kiến trúc 3 lớp: Shelly chạy logic cục bộ offline, Node-RED điều phối mapping MQTT và cấu hình retain, Datacake cung cấp dashboard vận hành tập trung, timer tiết kiệm điện và cơ chế override."
    ),
    results: [
      ls("Stable operation with offline-first local logic", "Vận hành ổn định nhờ logic cục bộ theo hướng offline-first"),
      ls("Centralized monitoring across 40 apartments from a single dashboard", "Giám sát tập trung toàn bộ 40 căn hộ trên một dashboard"),
      ls("Reduced unnecessary heating runtime via timer-based valve scheduling", "Giảm vận hành dư thừa nhờ lịch timer cho van bồn đệm"),
      ls("Faster troubleshooting with online/offline and last-heard visibility", "Xử lý sự cố nhanh hơn nhờ theo dõi online/offline và last-heard"),
    ],
    servicesUsed: ["industrial-iot", "nodered-hosting"],
    hideChallenge: true,
    hideSolution: true,
    sections: [
      {
        id: "overview",
        title: ls("Project Overview", "Tổng quan dự án"),
        body: ls(
          "• Customer: Alkes Have\n• Location: Denmark\n• Scale: 40 independent apartments\n• Goal: Automate Buffer Tank and DHW control, optimize energy usage, and provide real-time operational visibility.",
          "• Khách hàng: Alkes Have\n• Địa điểm: Đan Mạch\n• Quy mô: 40 căn hộ độc lập\n• Mục tiêu: Tự động hoá điều khiển bồn đệm (Buffer Tank) và nước nóng sinh hoạt (DHW), tối ưu năng lượng và giám sát vận hành theo thời gian thực."
        ),
      },
      {
        id: "challenges",
        title: ls("Key Challenges", "Thách thức đặt ra"),
        body: ls(
          "1) Absolute stability: heating must keep running even if the internet is down (fail-safe).\n2) Per-apartment customization: different temperature needs and usage windows.\n3) Energy optimization: avoid wasting power during low-demand periods.",
          "1) Tính ổn định tuyệt đối: hệ thống vẫn phải chạy khi mất Internet (fail-safe).\n2) Tuỳ biến theo từng căn hộ: ngưỡng nhiệt và khung giờ sử dụng khác nhau.\n3) Tối ưu năng lượng: tránh lãng phí điện trong các khung giờ thấp điểm/ít nhu cầu."
        ),
      },
      {
        id: "edge-shelly",
        title: ls("Layer 1 — Edge Computing (Shelly)", "Lớp 1 — Edge Computing (Shelly)"),
        body: ls(
          "Shelly runs the local 'nervous system' for the project.\n• Devices: Shelly Plus 2PM + temperature add-on for Buffer/DHW monitoring and valve control.\n• Local scripts: Auto-control and MQTT reporting ensure decisions keep working even when cloud connectivity is lost.",
          "Shelly đóng vai trò như \"hệ thần kinh\" tại biên, đảm bảo hệ thống chạy ổn định tại chỗ.\n• Thiết bị: Shelly Plus 2PM + cảm biến nhiệt Add-on để theo dõi Buffer/DHW và điều khiển van.\n• Logic cục bộ: script Auto-control và MQTT reporting giúp thiết bị tự đóng/ngắt theo nhiệt độ thực tế ngay cả khi mất kết nối cloud."
        ),
        image: "/use-cases/alkes-have/shelly-1.png",
        imageAlt: ls("Shelly device used in the project", "Thiết bị Shelly sử dụng trong dự án"),
      },
      {
        id: "edge-shelly-ui",
        title: ls("Local Control & Status on Device", "Điều khiển & trạng thái tại thiết bị"),
        body: ls(
          "Local state and manual actions are available on the device level, supporting fast troubleshooting and safe overrides when needed.",
          "Trạng thái và thao tác thủ công luôn sẵn có tại thiết bị, giúp xử lý nhanh khi cần và hỗ trợ override an toàn."
        ),
        image: "/use-cases/alkes-have/shelly-2.png",
        imageAlt: ls("Shelly local device status interface", "Giao diện trạng thái thiết bị Shelly"),
      },
      {
        id: "orchestration-nodered",
        title: ls("Layer 2 — Orchestration (Node-RED)", "Lớp 2 — Điều phối (Node-RED)"),
        body: ls(
          "Node-RED acts as the orchestration brain between devices and the platform:\n• MQTT data mapping: correctly maps each apartment's telemetry to its unique ID (no overlap).\n• State persistence: uses MQTT Retain for configuration so devices receive the latest settings immediately after reconnect.",
          "Node-RED đóng vai trò điều phối giữa thiết bị và nền tảng:\n• Data mapping: ánh xạ dữ liệu MQTT của từng căn hộ về đúng ID, tránh chồng chéo.\n• State persistence: dùng MQTT Retain để thiết bị nhận cấu hình mới nhất ngay khi kết nối lại."
        ),
        image: "/use-cases/alkes-have/node-red.png",
        imageAlt: ls("Node-RED flows used for orchestration and mapping", "Luồng Node-RED dùng để điều phối và mapping"),
      },
      {
        id: "platform-datacake",
        title: ls("Layer 3 — Operations Dashboard (Datacake)", "Lớp 3 — Trung tâm vận hành (Datacake)"),
        body: ls(
          "A single-pane operations dashboard helps the operator manage all apartments:\n• Global dashboard: online status, temperatures, valves, last-heard.\n• Manual control: centralized override commands when required.",
          "Dashboard vận hành tập trung giúp kỹ thuật viên kiểm soát toàn bộ hệ thống:\n• Global dashboard: trạng thái online, nhiệt độ, van, last-heard.\n• Manual control: gửi lệnh override tập trung khi cần."
        ),
        image: "/use-cases/alkes-have/datacake-2.png",
        imageAlt: ls("Datacake manual control and timer settings", "Datacake — điều khiển thủ công và thiết lập timer"),
      },
      {
        id: "per-apartment-thresholds",
        title: ls("Per-Apartment Threshold Settings", "Tuỳ chỉnh ngưỡng nhiệt theo từng căn hộ"),
        body: ls(
          "Each apartment can have its own ON/OFF temperature thresholds for Buffer and DHW, allowing tailored comfort and better energy usage without changing the global logic.",
          "Mỗi căn hộ có thể cấu hình riêng các ngưỡng nhiệt bật/tắt (ON/OFF) cho Buffer và DHW, giúp tối ưu tiện nghi và năng lượng mà không cần thay đổi logic tổng."
        ),
        image: "/use-cases/alkes-have/datacake-3.png",
        imageAlt: ls("Per-apartment threshold configuration", "Cấu hình ngưỡng nhiệt theo từng căn hộ"),
      },
    ],
    techHighlights: [
      {
        feature: ls("Offline-First", "Offline-First"),
        technical: ls("Local scripting on Shelly devices", "Script cục bộ chạy trực tiếp trên Shelly"),
        benefit: ls("24/7 operation regardless of internet stability", "Hệ thống vận hành 24/7 kể cả khi Internet chập chờn"),
      },
      {
        feature: ls("Energy Saving", "Tiết kiệm năng lượng"),
        technical: ls("Timer scheduling for Buffer Valve via dashboard", "Timer scheduling cho Buffer Valve qua dashboard"),
        benefit: ls("Reduce unnecessary runtime during low-demand hours", "Giảm vận hành dư thừa trong khung giờ ít nhu cầu"),
      },
      {
        feature: ls("Data Integrity", "Toàn vẹn dữ liệu"),
        technical: ls("MQTT mapping + retained configuration", "MQTT mapping + retain cấu hình"),
        benefit: ls("Correct per-apartment data and quick recovery after reconnect", "Dữ liệu đúng theo từng căn và khôi phục nhanh sau khi reconnect"),
      },
      {
        feature: ls("Central Control", "Điều khiển tập trung"),
        technical: ls("Central manual override commands", "Lệnh override tập trung"),
        benefit: ls("Fast intervention for operational safety", "Can thiệp nhanh để đảm bảo vận hành an toàn"),
      },
    ],
  },
];

export const getUseCaseBySlug = (slug: string): UseCase | undefined =>
  useCases.find((u) => u.slug === slug);
