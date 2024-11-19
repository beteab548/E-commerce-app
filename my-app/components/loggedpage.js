export default function LoggedPage({ userid }) {
  console.log(userid);
  return <h1>{userid}</h1>;
}
