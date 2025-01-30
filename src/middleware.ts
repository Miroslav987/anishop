// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const token = req.cookies.get('userUID')
    console.log( `token:${token?.value}`);  // Для отладки

  // Если токен отсутствует, перенаправляем на страницу логина
  if (!token) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Если токен есть, продолжаем выполнение
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'], // Применяется только к маршрутам /admin*
};

