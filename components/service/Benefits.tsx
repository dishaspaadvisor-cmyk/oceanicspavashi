import {
  FaHeartbeat as FiActivity,
  FaHeart as FiHeart,
  FaMoon as FiMoon,
  FaSyncAlt as FiRefreshCw,
  FaSmile as FiSmile,
  FaBolt as FiZap,
} from "react-icons/fa";

export interface ServiceBenefit {
  title: string;
  description: string;
  icon?: string;
}

interface BenefitsProps {
  benefits?: ServiceBenefit[];
  title?: string;
  description?: string;
  className?: string;
}

const iconMap = {
  activity: FiActivity,
  heart: FiHeart,
  moon: FiMoon,
  refresh: FiRefreshCw,
  smile: FiSmile,
  zap: FiZap,
};

export default function Benefits({
  benefits = [],
  title = "Benefits of this treatment",
  description = "A thoughtfully designed treatment to help you relax, recharge and enjoy a more balanced wellness experience.",
  className = "",
}: BenefitsProps) {
  if (!benefits.length) {
    return null;
  }

  return (
    <section
      className={`
        relative
        overflow-hidden
        bg-[#F7FAF9]
        py-16
        sm:py-20
        lg:py-24
        ${className}
      `}
      aria-labelledby="service-benefits-heading"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="
            absolute
            -left-40
            top-0
            h-80
            w-80
            rounded-full
            bg-[#175C5A]/[0.045]
            blur-[110px]
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-0
            h-96
            w-96
            rounded-full
            bg-[#D8C2A0]/[0.13]
            blur-[120px]
          "
        />
      </div>

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div
          className="
            mx-auto
            max-w-2xl
            text-center
          "
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span className="h-px w-8 bg-[#D8C2A0]" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.24em]
                text-[#175C5A]
              "
            >
              Why choose this treatment
            </span>

            <span className="h-px w-8 bg-[#D8C2A0]" />
          </div>

          <h2
            id="service-benefits-heading"
            className="
              mt-4
              font-serif
              text-3xl
              font-normal
              leading-[1.12]
              tracking-tight
              text-[#24302F]
              sm:text-4xl
              lg:text-[3rem]
            "
          >
            {title}
            <span className="text-[#175C5A]">.</span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-[#687371]
              sm:text-[15px]
            "
          >
            {description}
          </p>
        </div>

        {/* ===================================================
            BENEFIT GRID
        ==================================================== */}

        <div
          className="
            mx-auto
            mt-10
            grid
            max-w-6xl
            gap-4
            sm:grid-cols-2
            lg:mt-14
            lg:grid-cols-3
            lg:gap-5
          "
        >
          {benefits.map((benefit, index) => {
            const Icon =
              iconMap[
                benefit.icon as keyof typeof iconMap
              ] || FiHeart;

            return (
              <article
                key={`${benefit.title}-${index}`}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-[#E1E8E5]
                  bg-white
                  p-6
                  shadow-[0_7px_28px_rgba(36,48,47,0.04)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#175C5A]/20
                  hover:shadow-[0_18px_45px_rgba(36,48,47,0.08)]
                  sm:p-7
                "
              >
                {/* Decorative glow */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    -right-10
                    -top-10
                    h-28
                    w-28
                    rounded-full
                    bg-[#D8C2A0]/10
                    opacity-0
                    blur-2xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* =================================================
                    NUMBER
                ================================================== */}

                <div className="relative flex items-start justify-between">
                  <span
                    className="
                      text-[9px]
                      font-bold
                      tracking-[0.16em]
                      text-[#A4ADAA]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}

                  <span
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#EEF7F5]
                      text-[#175C5A]
                      transition-all
                      duration-300
                      group-hover:bg-[#175C5A]
                      group-hover:text-white
                    "
                  >
                    <Icon size={19} />
                  </span>
                </div>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <div className="relative mt-7">
                  <h3
                    className="
                      font-serif
                      text-xl
                      leading-tight
                      text-[#24302F]
                      transition-colors
                      duration-300
                      group-hover:text-[#175C5A]
                    "
                  >
                    {benefit.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-xs
                      leading-6
                      text-[#727D7A]
                      sm:text-[13px]
                    "
                  >
                    {benefit.description}
                  </p>
                </div>

                {/* =================================================
                    BOTTOM ACCENT
                ================================================== */}

                <div
                  aria-hidden="true"
                  className="
                    relative
                    mt-6
                    h-px
                    w-full
                    overflow-hidden
                    bg-[#EEF0EE]
                  "
                >
                  <span
                    className="
                      absolute
                      left-0
                      top-0
                      h-full
                      w-0
                      bg-[#D8C2A0]
                      transition-all
                      duration-500
                      group-hover:w-16
                    "
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}