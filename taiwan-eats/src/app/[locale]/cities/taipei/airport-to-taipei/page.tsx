export const runtime = 'edge';

import { redirect } from "next/navigation";

export default function OldAirportPage() {
  redirect("/transport/taipei/airport-to-taipei");
}
