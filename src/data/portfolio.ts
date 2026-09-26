import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

export const portfolioCategories = [
  "همه",
  "سایت",
  "فروشگاه",
  "اپلیکیشن",
  "ابزار",
  "هوش مصنوعی",
  "محصولات دیجیتال",
] as const;

export type PortfolioCategory = (typeof portfolioCategories)[number];

export type Project = {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, "همه">;
  year: string;
  summary: string;
  image: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: "rasa-shop",
    title: "فروشگاه صنایع‌دستی «رسا»",
    category: "فروشگاه",
    year: "۱۴۰۴",
    summary:
      "بازطراحی کامل تجربه خرید، دسته‌بندی تازه و صفحه محصول جدید؛ نرخ افزودن به سبد خرید دو برابر شد.",
    image: work1,
    tags: ["فروشگاه", "تجربه کاربری", "سرعت"],
  },
  {
    id: "hamrah-app",
    title: "اپلیکیشن سفر «همراه»",
    category: "اپلیکیشن",
    year: "۱۴۰۴",
    summary:
      "طراحی رابط موبایل برای برنامه‌ریزی سفر، با مسیر رزرو کوتاه و دیزاین سیستم قابل توسعه.",
    image: work2,
    tags: ["موبایل", "دیزاین سیستم"],
  },
  {
    id: "ai-assistant",
    title: "دستیار پاسخ‌گویی هوشمند",
    category: "هوش مصنوعی",
    year: "۱۴۰۳",
    summary:
      "چت‌بات آموزش‌دیده روی اسناد داخلی یک شرکت خدماتی؛ زمان پاسخ به مشتری از ساعت به ثانیه رسید.",
    image: work3,
    tags: ["هوش مصنوعی", "اتوماسیون"],
  },
  {
    id: "studio-site",
    title: "وب‌سایت استودیو معماری",
    category: "سایت",
    year: "۱۴۰۳",
    summary:
      "سایت پرتفولیو با تمرکز روی تصویر و سکوت بصری؛ بارگذاری سریع و ساختار سئوی تمیز.",
    image: work1,
    tags: ["سایت", "سئو"],
  },
  {
    id: "invoice-tool",
    title: "ابزار صورتحساب فریلنسری",
    category: "ابزار",
    year: "۱۴۰۳",
    summary: "ابزار سبک برای ساخت و ارسال فاکتور فارسی، بدون ثبت‌نام و کاملاً سمت مرورگر.",
    image: work2,
    tags: ["ابزار", "وب‌اپ"],
  },
  {
    id: "ui-kit",
    title: "کیت رابط کاربری فارسی",
    category: "محصولات دیجیتال",
    year: "۱۴۰۲",
    summary: "مجموعه کامپوننت‌های راست‌به‌چپ برای تیم‌های محصول، همراه با توکن‌های رنگ و تایپوگرافی.",
    image: work3,
    tags: ["دیزاین سیستم", "RTL"],
  },
];
