export { auth as middleware } from './auth';

// import type { NextRequest } from 'next/server'
 
// export function middleware(request: NextRequest) {
//   const session = request.cookies.get('session')?.value;
//   const currentUser = request.cookies.get('currentUser')?.value

//   console.log(currentUser, session);
 
//   if (currentUser && !request.nextUrl.pathname.startsWith('/dashboard')) {
//     return Response.redirect(new URL('/dashboard', request.url))
//   }
 
//   if (!currentUser && !request.nextUrl.pathname.startsWith('/login')) {
//     return Response.redirect(new URL('/login', request.url))
//   }
// }
 
// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// }