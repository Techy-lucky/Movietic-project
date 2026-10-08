import React from "react";

function About() {
  return (
    <div className="text-gray-800">
      <div className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-center text-orange-600 mb-6">
          About Us
        </h1>

        <p className="text-lg mb-4">
          Welcome to <span className="font-semibold">Movietic</span>, a movie
          ticket booking platform created by five passionate college students.
          Our goal is simple: to make booking movie tickets as easy and
          enjoyable as watching the movie itself.
        </p>

        <h2 className="text-2xl font-semibold text-orange-500 mt-8 mb-4">
          Why Choose Us?
        </h2>

        <ul className="list-disc list-inside text-lg space-y-2 mb-4">
          <li>
            <span className="font-semibold">User-Friendly Design:</span> We’ve
            crafted an intuitive interface that lets you find and book your
            favorite movies with ease, ensuring a hassle-free experience.
          </li>
          <li>
            <span className="font-semibold">Wide Selection:</span> From the
            latest blockbusters to indie gems, our platform offers a broad range
            of movies to suit every taste and preference.
          </li>
          <li>
            <span className="font-semibold">Real-Time Updates:</span> Stay
            informed with the latest showtimes, seat availability, and movie
            releases so you never miss out on a great film.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-orange-500 mt-8 mb-4">
          Contact Us
        </h2>

        <ul className="text-lg space-y-2 mb-4">
          <li>
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:yourname@example.com"
              className="text-orange-600 hover:underline"
            >
              movietic05@gmail.com
            </a>
          </li>
          <li>
            <span className="font-semibold">Phone:</span>{" "}
            <a
              href="tel:+91 1234567890"
              className="text-orange-600 hover:underline"
            >
              +91 8154844555
            </a>
          </li>
          <li>
            <span className="font-semibold">Social Media:</span> Follow us on
            <a href="https://www.facebook.com/" className="text-orange-600 hover:underline">
              Facebook
            </a>
            ,
            <a href="https://www.twitter.com" className="text-orange-600 hover:underline">
              Twitter
            </a>
            ,
            <a href="https://www.instagram.com" className="text-orange-600 hover:underline">
              Instagram
            </a>
            .
          </li>
        </ul>

        <p className="text-lg text-center">
          Thank you for choosing{" "}
          <span className="font-semibold">Movietic</span>. Enjoy the
          show!
        </p>
      </div>
    </div>
  );
}

export default About;
