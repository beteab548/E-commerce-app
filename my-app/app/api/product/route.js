export default async function POST(req) {
  const reqData = await req.json();
  console.log(reqData);
}
