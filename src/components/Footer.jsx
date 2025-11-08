import { MoveUpRight } from "lucide-react";

function Footer() {
  return (
    <footer className="relative bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left column: logo, title, description, login */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://meetpanda.in/img/home/primary-logo.svg"
                width={56}
                height={56}
                alt="MeetPanda logo"
                className="block"
              />
              <h2 className="text-3xl font-extrabold tracking-tight">
                MeetPanda
              </h2>
            </div>

            <p className="text-gray-600 max-w-md mb-6">
              MeetPanda transforms your meetings with AI-powered agendas,
              automated notes, and action tracking — so your team stays focused
              and your deals move forward.
            </p>

            <button className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md">
              Login
            </button>
          </div>

          {/* Middle column: Important Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Important Links</h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                <a
                  href="#"
                  className="hover:underline inline-flex items-center gap-2"
                >
                  Privacy Policy <MoveUpRight />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline inline-flex items-center gap-2"
                >
                  Terms of Service <MoveUpRight />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline inline-flex items-center gap-2"
                >
                  Security <MoveUpRight />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline inline-flex items-center gap-2"
                >
                  Contact Us <MoveUpRight />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline inline-flex items-center gap-2"
                >
                  Blog <MoveUpRight />
                </a>
              </li>
            </ul>
          </div>

          {/* Right column: Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

            <div className="flex items-center gap-4">
              {/* Email icon button */}
              <a
                href="#"
                className="flex items-center justify-center w-12 h-12 rounded-lg border border-gray-200 bg-white text-gray-700 shadow-sm"
                aria-label="Email"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8.5L12 13L21 8.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </a>

              {/* LinkedIn icon button */}
              <a
                href="#"
                className="flex items-center justify-center w-12 h-12 rounded-lg border border-gray-200 bg-white text-gray-700 shadow-sm"
                aria-label="LinkedIn"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-12h4v2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="2"
                    y="8"
                    width="4"
                    height="12"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative paw in the bottom-right  */}
      {/* <div>
    </div>   
    */}
    </footer>
  );
}

export default Footer;
