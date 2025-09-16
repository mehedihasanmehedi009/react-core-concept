export default function Post2({ Posts }) {
  return (
    <div className=" student">
      <h2>Name: {Posts.title}</h2>
      <h2>Email:{Posts.email}</h2>
      <h2>body: {Posts.body}</h2>
    </div>
  );
}
