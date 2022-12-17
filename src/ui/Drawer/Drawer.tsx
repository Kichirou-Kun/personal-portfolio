import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";
import clsx from "clsx";
import React, { FC, useEffect, useRef } from "react";
import s from "./Drawer.module.css";
import { motion } from "framer-motion";

interface DrawerProps {
  onClose: () => void;
  position?: "left" | "right" | string;
}

const Drawer: FC<React.PropsWithChildren<DrawerProps>> = ({
  children,
  onClose,
  position = "left",
}) => {
  const sidebarRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const contentRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const onKeyDownSidebar = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    if (sidebarRef.current) {
      sidebarRef.current.focus();
    }

    const contentElement = contentRef.current;

    if (contentElement) {
      disableBodyScroll(contentElement, { reserveScrollBarGap: true });
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  return (
    <div
      className={clsx(s.root)}
      ref={sidebarRef}
      onKeyDown={onKeyDownSidebar}
      tabIndex={1}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className={s.backdrop} onClick={onClose} />

        <motion.section
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={clsx(
            "absolute inset-y-0 left-0 flex w-full max-w-full outline-none md:w-auto md:pr-10"
          )}
        >
          <div className="h-full w-full md:w-screen md:max-w-md">
            <div className={s.sidebar} ref={contentRef}>
              {children}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Drawer;
