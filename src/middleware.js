import { NextResponse } from "next/server";

export function middleware(request) {
  const adminToken = request.cookies.get("adminToken")?.value;
  console.log("AuthToken:", adminToken);
  console.log("middleware run");

  const { pathname } = request.nextUrl;

  const validPaths = [
    "/",
    "/auth",
    "/auth/login",
    "/DashboardContent",
    "/categoriesList",
    "/faqs",
    "/meet",
    "/profile",
    "/Reports&Logs",
    "/Trainer",
    "/usersList",
    "/Assessment",
  ];

  const isValidPath = validPaths.some(
    (validPath) =>
      pathname === validPath || pathname.startsWith(`${validPath}/`)
  );

  if (!isValidPath) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const isAuthPath = pathname.startsWith("/auth/login") || pathname === "/";

  if (isAuthPath) {
    if (adminToken) {
      return NextResponse.redirect(new URL("/DashboardContent", request.url));
    }
  } else {
    if (!adminToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/DashboardContent/:path*",
    "/",
    "/auth/:path*",
    "/auth/login/:path*",
    "/categoriesList/:path*",
    "/faqs/:path*",
    "/meet/:path*",
    "/profile/:path*",
    "/Reports&Logs/:path*",
    "/Trainer/:path*",
    "/usersList/:path*",
    "/Assessment/:path*",
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

// import { NextResponse } from "next/server";

// export function middleware(request) {
//   const authToken = request.cookies.get("token")?.value;
//   console.log("AuthToken:", authToken);
//   console.log("middleware run");

//   const { pathname } = request.nextUrl;

//   const isAuthPath = pathname.startsWith("/auth/login") || pathname === "/";

//   if (isAuthPath) {
//     if (authToken) {
//       return NextResponse.redirect(new URL("/DshboardContent", request.url));
//     }
//   } else {
//     if (!authToken) {
//       return NextResponse.redirect(new URL("/", request.url));
//     }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     "/DashboardContent/:path*",
//     "/",
//     "/auth/:path*",
//     "/auth/login/:path*",
//     "/categoriesList/:path*",
//     "/faqs/:path*",
//     "/meet/:path*",
//     "/profile/:path*",
//     "/Reports&Logs/:path*",
//     "/Trainer/:path*",
//     "/usersList/:path*",
//     "/Assessment/:path*",
//   ],
// };
