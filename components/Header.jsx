import { useTranslation } from "next-i18next";

export const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <h1>Lukas Klier</h1>
      <p>{t("my-skill")}</p>
    </header>
  );
};
