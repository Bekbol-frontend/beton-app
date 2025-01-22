import { memo } from "react";
import { Container } from "@/components/custom-ui";
import Link from "next/link";
import Image from "next/image";

import Whatsapp from "@/shared/assets/whatsapp.svg";
import Telegram from "@/shared/assets/telegram.svg";
import Instagram from "@/shared/assets/instagram.svg";
import Logo from "@/shared/assets/logo.png";
import HeaderMenuItems from "./HeaderMenuItems";

function Header() {
  return (
    <header className="bg-bg-body-a h-header backdrop-blur-sm border-b-[1px] py-3 flex flex-col items-center justify-center sticky top-0 w-full">
      <Container addClass="flex flex-col">
        <div className="flex flex-1 justify-between items-center gap-2">
          <Link href="/" className="uppercase font-bold">
            <Image
              src={Logo}
              alt="logo"
              style={{ objectFit: "contain", width: 120, height: "auto" }}
            />
          </Link>
          <nav className="hidden tablet:flex">
            <HeaderMenuItems />
          </nav>
          <div className="flex gap-3">
            <Link href="/">
              <Image src={Whatsapp} width={30} height={30} alt="whatsapp" />
            </Link>
            <Link href="/">
              <Image src={Telegram} width={30} height={30} alt="telegram" />
            </Link>
            <Link href="/">
              <Image src={Instagram} width={30} height={30} alt="instagram" />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default memo(Header);
