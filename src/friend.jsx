export default function Friend({ friend }) {
  const { name, email, phone } = friend;
  return (
    <div className="student">
      <h2> Name :{name}</h2>
      <h3> Email:{email}</h3>
      <h3>phone:{phone}</h3>
    </div>
  );
}
