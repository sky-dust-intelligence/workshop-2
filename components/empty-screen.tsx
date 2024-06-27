import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Waarvoor kan ik AI goed en betrouwbaar inzetten',
    message: `How can I use AI to help me in my daily business tasks better and still reliable?`,
  },
  {
    heading: 'Schrijf een samenvatting van dit document',
    message: 'Summarize the following document for a non-expert in this field of expertise and list at the end all important points that I need to know. \n'
  },
  {
    heading: 'Schrijf een verkoopemail naar een klant',
    message: `Draft an email to a prospect that deviates for all other sales (spam-alike emails) and make it personal. Ask the user for input to make it personal, like name client, business industry \n`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Welkom bij de AI workshop van SKY DUST met Nick Nijhuis
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          Dit is een AI workshop app van Sky Dust Inteligence gebouwd door Nick Nijhuis{' '}
          <ExternalLink href="https://98e4e930.site.sitekick.ai/about-us">SKY DUST</ExternalLink> and{' '}
          <ExternalLink href="https://skydust.io">Sky Dust</ExternalLink>.
        </p>
        <p className="leading-normal text-muted-foreground">
          Om te beginnen, typ een vraag of een opdracht in het tekstveld hieronder en druk op enter. Hier zijn een paar voorbeelden om je op weg te helpen:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
