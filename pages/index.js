import { request } from "../lib/datocms";

const HOMEPAGE_QUERY = `{
  allArticles {
    title,
    description
  }
}`;

export async function getServerSideProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
  });
  return {
    props: { data },
  };
}
export default function Home({ data }) {
  return (
    <div>
      {data.allArticles.map((el, i) => (
        <div key={i}>
          <h1>{el.title}</h1>
          <p>{el.description}</p>
        </div>
      ))}
    </div>
  );
}
