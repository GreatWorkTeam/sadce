import * as React from "react"
import Link from "next/link"

import { siteConfig } from "@/lib/config"
import { Icons } from "@/components/icons"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Skeleton } from "@/registry/new-york-v4/ui/skeleton"

export function GitHubLink() {
  return (
    <Button asChild size="sm" variant="ghost" className="h-8 shadow-none">
      <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
        <Icons.gitHub />
        <React.Suspense fallback={<Skeleton className="h-4 w-[42px]" />}>
          <StarsCount />
        </React.Suspense>
      </Link>
    </Button>
  )
}

export async function StarsCount() {
  try {
    const data = await fetch("https://api.github.com/repos/shadcn-ui/ui", {
      next: { revalidate: 86400 },
      signal: AbortSignal.timeout(3000),
    })
    if (!data.ok) {
      throw new Error(`GitHub API error: ${data.status}`)
    }

    const json: { stargazers_count?: number } = await data.json()
    const stars = json.stargazers_count
    if (typeof stars !== "number") {
      throw new Error("Invalid GitHub API response")
    }

    const formattedCount =
      stars >= 1000 ? `${Math.round(stars / 1000)}k` : stars.toLocaleString()

    return (
      <span className="text-muted-foreground w-fit text-xs tabular-nums">
        {formattedCount}
      </span>
    )
  } catch {
    return (
      <span className="text-muted-foreground w-fit text-xs tabular-nums">
        --
      </span>
    )
  }
}
