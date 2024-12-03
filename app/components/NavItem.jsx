import Link from "next/link";

export default function NavItem({label, path, dataTest}) {
  return (
    <Link href={path} passHref>
      <a data-test={dataTest}>{label}</a> {/* Pass dataTest here */}
    </Link>
  );
}
