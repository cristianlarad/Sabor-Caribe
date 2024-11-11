// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import PocketBase from "pocketbase";

export async function middleware(request: NextRequest) {
  const pb = new PocketBase("http://127.0.0.1:8090");
  pb.authStore.loadFromCookie(request.cookies.get("pb_auth")?.value || "");

  if (!pb.authStore.isValid) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/home", "/menu", "/reservar", "/informacion"], // Rutas protegidas
};
