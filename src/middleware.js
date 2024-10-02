import { clerkMiddleware } from '@clerk/nextjs'

export default clerkMiddleware({
  publicRoutes: ['/', '/auth(.*)', '/portal(.*)', '/images(.*)'],
  ignoredRoutes: ['/chatbot'],
})

export const config = {
  matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}