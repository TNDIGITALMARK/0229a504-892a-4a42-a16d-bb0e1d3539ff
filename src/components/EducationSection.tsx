'use client'

export function EducationSection() {
  return (
    <div className="container mx-auto px-6 space-y-8">
      {/* Introduction */}
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[hsl(var(--foreground))] mb-4">
          About This Project
        </h2>
        <p className="text-lg text-[hsl(var(--foreground))] leading-relaxed mb-4">
          The <strong>AI Food & Nutrition Waste Reducer</strong> is an educational web application
          designed for Class 10 science exhibitions. It demonstrates how artificial intelligence can
          help students make healthier food choices while simultaneously reducing food waste.
        </p>
        <p className="text-base text-[hsl(var(--muted-foreground))] leading-relaxed">
          By analyzing common Indian meals, this tool provides instant feedback on nutritional content,
          estimated food waste, and personalized suggestions for healthier, more sustainable eating habits.
        </p>
      </div>

      {/* How It Works */}
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold text-[hsl(var(--foreground))] mb-6">
          How the AI Works
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[hsl(var(--breakfast-green))] flex items-center justify-center text-2xl">
                1️⃣
              </div>
              <div>
                <h4 className="font-semibold text-[hsl(var(--foreground))] mb-2">Data Collection</h4>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  The system stores nutritional data for common Indian foods including calories, protein,
                  carbohydrates, fats, and estimated waste percentages based on typical consumption patterns.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[hsl(var(--lunch-purple))] flex items-center justify-center text-2xl text-white">
                2️⃣
              </div>
              <div>
                <h4 className="font-semibold text-[hsl(var(--foreground))] mb-2">Analysis Algorithm</h4>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  When you select your meals, the AI calculates total nutrition intake and compares it against
                  recommended daily values for Class 10 students (ages 14-16).
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[hsl(var(--dinner-orange))] flex items-center justify-center text-2xl">
                3️⃣
              </div>
              <div>
                <h4 className="font-semibold text-[hsl(var(--foreground))] mb-2">Waste Estimation</h4>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  The system evaluates food waste based on preparation methods, storage requirements, and
                  typical consumption rates for each food item.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[hsl(var(--snacks-light-green))] flex items-center justify-center text-2xl">
                4️⃣
              </div>
              <div>
                <h4 className="font-semibold text-[hsl(var(--foreground))] mb-2">Smart Suggestions</h4>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  Based on the analysis, the AI generates personalized recommendations for healthier alternatives,
                  portion control, and waste reduction strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Food Waste in India */}
      <div className="bg-gradient-to-br from-[hsl(var(--danger-red))/0.1] to-[hsl(var(--warning-yellow))/0.1] rounded-lg shadow-md p-6 md:p-8 border-2 border-[hsl(var(--danger-red))/0.3]">
        <h3 className="text-xl md:text-2xl font-bold text-[hsl(var(--foreground))] mb-4">
          🚨 Food Waste Crisis in India
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg p-5 text-center shadow-sm">
            <div className="text-4xl font-extrabold text-[hsl(var(--danger-red))] mb-2">68 Million</div>
            <p className="text-sm text-[hsl(var(--muted-foreground))]">Tons of food wasted annually in India</p>
          </div>
          <div className="bg-white rounded-lg p-5 text-center shadow-sm">
            <div className="text-4xl font-extrabold text-[hsl(var(--danger-red))] mb-2">₹92,000 Cr</div>
            <p className="text-sm text-[hsl(var(--muted-foreground))]">Economic value of wasted food per year</p>
          </div>
          <div className="bg-white rounded-lg p-5 text-center shadow-sm">
            <div className="text-4xl font-extrabold text-[hsl(var(--danger-red))] mb-2">40%</div>
            <p className="text-sm text-[hsl(var(--muted-foreground))]">Of food production goes to waste</p>
          </div>
        </div>
        <p className="text-base text-[hsl(var(--foreground))] leading-relaxed">
          <strong>Why it matters:</strong> While 194 million people in India face food insecurity, nearly 40% of
          the food we produce is wasted. By making smarter food choices and reducing waste, we can contribute to
          a more sustainable and equitable food system.
        </p>
      </div>

      {/* Nutrition Basics */}
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold text-[hsl(var(--foreground))] mb-6">
          Understanding Nutrition for Students
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border-2 border-[hsl(var(--primary))] rounded-lg p-5">
            <h4 className="font-bold text-[hsl(var(--primary))] text-lg mb-3">🏋️ Protein</h4>
            <p className="text-sm text-[hsl(var(--foreground))] mb-3">
              Essential for growth, muscle development, and tissue repair. Class 10 students need about
              <strong> 45-52g per day</strong>.
            </p>
            <p className="text-xs text-[hsl(var(--muted-foreground))]">
              <strong>Sources:</strong> Dal, paneer, curd, nuts, eggs, chicken
            </p>
          </div>

          <div className="border-2 border-[hsl(var(--warning-yellow))] rounded-lg p-5">
            <h4 className="font-bold text-[hsl(var(--warning-yellow))] text-lg mb-3">⚡ Carbohydrates</h4>
            <p className="text-sm text-[hsl(var(--foreground))] mb-3">
              Main energy source for physical and mental activities. Aim for <strong>250-300g per day</strong>,
              focusing on complex carbs.
            </p>
            <p className="text-xs text-[hsl(var(--muted-foreground))]">
              <strong>Sources:</strong> Rice, roti, chapati, oats, fruits, vegetables
            </p>
          </div>

          <div className="border-2 border-[hsl(var(--success-green))] rounded-lg p-5">
            <h4 className="font-bold text-[hsl(var(--success-green))] text-lg mb-3">🥑 Healthy Fats</h4>
            <p className="text-sm text-[hsl(var(--foreground))] mb-3">
              Important for brain development and hormone production. Target <strong>50-70g per day</strong>
              from healthy sources.
            </p>
            <p className="text-xs text-[hsl(var(--muted-foreground))]">
              <strong>Sources:</strong> Nuts, seeds, olive oil, ghee (in moderation), fish
            </p>
          </div>
        </div>
      </div>

      {/* Sustainability Tips */}
      <div className="bg-gradient-to-br from-[hsl(var(--success-green))/0.1] to-[hsl(var(--breakfast-green))/0.1] rounded-lg shadow-md p-6 md:p-8 border-2 border-[hsl(var(--success-green))/0.3]">
        <h3 className="text-xl md:text-2xl font-bold text-[hsl(var(--foreground))] mb-6">
          🌱 Simple Ways to Reduce Food Waste
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex gap-3 items-start">
            <span className="text-2xl">📝</span>
            <div>
              <h5 className="font-semibold text-[hsl(var(--foreground))] mb-1">Plan Your Meals</h5>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">
                Make a weekly meal plan and shopping list to buy only what you need
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-2xl">🥡</span>
            <div>
              <h5 className="font-semibold text-[hsl(var(--foreground))] mb-1">Store Properly</h5>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">
                Use airtight containers and refrigerate leftovers promptly to extend food life
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-2xl">♻️</span>
            <div>
              <h5 className="font-semibold text-[hsl(var(--foreground))] mb-1">Compost Scraps</h5>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">
                Turn vegetable peels and food scraps into nutrient-rich compost for plants
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-2xl">🍽️</span>
            <div>
              <h5 className="font-semibold text-[hsl(var(--foreground))] mb-1">Right Portions</h5>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">
                Serve smaller portions and take seconds if still hungry to avoid plate waste
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-2xl">🥗</span>
            <div>
              <h5 className="font-semibold text-[hsl(var(--foreground))] mb-1">Use Leftovers Creatively</h5>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">
                Transform yesterday's dal into parathas or rice into fried rice
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-2xl">🌾</span>
            <div>
              <h5 className="font-semibold text-[hsl(var(--foreground))] mb-1">Choose Seasonal</h5>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">
                Opt for seasonal, local produce - it's fresher, cheaper, and more sustainable
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* References & Methodology */}
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold text-[hsl(var(--foreground))] mb-4">
          Methodology & References
        </h3>
        <div className="space-y-4 text-sm text-[hsl(var(--foreground))]">
          <div>
            <h5 className="font-semibold mb-2">Data Sources:</h5>
            <ul className="list-disc list-inside space-y-1 text-[hsl(var(--muted-foreground))]">
              <li>Indian Food Composition Tables (IFCT 2017) - National Institute of Nutrition</li>
              <li>Food Waste Index Report 2021 - United Nations Environment Programme</li>
              <li>Dietary Guidelines for Indians (2020) - National Institute of Nutrition, Hyderabad</li>
              <li>Food and Agriculture Organization (FAO) waste estimation models</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Calculation Method:</h5>
            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
              The AI uses rule-based algorithms to analyze meal selections against recommended dietary allowances
              for adolescents. Waste percentages are calculated based on food preparation methods, storage requirements,
              and typical consumption patterns from published research on household food waste in India.
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Educational Purpose:</h5>
            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
              This project is designed for educational demonstration at science exhibitions. While the data and
              algorithms are based on scientific research, users should consult nutrition professionals for
              personalized dietary advice.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary))/0.8] text-white rounded-lg shadow-lg p-6 md:p-8 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Join the Challenge! 🌟
        </h3>
        <p className="text-lg mb-6 max-w-3xl mx-auto">
          Track your meals for one week using this tool and see how much waste you can reduce.
          Share your results with your class and inspire others to make sustainable food choices!
        </p>
        <button className="bg-white text-[hsl(var(--primary))] font-bold py-3 px-8 rounded-lg hover:bg-white/90 transition-all shadow-md">
          Start Tracking Today
        </button>
      </div>
    </div>
  )
}
