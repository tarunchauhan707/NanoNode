import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div className="container mx-auto p-6">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">About NanoNode</h1>
      </header>

      <section>
        <p className="text-lg text-gray-700 mb-4">
          NanoNode is an innovative platform that allows users to shorten URLs, share them easily, and track their performance. We aim to simplify link management and provide users with an easy-to-use interface for shortening and sharing links securely.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our platform focuses on user privacy and ensures that no personal information is collected when shortening links. We also provide a detailed dashboard for users to track their shortened URLs and analyze the statistics behind each link.
        </p>
        <p className="text-lg text-gray-700">
          Whether you're a business looking to promote your content or an individual looking to share links with friends, NanoNode is the perfect tool for managing your URLs in an efficient way.
        </p>
      </section>

      <footer className="text-center mt-6">
        <Link href="/">
        <button className='bg-[#54C392] rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Back to Home</button>
        </Link>
      </footer>
    </div>
  );
};

export default About;
