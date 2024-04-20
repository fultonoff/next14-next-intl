import { useTranslations } from "next-intl";
import ReactCountryFlag from "react-country-flag"

export default function Home() {
  const t = useTranslations("Index");

  return (
    <div>
      <h1>{t("title")}</h1>
      <ReactCountryFlag countryCode="US" svg />
      
    </div>
  );
}
