import { Hand } from "lucide-react";

type Props = {
  greeting: { name: string; message: string; subtitle: string };
};

export function TodayHeader({ greeting }: Props) {
  return (
    <header className="today-header">
      <h1>
        {greeting.message}, {greeting.name}
        <Hand className="greeting-icon" size={21} />
      </h1>
      <p>{greeting.subtitle}</p>
    </header>
  );
}
