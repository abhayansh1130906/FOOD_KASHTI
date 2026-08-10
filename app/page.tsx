import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-6 z-10">
            <h1 className="text-display-lg font-display-lg text-on-background">
              <span className="text-hearth-orange">
                Fresh, Home-Cooked
                <br />
                Meals
              </span>
              <br />
              <span className="text-on-tertiary-fixed-variant">
                Delivered to Your Door
              </span>
            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-lg">
              Our talented home chefs prepare delicious meals made with
              locally-sourced ingredients, so you can enjoy home style food in
              the comfort of your own home.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mt-4">
              <button className="bg-hearth-orange text-white font-label-lg text-label-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all w-full sm:w-auto">
                Order Now
              </button>
              <div className="flex items-center gap-3 text-on-tertiary-fixed-variant">
                <div className="bg-tertiary-container text-white p-2 rounded-full flex items-center justify-center">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    phone
                  </span>
                </div>
                <span className="text-headline-md font-headline-md font-bold">
                  +91 800 8984 800
                </span>
              </div>
            </div>
          </div>
          {/* Hero Image */}
          <div className="relative z-10 flex justify-center items-center mt-12 md:mt-0">
            {/* Decorative background blob */}
            <div className="absolute inset-0 bg-primary blob-shape scale-110 -z-10 translate-x-4 translate-y-4"></div>
            {/* Main Image */}
            <div className="relative w-full max-w-md aspect-square">
              <img
                alt="A delicious, warm, home-cooked Indian curry meal"
                className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-white"
                src="https://lh3.googleusercontent.com/aida/AP1WRLvxPYMcMd6Wzf1EhQscV0_SSS4LVkdq1KnGD53QKXxXHqBbCGO28uyuAykrMrVbl9-5gcVR6l2VnBMckDzT1RTRP160hOTWQscC70uNHHsa1qJ-9OAsckelqke9poq8C9YSJD685NLFSrtLLuITmh-JAMbyhVYO-2qjKjj_n-pfIJZBXaXQN4Y63rzUUK5uQSv3E-bOfGOMH3cPbGphyRkf7ApHdxFa5KmyM7i72G5-sHxEuNKVjYuS-po"
                style={{
                  borderRadius: "48% 52% 43% 57% / 51% 47% 53% 49%",
                }}
              />
              {/* Floating elements for dynamic feel */}
              <img
                alt="A sliced red onion ring floating"
                className="absolute -top-4 -left-4 w-16 h-16 object-cover rounded-full shadow-md z-20"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvWSz1ybY_kIlZccJgAydzDddRG8m_I7DnJuthQr_xLoQd8ytYZjZfejUc0Lb5Jms3Av-vFS-YXQ9mGVRuP8HbP0DKhqu7dtqnMEyBw-jPRVcC0nF3EIHPWwhPZv22HE9CPw4sjfmNZCNokZJBHXQ7ptQhoOhmM2HeW-2UF0JpamabZ0gUMia9g1KpXUWVxuxBWnQc1IHpdgjZdE2AbS4tV8NaxST2lJP5_osIWomtucGkFA6RmhbPxw"
              />
              <img
                alt="Two halves of a fresh cherry tomato"
                className="absolute -bottom-8 left-4 w-20 h-20 object-cover rounded-full shadow-md z-20"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpr2LOKqJRFbv7uvM5uQreez_CNgneRhduIAJa2rS0WaRgV5u9rFnFgC0sRuRedDWA7LnZbNzj8ZSeswGGPRiN0Ql2gxYwYyM48EPhoKsV0YOViwwcscQCY16RHp91_DTOFqZ3fmthQ2e1My1kOx6W7oQHdJMJ6HrmS1a76B4y6W-KSzKaOiC10zpLEjTHGOcbzJToqgf0OBtnNUhhkueT16Wkpin5BORb0CP9gvuj7i_q3cSL2ZhUaA"
              />
              <img
                alt="A fresh sprig of bright green basil"
                className="absolute -bottom-4 right-8 w-16 h-16 object-cover z-20"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuH3bxWXPXqq6cZxjmROyNcnYdeOuv9zJkafKjEonE20u4i9laaVmLr3bCYv4jfzYTbkQ5DUiQ7KozR3BwDPDHUuRE2WIMZob7ffGLwOHoxaro7I_fc2-VYmScOlciaJsGVcSYebDFLPos4ITxnYkBp5inCibMgIlRx9hcjFwAlgFJYxprceX3l4cOZYGavmh74wc3Wcae3D7urbznk-lWJqbAUVbcoHscAQ7NlcKzdbLHIXaoMIEg4A"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us (Bento Grid) */}
      <section className="w-full bg-surface-container py-24">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg font-headline-lg text-primary mb-4">
              Why Choose Food Kashti?
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Experience the warmth of home in every bite, prepared with care
              and delivered with convenience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Bento Item 1 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_4px_24px_rgba(29,27,26,0.08)] flex flex-col items-start gap-4">
              <div className="w-12 h-12 bg-sprout-green rounded-full flex items-center justify-center text-on-secondary-fixed-variant">
                <span
                  className="material-symbols-outlined text-2xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  restaurant
                </span>
              </div>
              <h3 className="text-headline-md font-headline-md text-on-background">
                Authentic Home Recipes
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Prepared by local home chefs using recipes passed down through
                generations, ensuring genuine flavor.
              </p>
            </div>
            {/* Bento Item 2 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_4px_24px_rgba(29,27,26,0.08)] flex flex-col items-start gap-4">
              <div className="w-12 h-12 bg-sprout-green rounded-full flex items-center justify-center text-on-secondary-fixed-variant">
                <span
                  className="material-symbols-outlined text-2xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  eco
                </span>
              </div>
              <h3 className="text-headline-md font-headline-md text-on-background">
                Fresh Ingredients
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                We source locally to ensure every meal is made with the
                freshest seasonal produce available.
              </p>
            </div>
            {/* Bento Item 3 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_4px_24px_rgba(29,27,26,0.08)] flex flex-col items-start gap-4">
              <div className="w-12 h-12 bg-sprout-green rounded-full flex items-center justify-center text-on-secondary-fixed-variant">
                <span
                  className="material-symbols-outlined text-2xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  local_shipping
                </span>
              </div>
              <h3 className="text-headline-md font-headline-md text-on-background">
                Reliable Delivery
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Your warm meals are packed securely and delivered to your
                doorstep right when you need them.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
