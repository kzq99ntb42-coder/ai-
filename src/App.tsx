import { useEffect, useRef, useState } from "react";
import { getInitialLocale, getLocalizedPathname, localeNames, locales, PREFERRED_LOCALE_KEY, rtlLocales, type Locale } from "./content";
import { presentation } from "./presentation";
import PatternCanvas from "./PatternCanvas";
import { SITE_URL } from "./site";
import { seoPageRoutes } from "./seoPages";

const CONTACTS = {
  whatsapp: "https://wa.me/818050709373",
  line: "https://line.me/ti/p/eosKlUIKvU",
  email: "mailto:ariankhan7282@gmail.com",
  website: "https://propivotal.uk/",
  phone: "tel:+818050709373",
};

const emailLabels: Partial<Record<Locale, string>> = {
  en: "Email Me",
  ja: "メールで連絡",
  ar: "راسلني عبر البريد الإلكتروني",
  hi: "मुझे ईमेल करें",
  ur: "مجھے ای میل کریں",
  bn: "ইমেইলে যোগাযোগ করুন",
  uz: "Menga elektron xat yozing",
};

type RouteUiText = {
  footerNavigation: string;
  home: string;
  aiSolutions: string;
  blog: string;
  backToTop: string;
  seoEyebrow: string;
  requestDemo: string;
  viewHomepage: string;
  pageSummary: string;
  focus: string;
  faqEyebrow: string;
  businessQuestions: string;
  relatedEyebrow: string;
  moreGuidance: string;
  relatedPage: string;
};

const routeUiText: Partial<Record<Locale, RouteUiText>> = {
  en: { footerNavigation: "Footer navigation", home: "Home", aiSolutions: "AI solutions", blog: "Blog", backToTop: "Back to top", seoEyebrow: "AI guidance", requestDemo: "Request a demo", viewHomepage: "View homepage", pageSummary: "Page summary", focus: "Focus", faqEyebrow: "FAQ", businessQuestions: "Questions businesses often ask", relatedEyebrow: "Related pages", moreGuidance: "More helpful guidance", relatedPage: "Page" },
  ja: { footerNavigation: "フッターナビゲーション", home: "ホーム", aiSolutions: "AIソリューション", blog: "ブログ", backToTop: "ページの先頭へ", seoEyebrow: "AI活用ガイド", requestDemo: "デモを申し込む", viewHomepage: "ホームページを見る", pageSummary: "ページの概要", focus: "テーマ", faqEyebrow: "よくある質問", businessQuestions: "事業者からよく寄せられる質問", relatedEyebrow: "関連ページ", moreGuidance: "さらに詳しいガイド", relatedPage: "ページ" },
  ar: { footerNavigation: "روابط تذييل الصفحة", home: "الرئيسية", aiSolutions: "حلول الذكاء الاصطناعي", blog: "المدونة", backToTop: "العودة إلى الأعلى", seoEyebrow: "إرشادات الذكاء الاصطناعي", requestDemo: "اطلبوا عرضاً توضيحياً", viewHomepage: "عرض الصفحة الرئيسية", pageSummary: "ملخص الصفحة", focus: "الموضوع", faqEyebrow: "الأسئلة الشائعة", businessQuestions: "أسئلة تطرحها الشركات كثيراً", relatedEyebrow: "صفحات ذات صلة", moreGuidance: "مزيد من الإرشادات المفيدة", relatedPage: "صفحة" },
  hi: { footerNavigation: "फ़ुटर नेविगेशन", home: "मुखपृष्ठ", aiSolutions: "AI समाधान", blog: "ब्लॉग", backToTop: "ऊपर जाएँ", seoEyebrow: "AI मार्गदर्शन", requestDemo: "डेमो माँगें", viewHomepage: "मुखपृष्ठ देखें", pageSummary: "पृष्ठ सारांश", focus: "मुख्य विषय", faqEyebrow: "अक्सर पूछे जाने वाले प्रश्न", businessQuestions: "व्यवसायों के आम सवाल", relatedEyebrow: "संबंधित पृष्ठ", moreGuidance: "और उपयोगी जानकारी", relatedPage: "पृष्ठ" },
  ur: { footerNavigation: "فٹر نیویگیشن", home: "صفحۂ اول", aiSolutions: "AI حل", blog: "بلاگ", backToTop: "اوپر جائیں", seoEyebrow: "AI رہنمائی", requestDemo: "ڈیمو کی درخواست کریں", viewHomepage: "صفحۂ اول دیکھیں", pageSummary: "صفحے کا خلاصہ", focus: "موضوع", faqEyebrow: "اکثر پوچھے گئے سوالات", businessQuestions: "کاروباروں کے عام سوالات", relatedEyebrow: "متعلقہ صفحات", moreGuidance: "مزید مفید رہنمائی", relatedPage: "صفحہ" },
  bn: { footerNavigation: "ফুটার নেভিগেশন", home: "হোম", aiSolutions: "AI সমাধান", blog: "ব্লগ", backToTop: "উপরে ফিরুন", seoEyebrow: "AI নির্দেশিকা", requestDemo: "ডেমোর অনুরোধ করুন", viewHomepage: "হোমপেজ দেখুন", pageSummary: "পৃষ্ঠার সারাংশ", focus: "বিষয়", faqEyebrow: "সাধারণ প্রশ্ন", businessQuestions: "ব্যবসায়ীদের সাধারণ প্রশ্ন", relatedEyebrow: "সম্পর্কিত পৃষ্ঠা", moreGuidance: "আরও সহায়ক নির্দেশিকা", relatedPage: "পৃষ্ঠা" },
  uz: { footerNavigation: "Pastki qism navigatsiyasi", home: "Bosh sahifa", aiSolutions: "AI yechimlari", blog: "Blog", backToTop: "Yuqoriga qaytish", seoEyebrow: "AI bo‘yicha qo‘llanma", requestDemo: "Demo so‘rash", viewHomepage: "Bosh sahifani ko‘rish", pageSummary: "Sahifa qisqacha mazmuni", focus: "Asosiy mavzu", faqEyebrow: "Ko‘p so‘raladigan savollar", businessQuestions: "Bizneslar tez-tez beradigan savollar", relatedEyebrow: "Tegishli sahifalar", moreGuidance: "Qo‘shimcha foydali ma’lumotlar", relatedPage: "Sahifa" },
};

function getRouteUiText(locale: Locale) {
  return routeUiText[locale] ?? routeUiText.en!;
}

type IconName = "whatsapp" | "line" | "email" | "website" | "phone" | "arrow" | "spark";

function Icon({ name }: { name: IconName }) {
  const paths = {
    whatsapp: <><path d="M20.5 11.6a8.4 8.4 0 0 1-12.4 7.3L3 20l1.2-4.9a8.4 8.4 0 1 1 16.3-3.5Z" /><path d="M8.2 8.2c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4 0 .6l-.6.7c-.2.2-.2.4 0 .6.7 1.2 1.7 2.1 2.9 2.7.2.1.4.1.6-.1l.8-.9c.2-.2.4-.2.6-.1l1.7.8c.3.1.4.3.4.5 0 .3-.1 1-.7 1.5-.5.5-1.3.7-2 .6-1.1-.2-2.5-.7-4.2-2.2-1.8-1.6-2.9-3.6-3.2-4.7-.3-1.1.1-1.9.4-2.2Z" /></>,
    line: <><path d="M21 11.5c0 4.1-4 7.5-9 7.5a11 11 0 0 1-3.7-.6L3 20l1.7-4.1A6.7 6.7 0 0 1 3 11.5C3 7.4 7 4 12 4s9 3.4 9 7.5Z" /><path d="M7.5 12h.01M12 12h.01M16.5 12h.01" /></>,
    email: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    website: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>,
    phone: <path d="M21 16.4v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1.1 3.7 2 2 0 0 1 3.1 1.5h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L7 9.5a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />,
    arrow: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
    spark: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" /><path d="m19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14Z" /></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

function LanguageSelect({ locale, onLocaleChange }: { locale: Locale; onLocaleChange: (locale: Locale) => void }) {
  const copy = presentation[locale];
  return (
    <label className="language-select">
      <span className="sr-only">{copy.languageLabel}</span>
      <select value={locale} onChange={(event) => onLocaleChange(event.target.value as Locale)} aria-label={copy.languageLabel}>
        {locales.map((language) => <option key={language} value={language}>{localeNames[language]}</option>)}
      </select>
      <span aria-hidden="true" className="select-chevron">⌄</span>
    </label>
  );
}

function ContactActions({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const copy = presentation[locale];
  const actions: { key: IconName; href: string; label: string; className: string; detail?: string }[] = [
    { key: "whatsapp", href: CONTACTS.whatsapp, label: copy.whatsappButton, detail: copy.phoneNumber, className: "action-whatsapp" },
    { key: "line", href: CONTACTS.line, label: copy.lineButton, className: "action-line" },
    { key: "email", href: CONTACTS.email, label: emailLabels[locale] ?? emailLabels.en!, detail: "ariankhan7282@gmail.com", className: "action-email" },
    { key: "website", href: CONTACTS.website, label: copy.websiteButton, className: "action-website" },
    { key: "phone", href: CONTACTS.phone, label: copy.phoneButton, detail: copy.phoneNumber, className: "action-phone" },
  ];

  return (
    <div className={compact ? "contact-actions contact-actions-compact" : "contact-actions"}>
      {actions.map((action) => (
        <a
          className={`contact-action ${action.className}`}
          href={action.href}
          key={action.key}
        >
          <span className="action-icon"><Icon name={action.key} /></span>
          <span className="action-copy">
            <span className="action-label">{action.label}</span>
            {action.detail && <span className="action-detail">{action.detail}</span>}
          </span>
          <Icon name="arrow" />
        </a>
      ))}
    </div>
  );
}

function SiteHeader({ locale, onLocaleChange }: { locale: Locale; onLocaleChange: (locale: Locale) => void }) {
  const copy = presentation[locale];
  return (
    <header className="site-header">
      <a className="company-brand" href={`/${locale === "en" ? "" : `${locale}/`}`} aria-label={`${copy.brandName} — ${copy.brandSubtitle}`}>
        <span className="brand-mark">M</span>
        <span className="company-brand-copy">
          <span className="company-brand-name">{copy.brandName}</span>
          <span className="company-brand-initiative">{copy.brandSubtitle}</span>
        </span>
      </a>
      <div className="header-actions">
        <a className="header-contact header-whatsapp" href={CONTACTS.whatsapp}><Icon name="whatsapp" /><span>{copy.whatsapp}</span></a>
        <a className="header-contact header-line" href={CONTACTS.line}><Icon name="line" /><span>{copy.line}</span></a>
        <LanguageSelect locale={locale} onLocaleChange={onLocaleChange} />
      </div>
    </header>
  );
}

function SiteFooter({ locale }: { locale: Locale }) {
  const copy = presentation[locale];
  const labels = getRouteUiText(locale);
  return (
    <footer className="site-footer">
      <div className="footer-brand company-brand">
        <span className="brand-mark">M</span>
        <span className="company-brand-copy">
          <span className="company-brand-name">{copy.brandName}</span>
          <span className="company-brand-initiative">{copy.brandSubtitle}</span>
        </span>
      </div>
      <p>{copy.companyName}</p>
      <nav className="footer-links" aria-label={labels.footerNavigation}>
        <a href={`/${locale === "en" ? "" : `${locale}/`}`}>{labels.home}</a>
        <a href={`/${locale === "en" ? "" : `${locale}/`}ai-solutions-for-muslim-businesses`}>{labels.aiSolutions}</a>
        <a href={`/${locale === "en" ? "" : `${locale}/`}blog`}>{labels.blog}</a>
      </nav>
      <a className="back-top" href={`/${locale === "en" ? "" : `${locale}/`}#top`} aria-label={labels.backToTop}><Icon name="arrow" /></a>
      <span className="footer-copyright">© {new Date().getFullYear()} Propivotal Solutions</span>
    </footer>
  );
}

function getResolvedSeoPage(locale: Locale, route?: string) {
  const pathName = route ?? (typeof window !== "undefined" ? window.location.pathname : `/${locale}/`);
  const withoutTrailingSlash = pathName.replace(/\/+$/, "") || "/";
  const segments = withoutTrailingSlash.split("/").filter(Boolean);

  let slug = "";

  if (segments[0] && locales.includes(segments[0] as Locale)) {
    slug = segments.slice(1).join("/");
  } else {
    slug = segments.join("/");
  }

  const page = seoPageRoutes.find((entry) => entry.slug === slug) ?? null;
  return { locale, page, path: slug };
}

function SeoPage({ locale, page, onLocaleChange }: { locale: Locale; page: (typeof seoPageRoutes)[number]; onLocaleChange: (locale: Locale) => void }) {
  const labels = getRouteUiText(locale);
  const canonical = `${SITE_URL}/${locale === "en" ? "" : `${locale}/`}${page.slug}`;
  const faqSchema = page.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  }));
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: page.title,
        serviceType: page.h1,
        description: page.description,
        url: canonical,
        provider: {
          "@type": "Organization",
          name: "Propivotal Solutions",
          url: "https://propivotal.uk/",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqSchema,
      },
    ],
  };

  return (
    <div className="site-shell seo-page-shell" id="top" data-locale={locale}>
      <SiteHeader locale={locale} onLocaleChange={onLocaleChange} />
      <main className="seo-page-main">
        <section className="seo-hero section-pad">
          <div className="seo-hero-copy">
            <span className="eyebrow">{labels.seoEyebrow}</span>
            <h1>{page.h1}</h1>
            <p>{page.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href={`/${locale === "en" ? "" : `${locale}/`}#contact`}>{labels.requestDemo}</a>
              <a className="button button-quiet" href={`/${locale === "en" ? "" : `${locale}/`}`}>{labels.viewHomepage}</a>
            </div>
          </div>
          <div className="seo-hero-card" aria-label={labels.pageSummary}>
            <span className="seo-card-label">{labels.focus}</span>
            <strong>{page.title}</strong>
            <p>{page.description}</p>
            <img src="/images/geometric-arch.jpg" alt="Abstract geometric design representing AI search and customer support solutions for businesses" />
          </div>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

        {page.sections.map((section, index) => (
          <section className="seo-section section-pad" key={section.heading}>
            <div className="seo-section-index">0{index + 1}</div>
            <div className="seo-section-copy">
              <h2>{section.heading}</h2>
              {section.text.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && (
                <ul>
                  {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              )}
            </div>
          </section>
        ))}

        <section className="seo-faq section-pad" aria-labelledby="related-faq-heading">
          <div className="faq-heading">
            <span className="eyebrow">{labels.faqEyebrow}</span>
            <h2 id="related-faq-heading">{labels.businessQuestions}</h2>
          </div>
          <div className="faq-list">
            {page.faqs.map((faq, index) => (
              <details className="faq-item" key={faq.question} open={index === 0}>
                <summary>
                  <span className="faq-index">Q{index + 1}</span>
                  <span>{faq.question}</span>
                  <span className="faq-plus">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="seo-related section-pad" aria-labelledby="related-pages-heading">
          <div className="faq-heading">
            <span className="eyebrow">{labels.relatedEyebrow}</span>
            <h2 id="related-pages-heading">{labels.moreGuidance}</h2>
          </div>
          <div className="related-grid">
            {page.related.map((item) => (
              <a className="related-card" href={`/${locale === "en" ? "" : `${locale}/`}${item.slug}`} key={item.slug}>
                <span className="related-kicker">{labels.relatedPage}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </a>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}

export { seoPageRoutes };

function App({ locale, route }: { locale?: Locale; route?: string }) {
  const [selectedLocale, setSelectedLocale] = useState(() => locale ?? getInitialLocale(route));
  const { locale: activeLocale, page } = getResolvedSeoPage(selectedLocale, route);
  const copy = presentation[activeLocale];
  const isRtl = rtlLocales.includes(activeLocale);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const pageUrl = `${SITE_URL}/${activeLocale === "en" ? "" : `${activeLocale}/`}`;
  const changeLocale = (nextLocale: Locale) => {
    try {
      window.localStorage.setItem(PREFERRED_LOCALE_KEY, nextLocale);
    } catch {
      // The current selection still applies when storage is unavailable.
    }

    const localizedPath = getLocalizedPathname(window.location.pathname, nextLocale);
    window.history.replaceState(window.history.state, "", `${localizedPath}${window.location.search}${window.location.hash}`);
    setSelectedLocale(nextLocale);
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: copy.companyName,
        url: "https://propivotal.uk/",
        email: "ariankhan7282@gmail.com",
        telephone: "+818050709373",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "ariankhan7282@gmail.com",
          telephone: "+818050709373",
          availableLanguage: ["English", "Arabic", "Japanese", "Urdu", "Hindi", "Indonesian", "Malay", "Turkish", "French"],
        },
      },
      {
        "@type": "Service",
        name: copy.brandName,
        serviceType: "AI chatbot and website assistant setup",
        url: pageUrl,
        provider: { "@id": `${SITE_URL}/#organization` },
        audience: { "@type": "Audience", audienceType: "Businesses, including Muslim-owned businesses" },
      },
    ],
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          video.play().catch(() => undefined);
        } else {
          video.pause();
          video.currentTime = 0;
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const pageMetaTitle = page ? page.title : copy.seoTitle;
    const pageMetaDescription = page ? page.description : copy.seoDescription;
    const canonicalUrl = page ? `${SITE_URL}/${activeLocale === "en" ? "" : `${activeLocale}/`}${page.slug}` : pageUrl;

    document.documentElement.lang = activeLocale;
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    document.title = pageMetaTitle;

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const socialTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    const socialDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]') ?? document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = canonicalUrl;
    if (!canonical.parentNode) document.head.append(canonical);
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((link) => link.remove());
    locales.forEach((language) => {
      const alternate = document.createElement("link");
      alternate.rel = "alternate";
      alternate.hreflang = language;
      alternate.href = `${SITE_URL}/${language}/`;
      document.head.append(alternate);
    });
    const defaultLanguage = document.createElement("link");
    defaultLanguage.rel = "alternate";
    defaultLanguage.hreflang = "x-default";
    defaultLanguage.href = `${SITE_URL}/en/`;
    document.head.append(defaultLanguage);
    description?.setAttribute("content", pageMetaDescription);
    socialTitle?.setAttribute("content", pageMetaTitle);
    socialDescription?.setAttribute("content", pageMetaDescription);
    document.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.setAttribute("content", canonicalUrl);
    document.querySelector<HTMLMetaElement>('meta[property="og:locale"]')?.setAttribute("content", activeLocale.replace("-", "_"));
  }, [activeLocale, copy, isRtl, page, pageUrl]);

  if (page) {
    return <SeoPage locale={activeLocale} page={page} onLocaleChange={changeLocale} />;
  }

  return (
    <div className="site-shell" id="top" data-locale={activeLocale}>
      <SiteHeader locale={activeLocale} onLocaleChange={changeLocale} />

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-backdrop" />
          <PatternCanvas />
          <div className="hero-content">
            <span className="eyebrow hero-eyebrow"><span className="status-dot" />{copy.companyName} · {copy.initiative}</span>
            <h1 id="hero-title">{copy.heroTitle}</h1>
            <p>{copy.heroText}</p>
            <div className="hero-actions">
              <a className="hero-contact hero-contact-whatsapp" href={CONTACTS.whatsapp}>
                <Icon name="whatsapp" /><span>{copy.whatsappButton}</span>
              </a>
              <a className="hero-contact hero-contact-line" href={CONTACTS.line}>
                <Icon name="line" /><span>{copy.lineButton}</span>
              </a>
            </div>
          </div>
          <a className="scroll-cue" href="#about"><span className="scroll-line" />{copy.scroll}</a>
          <div className="hero-index"><span>01</span><span className="index-rule" /><span>03</span></div>
        </section>

        <section className="about-section" id="about">
          <div className="about-art" aria-hidden="true">
            <video
              ref={videoRef}
              className="about-video"
              autoPlay={false}
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/geometric-arch.jpg"
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="about-copy">
            <span className="eyebrow"><span className="eyebrow-mark">✳</span>{copy.initiative}</span>
            <h2>{copy.aboutTitle}</h2>
            <p className="about-company">{copy.aboutText}</p>
            <p>{copy.personalNote}</p>
          </div>
        </section>

        <section className="why-section" id="why">
          <div className="why-heading">
            <span className="eyebrow">{copy.whyEyebrow}</span>
            <h2>{copy.whyTitle}</h2>
            <p>{copy.whyText}</p>
          </div>
          <div className="benefit-grid">
            {copy.benefits.map((benefit, index) => (
              <article className="benefit-card" key={benefit.title}>
                <span className="benefit-number">0{index + 1}</span>
                <span className="benefit-icon"><Icon name={index === 0 ? "spark" : index === 1 ? "website" : index === 2 ? "line" : "arrow"} /></span>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="demo-section" id="demo">
          <div className="demo-pattern" aria-hidden="true" />
          <div className="demo-copy">
            <span className="eyebrow">{copy.demoEyebrow}</span>
            <h2>{copy.demoTitle}</h2>
            <p>{copy.demoText}</p>
            <div className="demo-notice" role="note">
              <strong>{copy.demoNoticeTitle}</strong>
              <p>{copy.demoNoticeText}</p>
            </div>
            <span className="demo-company">{copy.companyName}</span>
          </div>
          <ContactActions locale={activeLocale} />
        </section>
      </main>

      <footer className="site-footer">
        <a className="company-brand footer-company-brand" href={`/${activeLocale === "en" ? "" : `${activeLocale}/`}`}>
          <span className="brand-mark">M</span>
          <span className="company-brand-copy">
            <span className="company-brand-name">{copy.brandName}</span>
            <span className="company-brand-initiative">{copy.brandSubtitle}</span>
          </span>
        </a>
        <p>{copy.footerLine}</p>
        <span className="footer-copyright">© {new Date().getFullYear()} {copy.companyName}</span>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    </div>
  );
}

export default App;
