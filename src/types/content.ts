export type LinkItem = {
  label: string;
  href: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/** Eyebrow + H2 + description block shared by the page sections. */
export type SectionIntro = {
  /** English eyebrow label, rendered as an isolated LTR run. */
  eyebrow: string;
  title: string;
  description: string;
};

export type HeroContent = {
  eyebrow: string;
  titleLines: readonly string[];
  subtitleLines: readonly string[];
  description: string;
  cta: LinkItem;
};

export type CapabilityCardContent = {
  ordinal: string;
  title: string;
  description: string;
  action: LinkItem;
};

export type PanelContent = {
  title: string;
  body: string;
};

export type AxisCardContent = {
  ordinal: string;
  title: string;
  description: string;
};

export type ResponsibilityGroup = {
  label: string;
  body: string;
};

export type RoadmapTopic = {
  title: string;
  status: string;
};

export type FooterGroup = {
  title: string;
  items: readonly FooterItem[];
};

/** A footer entry is a link when it has an href, plain text otherwise. */
export type FooterItem = {
  label: string;
  href?: string;
  /** Set for Latin-only strings such as the e-mail address. */
  lang?: "en";
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};
