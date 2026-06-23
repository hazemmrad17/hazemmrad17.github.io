import I18nPage from "@/components/I18nPage";
import { ABOUT_FOUC } from "@/lib/fouc-styles";
import { aboutContent } from "@/translations/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Hazem Mrad | Multi-Disciplinary AI Engineer · Designer · Developer",
};

export default function Page() {
  return (
    <I18nPage
      en={aboutContent.en}
      fr={aboutContent.fr}
      pageId="696eed5367a3d93663a17526"
      bodyClass="body"
      foucStyle={ABOUT_FOUC}
      scripts={["/js/page-specific/about-custom.js"]}
    />
  );
}
