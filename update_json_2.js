const fs = require('fs');
const en = JSON.parse(fs.readFileSync('./messages/en.json', 'utf8'));
const ar = JSON.parse(fs.readFileSync('./messages/ar.json', 'utf8'));

en.Contact = {
  ...en.Contact,
  title: "Comm-Link",
  desc: "Let's build something unbreakable.",
  cat_text: "I am currently open to engineering roles and architectural consultations. Whether you have a question about scalable backends or want to build a high-concurrency SaaS, my inbox is open.",
  footer: "© " + new Date().getFullYear() + " Elsmoal S. Ibrahim. Engineered with precision."
};

ar.Contact = {
  ...ar.Contact,
  title: "رابط الاتصال",
  desc: "دعنا نبني شيئاً مضاداً للانهيار.",
  cat_text: "أنا متاح حالياً للأدوار الهندسية والاستشارات المعمارية. سواء كان لديك سؤال حول النظم الخلفية القابلة للتوسع أو كنت ترغب في بناء تطبيق SaaS عالي التزامن، فإن صندوق الوارد الخاص بي مفتوح.",
  footer: "© " + new Date().getFullYear() + " السموأل س. إبراهيم. مُهندس بدقة."
};

en.FeaturedMissions = {
  title: "Featured Deployments"
};
ar.FeaturedMissions = {
  title: "المنصات والمشاريع البارزة"
};

fs.writeFileSync('./messages/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('./messages/ar.json', JSON.stringify(ar, null, 2));
