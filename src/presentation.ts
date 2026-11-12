import type { Locale } from "./content";

export type Presentation = {
  seoTitle: string;
  seoDescription: string;
  languageLabel: string;
  brandName: string;
  brandSubtitle: string;
  companyName: string;
  initiative: string;
  heroTitle: string;
  heroText: string;
  whatsapp: string;
  line: string;
  scroll: string;
  aboutTitle: string;
  aboutText: string;
  personalNote: string;
  whyEyebrow: string;
  whyTitle: string;
  whyText: string;
  benefits: { title: string; text: string }[];
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  demoEyebrow: string;
  demoTitle: string;
  demoText: string;
  demoNoticeTitle: string;
  demoNoticeText: string;
  whatsappButton: string;
  lineButton: string;
  websiteButton: string;
  phoneButton: string;
  phoneNumber: string;
  fixedContactLabel: string;
  footerLine: string;
};

export const presentation: Record<Locale, Presentation> = {
  ja: {
    seoTitle: "ムスリム事業者向け人工知能チャットボット｜プロピボタル・ソリューション",
    seoDescription: "ムスリム事業者やハラール飲食店・店舗向けの人工知能アシスタント。ウェブサイトからのお問い合わせ対応やサービス案内、設定に応じた予約受付を支援します。",
    languageLabel: "日本語",
    brandName: "ムスリム・チャットボット",
    brandSubtitle: "ムスリム事業者向け",
    companyName: "プロピボタル・ソリューション",
    initiative: "ムスリム・チャットボット",
    heroTitle: "人工知能でムスリム事業者の成長を支援",
    heroText: "企業サイト向けの人工知能アシスタントで、お客様の疑問に答え、すべてのお問い合わせを丁寧に迎えます。",
    whatsapp: "ワッツアップ",
    line: "ライン",
    scroll: "人工知能アシスタントができること",
    aboutTitle: "テクノロジーに、人を支える想いを。",
    aboutText: "英国を拠点とするプロピボタル・ソリューションが、日本国内の事業者向けに企業サイト用人工知能アシスタントを提供しています。",
    personalNote: "私自身ムスリムとして、最新のテクノロジーを通じて、同じムスリムの事業者を応援し、成長を支援したいと考えています。",
    whyEyebrow: "最初のひと声を、もっと親切に",
    whyTitle: "ウェブサイトに人工知能アシスタントを導入する理由",
    whyText: "必要な情報が見つからず、問い合わせる前にサイトを離れてしまう訪問者もいます。人工知能アシスタントが情報探しをお手伝いします。",
    benefits: [
      { title: "いつでもお客様をサポート", text: "営業時間外も含め、24時間いつでもお問い合わせに対応し、設定に応じて人工知能アシスタントから予約も受け付けます。" },
      { title: "すぐに分かる情報", text: "事業情報をもとに、会社やサービスについて案内します。" },
      { title: "複数の言語で対応", text: "設定内容に応じて、さまざまな言語を使うお客様とのコミュニケーションを支援します。" },
      { title: "繰り返し対応を軽減", text: "よくある質問に対応し、スタッフが個別対応に集中できる時間を増やします。" },
    ],
    faqTitle: "人工知能ウェブアシスタントについて",
    faqs: [
      { question: "人工知能ウェブアシスタントとは何ですか？", answer: "企業が提供した情報を使い、ウェブサイト訪問者の質問に答えて問い合わせを案内するチャットツールです。" },
      { question: "営業時間外も顧客に回答できますか？", answer: "提供された情報をもとに、営業時間外を含め、よくある問い合わせにいつでも回答できます。" },
      { question: "複数の言語で対応できますか？", answer: "複数の言語で訪問者をサポートできます。対応言語や体験は設定内容により異なるため、事前にご確認ください。" },
      { question: "商品やサービスについて案内できますか？", answer: "はい。設定時に提供された事業情報や資料に基づいて回答できます。" },
      { question: "人工知能アシスタントから予約できますか？", answer: "適切な予約フローや連携が利用できる場合に予約機能を設定できます。要件は事前にご相談ください。" },
      { question: "どのような事業に向いていますか？導入方法は？", answer: "ウェブサイトのよくある質問に対応したい飲食店や店舗などに適しています。ウェブサイトや要件、利用可能な連携についてご相談ください。" },
      { question: "他社の人工知能サービスとどう比較すればよいですか？", answer: "各社が提供する機能や条件は異なります。ご要件に合わせて、料金、連携、データの取り扱い、対応言語、人への引き継ぎを比較してください。" },
    ],
    demoEyebrow: "デモをご覧ください",
    demoTitle: "ウェブサイトに人工知能アシスタントを導入しませんか？",
    demoText: "短いデモをご紹介し、事業についてお話しできれば幸いです。",
    demoNoticeTitle: "女性のお客様へのご案内",
    demoNoticeText: "サービスに関心をお持ちの女性のお客様は、マフラムの方を通じてお問い合わせください。女性のお客様ご本人からの直接のお問い合わせはご遠慮いただいております。",
    whatsappButton: "ワッツアップで相談",
    lineButton: "ラインで相談",
    websiteButton: "会社のウェブサイトを見る",
    phoneButton: "電話で相談",
    phoneNumber: "080-5070-9373",
    fixedContactLabel: "お問い合わせ",
    footerLine: "プロピボタル・ソリューションの取り組み",
  },
};
