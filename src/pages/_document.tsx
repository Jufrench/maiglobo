import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  // Mozilla-based browsers will ignore this.
  const webkitStyle = {height: "-webkit-fill-available"};
  // WebKit-based browsers will ignore this.
  const mozillaStyle = {height: "-webkit-fill-available"};

  

  return (
    <Html lang="en">
      <Head />
      <body
        // style={{
        //   // height: "100vh",
        //   // position: "relative",

        //   height: "100dvh",
        //   maxHeight: "-webkit-fill-available",
        //   // height: "fill-available"
        // }}
        style={{...webkitStyle, ...mozillaStyle}}
        >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
