

import Image from 'next/image';

export default function Intro() {
  return (
    <section className="bg-red-600 text-blue-800 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 lg:px-0">
        <div>
          <h1 className="text-6xl font-bold leading-tight mb-6">
            Weighing Nordic Trade
          </h1>
          <p className="text-lg mb-8">
            Explore our curated projects as we measure medieval commerce through coin, cartography, and text. Dive into six unique explorations that reveal the intricate balance of historic trade.
          </p>
          <div className="flex space-x-6">
            <Image src="/images/box.png" alt="Box with hinged lid" width={60} height={60} />
            <Image src="/images/award2.png" alt="Award badge" width={60} height={60} />
            <Image src="/images/award3.png" alt="Award badge" width={60} height={60} />
          </div>
        </div>
        <Image
          src="/images/box.png"
          alt="Gallery preview"
          width={700}
          height={500}
          className="rounded-md object-cover shadow-lg"
        />
      </div>
    </section>
);
}