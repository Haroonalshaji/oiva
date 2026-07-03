import type { JournalPost } from "@/types";

export const posts: JournalPost[] = [
  {
    slug: "the-case-for-fewer-better-things",
    title: "The case for fewer, better things",
    excerpt: "Why a considered wardrobe begins with subtraction, not accumulation.",
    category: "Philosophy",
    date: "2026-03-12",
    author: "Elena Voss",
    pullQuote: "Restraint is not deprivation — it is the space in which quality becomes visible.",
    content: [
      "There is a particular kind of clarity that arrives when you stop buying and start choosing. Not choosing between options on a screen, but choosing what earns its place in your daily life — what you reach for without thinking, what feels right against your skin at seven in the morning.",
      "At the OIVA, we design for that moment of recognition. Each piece is intended to work in relation to a small, well-considered wardrobe — not as a standalone statement, but as part of a quiet conversation between garments you already trust.",
      "This is not minimalism as aesthetic. It is minimalism as intention: fewer seams, fewer closures, fewer decisions between you and the day ahead.",
      "We believe the most luxurious thing a garment can offer is the absence of noise — visual, tactile, or otherwise. When everything in your wardrobe speaks at the same volume, nothing needs to shout.",
    ],
  },
  {
    slug: "inside-our-atelier",
    title: "Inside our atelier: how a single seam disappears",
    excerpt: "A look at the construction technique behind our signature drape.",
    category: "Craft",
    date: "2026-02-28",
    author: "Amélie Laurent",
    pullQuote: "The best construction is the kind you never notice — until you try to find it.",
    content: [
      "In our atelier in the 11th arrondissement, there is a wall of thread spools arranged by shade — not by colour family, but by the warmth of each tone against skin. This is where every garment begins: not with a sketch, but with a material conversation.",
      "Our silk drape blouse is constructed from a single pattern piece where possible. The side seam is placed off-centre and pressed open by hand, then encased so it reads as a fold rather than a join. It takes forty minutes longer per garment. The result is a line that moves as one continuous surface.",
      "We use a combination of French seams and flat-felled techniques depending on the fabric weight. Each decision is made at the table, not on a spec sheet. This is slow work, and we have no interest in speeding it up.",
      "When you run your hand along the side of the blouse, you should feel nothing — only the silk, falling.",
    ],
  },
  {
    slug: "a-season-without-noise",
    title: "A season without noise",
    excerpt: "On dressing for autumn without the visual clutter of trend.",
    category: "Style",
    date: "2026-01-15",
    author: "Elena Voss",
    pullQuote: "Autumn asks for depth, not decoration.",
    content: [
      "Every season brings its catalogue of must-haves — the boot shape, the coat length, the colour that will define the year. We have always found this exhausting.",
      "Our autumn edit is built on the same principle as every other collection: pieces that existed before the season and will exist after it. A wool coat in a weight that works from October through March. A knit in a gauge that layers without bulk. A trouser with a crease that holds.",
      "The palette shifts slightly — deeper cocoa, warmer champagne, a blush that reads as\nevening light — but the architecture remains. This is how we think about seasonal dressing: not as reinvention, but as refinement.",
      "We invite you to build your autumn wardrobe the same way we build ours: one considered piece at a time, with no urgency and no expiration date.",
    ],
  },
  {
    slug: "on-fabric-and-feeling",
    title: "On fabric and feeling",
    excerpt: "Why we source materials by hand before we design a single silhouette.",
    category: "Materials",
    date: "2025-12-03",
    author: "Sofia Lindberg",
    content: [
      "Before we draw a line, we touch cloth. Sofia, our materials director, travels twice a year to mills in Biella, Como, and the Scottish Borders — not to tour facilities, but to sit with swatches and ask a single question: how does this feel after an hour of wear?",
      "We reject anything that looks beautiful under studio lights but loses its character in daylight. We reject synthetics that mimic natural fibres without earning the comparison. We reject fabrics that require chemical finishing to achieve what good raw material achieves on its own.",
      "Our washed silk crepe, for instance, is enzyme-treated at the mill using a process that takes three days longer than standard washing. The hand is softer, the drape more fluid, and the colour more even — because the treatment works with the fibre rather than against it.",
      "Material selection is not a procurement step in our process. It is the process.",
    ],
  },
  {
    slug: "the-meaning-of-the",
    title: "The meaning of \"the\"",
    excerpt: "Why we chose a definite article as our name — and what it signals.",
    category: "Brand",
    date: "2025-11-18",
    author: "Elena Voss",
    pullQuote: "We are not a brand among brands. We are the one you reach for when everything else feels like too much.",
    content: [
      "When we chose the name, we knew it would require explanation. A definite article is unusual in fashion — most houses name themselves after a person, a place, or an abstract concept. We chose \"the\" deliberately.",
      "It signals singularity. Not exclusivity in the sense of gatekeeping, but in the sense of focus: one point of view, one standard of making, one conversation about what contemporary womenswear can be when it stops trying to be everything at once.",
      "The lowercase treatment is intentional too. We are not shouting our name. We are offering it — quietly, confidently — as a suggestion rather than a declaration.",
      "the OIVA is a promise: that what you find here has been considered at every stage, from fibre to final press, and that it will continue to be considered long after the season has passed.",
    ],
  },
  {
    slug: "quiet-living-starts-in-the-closet",
    title: "Quiet living starts in the closet",
    excerpt: "How the clothes we keep shape the rooms we inhabit.",
    category: "Living",
    date: "2025-10-07",
    author: "Elena Voss",
    content: [
      "There is a relationship between what hangs in your closet and how you move through your home. Clutter in one tends to echo in the other — not literally, but in the quality of attention you bring to each space.",
      "We think of a wardrobe as a room you carry with you. It should feel calm when you open it. Every piece should have a reason to be there, and every reason should connect to how you actually live — not how you imagine you might.",
      "This is why we design garments that fold neatly, store without fuss, and look considered whether they are freshly pressed or worn through a long afternoon. We want the OIVA piece in your closet to be the one that makes the rest feel manageable.",
      "Quiet living is not about having less. It is about having what matters — and knowing the difference.",
    ],
  },
];

export function getPost(slug: string): JournalPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): JournalPost[] {
  const current = getPost(slug);
  if (!current) return posts.slice(0, limit);
  return posts.filter((p) => p.slug !== slug && p.category === current.category).slice(0, limit);
}
