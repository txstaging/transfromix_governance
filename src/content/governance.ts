import { siteConfig } from "@/config/site";
import type {
  AxisCardContent,
  CapabilityCardContent,
  HeroContent,
  ImageAsset,
  PanelContent,
  ResponsibilityGroup,
  RoadmapTopic,
  SectionIntro,
} from "@/types/content";

/** Text copied verbatim from Figma frame 4559:8171. */

export const hero: HeroContent = {
  eyebrow: "TRUST, GOVERNANCE & RESPONSIBILITY",
  titleLines: ["الثقة والحوكمة", "والمسؤولية المؤسسية"],
  subtitleLines: ["التشريعات المحلية أولًا.", "وأفضل الممارسات العالمية دائمًا."],
  description:
    "مسؤوليات مهنية واضحة، وممارسات تتناسب مع طبيعة المشروعات وأسواقها. اطّلع على مبادئنا الأخلاقية، ومدونة السلوك، ومنهج التعامل مع المتطلبات التنظيمية والمعايير الدولية.",
  cta: { label: "استكشف مبادئنا", href: "#commitments" },
};

export const commitments = {
  intro: {
    eyebrow: "EXPLORE OUR COMMITMENTS",
    title: "ثلاث وجهات لفهم مسؤوليتنا",
    description:
      "المبادئ التي توجّه اختياراتنا، والسلوك الذي ينظّم عملنا، والمتطلبات التي نراعيها في مشروعاتنا.",
  } satisfies SectionIntro,
  cards: [
    {
      ordinal: "01",
      title: "أخلاقياتنا",
      description: "التكنولوجيا المسؤولة، واختيار المشروعات، والأمانة المهنية والمساءلة.",
      action: { label: "استكشف المبادئ", href: "#" },
    },
    {
      ordinal: "02",
      title: "مدونة السلوك المهني",
      description: "مسؤوليات العاملين والإدارة، والتعامل المهني مع العملاء والشركاء.",
      action: { label: "اطّلع على المدونة", href: "#" },
    },
    {
      ordinal: "03",
      title: "الامتثال التنظيمي والمعايير",
      description: "متطلبات محلية وقطاعية، ومعايير دولية، وإدارة الامتثال في المشروعات.",
      action: { label: "استكشف المنهج", href: "#approach" },
    },
  ] satisfies CapabilityCardContent[],
  panel: {
    title: "النزاهة في القرارات. المسؤولية في الممارسة.",
    body: "تبدأ المسؤولية الأخلاقية من القرارات التي تُتخذ بشأن التكنولوجيا قبل تطويرها أو تشغيلها؛ من اختيار المشروعات إلى احترام القيم والمعتقدات، وإتاحة اختيارات مدروسة للعميل ضمن الحدود القانونية والأمنية.",
  } satisfies PanelContent,
};

export const approach = {
  intro: {
    eyebrow: "LOCAL FIRST. GLOBAL PRACTICES.",
    title: "التشريعات المحلية أولًا. وأفضل الممارسات العالمية دائمًا.",
    description:
      "تختلف المتطلبات التنظيمية بحسب الدولة والقطاع وطبيعة البيانات والخدمات، وقد تؤثر في البنية التقنية والاستضافة وصلاحيات الوصول والتكامل والتشغيل والدعم.",
  } satisfies SectionIntro,
  /** Figma order: top row 03 · 04, bottom row 01 · 02 (right → left). */
  axes: [
    {
      ordinal: "03",
      title: "المعايير الدولية",
      description: "مبادئ ISO/IEC 27001، مع التمييز بين تطبيق المبادئ والحصول على الشهادات.",
    },
    {
      ordinal: "04",
      title: "إدارة امتثال المشروعات",
      description: "المتطلبات والمسؤوليات والتوثيق ومراجعة التغييرات.",
    },
    {
      ordinal: "01",
      title: "الامتثال المحلي",
      description: "تحديد المتطلبات المحلية ذات الصلة وآثارها والترتيبات الإضافية اللازمة.",
    },
    {
      ordinal: "02",
      title: "المتطلبات القطاعية",
      description: "ضوابط تتناسب مع القطاع وحساسية العمليات والمعلومات.",
    },
  ] satisfies AxisCardContent[],
};

export const localContext = {
  intro: {
    eyebrow: "RESPONSIBILITY IN CONTEXT",
    title: "مسؤولية مهنية تراعي بيئة العمل المحلية",
    description:
      "نعمل في أسواق متنوعة؛ ونراعي القيم الثقافية والمهنية وطبيعة المشروعات، مع احترام متبادل ومعايير مهنية عادلة.",
  } satisfies SectionIntro,
  image: {
    src: "/images/gulf-team-meeting.jpg",
    alt: "فريق مهني خليجي في اجتماع عمل",
    width: 1024,
    height: 1024,
  } satisfies ImageAsset,
  heading: "وضوح في الأدوار. احترام في التعامل.",
  groups: [
    {
      label: "للعاملين والإدارة",
      body: "الالتزام بالأنظمة والسياسات، وسرية المعلومات وصلاحيات الوصول، والاستخدام المهني للتكنولوجيا والذكاء الاصطناعي.",
    },
    {
      label: "للشركاء والموردين",
      body: "اختيار الشركاء وتأهيلهم، وتحديد الأدوار والمسؤوليات، ومتابعة الأداء وجودة الخدمات.",
    },
  ] satisfies ResponsibilityGroup[],
};

export const roadmap = {
  intro: {
    eyebrow: "OUR FUTURE ROADMAP",
    title: "نطوّر إطار المسؤولية خطوة بخطوة",
    description:
      "الموضوعات التالية ضمن خريطة القسم المستقبلية فقط؛ لا يُعرض لها محتوى مفصّل قبل اعتماده.",
  } satisfies SectionIntro,
  topics: [
    { title: "سيادة البيانات", status: "ضمن الخريطة المستقبلية" },
    { title: "الأمن", status: "ضمن الخريطة المستقبلية" },
    { title: "الذكاء الاصطناعي المسؤول", status: "ضمن الخريطة المستقبلية" },
    { title: "الاستدامة", status: "ضمن الخريطة المستقبلية" },
  ] satisfies RoadmapTopic[],
  featured: {
    title: "مركز ضمان العملاء · Client Assurance Center",
    status: "ضمن خريطة القسم المستقبلية؛ لا يمثل خدمة منشورة أو اعتمادًا حاصلًا.",
  } satisfies RoadmapTopic,
};

export const contact = {
  intro: {
    eyebrow: "LET’S TALK RESPONSIBILITY",
    title: "هل لمشروعك متطلبات تنظيمية خاصة؟",
    description:
      "ناقش معنا طبيعة المشروع والسوق والبيانات والخدمات لتحديد المتطلبات والمسؤوليات التي ينبغي مراعاتها.",
  } satisfies SectionIntro,
  cta: { label: "تواصل معنا", href: `mailto:${siteConfig.email}` },
};
