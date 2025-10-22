'use client'

import { useState } from 'react'
import {
  foodDatabase,
  mealCategories,
  generateSuggestions,
  determineHealthStatus,
  determineWasteStatus,
  type MealSelection,
  type CalculationResults,
  type NutritionResult
} from '@/lib/nutritionData'

interface NutritionCalculatorProps {
  onCalculate: (results: CalculationResults) => void
}

export function NutritionCalculator({ onCalculate }: NutritionCalculatorProps) {
  const [meals, setMeals] = useState<MealSelection>({
    breakfast: '',
    lunch: '',
    dinner: '',
    snacks: ''
  })

  const handleMealChange = (mealType: keyof MealSelection, foodId: string) => {
    setMeals(prev => ({ ...prev, [mealType]: foodId }))
  }

  const handleCalculate = () => {
    const results: NutritionResult[] = []
    let totalCalories = 0
    let totalProtein = 0
    let totalCarbs = 0
    let totalFats = 0
    let totalWaste = 0
    let mealCount = 0

    // Process each meal
    Object.entries(meals).forEach(([mealType, foodId]) => {
      if (foodId && foodDatabase[foodId]) {
        const food = foodDatabase[foodId]
        const healthStatus = determineHealthStatus(food.calories, food.fats)
        const wasteStatus = determineWasteStatus(food.wastePercentage)

        results.push({
          meal: mealType.charAt(0).toUpperCase() + mealType.slice(1),
          mealType: mealType as 'breakfast' | 'lunch' | 'dinner' | 'snacks',
          food,
          healthStatus,
          wasteStatus
        })

        totalCalories += food.calories
        totalProtein += food.protein
        totalCarbs += food.carbs
        totalFats += food.fats
        totalWaste += food.wastePercentage
        mealCount++
      }
    })

    const averageWaste = mealCount > 0 ? totalWaste / mealCount : 0

    const calculationResults: CalculationResults = {
      meals: results,
      totals: {
        calories: totalCalories,
        protein: totalProtein,
        carbs: totalCarbs,
        fats: totalFats,
        waste: averageWaste
      },
      suggestions: []
    }

    calculationResults.suggestions = generateSuggestions(calculationResults)
    onCalculate(calculationResults)
  }

  const isCalculateDisabled = !meals.breakfast && !meals.lunch && !meals.dinner && !meals.snacks

  return (
    <div className="container mx-auto px-6">
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[hsl(var(--foreground))] mb-6 text-center">
          Meal Input
        </h2>

        {/* Meal Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Breakfast */}
          <div className="space-y-3">
            <label className="block">
              <div className="meal-breakfast text-center py-2 px-4 rounded-lg font-semibold mb-3">
                🍳 Breakfast
              </div>
              <select
                value={meals.breakfast}
                onChange={(e) => handleMealChange('breakfast', e.target.value)}
                className="w-full"
              >
                <option value="">Select Breakfast</option>
                {mealCategories.breakfast.map(foodId => (
                  <option key={foodId} value={foodId}>
                    {foodDatabase[foodId].displayName}
                  </option>
                ))}
              </select>
            </label>
            {meals.breakfast && (
              <div className="text-xs text-[hsl(var(--muted-foreground))] bg-[hsl(var(--muted))] p-2 rounded">
                <p>Calories: {foodDatabase[meals.breakfast].calories} kcal</p>
                <p>Protein: {foodDatabase[meals.breakfast].protein}g</p>
              </div>
            )}
          </div>

          {/* Lunch */}
          <div className="space-y-3">
            <label className="block">
              <div className="meal-lunch text-center py-2 px-4 rounded-lg font-semibold mb-3">
                🍛 Lunch
              </div>
              <select
                value={meals.lunch}
                onChange={(e) => handleMealChange('lunch', e.target.value)}
                className="w-full"
              >
                <option value="">Select Lunch</option>
                {mealCategories.lunch.map(foodId => (
                  <option key={foodId} value={foodId}>
                    {foodDatabase[foodId].displayName}
                  </option>
                ))}
              </select>
            </label>
            {meals.lunch && (
              <div className="text-xs text-[hsl(var(--muted-foreground))] bg-[hsl(var(--muted))] p-2 rounded">
                <p>Calories: {foodDatabase[meals.lunch].calories} kcal</p>
                <p>Protein: {foodDatabase[meals.lunch].protein}g</p>
              </div>
            )}
          </div>

          {/* Dinner */}
          <div className="space-y-3">
            <label className="block">
              <div className="meal-dinner text-center py-2 px-4 rounded-lg font-semibold mb-3">
                🍲 Dinner
              </div>
              <select
                value={meals.dinner}
                onChange={(e) => handleMealChange('dinner', e.target.value)}
                className="w-full"
              >
                <option value="">Select Dinner</option>
                {mealCategories.dinner.map(foodId => (
                  <option key={foodId} value={foodId}>
                    {foodDatabase[foodId].displayName}
                  </option>
                ))}
              </select>
            </label>
            {meals.dinner && (
              <div className="text-xs text-[hsl(var(--muted-foreground))] bg-[hsl(var(--muted))] p-2 rounded">
                <p>Calories: {foodDatabase[meals.dinner].calories} kcal</p>
                <p>Protein: {foodDatabase[meals.dinner].protein}g</p>
              </div>
            )}
          </div>

          {/* Snacks */}
          <div className="space-y-3">
            <label className="block">
              <div className="meal-snacks text-center py-2 px-4 rounded-lg font-semibold mb-3">
                🍎 Snacks
              </div>
              <select
                value={meals.snacks}
                onChange={(e) => handleMealChange('snacks', e.target.value)}
                className="w-full"
              >
                <option value="">Select Snacks</option>
                {mealCategories.snacks.map(foodId => (
                  <option key={foodId} value={foodId}>
                    {foodDatabase[foodId].displayName}
                  </option>
                ))}
              </select>
            </label>
            {meals.snacks && (
              <div className="text-xs text-[hsl(var(--muted-foreground))] bg-[hsl(var(--muted))] p-2 rounded">
                <p>Calories: {foodDatabase[meals.snacks].calories} kcal</p>
                <p>Protein: {foodDatabase[meals.snacks].protein}g</p>
              </div>
            )}
          </div>
        </div>

        {/* Calculate Button */}
        <div className="text-center">
          <button
            onClick={handleCalculate}
            disabled={isCalculateDisabled}
            className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))/0.9] text-white font-bold py-3 px-12 rounded-lg text-lg shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
          >
            Calculate
          </button>
          {isCalculateDisabled && (
            <p className="mt-3 text-sm text-[hsl(var(--muted-foreground))]">
              Please select at least one meal to calculate
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
