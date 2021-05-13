import "minireset.css";

const MyApp = ({ Component, pageProps }) => (
  <div
    style={{
      backgroundColor: "#cbcbcb",
      minHeight: "100vh",
      width: "100%",
    }}
  >
    <Component {...pageProps} />
  </div>
);
export default MyApp;
