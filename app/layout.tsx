import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
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
      <title>Shea Belsky</title>
    </head>
    <body>
      <Providers>{props.children}</Providers>
      <Analytics />
    </body>
  </html>
);

export default IndexLayout;
