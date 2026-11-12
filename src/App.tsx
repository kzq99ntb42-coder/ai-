import { useEffect } from "react";
import { getInitialLocale, locales, type Locale } from "./content";
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

const routeUiText: RouteUiText = {
  footerNavigation: "フッターナビゲーション",
  home: "ホーム",
  aiSolutions: "人工知能活用",
  blog: "ブログ",
  backToTop: "ページの先頭へ",
  seoEyebrow: "人工知能活用ガイド",
  requestDemo: "デモを申し込む",
  viewHomepage: "ホームを見る",
  pageSummary: "ページの概要",
  focus: "テーマ",
  faqEyebrow: "よくある質問",
  businessQuestions: "事業者からよく寄せられる質問",
  relatedEyebrow: "関連ページ",
  moreGuidance: "さらに詳しいガイド",
  relatedPage: "ページ",
};

function getRouteUiText(_locale: Locale) {
  return routeUiText;
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

function ContactActions({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const copy = presentation[locale];
  const actions: { key: IconName; href: string; label: string; className: string; detail?: string }[] = [
    { key: "whatsapp", href: CONTACTS.whatsapp, label: copy.whatsappButton, detail: copy.phoneNumber, className: "action-whatsapp" },
    { key: "line", href: CONTACTS.line, label: copy.lineButton, className: "action-line" },
    { key: "email", href: CONTACTS.email, label: "メールで相談", detail: "ariankhan7282@gmail.com", className: "action-email" },
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

function SiteHeader({ locale }: { locale: Locale }) {
  const copy = presentation[locale];
  return (
    <header className="site-header">
      <a className="company-brand" href="/" aria-label={`${copy.brandName} — ${copy.brandSubtitle}`}>
        <span className="brand-mark">ム</span>
        <span className="company-brand-copy">
          <span className="company-brand-name">{copy.brandName}</span>
          <span className="company-brand-initiative">{copy.brandSubtitle}</span>
        </span>
      </a>
      <div className="header-actions">
        <a className="header-contact header-whatsapp" href={CONTACTS.whatsapp} aria-label={`${copy.whatsapp}でお問い合わせ`}><Icon name="whatsapp" /><span>{copy.whatsapp}</span></a>
        <a className="header-contact header-line" href={CONTACTS.line} aria-label={`${copy.line}でお問い合わせ`}><Icon name="line" /><span>{copy.line}</span></a>
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
        <span className="brand-mark">ム</span>
        <span className="company-brand-copy">
          <span className="company-brand-name">{copy.brandName}</span>
          <span className="company-brand-initiative">{copy.brandSubtitle}</span>
        </span>
      </div>
      <p>{copy.companyName}</p>
      <nav className="footer-links" aria-label={labels.footerNavigation}>
        <a href="/">{labels.home}</a>
        <a href="/ai-solutions-for-muslim-businesses">{labels.aiSolutions}</a>
        <a href="/blog">{labels.blog}</a>
      </nav>
      <a className="back-top" href="/#top" aria-label={labels.backToTop}><Icon name="arrow" /></a>
      <span className="footer-copyright">© {new Intl.DateTimeFormat("ja-JP", { timeZone: "Asia/Tokyo", year: "numeric" }).format(new Date())} {copy.companyName}</span>
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

function SeoPage({ locale, page }: { locale: Locale; page: (typeof seoPageRoutes)[number] }) {
  const labels = getRouteUiText(locale);
  const canonical = `${SITE_URL}/${page.slug}`;
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
          name: "プロピボタル・ソリューション",
          url: "https://propivotal.uk/",
        },
        areaServed: { "@type": "Country", name: "日本" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqSchema,
      },
    ],
  };

  return (
    <div className="site-shell seo-page-shell" id="top" data-locale={locale}>
      <SiteHeader locale={locale} />
      <main className="seo-page-main">
        <section className="seo-hero section-pad">
          <div className="seo-hero-copy">
            <span className="eyebrow">{labels.seoEyebrow}</span>
            <h1>{page.h1}</h1>
            <p>{page.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="/#demo">{labels.requestDemo}</a>
              <a className="button button-quiet" href="/">{labels.viewHomepage}</a>
            </div>
          </div>
          <div className="seo-hero-card" aria-label={labels.pageSummary}>
            <span className="seo-card-label">{labels.focus}</span>
            <strong>{page.title}</strong>
            <p>{page.description}</p>
            <img src="/images/geometric-arch.jpg" alt="事業者向け人工知能活用と顧客サポートをイメージした幾何学模様" />
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
                  <span className="faq-index">問{index + 1}</span>
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
              <a className="related-card" href={`/${item.slug}`} key={item.slug}>
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

function App({ locale = getInitialLocale(), route }: { locale?: Locale; route?: string }) {
  const activeLocale = locale;
  const { page } = getResolvedSeoPage(activeLocale, route);
  const copy = presentation[activeLocale];
  const pageUrl = `${SITE_URL}/`;
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
          contactType: "営業",
          email: "ariankhan7282@gmail.com",
          telephone: "+818050709373",
          availableLanguage: ["ja"],
          areaServed: { "@type": "Country", name: "日本" },
        },
      },
      {
        "@type": "Service",
        name: copy.brandName,
        serviceType: "人工知能チャットボットおよびウェブサイトアシスタントの導入支援",
        url: pageUrl,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "日本" },
        audience: { "@type": "Audience", audienceType: "日本国内のムスリム事業者を含む事業者" },
      },
    ],
  };

  useEffect(() => {
    const pageMetaTitle = page ? page.title : copy.seoTitle;
    const pageMetaDescription = page ? page.description : copy.seoDescription;
    const canonicalUrl = page ? `${SITE_URL}/${page.slug}` : pageUrl;

    document.documentElement.lang = activeLocale;
    document.documentElement.dir = "ltr";
    document.title = pageMetaTitle;

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const socialTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    const socialDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]') ?? document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = canonicalUrl;
    if (!canonical.parentNode) document.head.append(canonical);
    description?.setAttribute("content", pageMetaDescription);
    socialTitle?.setAttribute("content", pageMetaTitle);
    socialDescription?.setAttribute("content", pageMetaDescription);
    document.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.setAttribute("content", canonicalUrl);
    document.querySelector<HTMLMetaElement>('meta[property="og:locale"]')?.setAttribute("content", "ja_JP");
  }, [activeLocale, copy, page, pageUrl]);

  if (page) {
    return <SeoPage locale={activeLocale} page={page} />;
  }

  return (
    <div className="site-shell" id="top" data-locale={activeLocale}>
      <SiteHeader locale={activeLocale} />

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
              className="about-video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
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

      <footer className="site-footer home-footer">
        <a className="company-brand footer-company-brand" href="/">
          <span className="brand-mark">ム</span>
          <span className="company-brand-copy">
            <span className="company-brand-name">{copy.brandName}</span>
            <span className="company-brand-initiative">{copy.brandSubtitle}</span>
          </span>
        </a>
        <p>{copy.footerLine}</p>
        <span className="footer-copyright">© {new Intl.DateTimeFormat("ja-JP", { timeZone: "Asia/Tokyo", year: "numeric" }).format(new Date())} {copy.companyName}</span>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    </div>
  );
}

export default App;
