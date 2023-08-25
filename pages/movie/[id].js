import Layout from '@/components/layout';
import Image from 'next/image';

export const MoviePage = ({ result }) => {
  return (
    <Layout>
      <div className="container mt-4">
        <div className="d-flex">
          <div className="flex-1">
            <Image
              src={process.env.NEXT_PUBLIC_API_IMG + `${result.backdrop_path || result.poster_path}`}
              height={300}
              width={500}
              className="rounded-lg group-hover:opacity-80 group-hover:grayscale transition"
              placeholder="blur"
              blurDataURL="/loading.svg"
              alt="No Image"
              style={{
                maxWidth: '100%',
                height: '100%',
              }}
            />
          </div>
          <div className="p-2 flex-1">
            <h2 className="text-lg mb-3 font-bold ">{result.title}</h2>
            <p className="mb-3">
              <span className="font-semibold">Overview</span> {result.overview}
            </p>
            <p className="mb-3">
              <span className="font-semibold">Date relased: </span> {result.release_date}
            </p>
            <p className="mb-3">
              <span className="font-semibold">Rating: </span> {parseInt(result.vote_average)}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default MoviePage;

export async function getServerSideProps(ctx) {
  const id = ctx.query?.id;
  let result = await fetch(process.env.NEXT_PUBLIC_API_URL + `movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`);
  result = await result.json();
  return {
    props: {
      result: result,
    },
  };
}
