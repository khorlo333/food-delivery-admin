import { AddFood } from "./CreateFood";

export default function Dishes({ title, id }: { title: string; id: string }) {
  return (
    <div key={id} className="bg-slate-500 rounded-3xl w-full h-full p-5">
      <p className="text-xl font-bold">{title}</p>
      <div className="border-red-400 border-dashed border-[1px] rounded-xl w-[250px] h-[250px] flex flex-col justify-center items-center">
        <AddFood title={title} id={id} />
        Add new Dish to <br />
        {title}
      </div>
    </div>
  );
}
