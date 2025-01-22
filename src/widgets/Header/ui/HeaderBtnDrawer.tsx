"use client";

import React, { memo, useCallback, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import HeaderMenuItems from "./HeaderMenuItems";
import { Menu, X } from "lucide-react";

function HeaderBtnDrawer() {
  const [open, setOpen] = useState(false);

  const onCloseDrawer = useCallback(() => {
    setOpen(false);
  }, []);

  const onOpenDrawer = useCallback(() => {
    setOpen(true);
  }, []);

  return (
    <Drawer open={open}>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          className="tablet:hidden"
          onClick={onOpenDrawer}
        >
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="fixed right-0 left-0 top-0 bottom-0 m-0 h-full w-full bg-white rounded-none">
        <div className="flex items-center justify-center h-full w-full">
          <HeaderMenuItems
            addClass="flex-col items-center justify-center w-full"
            onClose={onCloseDrawer}
          />

          <DrawerClose asChild className="absolute top-5 right-5">
            <Button variant="ghost">
              <X />
            </Button>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default memo(HeaderBtnDrawer);
