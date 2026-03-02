import { UseCase } from "./types";
import { ls } from "./types";

export const useCases: UseCase[] = [
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
      ls("Peace of mind: the heating system runs 24/7 even during connectivity issues.", "Sự an tâm tuyệt đối: Hệ thống sưởi luôn hoạt động 24/7 bất chấp sự cố đường truyền."),
      ls("Real energy savings: timer-based buffer valve scheduling significantly reduces unnecessary electricity usage.", "Tiết kiệm năng lượng thực tế: Việc lên lịch cho van bồn đệm giúp cắt giảm đáng kể lượng điện tiêu thụ dư thừa."),
      ls("Smarter operations: technicians can troubleshoot remotely, reducing on-site maintenance cost.", "Quản lý thông minh: Kỹ thuật viên có thể xử lý sự cố từ xa, giảm thiểu chi phí bảo trì tại hiện trường."),
    ],
    servicesUsed: ["industrial-iot", "nodered-hosting"],
    hideChallenge: true,
    hideSolution: true,
    sections: [
      {
        id: "overview",
        title: ls("Project Overview", "Tổng quan dự án"),
        body: ls(
          "My project with Alkes Have in Denmark is a clear example of applying IoT to solve large-scale heat management. With 40 independent apartments, the core goal was to automate Buffer Tank and DHW control—balancing energy efficiency with maximum comfort.",
          "Dự án của tôi với đối tác Alkes Have tại Đan Mạch là minh chứng điển hình cho việc ứng dụng IoT để giải quyết bài toán quản lý nhiệt lượng quy mô lớn. Với 40 căn hộ độc lập, mục tiêu trọng tâm là tự động hóa điều khiển bồn đệm (Buffer Tank) và nước nóng sinh hoạt (DHW), đảm bảo sự cân bằng hoàn hảo giữa tiết kiệm năng lượng và tiện nghi tối đa."
        ),
      },
      {
        id: "challenges",
        title: ls("Key Challenges", "Thách thức đặt ra"),
        body: ls(
          "To operate the building efficiently, the system had to overcome three major barriers:\n- Fail-safe operation: remain stable and keep running even when the internet is down.\n- Personalized demand: each apartment has different habits and preferred temperature thresholds.\n- Cost optimization: reduce wasted electricity during low-demand hours or when there is no usage.",
          "Để vận hành hiệu quả một tòa nhà, hệ thống phải vượt qua 3 rào cản lớn:\n- Vận hành không gián đoạn: Hệ thống phải duy trì tính ổn định tuyệt đối ngay cả khi mất kết nối Internet (chế độ Fail-safe).\n- Cá nhân hóa nhu cầu: Mỗi căn hộ là một thực thể riêng biệt với thói quen sinh hoạt và ngưỡng nhiệt độ mong muốn khác nhau.\n- Bài toán chi phí: Tối ưu hóa việc sử dụng điện năng, tránh lãng phí vào các khung giờ thấp điểm hoặc khi không có nhu cầu sử dụng."
        ),
      },
      {
        id: "solution-overview",
        title: ls("Solution Overview", "Giải pháp đề ra"),
        body: ls(
          "Solution: a \"Smart & Resilient\" 3-layer architecture\n- Edge Computing: Shelly runs on-site logic so the system still operates when the internet is down.\n- Orchestration: Node-RED maps data per apartment and uses MQTT Retain to restore configuration after reconnect.\n- Operations: Datacake provides a centralized dashboard with manual override and timer scheduling for energy optimization.",
          "Giải pháp: Kiến trúc 3 lớp \"Thông minh & Bền bỉ\"\n- Tầng biên (Edge Computing): Shelly vận hành logic tại chỗ để hệ thống vẫn hoạt động khi mất Internet.\n- Tầng điều phối: Node-RED định danh dữ liệu theo từng căn hộ và đẩy cấu hình bằng MQTT Retain để tự phục hồi sau khi reconnect.\n- Tầng vận hành: Datacake cung cấp dashboard tập trung, điều khiển manual/override và lập lịch (timer) cho tối ưu năng lượng."
        ),
      },
      {
        id: "edge-shelly",
        title: ls("Layer 1 — Edge Computing (Shelly)", "Lớp 1 — Edge Computing (Shelly)"),
        body: ls(
          "Edge Computing: On-site intelligence with Shelly\nActing as the on-site \"nervous system\", Shelly Plus 2PM combined with temperature add-ons enables:\n- Autonomous operation: control scripts run directly on the device to switch valves based on real temperature—without waiting for cloud commands.\n- Instant response: removes latency and reduces risk during network outages.",
          "Tầng biên (Edge Computing): Trí tuệ tại chỗ với Shelly\nĐóng vai trò là \"hệ thần kinh\" trực tiếp tại hiện trường, thiết bị Shelly Plus 2PM kết hợp cùng cảm biến nhiệt Add-on cho phép:\n- Tự chủ vận hành: Các script điều khiển chạy trực tiếp trên thiết bị giúp đóng/ngắt van dựa theo nhiệt độ thực tế mà không cần chờ lệnh từ Cloud.\n- Phản ứng tức thì: Loại bỏ độ trễ và rủi ro khi mất mạng."
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
          "Orchestration: Smart data management with Node-RED\nNode-RED acts as the \"conductor\" for system data flows:\n- Accurate identification: automatically maps each apartment's MQTT data to the correct management ID—preventing data mix-ups.\n- Self-recovery: uses MQTT Retain so devices immediately receive the latest configuration after reconnect.",
          "Tầng điều phối: Quản lý dữ liệu thông minh qua Node-RED\nNode-RED đóng vai trò là \"nhạc trưởng\" điều phối các luồng thông tin:\n- Định danh chính xác: Tự động ánh xạ dữ liệu MQTT của từng căn hộ về đúng ID quản lý, loại bỏ sai sót dữ liệu.\n- Khả năng tự phục hồi: Sử dụng cơ chế MQTT Retain để đảm bảo thiết bị nhận lại ngay cấu hình gần nhất khi kết nối lại."
        ),
        image: "/use-cases/alkes-have/node-red.png",
        imageAlt: ls("Node-RED flows used for orchestration and mapping", "Luồng Node-RED dùng để điều phối và mapping"),
      },
      {
        id: "platform-datacake",
        title: ls("Layer 3 — Operations Dashboard (Datacake)", "Lớp 3 — Trung tâm vận hành (Datacake)"),
        body: ls(
          "Operations: Centralized dashboard on Datacake\nThe status of all 40 apartments is brought into a single operations screen:\n- Multi-level monitoring: from a building-wide view down to per-apartment temperatures and valve states.\n- Flexible control: technicians can manually override or schedule timers with a few clicks.",
          "Tầng vận hành: Dashboard tập trung trên Datacake\nToàn bộ trạng thái của 40 căn hộ được \"gói gọn\" trong một màn hình điều khiển:\n- Giám sát đa tầng: Từ cái nhìn tổng thể toàn tòa nhà đến chi tiết từng thông số nhiệt độ, trạng thái van của từng hộ dân.\n- Tương tác linh hoạt: Kỹ thuật viên có thể can thiệp thủ công (Override) hoặc thiết lập lịch trình (Timer) chỉ với vài thao tác."
        ),
        image: "/use-cases/alkes-have/datacake-1.png",
        imageAlt: ls("Global operations dashboard overview", "Dashboard giám sát tổng quan toàn hệ thống"),
        imageCaption: ls("Main monitoring dashboard for all 40 apartments", "Giao diện chính giám sát toàn bộ 40 căn hộ"),
      },
      {
        id: "datacake-manual-timer",
        title: ls("Manual Control & Timer Scheduling", "Điều khiển manual & cài đặt timer"),
        body: ls(
          "Operator tools for energy saving and fast intervention:\n• Manual control/override when needed\n• Timer scheduling for Buffer Valve to reduce unnecessary runtime",
          "Công cụ vận hành để tiết kiệm điện và can thiệp nhanh khi cần:\n• Điều khiển manual/override khi cần\n• Cài đặt timer cho Buffer Valve để giảm vận hành dư thừa"
        ),
        image: "/use-cases/alkes-have/datacake-2.png",
        imageAlt: ls("Datacake manual control and timer settings", "Datacake — điều khiển thủ công và thiết lập timer"),
        imageCaption: ls("Manual control interface and timer scheduling settings", "Giao diện điều khiển manual và setting timer"),
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
        imageCaption: ls("Per-apartment configuration and control interface", "Giao diện cài đặt và điều khiển riêng cho từng căn hộ"),
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
