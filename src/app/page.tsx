import { ThemeToggle } from '@/components/ThemeChanger';

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <p>Welcome to Amirreza&apos;s NextJS Boilerplate</p>
      <ThemeToggle />
    </div>
  );
}
