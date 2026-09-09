const MIN_SUBMIT_MS = 3000;
const MAX_REQUESTS_PER_WINDOW = 4;
const WINDOW_MS = 10 * 60 * 1000;

const hits = new Map<string, number[]>();

function vowelRatio(value: string): number {
  const letters = value.replace(/[^a-z]/gi, "");
  if (!letters.length) return 0;
  return (letters.match(/[aeiou]/gi) ?? []).length / letters.length;
}

function isGibberish(value: string): boolean {
  const compact = value.replace(/\s+/g, "");
  if (compact.length < 10) return false;
  const words = value.trim().split(/\s+/);
  const noSpaces = words.length === 1;
  const mixedCase = /[a-z]/.test(compact) && /[A-Z]/.test(compact);
  const lowVowels = vowelRatio(compact) < 0.18;
  return noSpaces && (mixedCase || lowVowels);
}

export function isSpamSubmission(input: {
  name: string;
  email: string;
  message: string;
  honeypot: string;
  startedAt: number;
}): boolean {
  if (input.honeypot) return true;

  const elapsed = Date.now() - input.startedAt;
  if (!Number.isFinite(input.startedAt) || elapsed < MIN_SUBMIT_MS || elapsed > 1000 * 60 * 60 * 6) {
    return true;
  }

  if (isGibberish(input.name) || isGibberish(input.message)) return true;

  const localPart = input.email.split("@")[0] ?? "";
  if ((localPart.match(/\./g) ?? []).length >= 4) return true;

  return false;
}

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") ?? "unknown";
}
