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
      <li>
        <Link href="/shaders/justice">
          <a>Justice</a>
        </Link>
      </li>
      <li>
        <Link href="/shaders/strength">
          <a>Strength</a>
        </Link>
      </li>
      <li>
        <Link href="/shaders/death">
          <a>Death</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default HomePage;
