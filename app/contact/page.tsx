export default function Contact() {
  return (
    <div className="flex flex-col gap-16 py-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto flex flex-col gap-6">
        <h1 className="text-display-lg font-display-lg text-primary">
          Get in Touch
        </h1>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          We'd love to hear from you. Whether you have a question about our meal
          plans, delivery areas, or just want to say hi, drop us a message.
        </p>
      </section>

      {/* Contact Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-gutter lg:gap-16 items-start">
        {/* Contact Info & Image */}
        <div className="flex flex-col gap-8">
          {/* Info Cards Bento */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-[0_4px_24px_rgba(29,27,26,0.08)] flex flex-col gap-4 border border-outline-variant/30 hover:border-hearth-orange/50 transition-colors">
              <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center text-hearth-orange">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <h3 className="text-label-lg font-label-lg text-primary mb-1">
                  Call Us
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant font-medium">
                  +91 800 8984 800
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-[0_4px_24px_rgba(29,27,26,0.08)] flex flex-col gap-4 border border-outline-variant/30 hover:border-hearth-orange/50 transition-colors">
              <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center text-hearth-orange">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <h3 className="text-label-lg font-label-lg text-primary mb-1">
                  Email
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant">
                  hello@foodkashti.in
                </p>
              </div>
            </div>
          </div>
          {/* Reference Image */}
          <div className="rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(29,27,26,0.12)] border-2 border-white">
            <img
              alt="Contact reference image"
              className="w-full h-auto object-cover aspect-[1.97]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuABDUBrNjC9DMG1oH0j2yO1pEjFH5I9OAnLMxxKradlHJxF2ZwPUxtMljO_wWY5lBuGR_h7HKYRVOL9qFaESLmnLqf1O-4M88GdRn8hlqYGxpQGKc5lNCiz7XPO4aznkyf6jOY8txhNQKj_VRGy6pwsojC59_R8_bnFiSeVV8ECi3ybsFn5LWbhlr15if21qOdtDHUS80HC4hKOkmEQs_APzyC5MAraKRoCRcWA2GMmMmVdViFo3ABp2Z7fWTTWL8qeDcY"
            />
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-[0_8px_32px_rgba(29,27,26,0.08)] border border-outline-variant/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-sprout-green/20 rounded-bl-full -z-0"></div>
          <h2 className="text-headline-md font-headline-md text-primary mb-6 relative z-10">
            Send a Message
          </h2>
          <form className="flex flex-col gap-6 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label
                  className="text-label-sm font-label-sm text-on-surface-variant"
                  htmlFor="first-name"
                >
                  First Name
                </label>
                <input
                  className="w-full bg-cream-shell border border-outline-variant rounded-lg px-4 py-3 text-body-md font-body-md focus:outline-none focus:border-hearth-orange focus:ring-1 focus:ring-hearth-orange transition-colors placeholder:text-on-surface-variant/50"
                  id="first-name"
                  placeholder="Jane"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-label-sm font-label-sm text-on-surface-variant"
                  htmlFor="last-name"
                >
                  Last Name
                </label>
                <input
                  className="w-full bg-cream-shell border border-outline-variant rounded-lg px-4 py-3 text-body-md font-body-md focus:outline-none focus:border-hearth-orange focus:ring-1 focus:ring-hearth-orange transition-colors placeholder:text-on-surface-variant/50"
                  id="last-name"
                  placeholder="Doe"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-label-sm font-label-sm text-on-surface-variant"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="w-full bg-cream-shell border border-outline-variant rounded-lg px-4 py-3 text-body-md font-body-md focus:outline-none focus:border-hearth-orange focus:ring-1 focus:ring-hearth-orange transition-colors placeholder:text-on-surface-variant/50"
                id="email"
                placeholder="jane@example.com"
                type="email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-label-sm font-label-sm text-on-surface-variant"
                htmlFor="subject"
              >
                Subject
              </label>
              <select
                className="w-full bg-cream-shell border border-outline-variant rounded-lg px-4 py-3 text-body-md font-body-md focus:outline-none focus:border-hearth-orange focus:ring-1 focus:ring-hearth-orange transition-colors appearance-none bg-no-repeat bg-[right_1rem_center]"
                id="subject"
                style={{
                  backgroundImage:
                    "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%238a7266%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')",
                }}
              >
                <option value="general">General Inquiry</option>
                <option value="delivery">Delivery Issues</option>
                <option value="meal-plans">Meal Plans &amp; Pricing</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-label-sm font-label-sm text-on-surface-variant"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full bg-cream-shell border border-outline-variant rounded-lg px-4 py-3 text-body-md font-body-md focus:outline-none focus:border-hearth-orange focus:ring-1 focus:ring-hearth-orange transition-colors placeholder:text-on-surface-variant/50 resize-none"
                id="message"
                placeholder="How can we help you today?"
                rows={4}
              ></textarea>
            </div>
            <button
              className="w-full bg-hearth-orange text-white py-4 rounded-full text-label-lg font-label-lg hover:bg-primary-container transition-colors shadow-sm active:scale-95 flex justify-center items-center gap-2 mt-2"
              type="submit"
            >
              Send Message
              <span className="material-symbols-outlined text-[20px]">
                send
              </span>
            </button>
          </form>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="w-full bg-white rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(29,27,26,0.08)] border border-outline-variant/20 flex flex-col">
        <div className="p-6 border-b border-outline-variant/30 flex justify-between items-center">
          <h2 className="text-headline-md font-headline-md text-primary">
            Our Service Area
          </h2>
          <span className="bg-sprout-green/30 text-on-secondary-fixed-variant px-3 py-1 rounded-full text-label-sm font-label-sm flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">
              location_on
            </span>
            Currently serving select areas
          </span>
        </div>
        <div className="w-full h-[400px] bg-surface-container relative">
          <div
            className="bg-cover bg-center w-full h-full"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSmqzNT3L4j6hIzG1rXqUCbdX6V0B_SkNY8Uw2e-2eUDZ0uX96WRM1SvbX5d62AALGLsJ7P0Yxw95USLFwMkzPVoyMbAxVqRTYpqlGZDr91EP5kry5PraH2xWyLO7CT8-AeskiOCzq18nNI4nyQdMQBa8PT1dMVDPkPwNMUlD_YoBhO5Ek30B9dGIomz6n80sByVy5Efer66rs8gV8dT6fHnw2zSyY_cyIXqXpxD8VCiuvuR7ETaOqTA')",
            }}
          ></div>
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-outline-variant/30">
            <p className="text-label-lg font-label-lg text-primary">
              Headquarters
            </p>
            <p className="text-body-md font-body-md text-on-surface-variant">
              New Delhi, India
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto w-full py-8">
        <h2 className="text-headline-lg md:font-headline-lg font-headline-lg-mobile text-center text-primary mb-12">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-4">
          {/* FAQ Item 1 */}
          <div className="bg-white rounded-xl border border-outline-variant/30 overflow-hidden group hover:border-hearth-orange/40 transition-colors shadow-sm">
            <details className="w-full" open>
              <summary className="w-full px-6 py-5 flex justify-between items-center cursor-pointer list-none text-label-lg font-label-lg text-primary select-none">
                What areas do you currently deliver to?
                <span className="material-symbols-outlined text-hearth-orange transition-transform duration-300 group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="px-6 pb-5 pt-0 text-body-md font-body-md text-on-surface-variant border-t border-outline-variant/10 mt-2">
                <p>
                  We currently deliver across major metropolitan areas in Delhi
                  NCR, Mumbai, and Bangalore. We are actively expanding our
                  service areas to bring home-cooked vitality to more
                  neighborhoods. Please enter your pin code during signup to
                  verify serviceability in your exact location.
                </p>
              </div>
            </details>
          </div>
          {/* FAQ Item 2 */}
          <div className="bg-white rounded-xl border border-outline-variant/30 overflow-hidden group hover:border-hearth-orange/40 transition-colors shadow-sm">
            <details className="w-full">
              <summary className="w-full px-6 py-5 flex justify-between items-center cursor-pointer list-none text-label-lg font-label-lg text-primary select-none">
                Do you cater to specific dietary requirements (Vegan,
                Gluten-Free)?
                <span className="material-symbols-outlined text-hearth-orange transition-transform duration-300 group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="px-6 pb-5 pt-0 text-body-md font-body-md text-on-surface-variant border-t border-outline-variant/10 mt-2">
                <p>
                  Yes! Look for our "Sprout Green" tags on the menu. We offer
                  dedicated meal plans for Vegetarian, Vegan, and Gluten-Free
                  diets. All meals are prepared in hygienic kitchens with strict
                  cross-contamination protocols, ensuring you get safe,
                  nutritious, and delicious food tailored to your needs.
                </p>
              </div>
            </details>
          </div>
          {/* FAQ Item 3 */}
          <div className="bg-white rounded-xl border border-outline-variant/30 overflow-hidden group hover:border-hearth-orange/40 transition-colors shadow-sm">
            <details className="w-full">
              <summary className="w-full px-6 py-5 flex justify-between items-center cursor-pointer list-none text-label-lg font-label-lg text-primary select-none">
                How do I change my meal plan or pause my subscription?
                <span className="material-symbols-outlined text-hearth-orange transition-transform duration-300 group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="px-6 pb-5 pt-0 text-body-md font-body-md text-on-surface-variant border-t border-outline-variant/10 mt-2">
                <p>
                  You can manage your subscription easily through your account
                  dashboard. Simply log in, navigate to 'My Plan', and select
                  'Pause Subscription' or 'Modify Plan'. Please ensure you make
                  these changes at least 24 hours before your next scheduled
                  delivery to allow our kitchen to adjust preparations.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
