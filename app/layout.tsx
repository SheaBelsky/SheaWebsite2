import type { ReactNode } from "react";
import { GA_TRACKING_ID } from "../lib/gtag";
import Providers from "./providers";

interface Props {
  children: ReactNode;
}

const IndexLayout = (props: Props) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="Belsky, Shea, Shea Belsky, Shea Hunter Belsky, Shea H Belsky, shea belsky, shbelsky, sbelsky, sheabelsky, SHEA BELSKY, Mentra, AxisAbility"
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
      </head>
      <body>
        <Providers>{props.children}</Providers>
      </body>
    </html>
  );
};

export default IndexLayout;
