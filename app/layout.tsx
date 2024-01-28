import type { ReactNode } from "react";
import { GA_TRACKING_ID } from "../lib/gtag";
import Providers from "./providers";

interface Props {
  children: ReactNode;
}

const IndexLayout = (props: Props) => (
  <html lang="en" suppressHydrationWarning>
    <head>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta
        name="keywords"
        content="Belsky, Shea, Shea Belsky, Shea Hunter Belsky, Shea H Belsky, shea belsky, shbelsky, sbelsky, sheabelsky, SHEA BELSKY, Mentra, AxisAbility"
      />
      <meta property="og:title" content="Shea Belsky" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.sheabelsky.com/" />
      <meta
        property="og:image"
        content="https://www.sheabelsky.com/_next/image?url=%2Fshea_headshot.jpg&w=640&q=75"
      />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="orange" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });`
        }}
      />
      <title>Shea Belsky</title>
    </head>
    <body>
      <Providers>{props.children}</Providers>
    </body>
  </html>
);

export default IndexLayout;
