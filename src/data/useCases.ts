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
];

export const getUseCaseBySlug = (slug: string): UseCase | undefined =>
  useCases.find((u) => u.slug === slug);
