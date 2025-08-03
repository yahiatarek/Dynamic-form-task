# Dynamic KYC Form

A dynamic form builder built with Next.js and TypeScript that renders various input types based on a JSON configuration.

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: CSS with CSS Variables
- **State Management**: React hooks and Zustand
- **Architecture**: Component-based with custom hooks

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dynamic-kyc-form
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📋 Form Configuration

The form is configured using a JSON schema with the following structure:

```json
[
  {
    "id": "field_id",
    "label": "Field Label",
    "type": "text|textarea|radio_buttons|multi_choice|drop_down|date",
    "required": true,
    "options": ["Option 1", "Option 2"],
    "placeholder": "Enter text..."
  }
]
```

### Supported Field Types

- **text**: Single-line text input
- **textarea**: Multi-line text input
- **radio_buttons**: Single selection from options
- **multi_choice**: Multiple selection
- **drop_down**: Dropdown select
- **date**: Date picker input

## 🎨 Styling

- Uses CSS custom properties for theming
- Responsive design with mobile-first approach
- Clean and accessible form controls

### Build for Production
```bash
npm run build
npm start
```