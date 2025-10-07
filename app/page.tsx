import Header from "@/components/header"
import GallerySection from "@/components/gallery-section"

const pencilSketches = [
  { imageSrc: "/images/pencil/portrait-prayer.jpg", title: "Portrait Study I", artist: "Pencil Sketch" },
  { imageSrc: "/images/pencil/ornate-attire.jpg", title: "Portrait Study II", artist: "Pencil Sketch" },
  { imageSrc: "/images/pencil/smiling-portrait.jpg", title: "Portrait Study III", artist: "Pencil Sketch" },
]

const photographyA = [
  { imageQuery: "studio still life pastel gourd minimal", title: "Absence, Presence", artist: "Simone Lee" },
  { imageQuery: "black sculpture ring linked hands", title: "Turbulent Flow", artist: "Kellen Vargas" },
  { imageQuery: "colorful toys foam shapes macro", title: "Electric Bloom", artist: "Zane Wilder" },
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
      <GallerySection heading="Photography A" items={photographyA} />
      <GallerySection heading="Photography B" items={photographyB} />
      <div className="pb-16" />
    </main>
  )
}
