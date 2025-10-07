"use client"

import { useEffect, useRef, useState } from "react"

type ArtworkCardProps = {
  imageQuery?: string
  imageSrc?: string
  title: string
  artist: string
}

export default function ArtworkCard({ imageQuery, imageSrc, title, artist }: ArtworkCardProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current as unknown as Element | null
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.unobserve(entry.target)
        }
      },
      { threshold: 0.2 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const src =
    imageSrc ||
    `/placeholder.svg?height=360&width=640&query=${encodeURIComponent(imageQuery || "gallery artwork landscape")}`

  return (
    <figure
      ref={ref as any}
      className={`group flex flex-col transform transition-all duration-500 ease-out motion-reduce:transition-none ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
    >
      <div className="relative w-full overflow-hidden rounded-sm aspect-[4/3] md:aspect-[4/3] lg:aspect-[16/10]">
        <img
          src={src || "/placeholder.svg"}
          alt={title}
          width={1600}
          height={1000}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 ease-out motion-reduce:transition-none group-hover:scale-[1.01]"
          style={{ backgroundColor: "#ffffff" }}
        />
      </div>
      <figcaption className="mt-3 leading-tight">
        <p className="italic text-sm min-h-5" style={{ color: "#000000" }}>
          {title}
        </p>
        <p className="text-sm min-h-5" style={{ color: "#1e1e1e" }}>
          {artist}
        </p>
      </figcaption>
    </figure>
  )
}
