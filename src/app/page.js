import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-eh-primary underline mb-4 space-grotesk">
        Enthusiast Hydrogen Company
      </h1>
      <div className="relative w-100 h-100">
        <Image
          src="/logo.png"
          alt="Hydrogen website Logo"
          fill
          sizes="180px"
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
}
