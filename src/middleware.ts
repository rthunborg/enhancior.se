import { NextResponse, type NextRequest } from "next/server";
import { MAINTENANCE_MODE } from "@/config/maintenance";
import { getMaintenanceApiPolicy } from "@/lib/maintenance-api-policy";

export function middleware(request: NextRequest) {
  if (!MAINTENANCE_MODE) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  if (pathname === "/maintenance") {
    return NextResponse.next();
  }

  if (pathname === "/sitemap.xml" || pathname === "/robots.txt") {
    return NextResponse.next();
  }

  if (pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  if (
    pathname === "/favicon.ico" ||
    pathname.match(
      /\.(?:ico|png|jpg|jpeg|svg|gif|webp|txt|xml|pdf|woff2?|ttf|eot)$/i,
    )
  ) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/api/")) {
    const policy = getMaintenanceApiPolicy(pathname);

    return NextResponse.json(policy.body, {
      status: policy.status,
      headers: policy.headers,
    });
  }

  return NextResponse.redirect(new URL("/maintenance", request.url), 307);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
