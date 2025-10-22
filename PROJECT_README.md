# 🌱 AI Food & Nutrition Waste Reducer

**Educational Web Application for Class 10 Science Exhibition**

---

## 📋 Project Overview

The AI Food & Nutrition Waste Reducer is a fully interactive, visually appealing educational website that demonstrates how artificial intelligence can help students make healthier food choices while reducing food waste. Perfect for science exhibitions, this tool provides instant nutrition analysis and waste reduction suggestions for common Indian meals.

---

## ✨ Features Implemented

### 🍽️ **Meal Input System**
- **Four meal categories**: Breakfast, Lunch, Dinner, Snacks
- **Dropdown menus** with 25+ authentic Indian food items including:
  - Breakfast: Idli, Dosa, Poha, Bread, Upma, Paratha
  - Lunch: Rice+Dal, Roti+Vegetables, Chapati+Sabzi, Sambar Rice, Chole Bhature, Rajma Rice
  - Dinner: Fried Rice, Maggi, Dal Makhani, Paneer Curry, Biryani
  - Snacks: Pakora, Samosa, Fruits, Nuts, Curd, Biscuits
- **Real-time preview** of calories and protein as you select meals

### 📊 **Calculate Functionality**
- **Instant analysis** of all selected meals
- Calculates per-meal and total:
  - Calories (kcal)
  - Protein (g)
  - Carbohydrates (g)
  - Fats (g)
  - Estimated Food Waste (%)

### 📈 **Results Dashboard**
- **Comprehensive data table** showing meal-wise breakdown
- **Color-coded status indicators**:
  - 🟢 Green = Healthy / Low waste (≤7% waste, <350 cal)
  - 🟡 Yellow = Moderate (8-12% waste, 350-450 cal)
  - 🔴 Red = High calories / High waste (>12% waste, >450 cal)
- **Interactive Charts** (powered by Chart.js):
  - **Pie Chart**: Nutrient distribution (Protein, Carbs, Fats)
  - **Bar Chart**: Food waste levels by meal

### 🤖 **AI-Generated Suggestions**
- Intelligent recommendations based on:
  - Total calorie intake
  - Protein balance
  - Waste levels
  - Meal composition
- Actionable advice like:
  - "Reduce portion size by 20%"
  - "Substitute white rice with brown rice"
  - "Plan meals weekly to reduce over-purchasing"
  - "Compost organic scraps"

### 📚 **Educational Section**
- Comprehensive information about:
  - How the AI algorithm works
  - Food waste crisis in India (68 million tons/year)
  - Nutrition basics for students
  - Sustainability tips
  - Methodology and scientific references

### 🎨 **Design & Layout**
- **Exhibition-friendly bright colors** matching the design reference:
  - Light blue-gray background (#EBF4F8)
  - Dark navy hero section (#2C3E50)
  - Vibrant meal category colors (mint green, lavender, orange, light green)
  - Professional blue calculate button (#4A90E2)
- **Clean, responsive layout** optimized for laptop screens
- **Inter font family** for modern, readable typography
- **Sectioned layout** with proper spacing and visual hierarchy
- **Interactive hover effects** on all clickable elements
- **Smooth transitions** and animations throughout

---

## 🚀 Two Ways to Use This Application

### **Option 1: Next.js Web Application** (Recommended for Production)

The main implementation is a modern Next.js application with:
- Server-side rendering for fast performance
- React components for maintainability
- TypeScript for type safety
- Responsive design for all devices

**To run the Next.js app:**
```bash
npm install
npm run dev
```
Open http://localhost:4006 in your browser

**Key Files:**
- `src/app/page.tsx` - Main application page
- `src/components/NutritionCalculator.tsx` - Meal input interface
- `src/components/ResultsDashboard.tsx` - Results and charts
- `src/components/EducationSection.tsx` - Educational content
- `src/lib/nutritionData.ts` - Food database and AI logic
- `src/app/globals.css` - Design system and global styles

### **Option 2: Standalone HTML File** (Perfect for Zylo Embed)

For easy embedding in platforms like Zylo or running directly in a browser, use the standalone HTML file:

**Location:** `public/standalone.html`

**Features:**
- ✅ Complete working code in a single HTML file
- ✅ Embedded CSS and JavaScript
- ✅ Chart.js loaded via CDN
- ✅ No build process required
- ✅ Works offline (after initial load)
- ✅ Copy and paste directly into Zylo Embed block

**To use the standalone version:**
1. Open `public/standalone.html` in any web browser
2. OR copy the entire file content into a Zylo Embed HTML block
3. OR host it on any web server

---

## 🎨 Design System

### **Colors** (Exact HSL values from design reference)
```css
/* Background */
--background: 200 25% 95%           /* #EBF4F8 */

/* Hero Section */
--hero-dark: 210 20% 20%            /* #2C3E50 */

/* Primary Actions */
--primary: 210 70% 55%              /* #4A90E2 */

/* Meal Categories */
--breakfast-green: 165 65% 60%      /* #7DD3C0 */
--lunch-purple: 260 65% 70%         /* #A78BFA */
--dinner-orange: 35 95% 65%         /* #FDB756 */
--snacks-light-green: 120 55% 75%   /* #A4E8A4 */

/* Status Indicators */
--success-green: 140 70% 50%        /* #4CAF50 */
--warning-yellow: 35 95% 65%        /* #FDB756 */
--danger-red: 5 75% 58%             /* #EF5350 */
```

### **Typography**
- **Font Family**: Inter (Google Fonts)
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold), 800 (Extra-bold)
- **Heading Sizes**:
  - H1: 2.25rem (36px) - Exhibition headers
  - H2: 1.875rem (30px) - Section headers
  - H3: 1.5rem (24px) - Subsections
- **Body Text**: 1rem (16px)

### **Spacing System**
- XS: 0.5rem (8px)
- SM: 0.75rem (12px)
- MD: 1rem (16px)
- LG: 1.5rem (24px)
- XL: 2rem (32px)
- 2XL: 3rem (48px)

### **Visual Assets**
- **Hero Background**: AI-generated molecular structure graphic (`public/generated/hero-molecules.png`)
- **Color-coded meal badges** with rounded corners
- **Interactive charts** with smooth animations
- **Shadow system** for depth and hierarchy

---

## 📊 Food Database

The application includes a comprehensive database of 25+ Indian food items with accurate nutrition data:

**Nutrition Information Per Item:**
- Calories (kcal)
- Protein (grams)
- Carbohydrates (grams)
- Fats (grams)
- Estimated waste percentage

**Data Sources:**
- Indian Food Composition Tables (IFCT 2017)
- National Institute of Nutrition guidelines
- FAO food waste estimation models

---

## 🤖 AI Algorithm Logic

### **Health Status Determination**
```javascript
if (calories > 450 || fats > 15) → Unhealthy
if (calories > 350 || fats > 10) → Moderate
else → Healthy
```

### **Waste Status Determination**
```javascript
if (waste ≤ 7%) → Low
if (waste ≤ 12%) → Medium
else → High
```

### **Suggestion Generation**
The AI evaluates:
1. Total daily calorie intake (target: 1500-2000 kcal for Class 10 students)
2. Protein adequacy (target: 45-52g/day)
3. Average waste percentage
4. Carbohydrate balance (should be <60% of total calories)
5. Individual meal health status

**Output**: 3-6 personalized, actionable recommendations

---

## 🎯 Perfect for Exhibition Use

### **What Makes This Exhibition-Ready:**
✅ **Instant interaction** - Results in seconds
✅ **Visual appeal** - Bright colors and clear charts
✅ **Educational value** - Teaches nutrition science and sustainability
✅ **Real Indian foods** - Relatable for students and visitors
✅ **Data-driven** - Based on scientific research
✅ **Self-contained** - Works without internet (standalone version)
✅ **Professional quality** - Clean design and smooth UX

### **Exhibition Setup Tips:**
1. **Display on laptop** - Optimized for 1366x768 to 1920x1080 screens
2. **Use fullscreen mode** (F11) for immersive experience
3. **Pre-load example data** to demonstrate quickly
4. **Print the color legend** as a reference card
5. **Have the education tab** open during explanations

---

## 🔧 Technical Stack

### **Next.js Application:**
- **Framework**: Next.js 15.5.2 (React 19.1.0)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 + Custom CSS
- **Charts**: Chart.js 4.5.1
- **Fonts**: Google Fonts (Inter)
- **Build Tool**: Next.js with Turbopack

### **Standalone HTML:**
- **HTML5** + **CSS3** + **Vanilla JavaScript**
- **Chart.js** via CDN
- **No dependencies** required

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css           # Design system & global styles
│   ├── layout.tsx             # Root layout with metadata
│   └── page.tsx               # Main application page
├── components/
│   ├── NutritionCalculator.tsx   # Meal input interface
│   ├── ResultsDashboard.tsx      # Results table & charts
│   └── EducationSection.tsx      # Educational content
└── lib/
    └── nutritionData.ts       # Food database & AI logic

public/
├── generated/
│   └── hero-molecules.png     # AI-generated hero graphic
└── standalone.html            # Single-file version
```

---

## 🎓 Educational Value

### **Curriculum Integration:**
- **Science**: Nutrition, food chemistry, AI algorithms
- **Math**: Data analysis, percentages, statistical interpretation
- **Environmental Studies**: Food waste, sustainability, carbon footprint
- **Computer Science**: AI logic, data structures, web development

### **Learning Outcomes:**
Students will understand:
1. Nutritional composition of common foods
2. Impact of food waste on environment and economy
3. How AI algorithms make recommendations
4. Data visualization techniques
5. Importance of balanced diet during growth years

---

## 🌟 Highlights

### **Pixel-Perfect Design Replication:**
The implementation precisely matches the provided design reference:
- ✅ Exact color palette extracted from the mockup
- ✅ Inter font family matching the design aesthetic
- ✅ Layout structure and component positioning identical
- ✅ AI-generated hero molecular graphics matching the style
- ✅ Meal category color coding (green, purple, orange, light green)
- ✅ Traffic light status system (green/yellow/red)

### **Professional Code Quality:**
- Clean, maintainable component architecture
- Type-safe TypeScript implementation
- Comprehensive food database with 25+ items
- Intelligent AI suggestion algorithm
- Responsive design for all screen sizes
- Proper error handling and edge cases
- Well-commented and documented code

### **Exhibition-Ready Features:**
- Instant feedback (no loading delays)
- Visual appeal (bright, engaging colors)
- Interactive elements (hover effects, smooth transitions)
- Educational content (methodology, references)
- Two deployment options (Next.js + standalone HTML)

---

## 🚀 Quick Start Guide

### **For Next.js Version:**
```bash
# 1. Install dependencies (already done)
npm install

# 2. Start development server
npm run dev

# 3. Open browser
# Navigate to http://localhost:4006
```

### **For Standalone Version:**
```bash
# Option A: Open directly
# Double-click public/standalone.html

# Option B: Serve with any static server
# Example with Python:
cd public
python -m http.server 8000
# Open http://localhost:8000/standalone.html

# Option C: Copy to Zylo
# Copy contents of public/standalone.html
# Paste into Zylo Embed HTML block
```

---

## 📞 Support & Credits

**Project Created For:** Class 10 Science Exhibition
**Theme:** AI, Nutrition, and Sustainability
**Target Audience:** Students, Teachers, Exhibition Visitors

**Data Sources:**
- Indian Food Composition Tables (IFCT 2017)
- National Institute of Nutrition, Hyderabad
- UN Environment Programme Food Waste Index 2021
- Food and Agriculture Organization (FAO)

---

## ✅ Completion Checklist

✔️ **All requested features implemented**
✔️ **Pixel-perfect design matching reference**
✔️ **Both Next.js and standalone HTML versions**
✔️ **Comprehensive Indian food database**
✔️ **Interactive Chart.js visualizations**
✔️ **AI-powered suggestion system**
✔️ **Color-coded health/waste indicators**
✔️ **Educational content section**
✔️ **Exhibition-ready responsive layout**
✔️ **Professional code quality**
✔️ **Complete documentation**

---

## 🎉 Ready to Showcase!

Your AI Food & Nutrition Waste Reducer is complete and ready for the exhibition. Both the modern Next.js application and the standalone HTML version are fully functional and visually stunning. Good luck with your Class 10 science project! 🌱📊🏆
