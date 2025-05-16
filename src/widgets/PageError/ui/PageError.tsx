import cls from "./PageError.module.scss";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";

interface PageErrorProps {
  className?: string;
}

const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();
  const reloadPage = () => {
    location.reload();
  };
  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <h1>{t("Произошла ошибка")}</h1>
      <button onClick={reloadPage}>{t("обновить")}</button>
    </div>
  );
};

export default PageError;
