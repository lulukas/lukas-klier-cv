import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import styles from "../styles/Footer.module.css";

export const Footer = () => {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <p>© 2021 Lukas Klier</p>
      <div>
        <Link href="/" locale={router.locale === "en" ? "de" : "en"}>
          <button>{t("change-locale")}</button>
        </Link>
      </div>
    </footer>
  );
};
