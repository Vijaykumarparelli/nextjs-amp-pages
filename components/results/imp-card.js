import Image from 'next/image';
import Link from 'next/link';
import { FiThumbsUp } from 'react-icons/fi';

const AmpCard = ({ result }) => {
  return (
    <div className="card">
      <a href={`/amp/movie/${result.id}`}>
        <amp-img
          alt="AMP"
          src={process.env.NEXT_PUBLIC_API_IMG + `${result.backdrop_path || result.poster_path}`}
          height={300}
          width={500}
          layout="responsive"
          sizes="(max-width: 650px) 100%"
        ></amp-img>
      </a>
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
export default AmpCard;
