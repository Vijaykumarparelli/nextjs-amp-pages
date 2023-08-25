import Link from 'next/link';
const MenuItem = ({ title, link, Icon }) => {
  return (
    <Link href={link}>
      <span>
        <Icon className="d-block d-md-none" />
      </span>
      <p className="d-md-block d-none">{title}</p>
    </Link>
  );
};

export default MenuItem;
