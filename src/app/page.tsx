import { ThemeToggle } from '@/components/ThemeCahnger';
import Image from 'next/image';

export default function Home() {
  const xx = 10;
  xx = 'Hello World';

  console.log(xx);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <p>Welcome to Amirreza&apos;s NextJS Boilerplate</p>
      <ThemeToggle />
    </div>
  );
}
