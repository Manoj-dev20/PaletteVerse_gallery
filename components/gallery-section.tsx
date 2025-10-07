import Link from "next/link"
import ArtworkCard from "./artwork-card"

type Item = { imageQuery?: string; imageSrc?: string; title: string; artist: string }
type GallerySectionProps = {
  heading: string
  items: Item[]
}

export default function GallerySection({ heading, items }: GallerySectionProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-pretty text-2xl font-semibold tracking-tight" style={{ color: "#1e1e1e" }}>
          {heading}
        </h2>
        <Link href="#" className="text-sm transition-opacity hover:opacity-80" style={{ color: "#193af6" }}>
          See more
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <ArtworkCard key={i} imageQuery={it.imageQuery} imageSrc={it.imageSrc} title={it.title} artist={it.artist} />
        ))}
      </div>
    </section>
  )
}
