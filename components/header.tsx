import Image from 'next/image';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { IconSkydustWebp } from '@/components/ui/icons';
import { cn } from '@/lib/utils';
import { NewChatButton } from './new-chat-button';
import { ThemeToggle } from './theme-toggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full shrink-0 items-center justify-between border-b bg-gradient-to-b from-background/10 via-background/50 to-background/80 px-4 backdrop-blur-xl">
      <div className="mr-12 flex items-center">
        <Link href="/" target="_blank" rel="nofollow">
          <Image
            src="/skydustlogo.webp"
            alt="SKY DUST Logo"
            width={24}
            height={24}
            className="mr-2 h-6 w-6 text-black dark:text-white"
          />
        </Link>
      </div>

      <NewChatButton />
      <div className="flex items-center justify-end space-x-2">
        <ThemeToggle />
        <a
          target="_blank"
          href="https://98e4e930.site.sitekick.ai/"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: 'outline' }))}
        >
          <IconSkydustWebp />
          <span className="ml-2 hidden md:flex">SKY DUST</span>
        </a>
      </div>
    </header>
  );
}
