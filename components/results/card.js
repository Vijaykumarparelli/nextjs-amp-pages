import Image from 'next/image';
import Link from 'next/link';
import { FiThumbsUp } from 'react-icons/fi';

const Card = ({ result }) => {
  return (
    <div className="card">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={process.env.NEXT_PUBLIC_API_IMG + `${result.backdrop_path || result.poster_path}`}
          height={300}
          width={500}
          placeholder="blur"
          blurDataURL="/loading.svg"
          alt="No Image"
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </Link>
      <div>
        <p className="truncate">{result.overview}</p>
        <h2 className="truncate line_one">{result.title || result.name}</h2>
        <p className="flex items-center">
          {result.release_date} <FiThumbsUp className="ms-5 me-1" /> {result.vote_count}{' '}
        </p>
      </div>
    </div>
  );
};
export default Card;
