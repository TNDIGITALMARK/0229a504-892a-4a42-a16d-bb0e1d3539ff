export interface FoodItem {
  id: string
  name: string
  displayName: string
  calories: number
  protein: number
  carbs: number
  fats: number
  wastePercentage: number
}

export interface MealSelection {
  breakfast: string
  lunch: string
  dinner: string
  snacks: string
}

export interface NutritionResult {
  meal: string
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snacks'
  food: FoodItem
  healthStatus: 'healthy' | 'moderate' | 'unhealthy'
  wasteStatus: 'low' | 'medium' | 'high'
}

export interface CalculationResults {
  meals: NutritionResult[]
  totals: {
    calories: number
    protein: number
    carbs: number
    fats: number
    waste: number
  }
  suggestions: string[]
}

// Comprehensive Indian food database with nutrition info
export const foodDatabase: Record<string, FoodItem> = {
  // Breakfast Items
  'idli_2_pieces': {
    id: 'idli_2_pieces',
    name: 'Idli (2 pieces)',
    displayName: '2 Idli (Steamed Rice Cakes)',
    calories: 150,
    protein: 4,
    carbs: 30,
    fats: 1,
    wastePercentage: 5
  },
  'dosa_1_medium': {
    id: 'dosa_1_medium',
    name: 'Dosa (1 medium)',
    displayName: '1 Dosa (Medium)',
    calories: 180,
    protein: 5,
    carbs: 28,
    fats: 5,
    wastePercentage: 8
  },
  'poha_1_bowl': {
    id: 'poha_1_bowl',
    name: 'Poha (1 bowl)',
    displayName: '1 Bowl Poha',
    calories: 250,
    protein: 6,
    carbs: 40,
    fats: 8,
    wastePercentage: 10
  },
  'bread_2_slices': {
    id: 'bread_2_slices',
    name: 'Bread (2 slices)',
    displayName: '2 Slices Bread',
    calories: 160,
    protein: 5,
    carbs: 30,
    fats: 2,
    wastePercentage: 15
  },
  'upma_1_bowl': {
    id: 'upma_1_bowl',
    name: 'Upma (1 bowl)',
    displayName: '1 Bowl Upma',
    calories: 200,
    protein: 5,
    carbs: 35,
    fats: 6,
    wastePercentage: 7
  },
  'paratha_2_pieces': {
    id: 'paratha_2_pieces',
    name: 'Paratha (2 pieces)',
    displayName: '2 Paratha',
    calories: 320,
    protein: 7,
    carbs: 42,
    fats: 14,
    wastePercentage: 10
  },

  // Lunch Items
  'rice_dal_1_plate': {
    id: 'rice_dal_1_plate',
    name: 'Rice + Dal (1 plate)',
    displayName: '1 Plate Rice & Dal',
    calories: 350,
    protein: 12,
    carbs: 65,
    fats: 5,
    wastePercentage: 12
  },
  'roti_vegetables_2_pieces': {
    id: 'roti_vegetables_2_pieces',
    name: 'Roti + Vegetables (2 pieces)',
    displayName: '2 Roti with Vegetables',
    calories: 280,
    protein: 8,
    carbs: 50,
    fats: 6,
    wastePercentage: 8
  },
  'chapati_sabzi_1_serving': {
    id: 'chapati_sabzi_1_serving',
    name: 'Chapati + Sabzi (1 serving)',
    displayName: 'Chapati with Sabzi',
    calories: 300,
    protein: 9,
    carbs: 52,
    fats: 7,
    wastePercentage: 9
  },
  'sambar_rice_1_bowl': {
    id: 'sambar_rice_1_bowl',
    name: 'Sambar Rice (1 bowl)',
    displayName: '1 Bowl Sambar Rice',
    calories: 320,
    protein: 10,
    carbs: 58,
    fats: 6,
    wastePercentage: 11
  },
  'chole_bhature_1_serving': {
    id: 'chole_bhature_1_serving',
    name: 'Chole Bhature (1 serving)',
    displayName: 'Chole Bhature',
    calories: 450,
    protein: 12,
    carbs: 62,
    fats: 18,
    wastePercentage: 15
  },
  'rajma_rice_1_plate': {
    id: 'rajma_rice_1_plate',
    name: 'Rajma Rice (1 plate)',
    displayName: '1 Plate Rajma Rice',
    calories: 380,
    protein: 14,
    carbs: 64,
    fats: 8,
    wastePercentage: 10
  },

  // Dinner Items
  'fried_rice_1_plate': {
    id: 'fried_rice_1_plate',
    name: 'Fried Rice (1 plate)',
    displayName: '1 Plate Fried Rice',
    calories: 400,
    protein: 8,
    carbs: 70,
    fats: 12,
    wastePercentage: 14
  },
  'maggi_1_pack': {
    id: 'maggi_1_pack',
    name: 'Maggi (1 pack)',
    displayName: '1 Pack Maggi Noodles',
    calories: 350,
    protein: 9,
    carbs: 60,
    fats: 14,
    wastePercentage: 5
  },
  'dal_makhani_rice': {
    id: 'dal_makhani_rice',
    name: 'Dal Makhani + Rice',
    displayName: 'Dal Makhani with Rice',
    calories: 420,
    protein: 13,
    carbs: 62,
    fats: 15,
    wastePercentage: 12
  },
  'paneer_roti_serving': {
    id: 'paneer_roti_serving',
    name: 'Paneer + Roti',
    displayName: 'Paneer Curry with Roti',
    calories: 380,
    protein: 16,
    carbs: 48,
    fats: 14,
    wastePercentage: 10
  },
  'biryani_1_plate': {
    id: 'biryani_1_plate',
    name: 'Biryani (1 plate)',
    displayName: '1 Plate Biryani',
    calories: 480,
    protein: 15,
    carbs: 72,
    fats: 16,
    wastePercentage: 18
  },

  // Snacks
  'pakora_4_pieces': {
    id: 'pakora_4_pieces',
    name: 'Pakora (4 pieces)',
    displayName: '4 Pakora',
    calories: 220,
    protein: 4,
    carbs: 22,
    fats: 14,
    wastePercentage: 8
  },
  'samosa_2_pieces': {
    id: 'samosa_2_pieces',
    name: 'Samosa (2 pieces)',
    displayName: '2 Samosa',
    calories: 260,
    protein: 5,
    carbs: 32,
    fats: 14,
    wastePercentage: 10
  },
  'fruits_1_apple': {
    id: 'fruits_1_apple',
    name: 'Fruits (1 apple)',
    displayName: '1 Apple',
    calories: 95,
    protein: 0.5,
    carbs: 25,
    fats: 0.3,
    wastePercentage: 15
  },
  'fruits_1_banana': {
    id: 'fruits_1_banana',
    name: 'Banana (1 medium)',
    displayName: '1 Banana',
    calories: 105,
    protein: 1.3,
    carbs: 27,
    fats: 0.4,
    wastePercentage: 20
  },
  'nuts_handful': {
    id: 'nuts_handful',
    name: 'Nuts (handful)',
    displayName: 'Handful of Mixed Nuts',
    calories: 180,
    protein: 6,
    carbs: 8,
    fats: 16,
    wastePercentage: 5
  },
  'curd_1_bowl': {
    id: 'curd_1_bowl',
    name: 'Curd (1 bowl)',
    displayName: '1 Bowl Curd',
    calories: 120,
    protein: 6,
    carbs: 12,
    fats: 5,
    wastePercentage: 8
  },
  'biscuits_4_pieces': {
    id: 'biscuits_4_pieces',
    name: 'Biscuits (4 pieces)',
    displayName: '4 Biscuits',
    calories: 200,
    protein: 3,
    carbs: 30,
    fats: 8,
    wastePercentage: 5
  }
}

export const mealCategories = {
  breakfast: [
    'idli_2_pieces',
    'dosa_1_medium',
    'poha_1_bowl',
    'bread_2_slices',
    'upma_1_bowl',
    'paratha_2_pieces'
  ],
  lunch: [
    'rice_dal_1_plate',
    'roti_vegetables_2_pieces',
    'chapati_sabzi_1_serving',
    'sambar_rice_1_bowl',
    'chole_bhature_1_serving',
    'rajma_rice_1_plate'
  ],
  dinner: [
    'fried_rice_1_plate',
    'maggi_1_pack',
    'dal_makhani_rice',
    'paneer_roti_serving',
    'biryani_1_plate',
    'rice_dal_1_plate'
  ],
  snacks: [
    'pakora_4_pieces',
    'samosa_2_pieces',
    'fruits_1_apple',
    'fruits_1_banana',
    'nuts_handful',
    'curd_1_bowl',
    'biscuits_4_pieces'
  ]
}

// AI suggestion generation logic
export function generateSuggestions(results: CalculationResults): string[] {
  const suggestions: string[] = []
  const { totals, meals } = results

  // Calorie-based suggestions
  if (totals.calories > 2000) {
    suggestions.push('🔴 High daily calorie intake detected. Consider reducing portion sizes by 15-20%.')
  } else if (totals.calories < 1500) {
    suggestions.push('🟡 Calorie intake is on the lower side. Add nutrient-dense foods like nuts or fruits.')
  } else {
    suggestions.push('🟢 Your calorie intake is within a healthy range for a Class 10 student.')
  }

  // Protein suggestions
  if (totals.protein < 45) {
    suggestions.push('⚠️ Increase protein intake. Add dal, paneer, curd, or nuts to your meals.')
  } else if (totals.protein > 50) {
    suggestions.push('✅ Excellent protein intake! This supports growth and development.')
  }

  // Waste reduction suggestions
  if (totals.waste > 12) {
    suggestions.push('♻️ High food waste detected. Plan meals weekly to reduce over-purchasing.')
    suggestions.push('💡 Store leftovers properly and repurpose them into new meals the next day.')
  } else if (totals.waste > 8) {
    suggestions.push('🟡 Moderate waste levels. Consider composting vegetable scraps to reduce environmental impact.')
  } else {
    suggestions.push('🌱 Great job! Your food choices generate minimal waste.')
  }

  // Meal-specific suggestions
  meals.forEach(meal => {
    if (meal.healthStatus === 'unhealthy') {
      if (meal.food.id === 'maggi_1_pack') {
        suggestions.push(`Replace Maggi with upma or vegetable khichdi for healthier dinner options.`)
      } else if (meal.food.id === 'fried_rice_1_plate') {
        suggestions.push(`Substitute fried rice with steamed rice and vegetable curry to reduce fat intake.`)
      } else if (meal.food.calories > 400) {
        suggestions.push(`${meal.food.displayName} is high in calories. Share the portion or save half for later.`)
      }
    }
  })

  // Balanced diet suggestions
  const carbsPercentage = (totals.carbs * 4 / totals.calories) * 100
  if (carbsPercentage > 60) {
    suggestions.push('🍎 Your diet is carb-heavy. Add more vegetables and protein sources for balance.')
  }

  // Seasonal and sustainable eating
  suggestions.push('🌾 Opt for seasonal fruits and locally grown vegetables to reduce carbon footprint.')

  return suggestions.slice(0, 6) // Limit to 6 suggestions
}

// Health status determination
export function determineHealthStatus(calories: number, fats: number): 'healthy' | 'moderate' | 'unhealthy' {
  if (calories > 450 || fats > 15) return 'unhealthy'
  if (calories > 350 || fats > 10) return 'moderate'
  return 'healthy'
}

// Waste status determination
export function determineWasteStatus(wastePercentage: number): 'low' | 'medium' | 'high' {
  if (wastePercentage <= 7) return 'low'
  if (wastePercentage <= 12) return 'medium'
  return 'high'
}
