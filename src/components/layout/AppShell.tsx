import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useMotion } from "../../hooks/useMotion";
import { CustomCursor } from "../common/CustomCursor";
export function AppShell() {
  const { pathname } = useLocation();
  useMotion();
  useEffect(() => {
    scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <CustomCursor />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
