import { NextResponse, type NextRequest } from "next/server";

import { authConfig } from "@/config/auth.config";
import { rolesConfig } from "@/config/roles.config";
import {
  isAuthRoute,
  isProtectedRoute,
} from "@/shared/auth/middleware-helpers/route-matcher";
import type { ActorType } from "@/types/domain/actor.types";

function getActorTypeFromRequest(request: NextRequest): ActorType | null {
  const actorType = request.cookies.get(authConfig.cookieKeys.actorType)?.value;
  if (actorType === "admin") {
    return actorType;
  }
  return null;
}

function hasAccessToken(request: NextRequest): boolean {
  return Boolean(request.cookies.get(authConfig.cookieKeys.accessToken)?.value);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuthenticated = hasAccessToken(request);
  const actorType = getActorTypeFromRequest(request);

  if (isAuthRoute(pathname) && isAuthenticated && actorType === "admin") {
    return NextResponse.redirect(
      new URL(rolesConfig.admin.defaultRoute, request.url),
    );
  }

  if (!isProtectedRoute(pathname)) {
    return NextResponse.next();
  }

  if (!isAuthenticated || actorType !== "admin") {
    return NextResponse.redirect(
      new URL(rolesConfig.admin.loginRoute, request.url),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
