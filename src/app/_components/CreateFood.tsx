import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import UploadCloudinary from "./CloudinaryUpload";

export function DialogDemo({ title }: { title: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className=" w-10 h-10 rounded-full text-white bg-red-500 flex justify-center items-center">
          +
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            Add new Dish to <br />
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="flex gap-4 py-4 ">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Food name
            </Label>
            <Input
              id="name"
              placeholder="Type food name"
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Food price
            </Label>
            <Input
              id="username"
              placeholder="Enter price..."
              defaultValue=""
              className="col-span-3"
            />
          </div>
        </div>
        <div className="flex flex-col  gap-4">
          <Label htmlFor="ingredients" className="text-left">
            Ingredients
          </Label>
          <Input
            id="ingredients"
            placeholder="List ingredients..."
            defaultValue=""
            className="w-full"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="ingredients" className="text-right">
            Food image
          </Label>
          <UploadCloudinary />
        </div>

        <DialogFooter>
          <Button type="submit">Add dish</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
