import Link from "next/link";
import Rectangle from "../components/rectangle";

export default function Page2() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <Rectangle color="blue" />
      <Link href="/">Ir a Inicio</Link>
      <Link href={"/chess"}>Ir a ajedrex</Link>
    </div>
  );
}
