import React from "react";

function StatArc({ value = "95%" }) {
  return (
    <div className="flex flex-col items-center">
      <svg
        width="120"
        height="60"
        viewBox="0 0 120 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 50 C30 10, 90 10, 110 50"
          stroke="#6366f1"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <div className="-mt-6 text-indigo-600 font-bold">{value}</div>
    </div>
  );
}

export default function Benefits() {
  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="inline-block bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm mb-4">
          Benefits
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
          One <span className="text-indigo-600">Product</span> Many{" "}
          <span className="text-indigo-600">Benefits</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Reclaim 3+ hours every week, keep your team aligned with instant
          summaries, and find any moment across meetings in seconds.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left large card */}
        <div className="col-span-1 bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-semibold mb-2">Auto-Join &amp; Record</h3>
          <p className="text-gray-500 mb-6">
            Hands-free calendar sync: MeetPanda joins your calls without
            downloads or bots.
          </p>

          <div className="flex items-center justify-center h-48">
            <div className="relative">
              <div className="w-36 h-36 rounded-full bg-indigo-50 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-inner">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                    🐾
                  </div>
                </div>
              </div>

              <div className="absolute -left-6 -top-6">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-indigo-600 border">
                  Z
                </div>
              </div>

              <div className="absolute -right-6 -top-6">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-indigo-600 border">
                  T
                </div>
              </div>

              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-600 border">
                  G
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle column top */}
        <div className="col-span-1 lg:col-span-1 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h4 className="font-semibold mb-2">Transcription</h4>
          <p className="text-gray-500 mb-4">
            Get accurate, searchable transcripts of all your meetings.
          </p>
          <div className="flex justify-center">
            <StatArc />
          </div>
        </div>

        {/* Right column top */}
        <div className="col-span-1 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h4 className="font-semibold mb-2">Search Across Meetings</h4>
          <p className="text-gray-500 mb-4">
            Quickly find key moments, topics, or decisions from any past
            meeting.
          </p>

          <div className="mt-4">
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-lg px-4 py-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21l-4.35-4.35"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="11"
                  cy="11"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
              <input
                className="bg-transparent flex-1 outline-none text-sm text-gray-600"
                placeholder="Search In Meetings"
              />
              <div className="text-xs text-gray-400">⌘ K</div>
            </div>
          </div>
        </div>

        {/* Full width below: AI summaries left, MeetPanda card right */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100 mt-2">
          <h4 className="font-semibold mb-2">
            AI Summaries &amp; Action Items
          </h4>
          <p className="text-gray-500">
            MeetPanda transforms every meeting into transcripts, highlights, and
            insights you can act on instantly
          </p>
          <div className="h-36" />
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mt-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center">
              🐾
            </div>
            <div className="font-semibold">MeetPanda</div>
          </div>

          <div className="font-medium">Annual General meeting</div>
          <div className="text-sm text-gray-500 mb-4">
            10:00 am - 11:30 am 9th Aug 2025
          </div>

          <div className="flex gap-2 mb-3">
            <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">
              Transcript
            </span>
            <span className="px-3 py-1 bg-gray-200 rounded-md text-sm">
              Summary
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">
              For You
            </span>
          </div>

          <p className="text-gray-600 text-sm">
            Opening Remarks — The Chairperson welcomed shareholders, board
            members, employees, and stakeholders to the Annual General Meeting.
          </p>
        </div>
      </div>
    </section>
  );
}
