import "minireset.css";

const MyApp = ({ Component, pageProps }) => (
  <div
    style={{
      backgroundColor: "#cbcbcb",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      minHeight: "100vh",
      width: "100%",
    }}
  >
    <Component {...pageProps} />
  </div>
);
export default MyApp;
