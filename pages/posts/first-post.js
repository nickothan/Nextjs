import Link from "next/link"

import Head from "next/head"

import Image from "next/image"

import Layout from "../../components/Layout/layout"

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>fist Post</title>
        </Head>
        <h1> First Post</h1>
        <h2>
          <Link href="/">
            <a> Back to home</a>
          </Link>
        </h2>

        <div></div>
      </Layout>
    </>
  )
}
