import Header from "@/components/header"
import GallerySection from "@/components/gallery-section"

const pencilSketches = [
  { imageSrc: "/images/pencil/portrait-prayer.jpg", title: "Rukmini Vasanth", artist: "Manoj" },
  { imageSrc: "/images/pencil/ornate-attire.jpg", title: "Kalyani", artist: "Manu" },
  { imageSrc: "/images/pencil/smiling-portrait.jpg", title: "Pooja Hegde", artist: "Bharadwaj" },
]

const photographyA = [
  { imageSrc: "/images/pencil/Image.png", title: "Absence, Presence", artist: "Simone Lee" },
  { imageSrc: "/images/pencil/Image.png", title: "Turbulent Flow", artist: "Kellen Vargas" },
  { imageSrc: "/images/pencil/Image.png", title: "Electric Bloom", artist: "Zane Wilder" },
]

const photographyB = [
  { imageQuery: "studio still life pastel gourd minimal", title: "Absence, Presence", artist: "Simone Lee" },
  { imageQuery: "black sculpture ring linked hands", title: "Turbulent Flow", artist: "Kellen Vargas" },
  { imageQuery: "colorful toys foam shapes macro", title: "Electric Bloom", artist: "Zane Wilder" },
]

export default function Page() {
  return (
    <main style={{ backgroundColor: "#ffffff" }}>
      <Header />
      <GallerySection heading="Pencil Sketches" items={pencilSketches} />
      <GallerySection heading="Paintings" items={photographyA} />
      <GallerySection heading="Digital Art" items={photographyB} />
      <div className="pb-16" />
    </main>
  )
}
