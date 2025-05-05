import cls from "./Loader.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

const Loader = () => {
  return <span className={classNames(cls.loader, {}, [])}></span>;
};

export default Loader;
