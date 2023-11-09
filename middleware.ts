import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

const allowedOrigins = [
    'http://localhost:3000', 
    'https://example-1.com', 
    'https://example-2.com', 
    // ...
    'https://example-99.com', 
];

export default withAuth(
    function middleware(req) {
        // retrieve the current response
        const res = NextResponse.next()

        // retrieve the HTTP "Origin" header 
        // from the incoming request
        req.headers.get("origin")

        // if the origin is an allowed one,
        // add it to the 'Access-Control-Allow-Origin' header
        if (allowedOrigins.includes(origin)) {
        res.headers.append('Access-Control-Allow-Origin', origin);
        }

        // add the remaining CORS headers to the response
        res.headers.append('Access-Control-Allow-Credentials', "true")
        res.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
        res.headers.append(
            'Access-Control-Allow-Headers',
            'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
        )

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