import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Software Development Blog | AI/ML Insights & Digital Marketing Tips",
  description: "Expert insights on software development, AI/ML solutions, digital marketing strategies, and technology trends. Learn from industry professionals at eVALaunche.",
  keywords: "software development blog, AI ML insights, digital marketing tips, web development tutorials, technology trends, programming guides",
  openGraph: {
    title: "Software Development Blog | AI/ML Insights & Digital Marketing Tips",
    description: "Expert insights on software development, AI/ML solutions, digital marketing strategies, and technology trends.",
    type: "website",
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
