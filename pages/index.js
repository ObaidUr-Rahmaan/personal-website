import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Obaid | Full-Stack Software Engineer</title>
        <meta
          name="description"
          content="Obaid is a full-stack developer who specializes in building web applications."
        />
        <link rel="icon" href="" />
      </Head>
      <Navbar />
    </div>
  );
}
