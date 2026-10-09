import { getClickCounts } from "@/lib/click-tracker";

export async function GET() {
  try {
    const counts = await getClickCounts();
    return Response.json(counts);
  } catch (error) {
    console.error("클릭수 조회 실패:", error);
    return Response.json({}, { status: 500 });
  }
}
