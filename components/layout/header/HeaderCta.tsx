import Link from "next/link";
import { headerCta } from "@/content/header";
import { siteConfig } from "@/config/site.config";
import { t } from "@/lib/i18n";

export default function HeaderCta() {
  if (!siteConfig.features.headerCta) return null;

  return (
    <Link
      href={headerCta.href}
      className="hidden rounded-lg bg-white/90 px-5 py-2 text-sm font-semibold text-black
                 transition hover:bg-white lg:inline-flex"
    >
      {t(headerCta.label, siteConfig.locale)}
    </Link>
  );
}