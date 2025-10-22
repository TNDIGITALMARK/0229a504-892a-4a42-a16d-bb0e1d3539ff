'use client'

import { useEffect, useRef } from 'react'
import { Chart, registerables } from 'chart.js'
import type { CalculationResults } from '@/lib/nutritionData'

Chart.register(...registerables)

interface ResultsDashboardProps {
  results: CalculationResults
}

export function ResultsDashboard({ results }: ResultsDashboardProps) {
  const pieChartRef = useRef<HTMLCanvasElement>(null)
  const barChartRef = useRef<HTMLCanvasElement>(null)
  const pieChartInstance = useRef<Chart | null>(null)
  const barChartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    // Destroy existing charts
    if (pieChartInstance.current) {
      pieChartInstance.current.destroy()
    }
    if (barChartInstance.current) {
      barChartInstance.current.destroy()
    }

    // Create Pie Chart for Nutrient Distribution
    if (pieChartRef.current) {
      const ctx = pieChartRef.current.getContext('2d')
      if (ctx) {
        pieChartInstance.current = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Protein', 'Carbs', 'Fats'],
            datasets: [{
              data: [
                results.totals.protein * 4, // protein calories
                results.totals.carbs * 4,   // carb calories
                results.totals.fats * 9     // fat calories
              ],
              backgroundColor: [
                'hsl(210, 70%, 55%)',  // Blue for protein
                'hsl(35, 95%, 65%)',   // Orange for carbs
                'hsl(140, 70%, 50%)'   // Green for fats
              ],
              borderWidth: 0
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  font: {
                    size: 14,
                    family: "'Inter', sans-serif"
                  },
                  padding: 15
                }
              },
              title: {
                display: true,
                text: 'Nutrition Distribution',
                font: {
                  size: 18,
                  weight: 'bold',
                  family: "'Inter', sans-serif"
                },
                padding: 20
              }
            }
          }
        })
      }
    }

    // Create Bar Chart for Food Waste
    if (barChartRef.current) {
      const ctx = barChartRef.current.getContext('2d')
      if (ctx) {
        const wasteData = results.meals.map(meal => meal.food.wastePercentage)
        const mealLabels = results.meals.map(meal => meal.meal)
        const backgroundColors = results.meals.map(meal => {
          if (meal.wasteStatus === 'low') return 'hsl(140, 70%, 50%)'
          if (meal.wasteStatus === 'medium') return 'hsl(35, 95%, 65%)'
          return 'hsl(5, 75%, 58%)'
        })

        barChartInstance.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: mealLabels,
            datasets: [{
              label: 'Waste %',
              data: wasteData,
              backgroundColor: backgroundColors,
              borderRadius: 6,
              borderSkipped: false
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              legend: {
                display: false
              },
              title: {
                display: true,
                text: 'Food Waste Levels',
                font: {
                  size: 18,
                  weight: 'bold',
                  family: "'Inter', sans-serif"
                },
                padding: 20
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                max: 25,
                ticks: {
                  callback: function(value) {
                    return value + '%'
                  }
                },
                grid: {
                  color: 'hsl(200, 15%, 90%)'
                }
              },
              x: {
                grid: {
                  display: false
                }
              }
            }
          }
        })
      }
    }

    return () => {
      if (pieChartInstance.current) {
        pieChartInstance.current.destroy()
      }
      if (barChartInstance.current) {
        barChartInstance.current.destroy()
      }
    }
  }, [results])

  const getHealthStatusClass = (status: 'healthy' | 'moderate' | 'unhealthy') => {
    if (status === 'healthy') return 'bg-healthy'
    if (status === 'moderate') return 'bg-moderate'
    return 'bg-unhealthy'
  }

  const getWasteStatusClass = (status: 'low' | 'medium' | 'high') => {
    if (status === 'low') return 'bg-healthy'
    if (status === 'medium') return 'bg-moderate'
    return 'bg-unhealthy'
  }

  return (
    <div className="container mx-auto px-6 space-y-8">
      {/* Results Table */}
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[hsl(var(--foreground))] mb-6">
          Nutrition Analysis Results
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[hsl(var(--muted))]">
                <th className="p-3 text-left font-semibold">Meal</th>
                <th className="p-3 text-left font-semibold">Food Item</th>
                <th className="p-3 text-center font-semibold">Calories</th>
                <th className="p-3 text-center font-semibold">Protein (g)</th>
                <th className="p-3 text-center font-semibold">Carbs (g)</th>
                <th className="p-3 text-center font-semibold">Fats (g)</th>
                <th className="p-3 text-center font-semibold">Waste %</th>
                <th className="p-3 text-center font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {results.meals.map((meal, index) => (
                <tr key={index} className="border-b border-[hsl(var(--border))] hover:bg-[hsl(var(--accent))] transition-colors">
                  <td className="p-3 font-medium">{meal.meal}</td>
                  <td className="p-3">{meal.food.displayName}</td>
                  <td className="p-3 text-center">{meal.food.calories}</td>
                  <td className="p-3 text-center">{meal.food.protein}</td>
                  <td className="p-3 text-center">{meal.food.carbs}</td>
                  <td className="p-3 text-center">{meal.food.fats}</td>
                  <td className="p-3 text-center">
                    <span className={`px-2 py-1 rounded text-sm ${getWasteStatusClass(meal.wasteStatus)}`}>
                      {meal.food.wastePercentage}%
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getHealthStatusClass(meal.healthStatus)}`}>
                      {meal.healthStatus === 'healthy' ? '✓ Healthy' : meal.healthStatus === 'moderate' ? '⚠ Moderate' : '✗ High Cal'}
                    </span>
                  </td>
                </tr>
              ))}
              <tr className="bg-[hsl(var(--muted))] font-bold">
                <td className="p-3" colSpan={2}>TOTAL</td>
                <td className="p-3 text-center">{results.totals.calories}</td>
                <td className="p-3 text-center">{results.totals.protein.toFixed(1)}</td>
                <td className="p-3 text-center">{results.totals.carbs.toFixed(1)}</td>
                <td className="p-3 text-center">{results.totals.fats.toFixed(1)}</td>
                <td className="p-3 text-center">{results.totals.waste.toFixed(1)}%</td>
                <td className="p-3"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pie Chart */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <canvas ref={pieChartRef}></canvas>
        </div>

        {/* Bar Chart */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <canvas ref={barChartRef}></canvas>
        </div>
      </div>

      {/* AI Suggestions */}
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold text-[hsl(var(--foreground))] mb-4">
          AI Recommendations
        </h3>
        <div className="space-y-3">
          {results.suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="flex gap-3 p-4 bg-[hsl(var(--accent))] rounded-lg border-l-4 border-[hsl(var(--primary))] hover:shadow-md transition-shadow"
            >
              <span className="text-xl flex-shrink-0">💡</span>
              <p className="text-[hsl(var(--foreground))]">{suggestion}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Color Legend */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold text-[hsl(var(--foreground))] mb-4">
          Color Coding Legend
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-healthy"></div>
            <span className="text-sm">Healthy / Low Waste</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-moderate"></div>
            <span className="text-sm">Moderate</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-unhealthy"></div>
            <span className="text-sm">High Calories / High Waste</span>
          </div>
        </div>
      </div>
    </div>
  )
}
