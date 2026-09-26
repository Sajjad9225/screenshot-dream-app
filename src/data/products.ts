export type ProductStatus = "Live" | "Beta" | "Coming Soon" | "Concept";

export type Product = {
  id: string;
  title: string;
  description: string;
  status: ProductStatus;
  icon: string;
  link?: string;
};

export const statusLabels: Record<ProductStatus, string> = {
  Live: "در دسترس",
  Beta: "نسخه آزمایشی",
  "Coming Soon": "به‌زودی",
  Concept: "ایده اولیه",
};

export const products: Product[] = [
  {
    id: "rtl-kit",
    title: "کیت رابط کاربری فارسی",
    description:
      "مجموعه کامپوننت‌های آماده راست‌به‌چپ برای ساخت سریع محصولات فارسی، با توکن‌های رنگ و تایپوگرافی.",
    status: "Live",
    icon: "LayoutGrid",
  },
  {
    id: "invoice",
    title: "فاکتورساز فارسی",
    description: "ساخت و دانلود فاکتور تمیز در چند ثانیه، بدون ثبت‌نام و بدون ارسال داده به سرور.",
    status: "Live",
    icon: "Receipt",
  },
  {
    id: "brief-ai",
    title: "دستیار بریف پروژه",
    description:
      "با چند سؤال ساده، بریف کامل پروژه‌ی طراحی یا توسعه را برای شما می‌نویسد تا کار با شفافیت شروع شود.",
    status: "Beta",
    icon: "Sparkles",
  },
  {
    id: "seo-check",
    title: "چک‌آپ سریع سایت",
    description: "گزارش کوتاه از سرعت، ساختار سئو و تجربه موبایل سایت شما، با پیشنهادهای قابل اجرا.",
    status: "Coming Soon",
    icon: "Gauge",
  },
  {
    id: "content-studio",
    title: "استودیو محتوای هوشمند",
    description:
      "ابزار تولید محتوای فارسی برای شبکه‌های اجتماعی و وبلاگ، هماهنگ با لحن برند شما.",
    status: "Concept",
    icon: "PenLine",
  },
];
