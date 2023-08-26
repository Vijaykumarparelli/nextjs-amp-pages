const AmpNavbar = () => {
  return (
    <>
      <div className="d-flex justify-center navbar">
        <a href="/amp?genre=fetchTrending">Trending</a>
        <a href="/amp?genre=fetchTopRated">Top Rated</a>
      </div>
      <style jsx>{`
        .navbar {
          background-color: var(--primary-light);
          padding: 20px;
        }

        .navbar a {
          color: var(--secondary);
          text-decoration: none;
          transition: 0.25s linear;
          font-weight: 600;
          font-size: 18px;
        }
        .navbar a:not(:first-child) {
          margin-left: 1rem;
        }
        .navbar a:hover {
          color: var(--primary);
        }
        .navbar a.navactive {
          text-decoration-line: underline;
          text-decoration-color: var(--primary);
          text-underline-offset: 8px;
        }
      `}</style>
    </>
  );
};
export default AmpNavbar;
