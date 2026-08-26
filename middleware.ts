import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const supportedLocales = ["pl", "en"];
const defaultLocale = "pl";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignoruj pliki statyczne, favicon, roboty itp.
  if (
    pathname.startsWith("/_next") ||
    pathname.includes(".") ||
    pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  const pathnameIsMissingLocale = supportedLocales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
