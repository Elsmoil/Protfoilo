const fs = require('fs');
const en = JSON.parse(fs.readFileSync('./messages/en.json', 'utf8'));
const ar = JSON.parse(fs.readFileSync('./messages/ar.json', 'utf8'));

en.EngineRoom = {
  title: "The Engine Room",
  desc1: "// Accessing core stack and infrastructure parameters...",
  desc2: "Building the invisible engines that push data through the void.",
  cat1: "Core Architecture",
  cat2: "Heavy Data & State",
  cat3: "Real-time & Auth",
  cat4: "Security & Encryption",
  cat5: "DevOps & Environment",
  cat6: "Hardware & Compute"
};

ar.EngineRoom = {
  title: "غرفة المحركات",
  desc1: "// جاري الوصول إلى حزمة الأنظمة الأساسية ومعايير البنية التحتية...",
  desc2: "بناء المحركات الخفية التي تدفع البيانات عبر الفراغ.",
  cat1: "الهيكلة الأساسية",
  cat2: "البيانات الضخمة والحالة",
  cat3: "التزامن والمصادقة",
  cat4: "الأمان والتشفير",
  cat5: "عمليات التطوير والبيئة",
  cat6: "العتاد والحوسبة"
};

en.Contact = {
  title: "Initiate Contact",
  desc1: "// Awaiting input...",
  desc2: "Ready to deploy the next architecture? Drop a secure line.",
  name: "Name",
  email: "Email",
  message: "Message",
  send: "Send Transmission",
  links: "Direct Links",
  location: "Server Location",
  city: "Dubai, UAE"
};

ar.Contact = {
  title: "بدء الاتصال",
  desc1: "// في انتظار الإدخال...",
  desc2: "هل أنت مستعد لنشر المعمارية التالية؟ أرسل رسالة آمنة.",
  name: "الاسم",
  email: "البريد الإلكتروني",
  message: "الرسالة",
  send: "إرسال البيانات",
  links: "روابط مباشرة",
  location: "موقع الخادم",
  city: "دبي، الإمارات العربية المتحدة"
};

fs.writeFileSync('./messages/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('./messages/ar.json', JSON.stringify(ar, null, 2));
