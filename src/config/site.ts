/**
 * تنظیمات سایت — همه اطلاعات شخصی و تماس اینجاست.
 * برای تغییر اطلاعات فقط همین فایل را ویرایش کنید.
 */

export const site = {
  name: "سجاد حسن‌زاده",
  shortName: "سجاد",
  role: "طراح و توسعه‌دهنده محصولات دیجیتال",
  tagline: "ایده‌ها را به تجربه‌های دیجیتال تبدیل می‌کنم.",
  description:
    "طراحی و ساخت وب‌سایت، فروشگاه اینترنتی، اپلیکیشن و ابزارهای مبتنی بر هوش مصنوعی؛ با تمرکز روی تجربه کاربری ساده و نتیجه‌ی واقعی.",
  url: "https://sajjad.example.com",
  resumeUrl: "/resume.pdf",
  contact: {
    email: "hello@example.com",
    phone: "+98 900 000 0000",
    phoneDisplay: "۰۹۰۰ ۰۰۰ ۰۰۰۰",
    telegram: "https://t.me/username",
    telegramLabel: "@username",
    instagram: "https://instagram.com/username",
    instagramLabel: "@username",
    location: "ایران — همکاری دورکاری در سراسر دنیا",
  },
} as const;

export const navItems = [
  { to: "/", label: "خانه" },
  { to: "/about", label: "درباره من" },
  { to: "/services", label: "خدمات" },
  { to: "/portfolio", label: "نمونه‌کارها" },
  { to: "/products", label: "محصولات" },
  { to: "/articles", label: "مقالات" },
  { to: "/contact", label: "تماس" },
] as const;
