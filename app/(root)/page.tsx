import { auth, signOut } from '@/auth';
import { Button } from '@/components/ui/button';
import ROUTES from '@/constants/routes';

export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <div>
      <h1 className="text-3xl font-black">Welcome to the world of Next.js</h1>

      <form
        className="px-10 py-100"
        action={async () => {
          'use server';
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">Log Out</Button>
      </form>
    </div>
  );
}
