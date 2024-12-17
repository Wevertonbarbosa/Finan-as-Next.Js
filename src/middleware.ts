import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';


export const TOKEN_KEY = 'token';

export async function middleware(request: NextRequest) {
    const cookie = await cookies();
    const token = cookie.get(TOKEN_KEY);

    const protectedRoutes = ['/welcome', '/dashboard'];
    const isProtectedRoute = protectedRoutes.includes(request.nextUrl.pathname);

    if (isProtectedRoute && !token) {
        const url = new URL('/', request.url);
        url.searchParams.set('unanthorized', 'true');
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}
