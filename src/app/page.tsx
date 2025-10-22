'use client'

import { useState } from 'react'
import { NutritionCalculator } from '@/components/NutritionCalculator'
import { ResultsDashboard } from '@/components/ResultsDashboard'
import { EducationSection } from '@/components/EducationSection'

export default function Home() {
  const [currentTab, setCurrentTab] = useState<'input' | 'results' | 'education'>('input')
  const [calculationResults, setCalculationResults] = useState<any>(null)

  const handleCalculate = (results: any) => {
    setCalculationResults(results)
    setCurrentTab('results')
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-[hsl(var(--hero-dark))] text-white overflow-hidden"
        style={{
          backgroundImage: 'url(/generated/hero-molecules.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'hsl(var(--hero-dark))'
        }}
      >
        <div className="absolute inset-0 bg-[hsl(var(--hero-dark))] opacity-85"></div>
        <div className="relative container mx-auto px-6 py-12 md:py-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-5xl">🌱</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
              AI Food & Nutrition Waste Reducer
            </h1>
          </div>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Innovate Your Plate: Smart Sustainability for Class 10 Science
          </p>
          <p className="mt-4 text-base md:text-lg text-white/80 max-w-2xl mx-auto">
            Enter your meals to see nutrition info, estimated food waste, and healthy alternatives
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b-2 border-[hsl(var(--border))] sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex gap-1">
            <button
              onClick={() => setCurrentTab('input')}
              className={`px-6 py-3 font-semibold text-sm transition-all ${
                currentTab === 'input'
                  ? 'text-[hsl(var(--primary))] border-b-2 border-[hsl(var(--primary))]'
                  : 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentTab('results')}
              className={`px-6 py-3 font-semibold text-sm transition-all ${
                currentTab === 'results'
                  ? 'text-[hsl(var(--primary))] border-b-2 border-[hsl(var(--primary))]'
                  : 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]'
              }`}
              disabled={!calculationResults}
            >
              Dashboard
            </button>
            <button
              onClick={() => setCurrentTab('education')}
              className={`px-6 py-3 font-semibold text-sm transition-all ${
                currentTab === 'education'
                  ? 'text-[hsl(var(--primary))] border-b-2 border-[hsl(var(--primary))]'
                  : 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]'
              }`}
            >
              About
            </button>
            <button className="px-6 py-3 font-semibold text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]">
              Features
            </button>
            <button className="px-6 py-3 font-semibold text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]">
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-8 md:py-12">
        {currentTab === 'input' && (
          <NutritionCalculator onCalculate={handleCalculate} />
        )}
        {currentTab === 'results' && calculationResults && (
          <ResultsDashboard results={calculationResults} />
        )}
        {currentTab === 'education' && (
          <EducationSection />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[hsl(var(--border))] py-6 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-[hsl(var(--muted-foreground))] mb-3">
            Contact: <a href="mailto:info@nutrition.com" className="text-[hsl(var(--primary))] hover:underline">info@nutrition.com</a>
          </p>
          <div className="flex justify-center gap-6 text-sm text-[hsl(var(--muted-foreground))]">
            <a href="#" className="hover:text-[hsl(var(--primary))]">Privacy Policy</a>
            <a href="#" className="hover:text-[hsl(var(--primary))]">Terms of Service</a>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))/0.8] text-xl">
              📘
            </a>
            <a href="#" className="text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))/0.8] text-xl">
              🐦
            </a>
            <a href="#" className="text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))/0.8] text-xl">
              📷
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
