import Image from "next/image";

export default function Header() {
    return (
        <header>
            <Image
              src="/cms-logo.png"
              alt="CMS logo"
              width={150}
              height={50}
              priority
            />
        </header>
    );
  }
