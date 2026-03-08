import { auth } from "@/auth"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export default auth((req: NextRequest & { auth: any }) => {
    const isLoggedIn = !!req.auth
    const isAuthPage = req.nextUrl.pathname.startsWith("/login") || req.nextUrl.pathname.startsWith("/register")
    const isProtectedRoute = req.nextUrl.pathname.startsWith("/dashboard") ||
        req.nextUrl.pathname.startsWith("/students") ||
        req.nextUrl.pathname.startsWith("/fees") ||
        req.nextUrl.pathname.startsWith("/attendance") ||
        req.nextUrl.pathname.startsWith("/reports") ||
        req.nextUrl.pathname.startsWith("/settings") ||
        req.nextUrl.pathname.startsWith("/communication")

    if (isProtectedRoute && !isLoggedIn) {
        return NextResponse.redirect(new URL("/login", req.url))
    }

    if (isAuthPage && isLoggedIn) {
        return NextResponse.redirect(new URL("/dashboard", req.url))
    }

    return NextResponse.next()
})

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
