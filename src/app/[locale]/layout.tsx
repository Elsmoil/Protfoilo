import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
import FloatingWidgets from "@/components/ui/FloatingWidgets";
import Navbar from "@/components/ui/Navbar";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-space-grotesk' });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: '--font-jetbrains-mono' });

const META_TITLE = "Elsmoal | Backend Architect & CTO";
const META_DESC =
  "Elsmoal S. Ibrahim — Independent Full-Stack & Backend Architect, CTO @ Mulham AI. Building highly scalable systems, AES/ECC cryptography platforms, and AI-driven automation. Officially licensed freelancer in Abu Dhabi, UAE.";
const META_URL = "https://elsmoal.com";
const OG_IMAGE = "/og-image.png";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESC,
  metadataBase: new URL(META_URL),
  keywords: [
    "Backend Architect",
    "Full-Stack Engineer",
    "Abu Dhabi Freelancer",
    "CTO",
    "AI Automation",
    "n8n",
    "Cryptography",
    "TypeScript",
    "Python",
    "Docker",
    "Node.js",
    "PostgreSQL",
    "Elsmoal",
  ],
  authors: [{ name: "Elsmoal S. Ibrahim", url: META_URL }],
  creator: "Elsmoal S. Ibrahim",
  openGraph: {
    type: "website",
    url: META_URL,
    siteName: "Elsmoal Portfolio",
    title: META_TITLE,
    description: META_DESC,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Elsmoal S. Ibrahim — Backend Architect & CTO",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESC,
    images: [OG_IMAGE],
    creator: "@elsmoal",
  },
  alternates: {
    languages: {
      "en-US": "/en",
      "ar-AE": "/ar",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Elsmoal S. Ibrahim",
    jobTitle: "Independent Full-Stack & Backend Architect | CTO @ Mulham AI",
    url: META_URL,
    image: `${META_URL}/og-image.png`,
    description: META_DESC,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Abu Dhabi",
      addressCountry: "AE",
    },
    sameAs: [
      "https://github.com/Elsmoil",
      "https://ae.linkedin.com/in/elsmoal-",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "ALX Software Engineering",
        credentialCategory: "degree",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "ALX AI Career Essentials",
        credentialCategory: "certificate",
      },
      {
        "@type": "GovernmentPermit",
        name: "Official Software Development Freelance License",
        issuedBy: "Abu Dhabi, UAE",
      },
    ],
  };

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} font-sans transition-colors duration-300 dark:bg-void dark:text-ghostWhite bg-white text-gray-900`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Navbar />
            {children}
            <FloatingWidgets />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
