import Image from "next/image";

export default function Home() {
  return <div className="mx-20 my-12">
    <div className="flex items-center gap-1">
      <div className="w-1/2 flex flex-col">
        <Image
          src={"/images/logo.svg"}
          width={91}
          height={68}
          alt="logo"
        />
        <h1 className="text-4.5xl leading-11 font-bold linear-blue-pink mt-5">Providing Industry Leading Solutions for</h1>
        <p className="text-xl text-black mt-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermentum, pharetra arcu. Viverra a morbi ut donec in.
        </p>
      </div>
      <div className="w-1/2">
        <Image
          src={"/images/heading.svg"}
          width={0}
          height={0}
          className="w-full h-full"
          alt="heading illustration"
        />
      </div>
    </div>
    <div className="h-96 bg-blue-100 rounded-full mt-16 p-6">
      <div className="flex items-center h-full">
        <div className="w-80 h-full bg-white rounded-l-full flex items-center justify-center border-r-4 border-blue-200">
          <h2 className="text-3.5xl leading-10.5 w-1/2 font-bold text-primary">About Company</h2>
        </div>
        <div className="flex-1 h-full flex items-center justify-center">
          <div className="w-3/4 text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget duis mi nunc bibendum. Tellus elementum nec lorem eget dictumst. Risus in gravida eu, enim lorem. Sed consequat ut suspendisse eros. Nunc nunc accumsan, viverra enim. Mi.
          </div>
        </div>
      </div>
    </div>
    {/* services */}
    <div className="mt-20">
      <h3 className="text-center text-4xl font-bold text-primary mb-14">Our Services</h3>
      <div className="flex flex-col gap-12">
        <div className="h-96 flex items-center bg-fuchsia-100 rounded-r-full px-28">
          <div className="flex-1">
            <div className="w-3/4">
              <h2 className="text-primary text-2xl font-bold">Non-IT enterprises</h2>
              <p className="text-xl mt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat bibendum sit felis, sollicitudin et. Nulla aliquet integer hac ac morbi.
              </p>
            </div>
          </div>
          <div className="h-full flex items-center">
            <Image
              src={"/images/service-1.svg"}
              width={374}
              height={305}
              alt="service one"
            />
          </div>
        </div>
        <div className="h-96 flex items-center bg-blue-100 rounded-l-full px-28">
          <div className="h-full flex items-center">
            <Image
              src={"/images/service-2.svg"}
              width={374}
              height={275}
              alt="service two"
            />
          </div>
          <div className="flex-1">
            <div className="w-3/4 mx-auto">
              <h2 className="text-primary text-2xl font-bold">Software product companies</h2>
              <p className="text-xl mt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit viverra porta tortor, elementum ultrices. Blandit quam nec aliquam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* services map */}
    <div className="mt-20">
      <h3 className="text-center text-4xl font-bold text-primary mb-14">Service Map</h3>
      <div className="flex flex-col gap-12">
        <div className="h-96 flex items-center bg-gray-100 p-28">
          <div className="w-96">
            <h2 className="text-primary text-2xl font-bold">IT consulting</h2>
          </div>
          <div className="w-full">
            <ul className="list-disc">
              <li className="text-xl leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit viverra porta tortor, elementum ultrices. Blandit quam nec aliquam.
              </li>
              <li className="text-xl leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit viverra porta tortor, elementum ultrices. Blandit quam nec aliquam.
              </li>
              <li className="text-xl leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit viverra porta tortor, elementum ultrices. Blandit quam nec aliquam.
              </li>
            </ul>
          </div>
        </div>
        <div className="h-96 flex items-center bg-gray-100 p-28">
          <div className="w-96">
            <div className="w-1/2">
              <h2 className="text-primary text-2xl font-bold">Software Development</h2>
            </div>
          </div>
          <div className="w-full">
            <ul className="list-disc">
              <li className="text-xl leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit viverra porta tortor, elementum ultrices. Blandit quam nec aliquam.
              </li>
              <li className="text-xl leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit viverra porta tortor, elementum ultrices. Blandit quam nec aliquam.
              </li>
            </ul>
          </div>
        </div>
        <div className="h-96 flex items-center bg-gray-100 p-28">
          <div className="w-96">
            <h2 className="text-primary text-2xl font-bold">Testing and QA</h2>
          </div>
          <div className="w-full">
            <ul className="list-disc">
              <li className="text-xl leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit viverra porta tortor, elementum ultrices. Blandit quam nec aliquam.
              </li>
              <li className="text-xl leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit viverra porta tortor, elementum ultrices. Blandit quam nec aliquam.
              </li>
              <li className="text-xl leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit viverra porta tortor, elementum ultrices. Blandit quam nec aliquam.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* contact */}
    <div className="mt-20 relative">
      <div className="bg-blue-100 py-28">
        <h3 className="text-center text-4xl font-bold text-primary mb-10">Contact Us</h3>
        <div className="flex flex-col gap-3 w-1/3 mx-auto">
          <input type="text" autoComplete="off" className="py-2 px-3 text-sm rounded-md border" placeholder="Full Name" />
          <input type="text" autoComplete="off" className="py-2 px-3 text-sm rounded-md border" placeholder="Email Address" />
          <input type="text" autoComplete="off" className="py-2 px-3 text-sm rounded-md border" placeholder="Phone Number" />
          <textarea autoComplete="off" className="py-2 px-3 text-sm rounded-md border h-24" placeholder="Message" />
          <div className="text-center mt-4">
            <button className="text-sm bg-primary text-white font-bold py-3 px-10 rounded-md">Send</button>
          </div>
        </div>
      </div>
      <div className="absolute top-0">
        <Image
          src={"/images/bubble.svg"}
          width={282}
          height={282}
          alt=""
        />
      </div>
      <div className="absolute bottom-0 right-0 rotate-180">
        <Image
          src={"/images/bubble.svg"}
          width={282}
          height={282}
          alt=""
        />
      </div>
    </div>
  </div>;
}
