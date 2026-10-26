import Image from "next/image";
import Link from "next/link";
import { company } from "@/content/company";

type Props = { scrolled: boolean };

export default function HeaderLogo({ scrolled }: Props) {
  const { logo, logoMobile } = company;

  const mobileSize = `w-auto transition-all duration-300 ${scrolled ? "h-8" : "h-10"}`;
  const mainSize = `w-auto transition-all duration-300 ${scrolled ? "h-8" : "h-12"}`;

  return (
    <Link href="/" aria-label={company.name} className="justify-self-start">
      {/* Мобільний логотип (до md) */}
      <span className="md:hidden">
        <Image
          src={logoMobile.light}
          alt={logoMobile.alt}
          width={logoMobile.width}
          height={logoMobile.height}
          className={`block dark:hidden ${mobileSize}`}
        />
        <Image
          src={logoMobile.dark}
          alt={logoMobile.alt}
          width={logoMobile.width}
          height={logoMobile.height}
          className={`hidden dark:block ${mobileSize}`}
        />
      </span>

      {/* Основний логотип (від md) */}
      <span className="hidden md:block">
        <Image
          src={logo.light}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className={`block dark:hidden ${mainSize}`}
        />
        <Image
          src={logo.dark}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className={`hidden dark:block ${mainSize}`}
        />
      </span>
    </Link>
  );
}