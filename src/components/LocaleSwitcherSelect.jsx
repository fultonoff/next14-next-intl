"use client";

import clsx from "clsx";
import { useParams } from "next/navigation";
import { useState, useTransition } from "react";
import { useRouter, usePathname } from "../navigation";
import { useLocale, useTranslations } from "next-intl";
import ReactCountryFlag from "react-country-flag";
import Image from "next/image";
import sv from "../../public/images/icons/sv.svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LocaleSwitcherSelect() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("LocaleSwitcher");
  const [en, setEn] = useState("en");
  const [sv, setSv] = useState("sv");

  const pathname = usePathname();
  const params = useParams();
  const { locale } = params;

  function onSelectChange(value) {
    const nextLocale = value;

    startTransition(() => {
      // router.replace(
      //   // @ts-expect-error -- TypeScript will validate that only known `params`
      //   // are used in combination with a given `pathname`. Since the two will
      //   // always match for the current route, we can skip runtime checks.
      //   { pathname, locale },
      //   { locale: nextLocale }
      // );
      router.push({ pathname, params: params }, { locale: nextLocale });

    });
  }

  const handleClick = (value) => {
    console.log("Clicked value:", value);

 
  };
  return (
    <div
      className={clsx(
        "relative text-main flex items-center ",
        isPending && "transition-opacity [&:disabled]:opacity-30"
      )}
    >
      <div className="border-none">
        <Select className='border-primary '>
          <SelectTrigger className="border-none">
            <div className="text-3xl border-none">
              {locale === "en" ? (
                <ReactCountryFlag countryCode="GB" svg />
              ) : (
                <ReactCountryFlag countryCode="SE" svg className="h-fit"/>
              )}
            </div>
          </SelectTrigger>
          <SelectContent className=''>
            <div onClick={() => onSelectChange(sv)} className="text-main font-medium uppercase p-2 flex items-center gap-1 cursor-pointer hover:bg-accent">
              <ReactCountryFlag countryCode="SE" svg className="text-xl"/>

              {sv}
            </div>
            <div onClick={() => onSelectChange(en)} className="text-main p-2 flex items-center gap-1 cursor-pointer hover:bg-accent">
              <ReactCountryFlag countryCode="GB" svg className="text-xl"/>
              <span className="uppercase font-medium">
              {en}

              </span>
            </div>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
