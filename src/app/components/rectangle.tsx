interface RectangleProps {
  color: string;
}

export default function Rectangle({ color }: RectangleProps) {
  return <div style={{ background: color }} className="w-64 h-32"></div>;
}
