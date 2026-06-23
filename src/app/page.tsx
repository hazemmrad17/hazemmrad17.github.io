import I18nPage from "@/components/I18nPage";
import { HOME_FOUC } from "@/lib/fouc-styles";
import { homeContent } from "@/translations/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hazem Mrad | Multi-Disciplinary AI Engineer · Designer · Developer",
};

export default function Page() {
  return (
    <I18nPage
      en={homeContent.en}
      fr={homeContent.fr}
      pageId="6966d53e7b70efaabd0a6539"
      bodyClass="body"
      foucStyle={HOME_FOUC}
      scripts={["/js/page-specific/index-custom.js"]}
    />
  );
}
