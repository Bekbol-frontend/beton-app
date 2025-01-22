"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { memo, useCallback } from "react";

interface IProps {
  addClass?: string;
  addClassLink?: string;
  onClose?: () => void;
}

const links = [
  {
    href: "/",
    text: "Главная",
    id: 1,
  },
  {
    href: "/",
    text: "Каталог",
    id: 2,
  },
  {
    href: "/",
    text: "О нас",
    id: 3,
  },
  {
    href: "/",
    text: "Контакты",
    id: 4,
  },
];

function HeaderMenuItems({ addClass = "", onClose }: IProps) {
  const onClickLink = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  return (
    <ul className={cn("flex gap-10", addClass)}>
      {links.map(({ href, text, id }) => (
        <Link
          href={href}
          className="
            text-color-link 
            hover:text-color-link-hover 
            hover:underline
            text-lg
        "
          key={id}
          onClick={onClickLink}
        >
          {text}
        </Link>
      ))}
    </ul>
  );
}

export default memo(HeaderMenuItems);
