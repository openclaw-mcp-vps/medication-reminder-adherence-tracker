export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          Health Tracking
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Smart Medication Adherence<br />with Family Alerts
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Track every dose with photo verification. Get automated reminders and instantly alert family members when a medication is missed.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-lg transition-colors"
        >
          Start for $8/mo
        </a>
        <p className="text-sm text-[#8b949e] mt-3">Cancel anytime. No setup fees.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {[
          { icon: "📸", title: "Photo Verification", desc: "Snap a photo of each dose to confirm it was taken." },
          { icon: "🔔", title: "Smart Reminders", desc: "Customizable SMS and email alerts for every medication schedule." },
          { icon: "👨‍👩‍👧", title: "Family Alerts", desc: "Loved ones are notified instantly when a dose is missed." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$8</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited medications",
              "Photo dose verification",
              "SMS & email reminders",
              "Up to 5 family members",
              "Adherence reports & history",
              "Real-time missed-dose alerts"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does photo verification work?",
              a: "When it's time for a dose, you open the app and snap a photo of your medication. The timestamp and image are logged, giving caregivers and family members proof of adherence."
            },
            {
              q: "Who gets notified when a dose is missed?",
              a: "You choose up to 5 family members or caregivers. They receive an SMS and/or email alert within minutes of a missed dose window."
            },
            {
              q: "Can I manage medications for someone else?",
              a: "Yes. Caregivers can set up and manage medication schedules on behalf of a patient, and receive all alerts directly."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} MedTrack. All rights reserved.
      </footer>
    </main>
  );
}
