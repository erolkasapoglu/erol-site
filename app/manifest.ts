import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Erol Kasapoğlu - Video Düzenleyicisi & İçerik Üreticisi",
    short_name: "Erol Kasapoğlu",
    description:
      "Professional video editor and content creator specializing in digital marketing and social media growth",
    start_url: "/",
    display: "standalone",
    background_color: "#030303",
    theme_color: "#000000",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}

