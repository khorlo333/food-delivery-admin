import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UploadCloudinary from "./CloudinaryUpload";

export default function Category() {
  return (
    <div>
      <Avatar className="self-end">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className="h-20 bg-slate-100">
        <h2>Dishes category</h2>
        <div className="h-12 bg-slate-50">
          <UploadCloudinary />
        </div>
      </div>
    </div>
  );
}
