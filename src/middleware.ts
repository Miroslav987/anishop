
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const user:RequestCookie  | undefined = req.cookies.get('email'); 
  const admin:RequestCookie  | undefined = req.cookies.get('admin_access'); 
  const dealer:RequestCookie  | undefined = req.cookies.get('dealer_access'); 

 

  if (!user && req.nextUrl.pathname.startsWith('/profile')) {
    return NextResponse.redirect(new URL('/', req.url));
  }

console.log(admin);
console.log(dealer);

  if (admin?.value !== "true" && req.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/', req.url)); 
  }

  if (dealer?.value !== "true" && admin?.value !== "true" && req.nextUrl.pathname.startsWith('/dealer')) {
    return NextResponse.redirect(new URL('/', req.url)); 
  }

  return NextResponse.next(); 
}

export const config = {
  matcher: ['/admin/:path*', '/profile/:path*','/dealer/:path'],

}