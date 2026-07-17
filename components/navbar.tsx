"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-line/70 bg-ink/90 backdrop-blur-md"
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
            src="/images/dd-logo-inverted.png"
            alt="Doctor's Dialogue — Conversations That Heal"
            width={612}
            height={261}
            priority
            className="h-16 w-auto transition-opacity duration-300 group-hover:opacity-85"
          />
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "link-gold text-xs uppercase tracking-[0.22em]",
                pathname === link.href ? "text-ivory" : "text-sand",
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
          className="flex size-11 items-center justify-center rounded-full border border-line text-ivory transition-colors hover:border-gold lg:hidden"
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
            className="overflow-hidden border-t border-line/60 bg-ink/95 backdrop-blur-md lg:hidden"
          >
            <div className="container-edge flex flex-col gap-1 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-3 py-3.5 font-serif text-2xl transition-colors hover:bg-surface",
                    pathname === link.href ? "text-gold" : "text-ivory",
                  )}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-3 px-3 pb-2">
                <Button asChild>
                  <a href={site.youtube} target="_blank" rel="noopener noreferrer">
                    <Youtube aria-hidden="true" />
                    Watch on YouTube
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={site.facebook} target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
