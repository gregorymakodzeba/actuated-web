import React from "react";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 font-mono leading-relaxed">
      <header className="mb-12">
        <div className="flex items-baseline justify-between mb-8">
          <h1 className="text-2xl">Actuated</h1>
          <nav>
            <ul className="flex gap-4">
              <li>
                <a href="mailto:yanovsky@mit.edu" className="hover:opacity-70">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <p className="max-w-2xl mb-6">
          Exploiting natural dynamics in attempt to achieve extraordinary arm dexterity.
        </p>

        <p className="max-w-2xl mb-6">
          The robotics industry today resembles the personal computing world of the late 1980s: powerful but
          inaccessible to most. Current robotic arms and dexterous hands are prohibitively expensive, with prices
          ranging from $20,000 to over $100,000. This high cost and complexity limit their adoption, keeping small
          businesses, researchers, and creators from benefiting from automation and decelerating the development of
          large-scale robotics foundation models.
        </p>
        <p className="max-w-2xl">
          Actuated is building a low-cost robotic arm system with dexterous hands, priced at under $2,500. Powered by
          advanced AI and designed for simplicity, our system enables users to teach robots tasks through a few
          demonstrations (30-70), making robotics accessible to everyone.
        </p>
      </header>

      <hr className="my-12 border-t border-gray-200" />

      <section className="my-16">
        <h2 className="text-sm mb-6">Team</h2>
        <div className="flex gap-8">
          <a href="https://www.linkedin.com/in/yanovsk/" className="hover:opacity-70">
            Dima Yanovsky
          </a>
          <a href="http://x.com/youfelll/" className="hover:opacity-70">
            Gregory Makodzeba
          </a>
          <a href="https://www.linkedin.com/in/nazar-drugov-175939276/" className="hover:opacity-70">
            Nazar Drugov
          </a>
        </div>
      </section>

      <section className="mb-16">
        <p>
          If you want to contribute to the mission of making dexterous robotic arm accessible - please{" "}
          <a href="mailto:yanovsky@mit.edu" className="underline hover:opacity-70">
            reach out
          </a>
          .
        </p>
        <p className="mt-4">Actively seeking grants.</p>
      </section>
    </div>
  );
}