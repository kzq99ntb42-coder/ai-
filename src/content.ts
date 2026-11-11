export const locales = ["en", "zh", "hi", "es", "fr", "ar", "bn", "pt", "ru", "ur", "uz", "ja", "id", "ms", "tr"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  zh: "简体中文",
  hi: "हिन्दी",
  es: "Español",
  fr: "Français",
  ar: "العربية",
  bn: "বাংলা",
  pt: "Português",
  ru: "Русский",
  ur: "اردو",
  uz: "O‘zbekcha",
  ja: "日本語",
  id: "Bahasa Indonesia",
  ms: "Bahasa Melayu",
  tr: "Türkçe",
};

export const rtlLocales: Locale[] = ["ar", "ur"];

export type Content = {
  tagline: string;
  languageLabel: string;
  menuLabel: string;
  nav: { story: string; services: string; industries: string; approach: string; faq: string; contact: string };
  heroEyebrow: string;
  heroTitle: string;
  heroText: string;
  primaryCta: string;
  secondaryCta: string;
  scroll: string;
  storyEyebrow: string;
  storyTitle: string;
  storyText: string;
  storyNote: string;
  servicesEyebrow: string;
  servicesTitle: string;
  servicesText: string;
  services: { title: string; text: string }[];
  industriesEyebrow: string;
  industriesTitle: string;
  industries: string[];
  approachEyebrow: string;
  approachTitle: string;
  steps: { title: string; text: string }[];
  featuresEyebrow: string;
  featuresTitle: string;
  features: string[];
  faqEyebrow: string;
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  contactEyebrow: string;
  contactTitle: string;
  contactText: string;
  mahram: string;
  whatsapp: string;
  line: string;
  email: string;
  footerLine: string;
  privacy: string;
  terms: string;
  back: string;
  privacyTitle: string;
  privacyText: string;
  termsTitle: string;
  termsText: string;
  legalNote: string;
};

export const content: Partial<Record<Locale, Content>> = {
  en: {
    tagline: "Thoughtful AI. Rooted in service.",
    languageLabel: "Choose language",
    menuLabel: "Toggle navigation",
    nav: { story: "Our story", services: "Services", industries: "Who we help", approach: "How it works", faq: "FAQs", contact: "Contact" },
    heroEyebrow: "A Propivotal Solutions initiative",
    heroTitle: "More care in every conversation.",
    heroText: "AI chatbot support, thoughtfully shaped around the way Muslim businesses serve their communities.",
    primaryCta: "Explore our approach",
    secondaryCta: "Talk to our team",
    scroll: "Scroll to discover",
    storyEyebrow: "The idea behind the name",
    storyTitle: "Technology with a purpose: helping Muslim businesses thrive.",
    storyText: "One Propivotal Solutions employee gave this initiative its name, Muslim Chat Bots, inspired by his dream to use AI chatbots to help Muslim businesses grow and serve customers better.",
    storyNote: "A simple ambition: help businesses grow, serve customers better and make every enquiry feel welcomed.",
    servicesEyebrow: "Practical, people-first AI",
    servicesTitle: "Helpful conversations. Thoughtful handovers.",
    servicesText: "Give customers a clearer first answer—and your team a better starting point.",
    services: [
      { title: "Always-on answers", text: "Respond to common questions around the clock, using the information your business provides." },
      { title: "Enquiries that move forward", text: "Capture and qualify customer interest, then route the conversation to your connected CRM." },
      { title: "A human, when it matters", text: "When a question needs your team, pass it on with the conversation context intact." },
    ],
    industriesEyebrow: "Made for the communities you serve",
    industriesTitle: "A better welcome for every kind of business.",
    industries: ["Halal restaurants & food", "Muslim-owned shops", "Islamic businesses", "Muslim professionals", "Travel & tourism", "Community services"],
    approachEyebrow: "Simple by design",
    approachTitle: "From your knowledge to a more helpful first hello.",
    steps: [
      { title: "Share what you know", text: "Provide your website and business documents as the chatbot's source material." },
      { title: "Shape the experience", text: "Set up a website widget with a greeting and appearance that suit your brand." },
      { title: "Connect your team", text: "Configure supported CRM connections, notifications and human handover for your workflow." },
    ],
    featuresEyebrow: "Made to fit your workflow",
    featuresTitle: "The essentials, working together.",
    features: ["Answers grounded in your business information", "Website chatbot with customizable appearance", "Enquiry capture and lead qualification", "Appointment booking, where configured", "CRM connections and automated notifications", "Human handover with conversation context"],
    faqEyebrow: "Good to know",
    faqTitle: "A few questions, answered.",
    faqs: [
      { question: "What does the chatbot use to answer?", answer: "It can use the website and documents you provide. Responses are based on that business information." },
      { question: "Can a customer speak to a person?", answer: "Yes. Conversations that need your team can be handed over with their context." },
      { question: "Will it fit our brand?", answer: "The website widget can be customized to suit your colours, greeting and placement." },
      { question: "Which CRM or booking tools are supported?", answer: "Available connections depend on your setup. Contact us to discuss your current tools before making a decision." },
    ],
    contactEyebrow: "Start a conversation",
    contactTitle: "Let's make your customer experience feel more personal.",
    contactText: "Tell us a little about your business and where you would like better support.",
    mahram: "If you are a sister interested in our services, please arrange for your mahram to contact us on your behalf.",
    whatsapp: "WhatsApp",
    line: "LINE",
    email: "Email us",
    footerLine: "An initiative by Propivotal Solutions",
    privacy: "Privacy policy",
    terms: "Terms & conditions",
    back: "Back to home",
    privacyTitle: "Privacy policy",
    privacyText: "We aim to handle enquiries respectfully and only use the details you choose to share to respond to you. This site links directly to WhatsApp, LINE and email; when you follow those links, the relevant service's own privacy terms apply. Google Fonts may also process basic connection data when fonts load. Before launch, Propivotal Solutions should add its data controller details, retention practices and any analytics or cookies used.",
    termsTitle: "Terms & conditions",
    termsText: "This website introduces the Muslim Chat Bots initiative of Propivotal Solutions. Service scope, supported integrations, pricing and delivery are agreed individually before work begins. Website information is a general introduction, not a guarantee of results or a substitute for an agreed service contract.",
    legalNote: "These policy pages are an initial draft and should be reviewed and completed by Propivotal Solutions before publication.",
  },
  ar: {
    tagline: "ذكاء اصطناعي هادف. خدمة تنبع من الاهتمام.",
    languageLabel: "اختر اللغة",
    menuLabel: "فتح أو إغلاق القائمة",
    nav: { story: "قصتنا", services: "الخدمات", industries: "من نخدم", approach: "آلية العمل", faq: "الأسئلة الشائعة", contact: "تواصل معنا" },
    heroEyebrow: "مبادرة من Propivotal Solutions",
    heroTitle: "اهتمام أكبر في كل محادثة.",
    heroText: "دعم عبر روبوتات المحادثة بالذكاء الاصطناعي، مصمم بعناية ليناسب خدمة الشركات المسلمة لمجتمعاتها.",
    primaryCta: "اكتشفوا طريقتنا",
    secondaryCta: "تواصلوا مع فريقنا",
    scroll: "تابعوا للاستكشاف",
    storyEyebrow: "الفكرة وراء الاسم",
    storyTitle: "تقنية هادفة: لمساعدة الشركات المسلمة على الازدهار.",
    storyText: "أطلق أحد موظفي Propivotal Solutions اسم «مسلم شات بوتس» على هذه المبادرة، مستلهماً حلمه بتسخير روبوتات المحادثة لمساعدة الشركات المسلمة على النمو وتحسين خدمة العملاء.",
    storyNote: "طموح بسيط: مساعدة الشركات على النمو، وتحسين خدمة العملاء، والترحيب بكل استفسار.",
    servicesEyebrow: "ذكاء اصطناعي عملي يضع الناس أولاً",
    servicesTitle: "محادثات مفيدة. وإحالة مدروسة للفريق.",
    servicesText: "إجابة أولى أوضح للعملاء، وبداية أفضل لفريقكم.",
    services: [
      { title: "إجابات على مدار الساعة", text: "الرد على الأسئلة الشائعة في أي وقت، بالاعتماد على المعلومات التي تقدمها شركتكم." },
      { title: "استفسارات تتقدم للأمام", text: "جمع اهتمام العملاء وتأهيله، ثم توجيه المحادثة إلى نظام إدارة علاقات العملاء المتصل." },
      { title: "تدخل بشري عند الحاجة", text: "إحالة الأسئلة التي تحتاج إلى فريقكم مع الاحتفاظ بسياق المحادثة." },
    ],
    industriesEyebrow: "للمجتمعات التي تخدمونها",
    industriesTitle: "ترحيب أفضل لكل نوع من الأعمال.",
    industries: ["مطاعم وأطعمة حلال", "متاجر يملكها مسلمون", "مشروعات إسلامية", "مهنيون مسلمون", "السفر والسياحة", "خدمات مجتمعية"],
    approachEyebrow: "ببساطة مقصودة",
    approachTitle: "من معرفتكم إلى ترحيب أول أكثر فائدة.",
    steps: [
      { title: "شاركوا معلوماتكم", text: "قدموا موقعكم ووثائق العمل لتكون مصادر إجابات روبوت المحادثة." },
      { title: "صمموا التجربة", text: "أعدوا أداة للموقع بترحيب ومظهر يناسب علامتكم التجارية." },
      { title: "اربطوا فريقكم", text: "أعدوا اتصالات إدارة العملاء المتاحة والإشعارات والإحالة البشرية بما يناسب سير عملكم." },
    ],
    featuresEyebrow: "يناسب أسلوب عملكم",
    featuresTitle: "الأساسيات تعمل معاً.",
    features: ["إجابات مستندة إلى معلومات شركتكم", "روبوت للموقع بمظهر قابل للتخصيص", "جمع الاستفسارات وتأهيل العملاء المحتملين", "حجز المواعيد عند الإعداد", "اتصالات إدارة العملاء وإشعارات تلقائية", "إحالة بشرية مع سياق المحادثة"],
    faqEyebrow: "معلومات مفيدة",
    faqTitle: "إجابات عن بعض الأسئلة.",
    faqs: [
      { question: "ما مصادر إجابات الروبوت؟", answer: "يمكنه استخدام موقعكم والوثائق التي تقدمونها، وتستند الردود إلى معلومات العمل تلك." },
      { question: "هل يستطيع العميل التحدث إلى شخص؟", answer: "نعم. يمكن إحالة المحادثات التي تحتاج إلى فريقكم مع سياقها." },
      { question: "هل يناسب علامتنا التجارية؟", answer: "يمكن تخصيص أداة الموقع لتناسب ألوانكم ورسالة الترحيب ومكان الظهور." },
      { question: "ما أنظمة إدارة العملاء أو الحجز المدعومة؟", answer: "تعتمد الاتصالات المتاحة على إعدادكم. تواصلوا معنا لمناقشة أدواتكم قبل اتخاذ القرار." },
    ],
    contactEyebrow: "لنبدأ محادثة",
    contactTitle: "لنجعل تجربة عملائكم أكثر قرباً.",
    contactText: "أخبرونا قليلاً عن أعمالكم والدعم الذي ترغبون في تحسينه.",
    mahram: "إذا كنتِ أختاً مهتمة بخدماتنا، يُرجى ترتيب تواصل محرمكِ معنا نيابةً عنكِ.",
    whatsapp: "واتساب",
    line: "LINE",
    email: "راسلونا",
    footerLine: "مبادرة من Propivotal Solutions",
    privacy: "سياسة الخصوصية",
    terms: "الشروط والأحكام",
    back: "العودة للرئيسية",
    privacyTitle: "سياسة الخصوصية",
    privacyText: "نسعى إلى التعامل باحترام مع الاستفسارات واستخدام التفاصيل التي تختارون مشاركتها للرد عليكم فقط. يتضمن هذا الموقع روابط مباشرة إلى واتساب وLINE والبريد الإلكتروني؛ وعند فتحها تسري سياسة الخدمة المعنية. وقد تعالج Google Fonts بيانات اتصال أساسية عند تحميل الخطوط. قبل الإطلاق، ينبغي لـ Propivotal Solutions إضافة بيانات مسؤول معالجة البيانات وممارسات الاحتفاظ وأي تحليلات أو ملفات تعريف ارتباط مستخدمة.",
    termsTitle: "الشروط والأحكام",
    termsText: "يعرّف هذا الموقع بمبادرة مسلم شات بوتس التابعة لـ Propivotal Solutions. يُتفق بشكل فردي على نطاق الخدمة والاتصالات المدعومة والأسعار والتنفيذ قبل بدء العمل. المعلومات هنا تعريفية عامة ولا تضمن النتائج ولا تحل محل عقد خدمة متفق عليه.",
    legalNote: "هذه الصفحات مسودة أولية، وينبغي لـ Propivotal Solutions مراجعتها واستكمالها قبل النشر.",
  },
  ja: {
    tagline: "思いやりのあるAI。人に寄り添うサービス。",
    languageLabel: "言語を選択",
    menuLabel: "ナビゲーションを切り替え",
    nav: { story: "私たちの想い", services: "サービス", industries: "対象業種", approach: "導入の流れ", faq: "よくある質問", contact: "お問い合わせ" },
    heroEyebrow: "Propivotal Solutions の取り組み",
    heroTitle: "一つひとつの会話に、もっと心配りを。",
    heroText: "ムスリムの事業者が地域の人々に寄り添えるよう、丁寧に設計したAIチャットボットサポート。",
    primaryCta: "取り組みを見る",
    secondaryCta: "チームに相談する",
    scroll: "スクロールしてご覧ください",
    storyEyebrow: "名前に込めた想い",
    storyTitle: "ムスリム事業者の成長を支える、目的あるテクノロジー。",
    storyText: "Propivotal Solutionsの社員の一人が、ムスリム事業者の成長と顧客対応をAIチャットボットで支えたいという夢を込め、この取り組みに「Muslim Chat Bots」と名付けました。",
    storyNote: "事業の成長、より良い顧客対応、すべての問い合わせを歓迎することを目指しています。",
    servicesEyebrow: "人を大切にする実用的なAI",
    servicesTitle: "役立つ会話。丁寧な引き継ぎ。",
    servicesText: "お客様には分かりやすい最初の回答を、チームには次の対応への手がかりを。",
    services: [
      { title: "いつでも回答", text: "事業者が提供する情報をもとに、よくある質問にいつでも対応します。" },
      { title: "問い合わせを次へ", text: "関心を把握・整理し、接続されたCRMへ会話を引き継ぎます。" },
      { title: "必要なときは人へ", text: "チームでの対応が必要な質問を、会話の流れとともに引き継ぎます。" },
    ],
    industriesEyebrow: "地域の人々に応えるために",
    industriesTitle: "さまざまな事業に、心地よい第一印象を。",
    industries: ["ハラール飲食店・食品", "ムスリム経営の店舗", "イスラム関連事業", "ムスリムの専門職", "旅行・観光", "地域サービス"],
    approachEyebrow: "シンプルな設計",
    approachTitle: "事業の知識を、より親切な最初の応対へ。",
    steps: [
      { title: "情報を共有", text: "ウェブサイトや業務資料を回答の情報源としてご提供ください。" },
      { title: "体験を整える", text: "ブランドに合った挨拶とデザインのウェブチャットを設定します。" },
      { title: "チームとつなぐ", text: "対応可能なCRM連携、通知、人への引き継ぎを業務に合わせて設定します。" },
    ],
    featuresEyebrow: "業務に合わせて",
    featuresTitle: "必要な機能を、ひとつに。",
    features: ["事業情報に基づく回答", "デザインを調整できるウェブチャット", "問い合わせの取得と見込み客の把握", "設定に応じた予約受付", "CRM連携と自動通知", "会話の背景を保った有人対応への引き継ぎ"],
    faqEyebrow: "ご確認ください",
    faqTitle: "よくあるご質問。",
    faqs: [
      { question: "回答には何を使いますか？", answer: "ご提供いただくウェブサイトや資料を使い、事業情報に基づいて回答します。" },
      { question: "お客様は人と話せますか？", answer: "はい。チームで対応する会話は、背景情報とともに引き継げます。" },
      { question: "ブランドに合わせられますか？", answer: "色、挨拶文、表示位置など、ウェブチャットのデザインを調整できます。" },
      { question: "対応CRMや予約ツールは？", answer: "利用可能な連携は環境によります。ご利用中のツールについて事前にご相談ください。" },
    ],
    contactEyebrow: "まずはご相談ください",
    contactTitle: "顧客体験を、もっとあたたかく。",
    contactText: "事業内容と改善したいサポートについて、お聞かせください。",
    mahram: "サービスに関心をお持ちの女性は、代理人の方からお問い合わせいただくようお願いいたします。",
    whatsapp: "WhatsApp",
    line: "LINE",
    email: "メールで相談",
    footerLine: "Propivotal Solutions の取り組み",
    privacy: "プライバシーポリシー",
    terms: "利用条件",
    back: "ホームへ戻る",
    privacyTitle: "プライバシーポリシー",
    privacyText: "お問い合わせには敬意をもって対応し、お客様が共有を選んだ情報は返信のために使用することを目指します。当サイトには WhatsApp、LINE、メールへのリンクがあります。リンク先では各サービスのプライバシー条件が適用されます。フォントの読み込み時にGoogle Fontsが基本的な接続情報を処理する場合があります。公開前に Propivotal Solutions がデータ管理者情報、保存期間、使用する分析機能やCookieを追記してください。",
    termsTitle: "利用条件",
    termsText: "当サイトは Propivotal Solutions の Muslim Chat Bots の取り組みを紹介します。サービス範囲、対応連携、料金、提供内容は開始前に個別に合意します。掲載情報は一般的な紹介であり、成果の保証や個別契約の代わりではありません。",
    legalNote: "このポリシーは初稿です。公開前に Propivotal Solutions による確認と補足が必要です。",
  },
  ur: {
    tagline: "بامقصد مصنوعی ذہانت۔ خدمت میں خلوص۔",
    languageLabel: "زبان منتخب کریں",
    menuLabel: "مینو کھولیں یا بند کریں",
    nav: { story: "ہماری کہانی", services: "خدمات", industries: "کن کے لیے", approach: "طریقۂ کار", faq: "سوالات", contact: "رابطہ" },
    heroEyebrow: "Propivotal Solutions کا اقدام",
    heroTitle: "ہر گفتگو میں زیادہ توجہ۔",
    heroText: "مسلم کاروباروں کے لیے AI چیٹ بوٹ معاونت، ان کی کمیونٹیز کی خدمت کے انداز کے مطابق۔",
    primaryCta: "ہمارا طریقۂ کار دیکھیں",
    secondaryCta: "ہماری ٹیم سے بات کریں",
    scroll: "مزید دیکھنے کے لیے نیچے جائیں",
    storyEyebrow: "نام کے پیچھے خیال",
    storyTitle: "بامقصد ٹیکنالوجی، مسلم کاروباروں کی ترقی کے لیے۔",
    storyText: "Propivotal Solutions کے ایک ملازم نے اپنے اس خواب سے متاثر ہو کر اس اقدام کا نام مسلم چیٹ بوٹس رکھا کہ AI چیٹ بوٹس مسلم کاروباروں کی ترقی اور صارفین کی بہتر خدمت میں مدد دیں۔",
    storyNote: "سادہ مقصد: کاروبار کو بڑھنے، صارفین کی بہتر خدمت اور ہر سوال کا خیرمقدم کرنے میں مدد دینا۔",
    servicesEyebrow: "عملی AI، لوگوں کو ترجیح",
    servicesTitle: "مفید گفتگو۔ سوچ سمجھ کر حوالگی۔",
    servicesText: "صارفین کے لیے واضح ابتدائی جواب اور آپ کی ٹیم کے لیے بہتر اگلا قدم۔",
    services: [
      { title: "ہمہ وقت جوابات", text: "آپ کے فراہم کردہ کاروباری مواد سے عام سوالات کے جواب دیں۔" },
      { title: "آگے بڑھتے استفسارات", text: "صارفین کی دلچسپی جمع اور جانچ کر گفتگو منسلک CRM تک پہنچائیں۔" },
      { title: "ضرورت پر انسان", text: "جن سوالات کے لیے ٹیم درکار ہو، انہیں پوری گفتگو کے پس منظر کے ساتھ منتقل کریں۔" },
    ],
    industriesEyebrow: "آپ کی کمیونٹی کی خدمت کے لیے",
    industriesTitle: "ہر کاروبار کے لیے بہتر خیرمقدم۔",
    industries: ["حلال ریسٹورنٹ اور خوراک", "مسلم ملکیتی دکانیں", "اسلامی کاروبار", "مسلم پیشہ ور افراد", "سفر اور سیاحت", "کمیونٹی خدمات"],
    approachEyebrow: "سادہ اور واضح",
    approachTitle: "آپ کے علم سے بہتر ابتدائی گفتگو تک۔",
    steps: [
      { title: "اپنی معلومات دیں", text: "ویب سائٹ اور کاروباری دستاویزات کو چیٹ بوٹ کے معلوماتی ذرائع کے طور پر فراہم کریں۔" },
      { title: "تجربہ ترتیب دیں", text: "اپنے برانڈ کے مطابق خوش آمدید پیغام اور انداز کے ساتھ ویب چیٹ ترتیب دیں۔" },
      { title: "ٹیم سے جوڑیں", text: "اپنے طریقۂ کار کے مطابق دستیاب CRM، اطلاعات اور انسانی حوالگی ترتیب دیں۔" },
    ],
    featuresEyebrow: "آپ کے کام کے مطابق",
    featuresTitle: "ضروری سہولتیں، ایک ساتھ۔",
    features: ["کاروباری معلومات پر مبنی جوابات", "حسبِ ضرورت انداز والی ویب چیٹ", "استفسارات اور ممکنہ گاہکوں کی معلومات", "ترتیب کے مطابق ملاقات کی بکنگ", "CRM روابط اور خودکار اطلاعات", "گفتگو کے پس منظر کے ساتھ انسانی حوالگی"],
    faqEyebrow: "جاننے کی باتیں",
    faqTitle: "چند عام سوالات کے جواب۔",
    faqs: [
      { question: "چیٹ بوٹ جواب کے لیے کیا استعمال کرتا ہے؟", answer: "یہ آپ کی فراہم کردہ ویب سائٹ اور دستاویزات استعمال کر سکتا ہے۔ جوابات اسی کاروباری معلومات پر مبنی ہوتے ہیں۔" },
      { question: "کیا صارف کسی شخص سے بات کر سکتا ہے؟", answer: "جی ہاں۔ ٹیم کی ضرورت والی گفتگو پس منظر سمیت منتقل کی جا سکتی ہے۔" },
      { question: "کیا یہ ہمارے برانڈ کے مطابق ہوگا؟", answer: "ویب چیٹ کے رنگ، خوش آمدید پیغام اور جگہ کو آپ کے مطابق بنایا جا سکتا ہے۔" },
      { question: "کون سے CRM یا بکنگ ٹول دستیاب ہیں؟", answer: "دستیاب روابط آپ کے سیٹ اپ پر منحصر ہیں۔ فیصلہ کرنے سے پہلے اپنے موجودہ ٹولز پر ہم سے بات کریں۔" },
    ],
    contactEyebrow: "بات شروع کریں",
    contactTitle: "آئیے صارفین کا تجربہ مزید ذاتی بنائیں۔",
    contactText: "اپنے کاروبار اور بہتر معاونت کی ضرورت کے بارے میں بتائیں۔",
    mahram: "اگر کوئی بہن ہماری خدمات میں دلچسپی رکھتی ہیں تو براہ کرم اپنے محرم سے ہماری طرف سے رابطہ کرنے کا انتظام کریں۔",
    whatsapp: "واٹس ایپ",
    line: "LINE",
    email: "ای میل کریں",
    footerLine: "Propivotal Solutions کا ایک اقدام",
    privacy: "رازداری کی پالیسی",
    terms: "شرائط و ضوابط",
    back: "مرکزی صفحے پر واپس",
    privacyTitle: "رازداری کی پالیسی",
    privacyText: "ہم استفسارات کا احترام سے جواب دینے اور صرف ان تفصیلات کو استعمال کرنے کا ارادہ رکھتے ہیں جو آپ جواب کے لیے خود فراہم کریں۔ یہ سائٹ WhatsApp، LINE اور ای میل کے براہ راست روابط دیتی ہے؛ وہاں متعلقہ سروس کی اپنی رازداری کی شرائط لاگو ہوں گی۔ فونٹس لوڈ ہونے پر Google Fonts بنیادی کنکشن معلومات پر کارروائی کر سکتا ہے۔ اشاعت سے پہلے Propivotal Solutions کو ڈیٹا کنٹرولر کی تفصیلات، معلومات رکھنے کے طریقے اور استعمال ہونے والی تجزیاتی یا کوکیز کی معلومات شامل کرنی چاہئیں۔",
    termsTitle: "شرائط و ضوابط",
    termsText: "یہ ویب سائٹ Propivotal Solutions کے مسلم چیٹ بوٹس اقدام کا تعارف ہے۔ خدمت کا دائرہ، معاون روابط، قیمت اور فراہمی کام شروع ہونے سے پہلے الگ سے طے ہوں گے۔ ویب سائٹ کی معلومات عمومی تعارف ہیں، نتائج کی ضمانت یا طے شدہ معاہدے کا متبادل نہیں۔",
    legalNote: "یہ صفحات ابتدائی مسودہ ہیں؛ اشاعت سے پہلے Propivotal Solutions کو ان کا جائزہ لے کر تفصیل مکمل کرنی چاہیے۔",
  },
  hi: {
    tagline: "संवेदनशील AI। सेवा की सच्ची भावना।",
    languageLabel: "भाषा चुनें",
    menuLabel: "मेनू खोलें या बंद करें",
    nav: { story: "हमारी कहानी", services: "सेवाएँ", industries: "हम किनकी मदद करते हैं", approach: "यह कैसे काम करता है", faq: "अक्सर पूछे जाने वाले सवाल", contact: "संपर्क" },
    heroEyebrow: "Propivotal Solutions की पहल",
    heroTitle: "हर बातचीत में थोड़ी और देखभाल।",
    heroText: "मुस्लिम व्यवसायों के लिए AI चैटबॉट सहायता, उनकी समुदायों की सेवा के तरीके को ध्यान में रखकर।",
    primaryCta: "हमारा तरीका जानें",
    secondaryCta: "हमारी टीम से बात करें",
    scroll: "आगे जानने के लिए स्क्रॉल करें",
    storyEyebrow: "नाम के पीछे की सोच",
    storyTitle: "उद्देश्यपूर्ण तकनीक, मुस्लिम व्यवसायों की तरक्की के लिए।",
    storyText: "Propivotal Solutions के एक कर्मचारी ने मुस्लिम व्यवसायों की तरक्की और बेहतर ग्राहक सेवा में AI चैटबॉट से मदद के अपने सपने से प्रेरित होकर इस पहल का नाम Muslim Chat Bots रखा।",
    storyNote: "एक सरल लक्ष्य: व्यवसायों को बढ़ने, ग्राहकों की बेहतर सेवा करने और हर पूछताछ का स्वागत करने में मदद देना।",
    servicesEyebrow: "लोगों को प्राथमिकता देने वाला उपयोगी AI",
    servicesTitle: "काम की बातचीत। सोच-समझकर आगे बढ़ाना।",
    servicesText: "ग्राहकों को स्पष्ट शुरुआती जवाब और आपकी टीम को बेहतर अगला कदम।",
    services: [
      { title: "हर समय जवाब", text: "आपके दिए गए व्यवसाय की जानकारी से आम सवालों का जवाब दें।" },
      { title: "आगे बढ़ती पूछताछ", text: "ग्राहकों की रुचि समझें और बातचीत को जुड़े CRM तक पहुँचाएँ।" },
      { title: "ज़रूरत पर इंसान", text: "जिन सवालों के लिए टीम चाहिए, उन्हें बातचीत के संदर्भ के साथ आगे भेजें।" },
    ],
    industriesEyebrow: "आप जिन समुदायों की सेवा करते हैं",
    industriesTitle: "हर तरह के व्यवसाय के लिए बेहतर स्वागत।",
    industries: ["हलाल रेस्तराँ और खाद्य व्यवसाय", "मुस्लिम स्वामित्व वाली दुकानें", "इस्लामी व्यवसाय", "मुस्लिम पेशेवर", "यात्रा और पर्यटन", "सामुदायिक सेवाएँ"],
    approachEyebrow: "सरलता के साथ",
    approachTitle: "आपकी जानकारी से बेहतर पहली बातचीत तक।",
    steps: [
      { title: "अपनी जानकारी साझा करें", text: "वेबसाइट और व्यवसाय से जुड़े दस्तावेज़ चैटबॉट के स्रोत के रूप में दें।" },
      { title: "अनुभव तैयार करें", text: "अपने ब्रांड के मुताबिक अभिवादन और रूप वाला वेबसाइट चैट सेट करें।" },
      { title: "टीम को जोड़ें", text: "अपने काम के अनुसार उपलब्ध CRM कनेक्शन, सूचनाएँ और मानवीय सहायता सेट करें।" },
    ],
    featuresEyebrow: "आपके काम के अनुरूप",
    featuresTitle: "ज़रूरी सुविधाएँ, साथ-साथ।",
    features: ["व्यवसाय की जानकारी पर आधारित जवाब", "रूप बदलने योग्य वेबसाइट चैटबॉट", "पूछताछ दर्ज करना और संभावित ग्राहक की पहचान", "सेटअप के अनुसार अपॉइंटमेंट बुकिंग", "CRM कनेक्शन और स्वचालित सूचनाएँ", "बातचीत के संदर्भ के साथ टीम को हस्तांतरण"],
    faqEyebrow: "जानने योग्य बातें",
    faqTitle: "कुछ आम सवालों के जवाब।",
    faqs: [
      { question: "चैटबॉट जवाब देने के लिए क्या इस्तेमाल करता है?", answer: "यह आपकी दी हुई वेबसाइट और दस्तावेज़ इस्तेमाल कर सकता है। जवाब उसी व्यवसाय की जानकारी पर आधारित होते हैं।" },
      { question: "क्या ग्राहक किसी व्यक्ति से बात कर सकता है?", answer: "हाँ। टीम की ज़रूरत वाली बातचीत उसके संदर्भ के साथ आगे भेजी जा सकती है।" },
      { question: "क्या यह हमारे ब्रांड के मुताबिक होगा?", answer: "वेबसाइट चैट के रंग, अभिवादन और जगह को आपके ब्रांड के अनुरूप बनाया जा सकता है।" },
      { question: "कौन-से CRM या बुकिंग टूल उपलब्ध हैं?", answer: "उपलब्ध कनेक्शन आपके सेटअप पर निर्भर हैं। फैसला लेने से पहले अपने मौजूदा टूल के बारे में बात करें।" },
    ],
    contactEyebrow: "बात शुरू करें",
    contactTitle: "आइए ग्राहक अनुभव को और व्यक्तिगत बनाएँ।",
    contactText: "अपने व्यवसाय और बेहतर सहायता की ज़रूरत के बारे में बताएँ।",
    mahram: "यदि कोई बहन हमारी सेवाओं में रुचि रखती हैं, तो कृपया अपने महरम से हमारी ओर से संपर्क करने का अनुरोध करें।",
    whatsapp: "WhatsApp",
    line: "LINE",
    email: "ईमेल करें",
    footerLine: "Propivotal Solutions की एक पहल",
    privacy: "गोपनीयता नीति",
    terms: "नियम और शर्तें",
    back: "मुखपृष्ठ पर वापस जाएँ",
    privacyTitle: "गोपनीयता नीति",
    privacyText: "हम पूछताछ का सम्मानपूर्वक जवाब देना चाहते हैं और आपके द्वारा साझा की गई जानकारी का उपयोग आपको जवाब देने के लिए ही करना चाहते हैं। इस साइट पर WhatsApp, LINE और ईमेल के सीधे लिंक हैं; उन्हें खोलने पर संबंधित सेवा की गोपनीयता शर्तें लागू होंगी। फ़ॉन्ट लोड होने पर Google Fonts बुनियादी कनेक्शन जानकारी संसाधित कर सकता है। प्रकाशन से पहले Propivotal Solutions को डेटा नियंत्रक विवरण, जानकारी रखने की प्रक्रिया और उपयोग किए गए विश्लेषण या कुकीज़ जोड़ने चाहिए।",
    termsTitle: "नियम और शर्तें",
    termsText: "यह वेबसाइट Propivotal Solutions की Muslim Chat Bots पहल का परिचय है। सेवा का दायरा, समर्थित कनेक्शन, कीमत और काम की प्रक्रिया शुरू होने से पहले अलग से तय किए जाएँगे। यहाँ की जानकारी सामान्य परिचय है, परिणाम की गारंटी या सहमत सेवा अनुबंध का विकल्प नहीं।",
    legalNote: "ये पृष्ठ शुरुआती मसौदा हैं। प्रकाशन से पहले Propivotal Solutions को इनकी समीक्षा और जानकारी पूरी करनी चाहिए।",
  },
  id: {
    tagline: "AI yang penuh perhatian. Berakar pada pelayanan.",
    languageLabel: "Pilih bahasa",
    menuLabel: "Buka atau tutup navigasi",
    nav: { story: "Kisah kami", services: "Layanan", industries: "Siapa yang kami bantu", approach: "Cara kerja", faq: "FAQ", contact: "Kontak" },
    heroEyebrow: "Inisiatif Propivotal Solutions",
    heroTitle: "Lebih peduli dalam setiap percakapan.",
    heroText: "Dukungan chatbot AI yang dirancang dengan cermat untuk membantu bisnis Muslim melayani komunitasnya.",
    primaryCta: "Jelajahi pendekatan kami",
    secondaryCta: "Hubungi tim kami",
    scroll: "Gulir untuk menjelajah",
    storyEyebrow: "Gagasan di balik nama",
    storyTitle: "Teknologi bermakna untuk membantu bisnis Muslim berkembang.",
    storyText: "Seorang karyawan Propivotal Solutions memberi inisiatif ini nama Muslim Chat Bots, terinspirasi impiannya untuk memakai chatbot AI agar bisnis Muslim berkembang dan melayani pelanggan dengan lebih baik.",
    storyNote: "Tujuan sederhana: membantu bisnis bertumbuh, melayani pelanggan dengan lebih baik, dan menyambut setiap pertanyaan.",
    servicesEyebrow: "AI praktis yang mengutamakan manusia",
    servicesTitle: "Percakapan yang membantu. Penerusan yang bijak.",
    servicesText: "Jawaban awal yang lebih jelas bagi pelanggan dan langkah selanjutnya yang lebih baik bagi tim Anda.",
    services: [
      { title: "Jawaban kapan saja", text: "Tanggapi pertanyaan umum kapan pun dengan informasi bisnis yang Anda berikan." },
      { title: "Pertanyaan yang berlanjut", text: "Catat dan pahami minat pelanggan, lalu teruskan percakapan ke CRM yang terhubung." },
      { title: "Bantuan manusia saat dibutuhkan", text: "Teruskan pertanyaan yang memerlukan tim Anda beserta konteks percakapannya." },
    ],
    industriesEyebrow: "Untuk komunitas yang Anda layani",
    industriesTitle: "Sambutan yang lebih baik bagi setiap jenis usaha.",
    industries: ["Restoran & makanan halal", "Toko milik Muslim", "Bisnis Islami", "Profesional Muslim", "Perjalanan & pariwisata", "Layanan komunitas"],
    approachEyebrow: "Dirancang agar sederhana",
    approachTitle: "Dari pengetahuan bisnis Anda menuju sapaan pertama yang lebih membantu.",
    steps: [
      { title: "Bagikan informasi", text: "Sediakan situs web dan dokumen bisnis sebagai sumber chatbot." },
      { title: "Atur pengalaman", text: "Siapkan widget situs dengan sapaan dan tampilan sesuai merek Anda." },
      { title: "Hubungkan tim", text: "Atur koneksi CRM yang didukung, notifikasi, dan penerusan ke staf sesuai alur kerja." },
    ],
    featuresEyebrow: "Sesuai alur kerja Anda",
    featuresTitle: "Hal-hal penting, bekerja bersama.",
    features: ["Jawaban berdasarkan informasi bisnis Anda", "Chatbot situs dengan tampilan yang dapat disesuaikan", "Pencatatan pertanyaan dan kualifikasi prospek", "Pemesanan janji temu jika dikonfigurasi", "Koneksi CRM dan notifikasi otomatis", "Penerusan ke staf dengan konteks percakapan"],
    faqEyebrow: "Perlu diketahui",
    faqTitle: "Beberapa pertanyaan, terjawab.",
    faqs: [
      { question: "Apa yang digunakan chatbot untuk menjawab?", answer: "Chatbot dapat menggunakan situs dan dokumen yang Anda berikan. Jawaban didasarkan pada informasi bisnis tersebut." },
      { question: "Bisakah pelanggan berbicara dengan seseorang?", answer: "Bisa. Percakapan yang memerlukan tim Anda dapat diteruskan beserta konteksnya." },
      { question: "Bisakah tampilannya sesuai merek kami?", answer: "Widget situs dapat disesuaikan dengan warna, sapaan, dan posisi yang Anda pilih." },
      { question: "CRM atau alat pemesanan apa yang didukung?", answer: "Koneksi yang tersedia bergantung pada konfigurasi Anda. Hubungi kami untuk membahas alat yang digunakan sebelum memutuskan." },
    ],
    contactEyebrow: "Mari mulai percakapan",
    contactTitle: "Mari buat pengalaman pelanggan terasa lebih personal.",
    contactText: "Ceritakan sedikit tentang bisnis Anda dan dukungan yang ingin ditingkatkan.",
    mahram: "Jika Anda seorang saudari yang tertarik dengan layanan kami, silakan minta mahram Anda menghubungi kami atas nama Anda.",
    whatsapp: "WhatsApp",
    line: "LINE",
    email: "Kirim email",
    footerLine: "Inisiatif Propivotal Solutions",
    privacy: "Kebijakan privasi",
    terms: "Syarat dan ketentuan",
    back: "Kembali ke beranda",
    privacyTitle: "Kebijakan privasi",
    privacyText: "Kami berupaya menanggapi pertanyaan dengan hormat dan hanya menggunakan detail yang Anda pilih untuk dibagikan guna membalas Anda. Situs ini memiliki tautan langsung ke WhatsApp, LINE, dan email; setelah dibuka, ketentuan privasi layanan terkait berlaku. Google Fonts juga dapat memproses data koneksi dasar saat font dimuat. Sebelum peluncuran, Propivotal Solutions perlu menambahkan detail pengendali data, praktik penyimpanan, serta analitik atau cookie yang digunakan.",
    termsTitle: "Syarat dan ketentuan",
    termsText: "Situs ini memperkenalkan inisiatif Muslim Chat Bots dari Propivotal Solutions. Cakupan layanan, koneksi yang didukung, harga, dan pelaksanaan disepakati secara individual sebelum pekerjaan dimulai. Informasi situs bersifat pengenalan umum, bukan jaminan hasil atau pengganti kontrak layanan.",
    legalNote: "Halaman kebijakan ini masih berupa draf awal dan perlu ditinjau serta dilengkapi oleh Propivotal Solutions sebelum dipublikasikan.",
  },
  ms: {
    tagline: "AI yang prihatin. Berteraskan khidmat.",
    languageLabel: "Pilih bahasa",
    menuLabel: "Buka atau tutup navigasi",
    nav: { story: "Kisah kami", services: "Perkhidmatan", industries: "Siapa yang kami bantu", approach: "Cara ia berfungsi", faq: "Soalan lazim", contact: "Hubungi kami" },
    heroEyebrow: "Inisiatif Propivotal Solutions",
    heroTitle: "Lebih prihatin dalam setiap perbualan.",
    heroText: "Sokongan chatbot AI yang dirancang dengan teliti untuk membantu perniagaan Muslim berkhidmat kepada komuniti mereka.",
    primaryCta: "Terokai pendekatan kami",
    secondaryCta: "Hubungi pasukan kami",
    scroll: "Tatal untuk meneroka",
    storyEyebrow: "Idea di sebalik nama",
    storyTitle: "Teknologi bermakna untuk membantu perniagaan Muslim berkembang.",
    storyText: "Seorang pekerja Propivotal Solutions memberikan inisiatif ini nama Muslim Chat Bots, diinspirasikan oleh impiannya untuk menggunakan chatbot AI bagi membantu perniagaan Muslim berkembang dan memberi khidmat pelanggan yang lebih baik.",
    storyNote: "Hasrat yang mudah: membantu perniagaan berkembang, memberi khidmat pelanggan yang lebih baik dan menyambut setiap pertanyaan.",
    servicesEyebrow: "AI praktikal yang mengutamakan manusia",
    servicesTitle: "Perbualan yang membantu. Serahan yang teliti.",
    servicesText: "Jawapan awal yang lebih jelas untuk pelanggan dan langkah seterusnya yang lebih baik untuk pasukan anda.",
    services: [
      { title: "Jawapan sepanjang masa", text: "Jawab soalan lazim pada bila-bila masa menggunakan maklumat perniagaan yang anda berikan." },
      { title: "Pertanyaan yang bergerak ke hadapan", text: "Rekod dan fahami minat pelanggan, kemudian salurkan perbualan ke CRM yang disambungkan." },
      { title: "Bantuan manusia apabila perlu", text: "Serahkan soalan yang memerlukan pasukan anda berserta konteks perbualan." },
    ],
    industriesEyebrow: "Untuk komuniti yang anda santuni",
    industriesTitle: "Sambutan lebih baik untuk setiap jenis perniagaan.",
    industries: ["Restoran & makanan halal", "Kedai milik Muslim", "Perniagaan Islam", "Profesional Muslim", "Pelancongan & perjalanan", "Khidmat komuniti"],
    approachEyebrow: "Ringkas secara reka bentuk",
    approachTitle: "Daripada pengetahuan anda kepada sapaan pertama yang lebih membantu.",
    steps: [
      { title: "Kongsi maklumat", text: "Sediakan laman web dan dokumen perniagaan sebagai sumber chatbot." },
      { title: "Bentuk pengalaman", text: "Sediakan widget laman dengan sapaan dan penampilan yang sesuai dengan jenama anda." },
      { title: "Hubungkan pasukan", text: "Tetapkan sambungan CRM yang disokong, pemberitahuan dan serahan kepada manusia mengikut aliran kerja anda." },
    ],
    featuresEyebrow: "Sesuai dengan aliran kerja anda",
    featuresTitle: "Keperluan utama, bersama-sama.",
    features: ["Jawapan berasaskan maklumat perniagaan anda", "Chatbot laman web dengan penampilan boleh ubah suai", "Pengumpulan pertanyaan dan kelayakan bakal pelanggan", "Tempahan janji temu jika dikonfigurasikan", "Sambungan CRM dan pemberitahuan automatik", "Serahan kepada manusia dengan konteks perbualan"],
    faqEyebrow: "Perkara yang wajar diketahui",
    faqTitle: "Beberapa soalan, terjawab.",
    faqs: [
      { question: "Apakah sumber jawapan chatbot?", answer: "Chatbot boleh menggunakan laman dan dokumen yang anda berikan. Jawapan berasaskan maklumat perniagaan tersebut." },
      { question: "Bolehkah pelanggan bercakap dengan seseorang?", answer: "Boleh. Perbualan yang memerlukan pasukan anda boleh diserahkan bersama konteksnya." },
      { question: "Bolehkah ia mengikut jenama kami?", answer: "Widget laman boleh disesuaikan dengan warna, sapaan dan kedudukan pilihan anda." },
      { question: "CRM atau alat tempahan apa yang disokong?", answer: "Sambungan yang tersedia bergantung pada persediaan anda. Hubungi kami untuk berbincang tentang alat sedia ada sebelum membuat keputusan." },
    ],
    contactEyebrow: "Mari mulakan perbualan",
    contactTitle: "Mari jadikan pengalaman pelanggan lebih peribadi.",
    contactText: "Kongsikan sedikit tentang perniagaan anda dan sokongan yang ingin dipertingkatkan.",
    mahram: "Jika anda seorang saudari yang berminat dengan perkhidmatan kami, sila aturkan agar mahram anda menghubungi kami bagi pihak anda.",
    whatsapp: "WhatsApp",
    line: "LINE",
    email: "E-mel kami",
    footerLine: "Inisiatif Propivotal Solutions",
    privacy: "Dasar privasi",
    terms: "Terma dan syarat",
    back: "Kembali ke laman utama",
    privacyTitle: "Dasar privasi",
    privacyText: "Kami berusaha mengendalikan pertanyaan dengan hormat dan hanya menggunakan butiran yang anda pilih untuk dikongsi bagi membalas anda. Laman ini mempunyai pautan terus ke WhatsApp, LINE dan e-mel; syarat privasi perkhidmatan masing-masing terpakai apabila pautan dibuka. Google Fonts juga boleh memproses data sambungan asas apabila fon dimuatkan. Sebelum pelancaran, Propivotal Solutions perlu menambah butiran pengawal data, amalan penyimpanan serta analitik atau kuki yang digunakan.",
    termsTitle: "Terma dan syarat",
    termsText: "Laman ini memperkenalkan inisiatif Muslim Chat Bots oleh Propivotal Solutions. Skop perkhidmatan, sambungan yang disokong, harga dan penyampaian dipersetujui secara berasingan sebelum kerja bermula. Maklumat laman ialah pengenalan umum, bukan jaminan hasil atau pengganti kontrak perkhidmatan.",
    legalNote: "Halaman dasar ini ialah draf awal dan perlu disemak serta dilengkapkan oleh Propivotal Solutions sebelum diterbitkan.",
  },
  tr: {
    tagline: "Özenli yapay zekâ. Hizmet odaklı yaklaşım.",
    languageLabel: "Dil seçin",
    menuLabel: "Gezinmeyi aç veya kapat",
    nav: { story: "Hikâyemiz", services: "Hizmetler", industries: "Kimlere yardımcı oluyoruz", approach: "Nasıl çalışır", faq: "SSS", contact: "İletişim" },
    heroEyebrow: "Propivotal Solutions girişimi",
    heroTitle: "Her sohbette daha fazla özen.",
    heroText: "Müslüman işletmelerin topluluklarına hizmet etme biçimine göre özenle tasarlanmış yapay zekâ sohbet botu desteği.",
    primaryCta: "Yaklaşımımızı keşfedin",
    secondaryCta: "Ekibimizle görüşün",
    scroll: "Keşfetmek için kaydırın",
    storyEyebrow: "İsmin ardındaki fikir",
    storyTitle: "Müslüman işletmelerin gelişmesine yardımcı olan amaç odaklı teknoloji.",
    storyText: "Propivotal Solutions bünyesindeki bir çalışan, Müslüman işletmelerin büyümesine ve müşterilerine daha iyi hizmet vermesine yapay zekâ sohbet botlarıyla destek olma hayalinden ilham alarak bu girişime Muslim Chat Bots adını verdi.",
    storyNote: "Basit bir amaç: işletmelerin büyümesine, müşterilerine daha iyi hizmet vermesine ve her talebi sıcak karşılamasına destek olmak.",
    servicesEyebrow: "İnsanı önceleyen pratik yapay zekâ",
    servicesTitle: "Yararlı sohbetler. Özenli yönlendirme.",
    servicesText: "Müşterilere daha net bir ilk yanıt, ekibinize daha iyi bir sonraki adım.",
    services: [
      { title: "Her an yanıt", text: "İşletmenizin sağladığı bilgilerle sık sorulan soruları günün her saati yanıtlayın." },
      { title: "İlerleyen talepler", text: "Müşteri ilgisini kaydedip değerlendirin ve sohbeti bağlı CRM sisteminize yönlendirin." },
      { title: "Gerektiğinde insan desteği", text: "Ekibinizin ilgilenmesi gereken soruları konuşma bağlamıyla aktarın." },
    ],
    industriesEyebrow: "Hizmet verdiğiniz topluluklar için",
    industriesTitle: "Her işletme türüne daha iyi bir karşılama.",
    industries: ["Helal restoranlar ve gıda", "Müslümanlara ait mağazalar", "İslami işletmeler", "Müslüman profesyoneller", "Seyahat ve turizm", "Topluluk hizmetleri"],
    approachEyebrow: "Sadelik için tasarlandı",
    approachTitle: "İşletme bilginizden daha yardımcı bir ilk karşılamaya.",
    steps: [
      { title: "Bilgilerinizi paylaşın", text: "Web sitenizi ve iş belgelerinizi sohbet botunun kaynakları olarak sağlayın." },
      { title: "Deneyimi şekillendirin", text: "Markanıza uygun karşılama mesajı ve görünümle web sitesi widget'ı kurun." },
      { title: "Ekibinizi bağlayın", text: "Desteklenen CRM bağlantılarını, bildirimleri ve insan desteğine aktarımı iş akışınıza göre yapılandırın." },
    ],
    featuresEyebrow: "İş akışınıza uyum sağlar",
    featuresTitle: "Temel ihtiyaçlar bir arada.",
    features: ["İşletme bilgilerinize dayalı yanıtlar", "Görünümü özelleştirilebilir web sitesi sohbet botu", "Talep toplama ve potansiyel müşteri değerlendirme", "Yapılandırıldığında randevu planlama", "CRM bağlantıları ve otomatik bildirimler", "Konuşma bağlamıyla insan ekibe aktarım"],
    faqEyebrow: "Bilmenizde fayda var",
    faqTitle: "Sık sorulan birkaç soru.",
    faqs: [
      { question: "Sohbet botu yanıt verirken ne kullanır?", answer: "Sağladığınız web sitesini ve belgeleri kullanabilir. Yanıtlar bu işletme bilgilerine dayanır." },
      { question: "Müşteriler biriyle görüşebilir mi?", answer: "Evet. Ekibinizin ilgilenmesi gereken konuşmalar bağlamıyla aktarılabilir." },
      { question: "Markamıza uygun hale getirilebilir mi?", answer: "Web sitesi widget'ı renklerinize, karşılama mesajınıza ve konum tercihlerinize göre özelleştirilebilir." },
      { question: "Hangi CRM veya randevu araçları destekleniyor?", answer: "Kullanılabilir bağlantılar kurulumunuza bağlıdır. Karar vermeden önce kullandığınız araçları görüşmek için bize ulaşın." },
    ],
    contactEyebrow: "Sohbete başlayalım",
    contactTitle: "Müşteri deneyimini daha kişisel hale getirelim.",
    contactText: "İşletmenizden ve geliştirmek istediğiniz destek alanından kısaca bahsedin.",
    mahram: "Hizmetlerimizle ilgilenen bir hanımefendiyseniz, lütfen sizin adınıza bizimle iletişime geçmesi için mahreminizden ricada bulunun.",
    whatsapp: "WhatsApp",
    line: "LINE",
    email: "E-posta gönderin",
    footerLine: "Propivotal Solutions girişimi",
    privacy: "Gizlilik politikası",
    terms: "Şartlar ve koşullar",
    back: "Ana sayfaya dön",
    privacyTitle: "Gizlilik politikası",
    privacyText: "Başvuruları saygıyla yanıtlamayı ve yalnızca yanıt verebilmek için paylaşmayı seçtiğiniz bilgileri kullanmayı amaçlıyoruz. Bu sitede WhatsApp, LINE ve e-posta bağlantıları bulunur; bağlantıyı açtığınızda ilgili hizmetin gizlilik şartları geçerlidir. Yazı tipleri yüklenirken Google Fonts temel bağlantı verilerini işleyebilir. Yayından önce Propivotal Solutions veri sorumlusu bilgilerini, saklama uygulamalarını ve kullanılan analiz veya çerezleri eklemelidir.",
    termsTitle: "Şartlar ve koşullar",
    termsText: "Bu site, Propivotal Solutions bünyesindeki Muslim Chat Bots girişimini tanıtır. Hizmet kapsamı, desteklenen bağlantılar, fiyatlandırma ve teslimat çalışmaya başlamadan önce ayrıca kararlaştırılır. Site bilgileri genel tanıtım amaçlıdır; sonuç garantisi veya kararlaştırılmış hizmet sözleşmesinin yerine geçmez.",
    legalNote: "Bu politika sayfaları ilk taslaktır; yayınlanmadan önce Propivotal Solutions tarafından incelenip tamamlanmalıdır.",
  },
  fr: {
    tagline: "Une IA attentionnée. Au service des autres.",
    languageLabel: "Choisir la langue",
    menuLabel: "Ouvrir ou fermer la navigation",
    nav: { story: "Notre histoire", services: "Services", industries: "À qui nous nous adressons", approach: "Fonctionnement", faq: "FAQ", contact: "Contact" },
    heroEyebrow: "Une initiative de Propivotal Solutions",
    heroTitle: "Plus d’attention dans chaque échange.",
    heroText: "Un accompagnement par chatbot IA, conçu avec soin pour aider les entreprises musulmanes à servir leurs communautés.",
    primaryCta: "Découvrir notre approche",
    secondaryCta: "Parler à notre équipe",
    scroll: "Défiler pour découvrir",
    storyEyebrow: "L’idée derrière le nom",
    storyTitle: "Une technologie utile pour faire grandir les entreprises musulmanes.",
    storyText: "Un membre de l’équipe de Propivotal Solutions a donné à cette initiative le nom Muslim Chat Bots, inspiré par son rêve d’aider les entreprises musulmanes à grandir et à mieux servir leurs clients grâce aux chatbots IA.",
    storyNote: "Une ambition simple : favoriser la croissance, améliorer le service client et accueillir chaque demande avec attention.",
    servicesEyebrow: "Une IA pratique qui place l’humain au premier plan",
    servicesTitle: "Des échanges utiles. Des relais bien pensés.",
    servicesText: "Une première réponse plus claire pour vos clients et un meilleur point de départ pour votre équipe.",
    services: [
      { title: "Des réponses à tout moment", text: "Répondez aux questions courantes à toute heure à partir des informations de votre entreprise." },
      { title: "Des demandes qui avancent", text: "Recueillez et qualifiez l’intérêt des clients, puis transmettez l’échange à votre CRM connecté." },
      { title: "Un relais humain quand il le faut", text: "Transmettez à votre équipe les demandes qui nécessitent son intervention, avec leur contexte." },
    ],
    industriesEyebrow: "Au service des communautés que vous accompagnez",
    industriesTitle: "Un accueil de qualité pour chaque activité.",
    industries: ["Restaurants et alimentation halal", "Commerces détenus par des musulmans", "Entreprises islamiques", "Professionnels musulmans", "Voyages et tourisme", "Services communautaires"],
    approachEyebrow: "La simplicité, dès la conception",
    approachTitle: "De vos connaissances à un premier accueil plus utile.",
    steps: [
      { title: "Partagez vos informations", text: "Fournissez votre site et vos documents professionnels comme sources d’information du chatbot." },
      { title: "Personnalisez l’expérience", text: "Configurez un widget web dont le message d’accueil et l’apparence reflètent votre marque." },
      { title: "Reliez votre équipe", text: "Configurez les connexions CRM disponibles, les notifications et le relais humain selon votre organisation." },
    ],
    featuresEyebrow: "Adapté à votre façon de travailler",
    featuresTitle: "L’essentiel, en harmonie.",
    features: ["Réponses fondées sur les informations de votre entreprise", "Chatbot web à l’apparence personnalisable", "Collecte et qualification des demandes", "Prise de rendez-vous lorsqu’elle est configurée", "Connexions CRM et notifications automatiques", "Relais à un humain avec le contexte de l’échange"],
    faqEyebrow: "Bon à savoir",
    faqTitle: "Quelques réponses à vos questions.",
    faqs: [
      { question: "Quelles informations le chatbot utilise-t-il ?", answer: "Il peut utiliser le site et les documents que vous fournissez. Ses réponses s’appuient sur ces informations professionnelles." },
      { question: "Un client peut-il parler à une personne ?", answer: "Oui. Les échanges nécessitant votre équipe peuvent lui être transmis avec leur contexte." },
      { question: "Peut-il respecter notre image de marque ?", answer: "Le widget web peut être personnalisé selon vos couleurs, votre message d’accueil et son emplacement." },
      { question: "Quels CRM ou outils de réservation sont compatibles ?", answer: "Les connexions disponibles dépendent de votre configuration. Contactez-nous pour discuter de vos outils avant de vous décider." },
    ],
    contactEyebrow: "Entamons la conversation",
    contactTitle: "Rendons l’expérience de vos clients plus personnelle.",
    contactText: "Parlez-nous brièvement de votre activité et de l’accompagnement que vous souhaitez améliorer.",
    mahram: "Si vous êtes une sœur intéressée par nos services, veuillez demander à votre mahram de nous contacter en votre nom.",
    whatsapp: "WhatsApp",
    line: "LINE",
    email: "Nous écrire",
    footerLine: "Une initiative de Propivotal Solutions",
    privacy: "Confidentialité",
    terms: "Conditions d’utilisation",
    back: "Retour à l’accueil",
    privacyTitle: "Politique de confidentialité",
    privacyText: "Nous souhaitons traiter les demandes avec respect et n’utiliser que les informations que vous choisissez de partager afin de vous répondre. Ce site contient des liens directs vers WhatsApp, LINE et l’e-mail ; les règles de confidentialité de chaque service s’appliquent lorsque vous les ouvrez. Google Fonts peut également traiter des données de connexion de base lors du chargement des polices. Avant la mise en ligne, Propivotal Solutions devra ajouter l’identité du responsable des données, les durées de conservation et les outils d’analyse ou cookies utilisés.",
    termsTitle: "Conditions d’utilisation",
    termsText: "Ce site présente l’initiative Muslim Chat Bots de Propivotal Solutions. Le périmètre, les connexions prises en charge, les tarifs et les modalités de livraison sont convenus individuellement avant le début des travaux. Les informations du site sont générales et ne garantissent pas de résultats ni ne remplacent un contrat de service.",
    legalNote: "Ces pages sont une première ébauche. Propivotal Solutions doit les vérifier et les compléter avant publication.",
  },
};

export const PREFERRED_LOCALE_KEY = "muslim-chat-bots.locale";

function getPathLocale(pathname: string): Locale | null {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return locales.includes(firstSegment as Locale) ? (firstSegment as Locale) : null;
}

export function getLocale(pathname = typeof window === "undefined" ? "/" : window.location.pathname): Locale {
  return getPathLocale(pathname) ?? "en";
}

export function getInitialLocale(
  pathname = typeof window === "undefined" ? "/" : window.location.pathname,
  languagePreferences: readonly string[] = typeof navigator === "undefined"
    ? []
    : navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language],
): Locale {
  const pathLocale = getPathLocale(pathname);
  if (pathLocale) return pathLocale;

  try {
    const savedLocale = typeof window === "undefined" ? null : window.localStorage.getItem(PREFERRED_LOCALE_KEY);
    if (savedLocale && locales.includes(savedLocale as Locale)) return savedLocale as Locale;
  } catch {
    // Storage may be unavailable in private browsing; browser language still works.
  }

  for (const language of languagePreferences) {
    const baseLanguage = language.trim().toLowerCase().split(/[-_]/, 1)[0];
    if (locales.includes(baseLanguage as Locale)) return baseLanguage as Locale;
  }

  return "en";
}

export function getLocalizedPathname(pathname: string, locale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] && locales.includes(segments[0] as Locale)) segments.shift();

  const localizedSegments = locale === "en" ? segments : [locale, ...segments];
  const localizedPath = `/${localizedSegments.join("/")}`;
  return pathname.endsWith("/") && localizedPath !== "/" ? `${localizedPath}/` : localizedPath;
}
