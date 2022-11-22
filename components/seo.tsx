import { NextSeo, type NextSeoProps } from "next-seo";
import { NEXT_SEO_DEFAULT } from "../next-seo.config";

interface Props {
  description: string;
  title: string;
  url: string;
}

export function getNextSEOProps({
  description,
  title,
  url
}: Props): NextSeoProps {
  return {
    ...NEXT_SEO_DEFAULT,
    description,
    openGraph: {
      description,
      url
    },
    themeColor: "#D43900",
    title,
    titleTemplate: "%s",
    useAppDir: true
  };
}

export const SheaBelskyNextSEO = (props: Props) => {
  return <NextSeo {...getNextSEOProps(props)} />;
};
