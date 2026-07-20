export const site = {
  name: "Doctor's Dialogue",
  tagline: "Conversations That Heal",
  motto: "Your Knowledge. Your Voice. Your Impact.",
  description:
    "Doctor's Dialogue is a premium healthcare podcast and communication platform where doctors share trusted knowledge, awareness-led insights, and meaningful conversations with the public.",
  url: "https://doctorsdialogue.com",
  email: "connect@doctorsdialogue.com",
  phone: "+91 73402 66551",
  phoneHref: "tel:+917340266551",
  whatsappHref: "https://wa.me/917340266551",
  address: {
    company: "AZCURE TELEHEALTH PVT LTD",
    line1: "Office No. 4, 4th Floor, City Vista Tower B",
    line2: "Kharadi, Pune, India, 411014",
  },
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=City+Vista+Tower+B+Kharadi+Pune+411014",
  youtube: "https://youtube.com/@doctorsdialogue1?si=O4sduv_S7mUQ0x2p",
  youtubeVideos: "https://youtube.com/@doctorsdialogue1/videos",
  facebook: "https://www.facebook.com/share/1HUfNR5DJ5/",
  linkedin: "https://www.linkedin.com/company/doctor-s-dialouge/",
  instagram:
    "https://www.instagram.com/doctorsdialogue.in?utm_source=qr&igsh=MXA2dW5ueHU5OW81cg==",
  twitter: "https://x.com/DoctorsDialogue",
} as const;

export const socialLinks = [
  { label: "YouTube", href: site.youtube, icon: "youtube" },
  { label: "Instagram", href: site.instagram, icon: "instagram" },
  { label: "Facebook", href: site.facebook, icon: "facebook" },
  { label: "LinkedIn", href: site.linkedin, icon: "linkedin" },
  { label: "X", href: site.twitter, icon: "twitter" },
] as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export type InterestType = {
  value: string;
  label: string;
};

export const interestTypes: InterestType[] = [
  { value: "podcast", label: "Podcast Conversation" },
  { value: "solo-talk", label: "Solo Doctor Feature" },
  { value: "live-session", label: "Daily 5-Minute Live Session" },
  { value: "studio-session", label: "Studio / Virtual Session" },
  { value: "magazine", label: "Magazine Feature" },
  { value: "collaboration", label: "Brand Collaboration" },
  { value: "general-feature", label: "General Feature Enquiry" },
];

export const formats = [
  {
    title: "Podcast Conversations",
    description:
      "In-depth conversations on your specialty, experiences and important health topics.",
    href: "/contact?type=podcast",
  },
  {
    title: "Solo Doctor Feature",
    description:
      "Share your thoughts, awareness message or medical guidance in a focused solo talk.",
    href: "/contact?type=solo-talk",
  },
  {
    title: "Daily 5-Minute Live Session",
    description:
      "Short, impactful health discussions with real audience engagement.",
    href: "/contact?type=live-session",
  },
  {
    title: "Studio / Video Call Sessions",
    description:
      "Flexible in-studio or virtual conversations produced in a polished visual format.",
    href: "/contact?type=studio-session",
  },
  {
    title: "Monthly Magazine Feature",
    description:
      "Get featured in our healthcare magazine — digital and physical print editions.",
    href: "/contact?type=magazine",
  },
] as const;
