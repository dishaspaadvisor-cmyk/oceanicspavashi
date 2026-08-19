import { FaArrowLeft as FiArrowLeft } from "react-icons/fa";
import Link from "next/link";

import type { Service } from "@/data/service";
import { site } from "@/data/site";

import Benefits from "@/components/service/Benefits";
import RelatedServices from "@/components/service/RelatedServices";
import ServiceCTA from "@/components/service/ServiceCTA";
import ServiceDetails from "@/components/service/ServiceDetails";
import ServiceHero from "@/components/service/ServiceHero";

interface ServicePageContentProps {
  service: Service;
  routeType?: "services" | "massage";
}

export default function ServicePageContent({
  service,
  routeType = "services",
}: ServicePageContentProps) {
  const basePath =
    routeType === "massage" ? "/massage" : "/services";
  const listingLabel =
    routeType === "massage" ? "Massage" : "Services";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}${basePath}/${service.slug}#service`,
    name: service.name,
    description: service.description,
    url: `${site.url}${basePath}/${service.slug}`,
    image: `${site.url}${service.image}`,
    provider: {
      "@type": "DaySpa",
      "@id": `${site.url}/#localbusiness`,
      name: site.name,
      url: site.url,
      telephone: site.contact.phone,
    },
    areaServed: {
      "@type": "City",
      name: "Vashi, Navi Mumbai",
    },
    serviceType: service.category || "Massage Therapy",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: listingLabel,
        item: `${site.url}${basePath}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: `${site.url}${basePath}/${service.slug}`,
      },
    ],
  };

  return (
    <main className="overflow-x-hidden bg-white/90">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <ServiceHero
        service={service}
        listingHref={basePath}
        listingLabel={listingLabel}
      />

      <ServiceDetails service={service} />

      <Benefits benefits={service.benefits} />

      <ServiceCTA
        serviceName={service.name}
        title={`Ready to experience ${service.name}?`}
        description={`Take some time for yourself with ${service.name} at Oceanic Spa Vashi. Contact us to check availability and book your appointment.`}
      />

      <RelatedServices
        currentSlug={service.slug}
        limit={3}
        detailBasePath={basePath}
        listingHref={basePath}
        listingLabel={`View All ${listingLabel}`}
      />

      <div className="bg-white px-4 py-8 text-center">
        <Link
          href={basePath}
          className="
            inline-flex
            min-h-11
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-[#E1E8E5]
            bg-[#F7FAF9]
            px-5
            text-[9px]
            font-bold
            uppercase
            tracking-[0.13em]
            text-[#175C5A]
            transition-all
            hover:border-[#175C5A]/25
            hover:bg-[#EEF7F5]
          "
        >
          <FiArrowLeft size={13} />
          Back to all {listingLabel.toLowerCase()}
        </Link>
      </div>
    </main>
  );
}
