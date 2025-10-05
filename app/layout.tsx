import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Codebreakr - Transformamos ideias em software de impacto | Desenvolvimento Web",
  description:
    "Consultoria, desenvolvimento e design de software para empresas modernas. Criamos aplicações web, sites responsivos e soluções digitais de alto impacto. Especialistas em React, Next.js e desenvolvimento full-stack.",
  keywords: [
    "desenvolvimento de software",
    "consultoria de TI",
    "desenvolvimento web",
    "aplicações web",
    "design de software",
    "sites responsivos",
    "React",
    "Next.js",
    "desenvolvimento full-stack",
    "transformação digital",
    "soluções digitais",
    "e-commerce",
    "sistemas de gestão",
    "aplicativos mobile",
  ],
  authors: [{ name: "Codebreakr" }],
  creator: "Codebreakr",
  publisher: "Codebreakr",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://codebreakr.com.br",
    siteName: "Codebreakr",
    title: "Codebreakr - Transformamos ideias em software de impacto",
    description:
      "Consultoria, desenvolvimento e design de software para empresas modernas. Criamos soluções digitais de alto impacto.",
    images: [
      {
        url: "/hero-developer-workspace.jpg",
        width: 1200,
        height: 630,
        alt: "Codebreakr - Desenvolvimento de Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Codebreakr - Transformamos ideias em software de impacto",
    description:
      "Consultoria, desenvolvimento e design de software para empresas modernas. Criamos soluções digitais de alto impacto.",
    images: ["/hero-developer-workspace.jpg"],
    creator: "@codebreakr",
  },
  alternates: {
    canonical: "https://codebreakr.com.br",
    languages: {
      "pt-BR": "https://codebreakr.com.br",
    },
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="canonical" href="https://codebreakr.com.br" />
        <meta name="theme-color" content="#D10F3C" />
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
