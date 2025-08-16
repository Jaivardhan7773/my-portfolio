import { NextResponse } from 'next/server';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.png).*)'],
};

export async function middleware(req) {
  const userAgent = req.headers.get('user-agent') || '';

  // List of crawlers/bots Prerender.io cares about
  const bots = [
    /baiduspider/i,
    /facebookexternalhit/i,
    /twitterbot/i,
    /rogerbot/i,
    /linkedinbot/i,
    /embedly/i,
    /quora link preview/i,
    /showyoubot/i,
    /outbrain/i,
    /pinterest/i,
    /slackbot/i,
    /vkShare/i,
    /W3C_Validator/i,
    /redditbot/i,
    /Applebot/i,
    /WhatsApp/i,
    /flipboard/i,
    /tumblr/i,
    /bitlybot/i,
    /SkypeUriPreview/i,
    /nuzzel/i,
    /Discordbot/i,
    /Googlebot/i,
  ];

  // If the request comes from a bot, redirect to Prerender.io
  if (bots.some((bot) => bot.test(userAgent))) {
    const prerenderToken = 'JquA60jYd3Fetai7twqP'; // replace with your token
    const url = `https://service.prerender.io/${req.nextUrl.href}`;

    const prerenderResponse = await fetch(url, {
      headers: {
        'X-Prerender-Token': prerenderToken,
      },
    });

    const body = await prerenderResponse.text();

    return new Response(body, {
      status: prerenderResponse.status,
      headers: { 'Content-Type': 'text/html' },
    });
  }

  return NextResponse.next();
}
