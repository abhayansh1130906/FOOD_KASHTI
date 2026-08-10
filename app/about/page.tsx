export default function About() {
  return (
    <>
      <section className="py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-gutter items-center min-h-[716px]">
        <div className="flex flex-col gap-6 max-w-xl">
          <h1 className="text-display-lg font-display-lg text-primary tracking-tight leading-tight">
            Tastes like Home, Delivered with Heart.
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
            At Food Kashti, we bridge the gap between the rustic comfort of a
            family kitchen and the seamless efficiency of a modern delivery
            service. We believe that a home-cooked meal is more than
            sustenance; it's vitality, comfort, and care wrapped in a warm
            package.
          </p>
          <div className="pt-4">
            <button className="bg-hearth-orange text-white hover:bg-primary transition-colors px-8 py-4 rounded-full text-label-lg font-label-lg shadow-sm hover:shadow-md flex items-center gap-2 group">
              Discover Our Menu
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
        <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-sm border border-outline-variant/30">
          <img
            alt="Chef cooking"
            className="object-cover w-full h-full absolute inset-0"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr-mIQ5yIHpDA5iGTNAZWzvc6dsrI87gL-yLDXtpGW6lPNLxbo5ksD9I5t3JlKlp0z-nmS6Ab_9vGXrmE_eQnvlVU4kHuwbxlXwqqBIj1LAaHqHbzRN4i_5M5rPG8qMjf4QSDPT_kjgnlN0KeifL5hJdg_hFSwAhvWjFvQaPxRpL31rR1O2P528XiPMYuyBSlrNj4AZWxGNedjHb9tGGtrI7i9P_-EKSWSPJ21P6fskEpp7NGxRubW2g"
          />
          <div className="absolute bottom-6 left-6 right-6 bg-surface-container-lowest/90 backdrop-blur-md p-6 rounded-xl border border-outline-variant/20 shadow-md">
            <div className="flex items-center gap-4">
              <div className="bg-sprout-green/20 p-3 rounded-full text-secondary">
                <span className="material-symbols-outlined">
                  restaurant_menu
                </span>
              </div>
              <div>
                <p className="text-label-lg font-label-lg text-earth-black">
                  Locally Sourced Ingredients
                </p>
                <p className="text-label-sm font-label-sm text-on-surface-variant">
                  Fresh from farm to your plate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story / Mission Bento Grid */}
      <section className="py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-headline-lg font-headline-lg text-primary mb-4">
            Our Story &amp; Mission
          </h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            From humble beginnings in a single kitchen to a community of
            passionate home chefs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Story 1 */}
          <div className="md:col-span-2 bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-outline-variant/20 flex flex-col justify-end relative overflow-hidden group hover:border-hearth-orange/50 transition-colors">
            <div className="absolute inset-0 w-full h-full z-0 opacity-80 mix-blend-multiply bg-surface-container-low transition-opacity group-hover:opacity-100">
              <img
                alt="Meal"
                className="object-cover w-full h-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRZSra2eD6U58pvyJJ4IpUyB5y7SUiDS3JPvhPaah6-8aqdFinXWiU-3osATRJALpR82K3LjsAaDRNDfTihT0jeJc_l3IceccYcdrxR91_33HjGIUhvJczCmZrwYp5u3pkeiazwM-rTfwKxudaFkGrdIDncfTc6TkCyURRPhfoR9GFfaAY6OuSmP97oku6CWobNUGPIF7LyIde_eQcHvn8F9Gs4p8DwdzdwXIP1Ss9i885pO0Xdg9yeg"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-earth-black/80 via-earth-black/40 to-transparent z-10"></div>
            <div className="relative z-20">
              <span className="inline-block px-3 py-1 bg-sprout-green text-earth-black text-label-sm font-label-sm rounded-full mb-4">
                The Origin
              </span>
              <h3 className="text-headline-md font-headline-md text-white mb-2">
                Born from a craving for home.
              </h3>
              <p className="text-body-md font-body-md text-white/90 line-clamp-2">
                It started when a group of busy professionals realized they missed
                the simple, comforting taste of their mothers' cooking.
              </p>
            </div>
          </div>
          {/* Story 2 */}
          <div className="bg-surface-container rounded-2xl p-8 flex flex-col justify-between shadow-sm border border-outline-variant/20 hover:-translate-y-1 transition-transform">
            <div className="bg-white/50 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined">diversity_3</span>
            </div>
            <div>
              <h3 className="text-headline-md font-headline-md text-earth-black mb-3">
                Empowering Chefs
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                We partner with local, passionate home cooks, giving them a
                platform to share their cherished family recipes and culinary
                heritage with the community.
              </p>
            </div>
          </div>
          {/* Story 3 */}
          <div className="bg-primary text-white rounded-2xl p-8 flex flex-col justify-between shadow-sm border border-primary-container relative overflow-hidden">
            <div className="absolute right-0 top-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
              <span
                className="material-symbols-outlined text-[120px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                local_dining
              </span>
            </div>
            <div className="relative z-10">
              <h3 className="text-headline-lg font-headline-lg mb-4">10k+</h3>
              <p className="text-body-lg font-body-lg text-primary-fixed">
                Meals delivered with love, preserving the authentic taste of home
                cooking while supporting local culinary talent.
              </p>
            </div>
          </div>
          {/* Story 4 */}
          <div className="md:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-outline-variant/20 flex gap-6 items-center hover:shadow-md transition-shadow">
            <div className="w-1/3 h-full rounded-xl overflow-hidden hidden md:block">
              <img
                alt="Ingredients"
                className="object-cover w-full h-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0kHsuoIQwYh4LQZXT7YSr-l3EBLf2gpPrkBrUcSI5v2tu36QGY7PQYv9_7Lj0pLGP7KRRssrbhejPbLHZJcrWxoMKCHrq8STlNsnTnzveLSzQipwRHcKSbOKJnTGiByXUwo048ZGcPr-LQlKEqA0INO2DCKv39xaBCxsDgDn83tJaVjTwqV57mYZQUo3AElCR5J7QfSWH7TnQA5XUTf-2MAsd2dUS2Rk3Qw7rswAo2o1LQnYbuDAmsA"
              />
            </div>
            <div className="flex-1">
              <span className="inline-block px-3 py-1 bg-surface-container text-on-surface-variant text-label-sm font-label-sm rounded-full mb-4">
                Our Commitment
              </span>
              <h3 className="text-headline-md font-headline-md text-earth-black mb-3">
                Transparent &amp; Zestful
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6">
                We believe in complete transparency about what goes into your
                food. No hidden preservatives, just wholesome, fresh ingredients
                prepared daily in hygienic environments.
              </p>
              <a
                className="text-hearth-orange font-label-lg text-label-lg hover:underline flex items-center gap-1 w-max"
                href="#"
              >
                Read our sourcing policy
                <span className="material-symbols-outlined text-sm">
                  chevron_right
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 md:py-24 bg-surface-bright rounded-3xl p-8 md:p-16 border border-outline-variant/30 my-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sprout-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-hearth-orange/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg font-headline-lg text-primary mb-4">
              Our Quality Standards
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Every meal that leaves a Food Kashti kitchen adheres to our strict
              guidelines for freshness, taste, and hygiene.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Standard 1 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-outline-variant/20 hover:border-hearth-orange transition-colors">
              <div className="w-16 h-16 bg-sprout-green/20 rounded-full flex items-center justify-center text-secondary mb-6 shadow-sm">
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  health_and_safety
                </span>
              </div>
              <h3 className="text-headline-md font-headline-md text-earth-black mb-3">
                Hygiene Verified
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                All our home kitchens undergo rigorous and regular hygiene audits
                to ensure your food is prepared in a safe, clean environment.
              </p>
            </div>
            {/* Standard 2 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-outline-variant/20 hover:border-hearth-orange transition-colors">
              <div className="w-16 h-16 bg-surface-container-low rounded-full flex items-center justify-center text-hearth-orange mb-6 shadow-sm">
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  soup_kitchen
                </span>
              </div>
              <h3 className="text-headline-md font-headline-md text-earth-black mb-3">
                Home-Cooked Care
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Meals are cooked in small batches, ensuring the authentic taste,
                texture, and nutritional value of a true home-cooked meal.
              </p>
            </div>
            {/* Standard 3 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-outline-variant/20 hover:border-hearth-orange transition-colors">
              <div className="w-16 h-16 bg-sprout-green/20 rounded-full flex items-center justify-center text-secondary mb-6 shadow-sm">
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  eco
                </span>
              </div>
              <h3 className="text-headline-md font-headline-md text-earth-black mb-3">
                Fresh Ingredients
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                We strictly prohibit artificial preservatives. We prioritize
                seasonal, locally sourced produce to bring you the freshest
                zestful flavors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
