import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import { services } from "@/data/services";

export default function HomeServices() {
  return (
    <section className="pb-20 lg:pb-28 section-surface-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Full Stack"
          title="Complete Suite of IT Services"
          description="Every technology capability your business needs — under one roof."
          centered
          twoColor
          coloredWords={2}
          className="max-w-3xl mx-auto mb-12"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
