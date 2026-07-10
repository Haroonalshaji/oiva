import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { siteConfig } from "@/data/site";

export function middleware(request: NextRequest) {
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
