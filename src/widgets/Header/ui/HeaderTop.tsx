import { Container } from "@/components/custom-ui";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { memo } from "react";
import HeaderBtnDrawer from "./HeaderBtnDrawer";

function HeaderTop() {
  return (
    <div className="bg-slate-50 flex justify-center items-center p-3">
      <Container>
        <div className="flex items-center flex-1 justify-between">
          <div className="flex gap-1 flex-col phone:flex-row phone:gap-5">
            <Link
              href="tel:+7 702 215 00 79"
              className="font-bold text-md  md:text-lg"
            >
              +7(702) 215-00-79
            </Link>
            <Link
              href="tel:+7 707 799 92 90"
              className="font-bold text-md  md:text-lg"
            >
              +7(707) 799-92-90
            </Link>
          </div>
          <HeaderBtnDrawer />
        </div>
      </Container>
    </div>
  );
}

export default memo(HeaderTop);
