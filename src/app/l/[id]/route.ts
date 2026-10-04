import { links } from "@/config/profile";
import { recordClick } from "@/lib/click-tracker";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const link = links.find((item) => item.id === id);

  if (!link) {
    return new Response("Link not found", { status: 404 });
  }

  try {
    await recordClick(id);
  } catch (error) {
    console.error(`클릭수 기록 실패 (linkId: ${id}):`, error);
  }

  return Response.redirect(link.url, 307);
}
