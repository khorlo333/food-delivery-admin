import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex gap-3">
      <Image
        width={40}
        height={40}
        alt="logo"
        src="https://res.cloudinary.com/dlvvsmj6j/image/upload/v1739974771/cqpoxwrkvc9xlnhwaafj.png"
      />
      <div>
        <h2 className="text-black">
          Nom<span className="text-black">Nom</span>
        </h2>
        <p>Swift delivery</p>
      </div>
    </div>
  );
}
