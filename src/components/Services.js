import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import { services } from "@/data/services";

export default function HomeServices() {
  return (
    <section className="py-16 lg:py-4 bg-slate-50">
      <div className="container-fluid mx-auto px-4 lg:px-8">

        <SectionHeading
          centered={true}
          title="Our Professional IT Services"
          twoColor={true}
          coloredWords={2}
          description="We provide end-to-end digital solutions that help businesses build, grow, and scale in today's competitive market. From websites and mobile apps to cloud infrastructure and digital marketing, our experts deliver reliable and future-ready solutions."
          className="max-w-3xl mx-auto mb-12"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.number}
              {...service}
            />
          ))}
        </div>

      </div>
    </section>
  );
}