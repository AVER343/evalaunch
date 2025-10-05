import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'eVALaunche - Software Development & AI Solutions',
    short_name: 'eVALaunche',
    description: 'Leading software development company specializing in AI/ML solutions, custom web applications, mobile apps, and digital marketing strategies.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#00a86b',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
