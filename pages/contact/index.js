export async function getServerSideProps() {
  const data = await fetch("http://freestyle09.usermd.net/cos").then((resp) =>
    resp.json()
  );
  return {
    props: { data },
  };
}
export default function Home({ data }) {
  return (
    <div>
      <h1>contact</h1>
      <h2>{data.name}</h2>
    </div>
  );
}
