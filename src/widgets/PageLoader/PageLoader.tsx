import Loader from "shared/ui/Loader/Loader";
import cls from "./PageLoader.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

const PageLoader = () => {
  return (
      <div className={classNames(cls.PageLoader, {}, [])}>
          <Loader />
      </div>
  );
};

export default PageLoader;
