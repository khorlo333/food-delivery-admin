import Appetizers from "../_components/C";
import Category from "../_components/Category";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Category />
      <Appetizers title={"Appetizers"} />
    </div>
  );
}
