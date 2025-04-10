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
      {/* {foods
        ?.filter((foods: FoodType) => foods.category?._id === categoryId)
        .map((food: FoodType, index: number) => {
          return (
            <div
              key={index}
              className="flex w-[270.75px] h-[241px] flex-col gap-5  p-4  items-start border-[1px] bg-[#fff] border-border rounded-[20px] "
            >
              <div
                className="w-full h-full bg-cover bg-center flex p-5 justify-end items-end gap-[10px] rounded-xl  "
                style={{
                  backgroundImage: `url(${food.image})`,
                }}
              >
                <EditDish deleteFood={deleteFood} foodID={food?._id} />
              </div>
              <div className="flex flex-col w-full items-start gap-2 ">
                <div className="flex justify-between w-full items-center gap-[10px] ">
                  <small className="text-[14px] font-[500] leading-[20px] text-[#ef4444] ">
                    {food?.foodName}
                  </small>
                  <h5 className="text-[12px] font-[400] leading-[16px] ">
                    {food?.price}
                  </h5>
                </div>
                <h5 className="text-[12px] font-[400] leading-[16px] text-foreground ">
                  {food?.ingredients}
                </h5>
              </div>
            </div>
          );
        })} */}
    </div>
  );
}
