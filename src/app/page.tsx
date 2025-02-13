import Image from "next/image";
import Link from "next/link";
import GreenRectangle from "./components/GreenRectangle";
import Rectangle from "./components/rectangle";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <Rectangle color="green" />
      {/*Componente de Rectangulo, nota: esto es un comentario */}
      <Link href="/page2">Ir a pagina 2</Link>
    </div>
  );
}
