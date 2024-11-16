// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white">
       <section className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-[#219C90]">Welcome to NanoNode !</h1>
          <h2 className="text-3xl font-bold mb-4 text-[#219C90]">
            Your Ultimate URL Shortener.
          </h2>
          <p className="text-white-700 text-lg text-centre pt-1 pb-2 p-7 text-black mb-4">Welcome to NanoNode, the premier URL shortener! Transform lengthy URLs into short, memorable links effortlessly with our sleek, user-friendly platform. Track clicks, analyze traffic, and gain insights with our robust analytics tools—perfect for businesses and marketers</p>
          <Link href="/shortener"><button className='bg-[#54C392] rounded-lg shadow-lg px-5 py-2 font-bold text-white'>Try Now</button></Link>
        </div>
      </section>
    </main>
  );
}
