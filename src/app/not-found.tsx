import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[400px] w-full flex-col items-center justify-center gap-4 text-center">
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl font-bold tracking-tight">404</h2>
        <h3 className="text-xl font-medium">Page Not Found</h3>
        <p className="text-muted-foreground text-sm max-w-[400px]">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
      </div>
      <Link
        href="/"
        className="mt-4 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
      >
        Return Home
      </Link>
    </div>
  );
}
