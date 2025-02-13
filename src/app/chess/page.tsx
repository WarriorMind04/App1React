import Rectangle from "../components/rectangle";

export default function Chess() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <div className="grid grid-cols-5 gap-2">
        <Rectangle color="black" />
        <Rectangle color="white" />
        <Rectangle color="black" />
        <Rectangle color="white" />
        <Rectangle color="black" />

        <Rectangle color="white" />
        <Rectangle color="black" />
        <Rectangle color="white" />
        <Rectangle color="black" />
        <Rectangle color="white" />

        <Rectangle color="black" />
        <Rectangle color="white" />
        <Rectangle color="black" />
        <Rectangle color="white" />
        <Rectangle color="black" />

        <Rectangle color="white" />
        <Rectangle color="black" />
        <Rectangle color="white" />
        <Rectangle color="black" />
        <Rectangle color="white" />

        <Rectangle color="black" />
        <Rectangle color="white" />
        <Rectangle color="black" />
        <Rectangle color="white" />
        <Rectangle color="black" />
      </div>
    </div>
  );
}
