import Layout from '@/components/layout';
import Results from '@/components/results';
import { dummy_data } from '@/utils/data';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Nextjs amp page</title>
        <meta name="description" content="Nextjs amp page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container mt-4">
          <Results results={data} />
        </div>
      </Layout>
    </>
  );
}
export async function getServerSideProps(ctx) {
  const genre = ctx.query?.genre || 'fetchTrending';
  let endpoint = `${process.env.NEXT_PUBLIC_API_URL}${
    genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/movie/week'
  }?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=2`;
  const res = await fetch(endpoint);
  let data = await res.json();
  return {
    props: {
      data: data.results,
    },
  };
}
