"use client";

const clients = [
  "MyClinicDesk",
  "AltuWell",
  "CareAdjustor",
  "Siderina",
  "Stillra",
  "IDFC Bank",
  "American Express",
  "TR Capital",
  "Risk & Roses",
  "Plutheia",
  "Goldsky",
];

export default function HomeClientTrust() {
  const loop = [...clients, ...clients];

  return (
    <section className="client-trust" aria-label="Client logos">
      <div className="client-trust-head">
        <p>Client logos</p>
        <h2>Trust</h2>
      </div>
      <div className="client-trust-viewport">
        <ul className="client-trust-track">
          {loop.map((name, index) => (
            <li key={`${name}-${index}`}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
