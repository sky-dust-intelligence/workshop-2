import React from 'react'

import { cn } from '@/lib/utils'
import { ExternalLink } from '@/components/external-link'

export function FooterText({ className, ...props }: React.ComponentProps<'p'>) {
  return null
  return (
    <p
      className={cn(
        'px-2 text-center text-xs leading-normal text-muted-foreground',
        className
      )}
      {...props}
    >
      Sky Dust is een organisatie actief in duurzaamheidrapportage gedreven met Artificial Intelligence{' '}
      <ExternalLink href="https://98e4e930.site.sitekick.ai/">Sky Dust</ExternalLink> and{' '}
      <ExternalLink href="https://98e4e930.site.sitekick.ai/about-us">Over ons</ExternalLink>.
    </p>
  )
}
