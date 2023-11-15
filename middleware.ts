import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
    function middleware(req) {
        // retrieve the current response
        const res = NextResponse.next()

        if(req.nextUrl.pathname.startsWith("/admin") && req.nextauth.token?.admin === false) {
            return NextResponse.rewrite(new URL("/", req.url))
        }

        return res
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token, 
        }
    }
)

export const config = {
    matcher: [
        "/usuario/:path*",
        "/api/user/[id]/:path*",
        "/admin/:path*",
        '/comprar/:path*'
    ]
}