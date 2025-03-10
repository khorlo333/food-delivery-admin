import { DialogDemo } from "./CreateFood";

export default function Appetizers({ title }: { title: string }) {
  return (
    <div className="bg-slate-500 rounded-3xl w-full h-full p-5">
      <p className="text-xl font-bold">{title}</p>
      <div className="border-red-400 border-dashed border-[1px] rounded-xl w-[250px] h-[250px] flex flex-col justify-center items-center">
        <DialogDemo title={title} />
        Add new Dish to <br />
        {title}
      </div>
    </div>
  );
}
