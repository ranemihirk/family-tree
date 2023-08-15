import { Helmet } from "react-helmet";
import Tree from './Tree';

export default function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Raorane Family Tree</title>
        <meta
          name="description"
          content="All things Raorane Family Tree, Our History, Activites, Contact and more."
        ></meta>
        <meta name="author" content=""></meta>
        <meta
          name="keywords"
          content="raorane, raorane familt tree, raoranefamilytree"
        ></meta>
        <meta property="og:title" content="Raorane Family Tree"></meta>
        <meta property="og:url" content="https://raorane.vercel.app/"></meta>
      </Helmet>
      <Tree />
    </div>
  );
}
