import I18nPage from "@/components/I18nPage";
import { WORK_FOUC } from "@/lib/fouc-styles";
import { workContent } from "@/translations/work";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work - Hazem Mrad | Multi-Disciplinary AI Engineer · Designer · Developer",
};

export default function Page() {
  return (
    <I18nPage
      en={workContent.en}
      fr={workContent.fr}
      pageId="696eed615f5a313a402b81ee"
      bodyClass="body work"
      foucStyle={WORK_FOUC}
      scripts={["/js/page-specific/work-custom.js"]}
    />
  );
}
