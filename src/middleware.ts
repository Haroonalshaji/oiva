import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { siteConfig } from "@/data/site";

const preferredHost = new URL(siteConfig.url).hostname;

function redirectToPreferredHost(request: NextRequest): NextResponse | null {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase() ?? "";
  const isApexOrWww = host === "oivah.com" || host === "www.oivah.com";

  if (!isApexOrWww || host === preferredHost) {
    return null;
  }

  const url = request.nextUrl.clone();
  url.hostname = preferredHost;
  url.protocol = "https:";
  url.port = "";
  return NextResponse.redirect(url, 301);
}

export function middleware(request: NextRequest) {
  const hostRedirect = redirectToPreferredHost(request);
  if (hostRedirect) {
    return hostRedirect;
  }

  if (!siteConfig.comingSoon) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/logo") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/icon.svg" ||
    /\.\w+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (pathname !== "/") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
