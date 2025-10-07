"use client"

import type React from "react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

function IconCart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        d="M3 4h2l2.4 10.5a1 1 0 0 0 1 .8h8.6a1 1 0 0 0 1-.8L20 8H7"
      />
      <circle cx="10" cy="20" r="1" fill="currentColor" />
      <circle cx="17" cy="20" r="1" fill="currentColor" />
    </svg>
  )
}

function IconUser(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm7 8a7 7 0 0 0-14 0"
      />
    </svg>
  )
}

function IconMenuDots(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle cx="5" cy="12" r="1.25" fill="currentColor" />
      <circle cx="12" cy="12" r="1.25" fill="currentColor" />
      <circle cx="19" cy="12" r="1.25" fill="currentColor" />
    </svg>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!menuRef.current) return
      if (!menuRef.current.contains(e.target as Node)) setOpen(false)
    }
    if (open) document.addEventListener("click", onDocClick)
    return () => document.removeEventListener("click", onDocClick)
  }, [open])

  return (
    <header className="w-full relative sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <nav
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 md:py-8"
        aria-label="Primary"
      >
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="font-serif text-xl tracking-tight transition-opacity duration-200 hover:opacity-80"
            style={{ color: "#1e1e1e" }}
          >
            PaletteVerse
          </Link>

          {/* desktop nav */}
          <ul className="hidden items-center gap-6 text-sm md:flex" style={{ color: "#1e1e1e" }}>
            <li>
              <Link href="#" className="transition-opacity hover:opacity-70">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="transition-opacity hover:opacity-70">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="#" className="transition-opacity hover:opacity-70">
                Artists
              </Link>
            </li>
            <li>
              <Link href="#" className="transition-opacity hover:opacity-70">
                Contacts
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-5" style={{ color: "#1e1e1e" }}>
          <button aria-label="Cart" className="transition-opacity hover:opacity-70">
            <IconCart className="h-5 w-5" />
          </button>
          <button aria-label="Account" className="transition-opacity hover:opacity-70">
            <IconUser className="h-5 w-5" />
          </button>
          <button
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="transition-opacity hover:opacity-70 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <IconMenuDots className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="absolute inset-x-0 top-full z-50 mx-auto w-full max-w-7xl px-6 md:hidden"
        >
          <div
            className="origin-top overflow-hidden rounded-md border border-black/5 bg-white/95 shadow-md backdrop-blur supports-[backdrop-filter]:bg-white/70"
            style={{ color: "#1e1e1e" }}
          >
            <ul
              className="flex flex-col gap-4 py-4 animate-in fade-in slide-in-from-top-2 duration-200 ease-out"
              role="menu"
            >
              <li>
                <Link href="#" onClick={() => setOpen(false)} className="block px-2 py-1 text-sm" role="menuitem">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" onClick={() => setOpen(false)} className="block px-2 py-1 text-sm" role="menuitem">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#" onClick={() => setOpen(false)} className="block px-2 py-1 text-sm" role="menuitem">
                  Artists
                </Link>
              </li>
              <li>
                <Link href="#" onClick={() => setOpen(false)} className="block px-2 py-1 text-sm" role="menuitem">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
