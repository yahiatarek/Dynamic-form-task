# Dynamic KYC Form - IoT Software Engineering Assessment

A comprehensive, dynamic Know Your Customer (KYC) form built with React and Next.js that renders various question types based on JSON schema configuration.

## 🚀 Features

### Core Features
- **Dynamic Form Rendering**: Generates forms from JSON schema configuration
- **Multiple Input Types**: 
  - Text input
  - Textarea
  - Radio buttons
  - Multi-choice checkboxes
  - Dropdown select
  - Date picker (bonus)
  - File upload (bonus)
- **Real-time Validation**: Field validation with immediate error feedback
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Bonus Features
- **Multi-step Form**: Questions split across multiple pages with progress tracking
- **Local Storage Persistence**: Form state automatically saved and restored
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Custom Question Types**: Extended support for date and file inputs
- **BEM Methodology**: Clean CSS architecture with BEM naming conventions

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: CSS with CSS Variables + Tailwind CSS
- **State Management**: React hooks (useState, useEffect, useContext)
- **Architecture**: Component-based with custom hooks and context providers

## 📁 Project Structure

\`\`\`
src/
├── app/
│   ├── page.tsx                 # Main application entry
│   └── layout.tsx              # Root layout
├── components/
│   ├── KYCForm.tsx             # Main form container
│   ├── MultiStepForm.tsx       # Multi-step form logic
│   ├── FormRenderer.tsx        # Dynamic field renderer
│   └── FormFields/             # Individual field components
│       ├── TextField.tsx
│       ├── TextAreaField.tsx
│       ├── RadioField.tsx
│       ├── MultiChoiceField.tsx
│       ├── DropdownField.tsx
│       ├── DateField.tsx
│       └── FileField.tsx
├── contexts/
│   └── ThemeContext.tsx        # Dark/light mode context
├── types/
│   └── form.ts                 # TypeScript interfaces
├── utils/
│   └── validation.ts           # Validation utilities
└── styles/
    └── form.css               # Comprehensive styling
\`\`\`

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd dynamic-kyc-form
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📋 Form Configuration

The form accepts a JSON schema with the following structure:

\`\`\`json
[
  {
    "id": "field_id",
    "label": "Field Label",
    "type": "text|textarea|radio_buttons|multi_choice|drop_down|date|file",
    "required": true,
    "options": ["Option 1", "Option 2"],
    "min": 1,
    "max": 3,
    "placeholder": "Enter text...",
    "validation": {
      "pattern": "regex_pattern",
      "message": "Custom error message"
    }
  }
]
\`\`\`

### Supported Field Types

- **text**: Single-line text input with optional regex validation
- **textarea**: Multi-line text input
- **radio_buttons**: Single selection from options
- **multi_choice**: Multiple selection with min/max constraints
- **drop_down**: Dropdown select with options
- **date**: Date picker input
- **file**: File upload with size validation

## 🎨 Styling Architecture

### CSS Variables
The application uses CSS custom properties for consistent theming:
- Color scheme variables for light/dark modes
- Spacing scale using consistent units
- Typography scale with proper hierarchy
- Shadow and border radius tokens

### BEM Methodology
CSS classes follow BEM (Block Element Modifier) naming:
\`\`\`css
.form-field                    /* Block */
.form-field__label            /* Element */
.form-field__input--error     /* Modifier */
\`\`\`

### Responsive Design
- Mobile-first approach
- Breakpoints: 480px, 768px, 1024px
- Flexible grid layouts
- Touch-friendly interactive elements

## ✅ Validation System

### Real-time Validation
- Validates fields on change/blur events
- Displays errors immediately below fields
- Clears errors when user starts correcting

### Validation Rules
- **Required fields**: Checks for empty values
- **Email validation**: Regex pattern matching
- **Multi-choice constraints**: Min/max selection limits
- **File validation**: Size limits and type checking
- **Custom patterns**: Regex validation with custom messages

## 🌙 Theme System

### Features
- System preference detection
- Manual toggle between light/dark modes
- Persistent theme selection in localStorage
- Smooth transitions between themes
- High contrast mode support

### Implementation
Uses React Context for global theme state management with CSS custom properties for styling.

## 💾 Data Persistence

### Local Storage
- Automatically saves form responses as user types
- Restores form state on page reload
- Clears saved data after successful submission
- Handles JSON serialization/deserialization safely

## ♿ Accessibility Features

- **Semantic HTML**: Proper use of form elements, fieldsets, and labels
- **ARIA Labels**: Screen reader support for complex interactions
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant color ratios
- **Reduced Motion**: Respects user motion preferences

## 🧪 Testing Considerations

The application is structured for easy testing:

### Unit Tests
- Individual field component testing
- Validation function testing
- Utility function testing

### Integration Tests
- Form submission flow
- Multi-step navigation
- Theme switching
- Local storage persistence

### Example Test Structure
\`\`\`javascript
// Field component test
describe('TextField', () => {
  it('should display validation error', () => {
    // Test implementation
  });
});

// Validation utility test
describe('validateField', () => {
  it('should validate required fields', () => {
    // Test implementation
  });
});
\`\`\`

## 🚀 Deployment

### Build for Production
\`\`\`bash
npm run build
npm start
\`\`\`

### Environment Variables
No environment variables required for basic functionality.

## 🔧 Customization

### Adding New Field Types
1. Create new field component in `components/FormFields/`
2. Add type to `FormField` interface in `types/form.ts`
3. Update `FormRenderer.tsx` to handle new type
4. Add validation logic in `utils/validation.ts`

### Styling Customization
- Modify CSS variables in `styles/form.css`
- Update theme colors and spacing
- Customize component-specific styles

## 📈 Performance Optimizations

- **Code Splitting**: Automatic with Next.js App Router
- **Lazy Loading**: Components loaded on demand
- **Memoization**: Prevents unnecessary re-renders
- **Optimized Images**: Next.js Image component
- **Bundle Analysis**: Built-in bundle analyzer

## 🐛 Known Issues & Limitations

- File upload is simulated (no actual server endpoint)
- Form submission uses mock API (console logging)
- Limited file type validation
- No server-side validation

## 📄 License

This project is created for assessment purposes.

---

## 💭 Development Thought Process

### Architecture Decisions
1. **Component Composition**: Separated concerns with individual field components
2. **State Management**: Used React hooks for simplicity, Context for global state
3. **Validation Strategy**: Real-time validation with centralized validation logic
4. **Styling Approach**: CSS-in-CSS with BEM methodology for maintainability
5. **Type Safety**: Comprehensive TypeScript interfaces for all data structures

### Performance Considerations
- Minimized re-renders with proper state management
- Used CSS transitions instead of JavaScript animations
- Implemented proper form field focusing and validation timing

### User Experience Focus
- Progressive disclosure with multi-step form
- Clear visual feedback for all interactions
- Consistent spacing and typography
- Accessible color contrast and focus states

This implementation demonstrates modern React development practices, accessibility awareness, and production-ready code quality.
