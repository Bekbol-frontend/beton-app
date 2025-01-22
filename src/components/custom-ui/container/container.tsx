import { ReactNode } from "react";
import styles from "./container.module.css";
import { cn } from "@/lib/utils";

interface IProps {
  children: ReactNode;
  addClass?: string;
}

function Container({ children, addClass = "" }: IProps) {
  return <div className={cn(styles.container, addClass)}>{children}</div>;
}

export default Container;
