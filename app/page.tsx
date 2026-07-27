import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/NavBar";
import ContactForm from "./components/ContactForm";
import ServiceCard from "./components/ServiceCard";
import { Icon } from "./components/Icon";
import ImageSlideshow from "./components/ImageSlideshow";

/* ────────────────── SECTION LABEL ────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-plus-jakarta), sans-serif",
        fontSize: "12px",
        fontWeight: 500,
        color: "var(--color-primary)",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        display: "block",
        marginBottom: "8px",
      }}
    >
      {children}
    </span>
  );
}

/* ────────────────── PAGE ────────────────── */
export default function Page() {
  return (
    <>
      <NavBar />

      {/* ──────────────── HERO ──────────────── */}
      <header
        id="hero"
        style={{
          position: "relative",
          paddingTop: "140px",
          paddingBottom: "80px",
          background: "var(--color-surface-bright)",
          overflow: "hidden",
        }}
      >
        {/* Ambient glow blobs */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "var(--color-primary-fixed-dim)",
            opacity: 0.18,
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-60px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "var(--color-secondary-container)",
            opacity: 0.15,
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div className="hero-grid">
            {/* Left text */}
            <div className="hero-text">
              {/* Veg badge */}
              <span className="veg-badge">
                <Icon name="eco" size={16} />
                100% Pure Vegetarian
              </span>

              <h1 className="hero-h1">
                Sailing the{" "}
                <em style={{ color: "var(--color-primary)", fontStyle: "italic" }}>
                  Joy
                </em>{" "}
                of Homemade Food
              </h1>

              <p className="hero-desc">
                Fresh, authentic thalis delivered directly to your train seat or
                home in Vadodara. Experience the warmth of a home kitchen on
                your journey.
              </p>

              {/* CTA Buttons */}
              <div className="hero-ctas">
                <Link href="#contact-form" className="btn-primary">
                  <Icon name="train" size={20} />
                  Book Your Train Meal
                </Link>
                <Link href="#services" className="btn-outline">
                  <Icon name="restaurant_menu" size={20} />
                  Explore Menu
                </Link>
              </div>

              {/* Trust stats */}
              <div className="hero-stats">
                {[
                  { value: "500+", label: "Happy Customers" },
                  { value: "3+", label: "Years Serving" },
                  { value: "100%", label: "Veg Kitchen" },
                ].map((s) => (
                  <div key={s.label} style={{ textAlign: "center" }}>
                    <div className="stat-value">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right – Logo image */}
            <div className="hero-image-wrap">
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "var(--color-primary-fixed-dim)",
                  borderRadius: "50%",
                  filter: "blur(80px)",
                  opacity: 0.3,
                  transform: "scale(0.8)",
                }}
              />
              <Image
                src="/logo.svg"
                alt="Food Kashti brand logo – a boat sailing with warm homemade food"
                width={680}
                height={680}
                priority
                className="hero-logo-img"
                style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div
          aria-hidden
          className="wave-divider"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "80px",
            transform: "rotate(180deg)",
          }}
        />
      </header>

      {/* ──────────────── SERVICES ──────────────── */}
      <section id="services" className="section-surface">
        <div className="container">
          <div className="section-header">
            <SectionLabel>What We Offer</SectionLabel>
            <h2 className="section-title">Our Services</h2>
            <p className="section-desc">
              Navigating through different needs, we bring the comfort of home
              wherever you are.
            </p>
          </div>

          <div className="services-grid">
            {[
              {
                icon: "train",
                color: "var(--color-primary-container)",
                iconColor: "var(--color-on-primary-container)",
                hoverBg: "var(--color-primary)",
                hoverIcon: "var(--color-on-primary)",
                title: "Train Food Delivery",
                desc: "Pre-order your favourite thali. We deliver piping hot, fresh meals directly to your seat at Vadodara railway station.",
                link: "Learn more",
              },
              {
                icon: "home_work",
                color: "var(--color-secondary-container)",
                iconColor: "var(--color-on-secondary-container)",
                hoverBg: "var(--color-secondary)",
                hoverIcon: "var(--color-on-secondary)",
                title: "Local Delivery",
                desc: "Daily home-style meals delivered across Vadodara. Perfect for working professionals craving the taste of home.",
                link: "View menu",
              },
              {
                icon: "celebration",
                color: "var(--color-tertiary-fixed-dim)",
                iconColor: "var(--color-on-tertiary-container)",
                hoverBg: "var(--color-tertiary)",
                hoverIcon: "var(--color-on-tertiary)",
                title: "Catering Services",
                desc: "Customized pure vegetarian menus for small to medium gatherings. Crafted with care and served with joy.",
                link: "Get a quote",
              },
            ].map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── STORY (BENTO GRID) ──────────────── */}
      <section id="story" className="section-container-low">
        <div className="container">
          <div className="bento-grid">
            {/* Story Card */}
            <div className="bento-story card-base">
              <div style={{ position: "relative", zIndex: 1 }}>
                <SectionLabel>The Journey</SectionLabel>
                <h2 className="bento-title">
                  The Story Behind the Kashti
                </h2>
                <p className="body-text">
                  Food Kashti was born out of a simple observation by Shilpi
                  Jain: the struggle to find reliable, hygienic, and home-like
                  food while traveling by train. What started as a mission to
                  serve passengers at Vadodara station has sailed into a beloved
                  local kitchen delivering comfort to homes and journeys alike.
                </p>
              </div>
              {/* Decorative sailing icon */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  bottom: "-40px",
                  right: "-40px",
                  opacity: 0.04,
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontSize: "280px",
                    lineHeight: 1,
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  sailing
                </span>
              </div>
            </div>

            {/* Purity card */}
            <div className="bento-value-primary">
              <Icon name="water_drop" size={40} />
              <h4 className="value-title">Purity</h4>
              <p className="value-desc">
                100% vegetarian kitchen ensuring the highest hygiene standards.
              </p>
            </div>

            {/* Simplicity card */}
            <div className="bento-value-secondary">
              <Icon name="spa" size={40} />
              <h4 className="value-title">Simplicity</h4>
              <p className="value-desc">
                Honest ingredients, home-style recipes without excessive spices.
              </p>
            </div>

            {/* Flexibility + Consistency */}
            <div className="bento-values-row card-base">
              {[
                {
                  icon: "sync_alt",
                  title: "Flexibility",
                  desc: "Customizable options to meet dietary needs, including Jain preparations.",
                  bordered: false,
                },
                {
                  icon: "verified",
                  title: "Consistency",
                  desc: "The same comforting taste and quality, order after order.",
                  bordered: true,
                },
              ].map((v) => (
                <div
                  key={v.title}
                  className={v.bordered ? "value-item value-item--bordered" : "value-item"}
                >
                  <div className="value-icon-wrap">
                    <Icon name={v.icon} size={20} />
                  </div>
                  <div>
                    <h4 className="value-item-title">{v.title}</h4>
                    <p className="value-item-desc">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── FOUNDER / WHY CHOOSE US ──────────────── */}
      <section
        id="founder"
        className="section-surface"
        style={{ position: "relative", overflow: "hidden" }}
      >
        {/* Background panel */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "45%",
            height: "100%",
            background: "var(--color-surface-container-lowest)",
            borderRadius: "100px 0 0 100px",
            opacity: 0.5,
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="founder-grid">
            {/* Kitchen image – slideshow */}
            <div className="founder-image-wrap">
              <ImageSlideshow />
              <div className="founder-img-overlay" />
              <div className="founder-quote-wrap">
                <div className="founder-quote-box">
                  <p className="founder-quote-text">
                    &ldquo;Cooking is not just a process; it&rsquo;s a way of
                    serving love.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Founder info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              <div>
                <SectionLabel>Meet The Founder</SectionLabel>
                <h2 className="founder-name">Shilpi Jain</h2>
                <p className="body-text">
                  With a hands-on approach and a deep connection to traditional
                  cooking, Shilpi oversees every aspect of Food Kashti. She
                  believes that the best meals are crafted in a home-style
                  environment, far removed from the cold efficiency of industrial
                  kitchens.
                </p>
              </div>

              <div>
                <h3 className="why-choose-title">Why Choose Us?</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {[
                    {
                      icon: "soup_kitchen",
                      bg: "rgba(244,121,32,0.12)",
                      color: "var(--color-primary)",
                      title: "Home-Style Kitchen",
                      desc: "Not an industrial setup. We cook in small batches to maintain authenticity and freshness.",
                    },
                    {
                      icon: "favorite",
                      bg: "rgba(185,239,145,0.35)",
                      color: "var(--color-secondary)",
                      title: "Personalized Care",
                      desc: "Every order is treated like a guest in our home, packaged with attention to detail.",
                    },
                    {
                      icon: "savings",
                      bg: "rgba(197,145,107,0.25)",
                      color: "var(--color-tertiary)",
                      title: "Affordable Pricing",
                      desc: "Premium quality, hygienic food that remains accessible for daily consumption.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}
                    >
                      <div
                        style={{
                          padding: "10px",
                          background: item.bg,
                          borderRadius: "9999px",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      >
                        <span
                          className="material-symbols-outlined"
                          style={{ fontSize: "20px", color: item.color, display: "block", lineHeight: 1 }}
                        >
                          {item.icon}
                        </span>
                      </div>
                      <div>
                        <h4 className="why-item-title">{item.title}</h4>
                        <p className="why-item-desc">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── CTA BANNER ──────────────── */}
      <section
        id="contact"
        style={{
          padding: "80px 0",
          background: "var(--color-primary)",
          color: "var(--color-on-primary)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 24px",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Icon name="location_on" size={64} fill />
          <h2 className="cta-title">Rooted in Vadodara</h2>
          <p className="cta-desc">
            Proudly serving our local community and travelers passing through.
            Ready to experience the comfort of a home-cooked meal?
          </p>
          <div className="cta-btns">
            <a href="tel:+919799100651" className="cta-btn-primary">
              <Icon name="call" size={20} />
              Call 9799100651
            </a>
            <a
              href="https://wa.me/919799100651"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn-outline"
            >
              <Icon name="chat" size={20} />
              Order via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ──────────────── CONTACT FORM ──────────────── */}
      <section id="contact-form" className="section-container-low">
        <div className="container">
          <div className="contact-grid">
            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0", justifyContent: "center" }}>
              <SectionLabel>Reach Out to Us</SectionLabel>
              <h2 className="contact-title">Get in Touch</h2>
              <p className="body-text" style={{ marginBottom: "40px" }}>
                Whether you have a question about catering, want to give
                feedback, or have general inquiries — we&apos;re here to help.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {[
                  { icon: "call", label: "Phone", value: "9799100651", href: "tel:+919799100651" },
                  {
                    icon: "mail",
                    label: "Email",
                    value: "reachout.foodkashti@gmail.com",
                    href: "mailto:reachout.foodkashti@gmail.com",
                  },
                  { icon: "location_on", label: "Location", value: "Vadodara, Gujarat", href: null },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{ display: "flex", alignItems: "center", gap: "16px" }}
                  >
                    <div className="contact-icon-wrap">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "22px", color: "var(--color-primary)" }}
                      >
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <p className="contact-info-label">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="contact-info-value-link">
                          {item.value}
                        </a>
                      ) : (
                        <p className="contact-info-value">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ──────────────── FOOTER ──────────────── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-logo">
              <Image src="/logo.svg" alt="Food Kashti logo" width={32} height={32} />
              Food Kashti
            </span>
            <p className="footer-copy">
              © 2024 Food Kashti. Based in Vadodara. Sailing the Joy of Food.
            </p>
          </div>
          <div className="footer-links">
            {["Privacy Policy", "Terms of Service", "Contact Us", "Track Order"].map(
              (item) => (
                <a key={item} href="#" className="footer-link">
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </footer>
    </>
  );
}
