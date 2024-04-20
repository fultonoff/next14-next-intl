'use client'

import React from "react";
import { useTranslations } from "next-intl";
import LocaleSwitcherSelect from "@/components/LocaleSwitcherSelect";
import Image from "next/image";
import logo from "../../../../../public/images/logo/Logo.svg";

// import Link from "next/link";
// import { useParams } from "next/navigation";
import {Link} from '../../../../navigation'
import { usePathname } from "next/navigation";
const Nav = ({locale}) => {
  const t = useTranslations("Nav");
  const b = useTranslations("LocaleSwitcher");
  const keys = [ "tourism", "midsummerSail", "events", "contact"];
  const pathname = usePathname()
  const pathSliced = pathname.substring(1)
  const pathNameEn = pathname.substring(3)

  
  
  return (
    <nav className=" w-full border border-b py-5">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href='/'>
          <Image src={logo} alt="logo" />
          
          </Link>
        </div>
        <ul className="flex items-center gap-4">
          {keys.map((item) => {
      const activeLink = `${locale === 'sv'? pathSliced.toLowerCase() === t(`${item}.name`) .toLowerCase()? 'text-primary': 'text-main': pathNameEn === t(`${item}.url`) ? 'text-primary': 'text-main' }`
            // console.log(t(`${item}.url`));
            return (
              <li key={`${item}.id`} className={activeLink}>
                <Link href={`${t(`${item}.url`)}`} className="font-medium text-[18px]">{t(`${item}.name`)}</Link>
              </li>
            );
          })}
        </ul>
        <LocaleSwitcherSelect label={b("label")} locale={locale} className='border-none'/>
      </div>
    </nav>
  );
};

export default Nav;
