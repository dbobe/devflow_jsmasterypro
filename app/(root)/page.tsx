import { auth } from '@/auth';

export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <div>
      <h1 className="text-3xl font-black">Welcome to the world of Next.js</h1>
    </div>
  );
}
