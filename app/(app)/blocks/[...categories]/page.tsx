import { getAllBlockIds } from "@/lib/blocks"
import { BlockDisplay } from "@/components/block-display"
import { getActiveStyle } from "@/registry/_legacy-styles"

export const revalidate = false
export const dynamic = "force-dynamic"

export default async function BlocksPage({
  params,
}: {
  params: Promise<{ categories?: string[] }>
}) {
  const [{ categories = [] }, activeStyle] = await Promise.all([
    params,
    getActiveStyle(),
  ])
  const blocks = await getAllBlockIds(["registry:block"], categories)

  return (
    <div className="flex flex-col gap-12 md:gap-24">
      {blocks.map((name) => (
        <BlockDisplay name={name} key={name} styleName={activeStyle.name} />
      ))}
    </div>
  )
}
