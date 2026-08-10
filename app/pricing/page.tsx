export default function Pricing() {
  return (
    <>
      <section className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <h1 className="text-display-lg font-display-lg text-earth-black mb-6">
          Home-Cooked Vitality, Delivered.
        </h1>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
          Choose a plan that fits your lifestyle. Honest ingredients, comforting
          recipes, and seamless delivery straight to your door.
        </p>
        <div className="inline-flex items-center gap-2 bg-surface-container-low p-1 rounded-full border border-outline-variant mb-16">
          <button className="bg-surface-container-lowest text-primary px-6 py-2 rounded-full text-label-lg font-label-lg shadow-sm border border-outline-variant/50 transition-all">
            Tiffin Plans
          </button>
          <button className="text-on-surface-variant px-6 py-2 rounded-full text-label-lg font-label-lg hover:text-primary transition-all">
            A La Carte
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter text-left">
          <article className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant hover:border-hearth-orange transition-colors group relative flex flex-col h-full shadow-[0_4px_24px_rgba(29,27,26,0.04)]">
            <div className="h-56 overflow-hidden relative">
              <img
                alt="Daily Trial Tiffin"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida/AP1WRLuivdMLd1WZ_1VTi-hRYOuBSnCmPGB9WmRjzLFkCTwylebeM3WI_Znk_RU-aGyMbKNLHQggqc16deBL8cLUM9D8gmlEk5PJz6UOGhFMrnuUv0Y8qcVKDjrCPmdxeCQQyAHxL32o9rnWjmknYSWT1cY92WnE1CDi6rZrCc4tze4bsXMTJI7yxXJtReZTedKvvVGCs8-mQhBZ5hgBGtYuXZMtuBpFmMUSG9Jz4D7PJr6sH3CTt0EoREBP8mws"
              />
              <div className="absolute top-4 left-4 bg-sprout-green text-earth-black px-3 py-1 rounded-full text-label-sm font-label-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  eco
                </span>{" "}
                100% Veg
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-headline-md font-headline-md text-earth-black">
                  Daily Trial
                </h3>
              </div>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-grow">
                Perfect for tasting the comfort. Includes 1 dry sabzi, 1 dal/gravy,
                rice, 4 rotis, and salad.
              </p>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-display-lg font-display-lg text-primary">
                  ₹120
                </span>
                <span className="text-body-md font-body-md text-on-surface-variant">
                  / meal
                </span>
              </div>
              <button className="w-full py-3 rounded-full border border-hearth-orange text-hearth-orange hover:bg-hearth-orange hover:text-white transition-colors text-label-lg font-label-lg text-center">
                Order Now
              </button>
            </div>
          </article>
          <article className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant hover:border-hearth-orange transition-colors group relative flex flex-col h-full shadow-[0_8px_32px_rgba(29,27,26,0.06)] transform md:-translate-y-4">
            <div className="absolute top-0 inset-x-0 h-1 bg-hearth-orange z-10"></div>
            <div className="absolute top-4 right-4 bg-surface-container-lowest text-hearth-orange px-3 py-1 rounded-full text-label-sm font-label-sm border border-outline-variant shadow-sm z-10">
              Most Popular
            </div>
            <div className="h-56 overflow-hidden relative">
              <img
                alt="Weekly Comfort Tiffin"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida/AP1WRLssnE6QWKM3X_w_IOoXm6zh_cHf4siawhTM9BYGDK-l_cAYszMryHwNTrkjUrPywfhxCXidtp-FuXhvXMNDOq4mg_5EsSqp4sbdzJl9bUG11vrIJSNiTOGzu_BIX63MLl-Ss2tWK5t9FyGs9EhPwyegMVqZqHsBs59DCYwEMJ3dfRvxGoNyJINKmWN-6td68nB_Nc-DXNGNxLcxPD5QfIFGFte3RI-mAqW20oD50CKxpCU69xB_5STaB7Q"
              />
              <div className="absolute top-4 left-4 bg-sprout-green text-earth-black px-3 py-1 rounded-full text-label-sm font-label-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  eco
                </span>{" "}
                100% Veg
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-headline-md font-headline-md text-earth-black mb-2">
                Weekly Comfort
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-grow">
                A week of worry-free lunches. Rotating menu featuring local
                favorites and comforting classics.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center gap-2 text-body-md font-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-sprout-green text-[20px]">
                    check_circle
                  </span>{" "}
                  6 Meals Included
                </li>
                <li className="flex items-center gap-2 text-body-md font-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-sprout-green text-[20px]">
                    check_circle
                  </span>{" "}
                  Free Delivery
                </li>
              </ul>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-display-lg font-display-lg text-primary">
                  ₹650
                </span>
                <span className="text-body-md font-body-md text-on-surface-variant">
                  / week
                </span>
              </div>
              <button className="w-full py-3 rounded-full bg-hearth-orange text-white hover:bg-surface-tint transition-colors text-label-lg font-label-lg text-center shadow-sm">
                Subscribe Weekly
              </button>
            </div>
          </article>
          <article className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant hover:border-hearth-orange transition-colors group relative flex flex-col h-full shadow-[0_4px_24px_rgba(29,27,26,0.04)]">
            <div className="h-56 overflow-hidden relative">
              <img
                alt="Monthly Vitality Tiffin"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida/AP1WRLutoqub-_zseUuuUk3oC_hBMqwovooSJLpAncaCV_k9RYQW_OXqJjI1ssx5asZ81IhQr2vRLtKpJSaY6uwvlviiIPkXdiMcq4GsxWDDg1qD7q4pEU8yh9dmyHszvXjwpRzvKJUj547MkmKjs4mr6tmJRiQwzDgnoUQn_vC2lTua1WV4z71VrUEys0CpuCiMZsEjtssHaKnBOiyztzdG43D1Z7AOVXuxvnpmDkeD-Sg7Ku4qxGZXwSyBdfXl"
              />
              <div className="absolute top-4 left-4 bg-sprout-green text-earth-black px-3 py-1 rounded-full text-label-sm font-label-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  eco
                </span>{" "}
                100% Veg
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-headline-md font-headline-md text-earth-black mb-2">
                Monthly Vitality
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-grow">
                The ultimate convenience. A full month of diverse, nutritious
                meals delivered with priority.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center gap-2 text-body-md font-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-sprout-green text-[20px]">
                    check_circle
                  </span>{" "}
                  24 Meals Included
                </li>
                <li className="flex items-center gap-2 text-body-md font-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-sprout-green text-[20px]">
                    check_circle
                  </span>{" "}
                  Weekend Specials
                </li>
              </ul>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-display-lg font-display-lg text-primary">
                  ₹2400
                </span>
                <span className="text-body-md font-body-md text-on-surface-variant">
                  / month
                </span>
              </div>
              <button className="w-full py-3 rounded-full border border-hearth-orange text-hearth-orange hover:bg-hearth-orange hover:text-white transition-colors text-label-lg font-label-lg text-center">
                Subscribe Monthly
              </button>
            </div>
          </article>
        </div>
      </section>
      <section className="bg-surface-container py-16 md:py-24">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-headline-lg font-headline-lg text-earth-black mb-6">
                How Food Kashti Works
              </h2>
              <p className="text-body-lg font-body-lg text-on-surface-variant mb-12">
                We believe in a transparent process that bridges the gap between
                our kitchen and your dining table.
              </p>
              <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-[19px] before:w-[2px] before:bg-outline-variant">
                <div className="flex gap-6 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-sprout-green flex items-center justify-center border-4 border-surface-container shrink-0">
                    <span className="material-symbols-outlined text-on-secondary-fixed text-[20px]">
                      restaurant
                    </span>
                  </div>
                  <div>
                    <h4 className="text-headline-md font-headline-md text-earth-black mb-2">
                      1. Fresh Preparation
                    </h4>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      Meals are cooked daily using fresh, locally sourced
                      ingredients. No preservatives, just honest food.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-cream-shell flex items-center justify-center border-4 border-surface-container shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      inventory_2
                    </span>
                  </div>
                  <div>
                    <h4 className="text-headline-md font-headline-md text-earth-black mb-2">
                      2. Hygienic Packaging
                    </h4>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      We use food-grade, leak-proof bento boxes to ensure your
                      meal arrives warm and neatly portioned.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-cream-shell flex items-center justify-center border-4 border-surface-container shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      local_shipping
                    </span>
                  </div>
                  <div>
                    <h4 className="text-headline-md font-headline-md text-earth-black mb-2">
                      3. Timely Delivery
                    </h4>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      Our dedicated delivery partners ensure your tiffin reaches
                      your home or office exactly when you need it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(29,27,26,0.08)] relative h-96">
              <img
                alt="A chef arranging food in bento boxes"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHtiXrPcomjz-zqqvOjvFouXfHHUsyyz8cJmrRbETU5gZ3LcVroaPsH5ibbzHaRVrdY0dNSG3VUQ6M2_dVlYwP38L9YoQNvQ_p5vqLR00PBD_cPpVgwN7brGaPJIYpx5nOJgbmW9BSnMblzVg6IZrVAu_UEua5YbQxeL5icNZFz7QqKixrz15vIDHHZAL-lJVg-kAsY0G2bvQZ0cEuAmgvJCvcfzib0UPwO2OBhsXAq3KVxAMAj2H1sA"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
