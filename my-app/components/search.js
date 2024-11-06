import Link from "next/link";

export default function Search() {
  return (
    <Link href={'/search'}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "1.5rem", height: "1.6rem" }}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
    </svg>
        </Link>
  );
}
