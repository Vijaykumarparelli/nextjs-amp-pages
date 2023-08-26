import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import MenuItem from './menu-item';

function AmpHeader() {
  return (
    <>
      <div className="nav">
        <a href="/amp">
          <span>
            <AiFillHome className="d-block d-md-none" />
          </span>
        </a>
        <a href="/amp/about">
          <span>
            <BsFillInfoCircleFill className="d-block d-md-none" />
          </span>
        </a>
      </div>
      <div className="d-flex items-center">
        <a href="/amp" className="logo_container">
          <h2 className="d-flex items-center">
            <span>IMDb</span>
          </h2>
        </a>
      </div>
      <style jsx>{`
        .nav a {
          color: var(--secondary);
          text-decoration: none;
          transition: 0.25s linear;
        }
        .nav a:not(:first-child) {
          margin-left: 1.5rem;
        }
        .nav a:hover {
          color: var(--primary);
        }
        .nav a span {
          font-size: 24px;
        }
        .logo_container {
          font-size: 16px;
          color: var(--secondary);
          text-decoration: none;
          transition: 0.25s linear;
        }
        .logo_container span {
          background-color: var(--primary);
          border-radius: 5px;
          padding: 8px 20px;
        }
      `}</style>
    </>
  );
}

export default AmpHeader;
