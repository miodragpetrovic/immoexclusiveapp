import Image from "next/image";
import Card from "./components/Card";

export default function Home() {
  return (
    <div className="max-w-6xl px-4 py-3 text-white mx-auto">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam, sunt ab enim provident harum nostrum sequi quaerat iure sint sed temporibus? Culpa eligendi quasi, consequatur veritatis praesentium maxime tenetur!</p>
      <Card />
    </div>
  );
}
