import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import { MDXProvider } from '@mdx-js/react'
import CenteredImageLightbox from './components/CenteredImageLightbox';

import '../styles/main.css'

const mdxComponents = {
  CenteredImageLightbox,
}

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <MDXProvider components={mdxComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  )
}
