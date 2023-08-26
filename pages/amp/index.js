import Layout from '@/components/layout';
import AmpResults from '@/components/results/amp-results';

export const config = { amp: true };
function AmpHomePage({ data }) {
  return (
    <Layout>
      <div className="container mt-4">
        <AmpResults results={data} />
      </div>
    </Layout>
  );
}

export default AmpHomePage;

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
