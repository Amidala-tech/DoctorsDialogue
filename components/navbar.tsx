"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { SocialIcons } from "@/components/social-icons";
import { Button } from "@/components/ui/button";
import { navLinks, site } from "@/constants/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Every page opens on a navy hero band, so the transparent state sits on
  // navy (inverted logo, light links) and the scrolled state on white.
  const onLight = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        onLight
          ? "border-b border-line bg-white/92 shadow-[0_10px_30px_-22px_rgb(14_42_71/0.4)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="container-edge flex h-20 items-center justify-between"
      >
        <Link
          href="/"
          className="group flex items-center"
          aria-label="Doctor's Dialogue — Home"
        >
          <Image
            src={onLight ? "/images/dd-logo.png" : "/images/dd-logo-inverted.png"}
            alt="Doctor's Dialogue — Conversations That Heal"
            width={612}
            height={261}
            priority
            className="h-14 w-auto transition-opacity duration-300 group-hover:opacity-85"
          />
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "link-accent text-xs uppercase tracking-[0.22em] transition-colors",
                onLight
                  ? pathname === link.href
                    ? "text-accent"
                    : "text-ink hover:text-accent"
                  : pathname === link.href
                    ? "text-white"
                    : "text-white/75 hover:text-white",
              )}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <a href={site.youtube} target="_blank" rel="noopener noreferrer">
              <Youtube aria-hidden="true" />
              Watch on YouTube
            </a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className={cn(
            "flex size-11 items-center justify-center rounded-xl border transition-colors lg:hidden",
            onLight
              ? "border-line text-ink hover:border-accent hover:text-accent"
              : "border-white/30 text-white hover:border-azure",
          )}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="overflow-hidden border-t border-line bg-white/98 backdrop-blur-md lg:hidden"
          >
            <div className="container-edge flex flex-col gap-1 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-3 py-3.5 font-serif text-2xl transition-colors hover:bg-mist",
                    pathname === link.href ? "text-accent" : "text-ink",
                  )}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-4 px-3 pb-2">
                <Button asChild>
                  <a href={site.youtube} target="_blank" rel="noopener noreferrer">
                    <Youtube aria-hidden="true" />
                    Watch on YouTube
                  </a>
                </Button>
                <SocialIcons surface="white" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
