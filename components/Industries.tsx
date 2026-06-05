import type { JSX } from "react";

interface Industry {
  emoji: string;
  name: string;
  description: string;
  features: string[];
}

const industriesList: Industry[] = [
  {
    emoji: "💈",
    name: "Barbershops",
    description: "Let clients view your cuts, book chairs, and receive automatic SMS reminder alerts so they never miss an appointment.",
    features: ["Chair booking & calendar sync", "Text message confirmations", "No-show prevention"],
  },
  {
    emoji: "🧹",
    name: "Cleaning Companies",
    description: "Accept booking details, house sizes, and service requests online. Auto-calculate custom quotes and sync to your calendar.",
    features: ["Custom quote calculators", "House-size configuration", "Recurring booking sync"],
  },
  {
    emoji: "🚿",
    name: "Pressure Washing",
    description: "Show off stunning before-and-after work, let clients choose times, and auto-log job schedules directly to Google Sheets.",
    features: ["Photo portfolio galleries", "Zipcode availability check", "Google Sheets logging"],
  },
  {
    emoji: "🌳",
    name: "Landscaping & Lawn Care",
    description: "List recurring maintenance and cleanups. Let clients book jobs on autopilot while you work outdoors.",
    features: ["Recurring service intervals", "Job logging & maps integration", "Weather delay automation"],
  },
];

const Industries = (): JSX.Element => {
  return (
    <section className="bg-base-200 py-24 md:py-32" id="industries">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col text-center w-full mb-20">
          <p className="font-semibold text-primary mb-4">Industries</p>
          <h2 className="font-bold text-3xl lg:text-5xl tracking-tight">
            Built For Local Service Teams Like Yours
          </h2>
          <p className="max-w-xl mx-auto text-base-content/85 mt-4">
            We adapt your site, booking widgets, and automation flows specifically to the services you offer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industriesList.map((ind, i) => (
            <div key={i} className="card bg-base-100 shadow-xl border border-base-content/10 hover:scale-105 transition-transform duration-300">
              <div className="card-body">
                <span className="text-5xl mb-2">{ind.emoji}</span>
                <h3 className="card-title text-xl font-bold">{ind.name}</h3>
                <p className="text-sm text-base-content/80 my-2">{ind.description}</p>
                <div className="divider my-2"></div>
                <ul className="space-y-1">
                  {ind.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-base-content/70">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 text-primary shrink-0"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
