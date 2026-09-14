export interface LegalSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface LegalDoc {
  slug: string;
  title: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export const legalLastUpdated = "15 September 2026";

export const legalDocs = {
  privacy: {
    slug: "privacy",
    title: "Privacy Policy",
    intro: "How we collect, use, and look after your information when you visit OIVAH or place an order.",
    lastUpdated: legalLastUpdated,
    sections: [
      {
        title: "Who we are",
        paragraphs: [
          "OIVAH (“we”, “us”, “our”) is a quiet-luxury online ladies store and atelier in Cherpulassery, Palakkad, Kerala, India. We sell contemporary womenswear and take orders through this website, WhatsApp, email, and telephone.",
          "This policy explains what personal information we collect, why we need it, and the choices you have. It applies to oivah.com and to orders or enquiries you send us.",
        ],
      },
      {
        title: "Information we collect",
        paragraphs: [
          "We only collect what we need to answer you and to complete an order.",
        ],
        bullets: [
          "Identity and contact: name, email address, phone number, and WhatsApp number.",
          "Order details: products, sizes, delivery address, and messages you send about an order.",
          "Enquiry details: information you submit through the contact form, including topic and message.",
          "Technical data: IP address used to prevent spam on the contact form, plus standard server logs from our host.",
        ],
      },
      {
        title: "How we use your information",
        paragraphs: ["We use your information to:"],
        bullets: [
          "Confirm, fulfil, and support orders placed via WhatsApp or other channels you choose.",
          "Reply to enquiries sent through the website, email, phone, or WhatsApp.",
          "Send shipping updates and handle returns, exchanges, or damage claims.",
          "Protect the site from spam and abuse.",
          "Send occasional notes on craft and style only if you ask to join the newsletter.",
        ],
      },
      {
        title: "WhatsApp, email, and other processors",
        paragraphs: [
          "Orders usually start in WhatsApp. Meta Platforms provides WhatsApp. Messages you send there are also subject to WhatsApp’s own terms and privacy policy.",
          "Contact-form messages are emailed to our studio using our email provider. The site is hosted by our web host. These parties process data only to provide their service to us.",
          "We do not sell your personal information. We do not share it for advertising.",
        ],
      },
      {
        title: "Legal basis",
        paragraphs: [
          "We process personal data to perform a contract with you (an order), to take steps at your request before that contract, to meet legal duties (for example tax records), and for our legitimate interest in running a secure store and answering enquiries. Where the law requires consent — for example optional marketing email — we will ask before we send it.",
        ],
      },
      {
        title: "How long we keep it",
        paragraphs: [
          "Order and enquiry records are kept for as long as needed to fulfil the order, handle after-sales questions, and meet bookkeeping or legal requirements. Spam-prevention logs are kept only briefly. You may ask us to delete information that we are not required to retain.",
        ],
      },
      {
        title: "Your rights",
        paragraphs: [
          "Subject to Indian law, including the Digital Personal Data Protection Act, 2023, you may ask us to access, correct, or erase your personal data, or to withdraw consent for optional communications. To do so, email us or write via WhatsApp using the details at the bottom of this page.",
        ],
      },
      {
        title: "Security and children",
        paragraphs: [
          "We take reasonable technical and organisational steps to protect personal information. No method of transmission over the internet is completely secure.",
          "OIVAH is not directed at children under 18. We do not knowingly collect their personal data.",
        ],
      },
      {
        title: "Changes",
        paragraphs: [
          "We may update this policy from time to time. The “Last updated” date at the top of the page will change when we do. Continued use of the site after an update means you accept the revised policy.",
        ],
      },
    ],
  },
  cookies: {
    slug: "cookies",
    title: "Cookie Policy",
    intro: "What cookies are, which ones oivah.com uses, and how you can control them.",
    lastUpdated: legalLastUpdated,
    sections: [
      {
        title: "What cookies are",
        paragraphs: [
          "Cookies are small text files stored on your device when you visit a website. They help the site work, remember preferences, or — on some sites — measure traffic or show ads.",
        ],
      },
      {
        title: "Cookies we use",
        paragraphs: [
          "OIVAH uses cookies that are strictly necessary to operate the website — for example to load pages securely and to keep the site stable. These essential cookies do not require consent under typical browser and Indian e-commerce practice.",
        ],
        bullets: [
          "Essential / functional cookies set by our site and hosting platform so pages load and forms can be submitted.",
          "Contact-form anti-spam checks may use your IP address on our server. That is not a marketing cookie.",
        ],
      },
      {
        title: "Cookies we do not use",
        paragraphs: [
          "We do not currently use advertising cookies, social-media tracking pixels, or third-party analytics cookies on oivah.com. The newsletter field in the footer does not set a tracking cookie; it only records what you type in your browser until you submit.",
        ],
      },
      {
        title: "How you can control cookies",
        paragraphs: [
          "You can block or delete cookies in your browser settings. If you block essential cookies, parts of the site may not work. Help for common browsers is available in each browser’s settings or support pages.",
        ],
      },
      {
        title: "Updates",
        paragraphs: [
          "If we later add analytics or other optional cookies, we will update this policy and, where required, ask for your consent before those cookies run.",
        ],
      },
    ],
  },
  terms: {
    slug: "terms",
    title: "Terms & Conditions",
    intro: "The terms that apply when you browse oivah.com or order from OIVAH.",
    lastUpdated: legalLastUpdated,
    sections: [
      {
        title: "Agreement",
        paragraphs: [
          "By using this website, contacting us, or placing an order, you agree to these terms, our Privacy Policy, Cookie Policy, Shipping Policy, and Return & Exchange Policy. If you do not agree, please do not use the site or place an order.",
        ],
      },
      {
        title: "Who you are contracting with",
        paragraphs: [
          "Orders are placed with OIVAH, an online ladies store and atelier in Cherpulassery, Palakkad, Kerala, India. Product pages are an invitation to order, not a binding offer until we confirm the order with you.",
        ],
      },
      {
        title: "How to order",
        paragraphs: [
          "OIVAH does not take payment through an automated checkout on this website. You select a garment and size, then continue via WhatsApp (or email or phone). We confirm availability, size, shipping, and the amount payable before the order is accepted.",
          "A contract is formed when we confirm your order in writing on WhatsApp, email, or another channel we both use. We may refuse or cancel an order if an item is unavailable, if information is incomplete, or if we reasonably suspect misuse.",
        ],
      },
      {
        title: "Products, prices, and payment",
        paragraphs: [
          "We describe garments as accurately as we can. Fabric, print placement, and colour can vary slightly from photographs and from piece to piece. That is the nature of the materials we use.",
          "Prices are in Indian Rupees (INR) and are shown on the product page. Shipping charges, if any, are confirmed before you pay. Payment instructions are given when we confirm the order. Until payment is received as agreed, we may hold dispatch.",
        ],
      },
      {
        title: "Eligibility",
        paragraphs: [
          "You must be 18 years or older, or have a parent or guardian place the order, to buy from OIVAH. You confirm that the information you give us is accurate.",
        ],
      },
      {
        title: "Intellectual property",
        paragraphs: [
          "All content on this site — including text, photographs, logos, and design — belongs to OIVAH or our licensors. You may not copy, scrape, or use it for commercial purposes without our written permission.",
        ],
      },
      {
        title: "Your use of the site",
        paragraphs: [
          "You agree not to misuse the contact form, attempt to disrupt the site, or submit false or unlawful content. We may ignore or block submissions that appear to be spam.",
        ],
      },
      {
        title: "Liability",
        paragraphs: [
          "We take care with garments and with dispatch. We are not liable for delays or failure caused by events outside our reasonable control, including courier disruption. Nothing in these terms limits liability that cannot be limited under Indian law, including liability for death or personal injury caused by our negligence, or for fraud.",
          "To the extent permitted by law, our total liability for an order is limited to the amount you paid for that order.",
        ],
      },
      {
        title: "Governing law",
        paragraphs: [
          "These terms are governed by the laws of India. Courts at Palakkad, Kerala, shall have exclusive jurisdiction, without affecting any rights you have as a consumer under applicable Indian consumer-protection law.",
        ],
      },
      {
        title: "Changes",
        paragraphs: [
          "We may update these terms from time to time. The updated terms apply to new orders placed after the “Last updated” date. Please read them before you confirm an order.",
        ],
      },
    ],
  },
  shipping: {
    slug: "shipping",
    title: "Shipping Policy",
    intro: "How OIVAH delivers orders across India after your order is confirmed.",
    lastUpdated: legalLastUpdated,
    sections: [
      {
        title: "Where we ship",
        paragraphs: [
          "We ship across India. International orders may be accepted at our discretion; they are not eligible for return or exchange under our Return & Exchange Policy.",
        ],
      },
      {
        title: "When dispatch happens",
        paragraphs: [
          "Dispatch begins only after we confirm the order on WhatsApp, email, or phone — including size, address, shipping charge, and payment as agreed. We will share an estimated dispatch and delivery window at confirmation. That window is an estimate, not a guarantee.",
        ],
      },
      {
        title: "Charges",
        paragraphs: [
          "Shipping charges depend on destination, parcel weight, and the courier available for your pin code. Any charge is told to you before you pay. There is no hidden fee after confirmation.",
        ],
      },
      {
        title: "Your address",
        paragraphs: [
          "Please give a complete, accurate delivery address and a reachable phone number. We are not responsible for delay, return-to-sender, or loss caused by an incomplete or incorrect address. Extra courier fees for a re-attempt or re-dispatch, where they apply, are payable by you.",
        ],
      },
      {
        title: "Delays and risk in transit",
        paragraphs: [
          "Couriers may be delayed by weather, strikes, peak season, or local restrictions. We will update you if we learn of a delay.",
          "If a parcel arrives damaged, keep the packaging and contact us within 24 hours of delivery with the unboxing video required under our Return & Exchange Policy. We will then arrange a replacement or credit note as set out there.",
        ],
      },
      {
        title: "Questions",
        paragraphs: [
          "For an update on an existing order, message us on WhatsApp or email with your name and order details. We are glad to help.",
        ],
      },
    ],
  },
} as const satisfies Record<string, LegalDoc>;
