import React from "react";

function FeatureBullet({ children }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 inline-flex items-center justify-center w-3 h-3 rounded-full bg-indigo-600 ring-2 ring-white" />
      <span className="text-gray-700">{children}</span>
    </li>
  );
}

function ConnectItem({ title, subtitle, icon }) {
  return (
    <div className="flex items-center justify-between gap-4 p-4 rounded-lg border border-gray-100 bg-white">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-md bg-indigo-50 flex items-center justify-center">
          {icon}
        </div>
        <div>
          <div className="font-medium">{title}</div>
          <div className="text-sm text-gray-500">{subtitle}</div>
        </div>
      </div>

      <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">
        Connect
      </button>
    </div>
  );
}

export default function GetStarted() {
  return (
    <section className="relative overflow-hidden py-16">
      {/* subtle dotted background */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="#c7d2fe" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left */}
          <div className="z-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-indigo-600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2v6M12 22v-6M4.2 4.2l4.2 4.2M19.8 19.8l-4.2-4.2M2 12h6M22 12h-6M4.2 19.8l4.2-4.2M19.8 4.2l-4.2 4.2"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Get started
              </span>
            </div>

            <h1 className="text-2xl md:text-4xl w-full font-extrabold  tracking-tight leading-tight mb-4">
              You are <span className="text-indigo-600">One step</span> away
              from
              <br /> Smarter Meetings
            </h1>

            <p className="text-gray-600 max-w-2xl mb-6">
              From joining your call to delivering insights, MeetPanda ensures
              nothing slips through the cracks.
            </p>

            <ul className="space-y-4 mb-8">
              <FeatureBullet>MeetPanda auto-joins your meetings</FeatureBullet>
              <FeatureBullet>
                MeetPanda can connect to your personal calendar
              </FeatureBullet>
              <FeatureBullet>
                MeetPanda provides transcripts, summaries, searchability and
                security
              </FeatureBullet>
            </ul>

            <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg">
              Login
            </button>
          </div>

          {/* Right */}
          <div className="z-10">
            <div className="max-w-md ml-auto bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://meetpanda.in/img/home/primary-logo.svg"
                  alt="MeetPanda"
                  className="w-8 h-8"
                />
                <div className="font-semibold">MeetPanda</div>
              </div>

              <div className="text-gray-700 mb-6">Connect your Account</div>

              <div className="space-y-4">
                <ConnectItem
                  title="Google Calendar"
                  subtitle="Connect for seamless integration"
                  icon={
                    <img
                      src="https://www.gstatic.com/images/branding/product/1x/calendar_48dp.png"
                      alt="GCal"
                      className="w-6 h-6"
                    />
                  }
                />

                <ConnectItem
                  title="Outlook Calendar"
                  subtitle="Connect for enterprise features"
                  icon={
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="14"
                        height="16"
                        rx="2"
                        stroke="#3b82f6"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M21 8v8"
                        stroke="#3b82f6"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
