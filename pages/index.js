import Link from "next/link";

const HomePage = () => (
  <div
    style={{
      padding: 20,
      maxWidth: 800,
      margin: "0 auto",
    }}
  >
    <ul>
      <li>
        <Link href="/shaders/void">
          <a>Void</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default HomePage;
