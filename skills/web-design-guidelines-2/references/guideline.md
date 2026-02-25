# Web Interface Guidelines (Vercel Standards)

This document contains the rules and expectations for high-quality web interfaces.

## 1. Accessibility (A11y)
- **Alt Text**: Every `img` must have an `alt` attribute or `aria-hidden="true"`.
- **Semantic HTML**: Use `header`, `footer`, `nav`, `main`, `section`, `article`.
- **Contrast**: Text must meet WCAG AA standards.
- **Form Controls**: Every input must have a linked `label` or `aria-label`.

## 2. Interaction & Focus
- **Focus States**: Never remove `outline: none` without providing a high-quality alternative.
- **Keyboard Navigation**: Ensure all interactive elements are reachable and usable via TAB.
- **Skip Links**: Recommended for complex navigation.

## 3. Forms & Input
- **Autocomplete**: Use appropriate `autocomplete` types (email, tel, address).
- **Validation**: Show error messages near the field with `aria-invalid` and `aria-describedby`.
- **Touch Targets**: Minimum 44x44px for touch devices.

## 4. Animation
- **Reduced Motion**: Respect `prefers-reduced-motion` media query.
- **Layout Shifts**: Avoid animations that cause CLS (Content Layout Shift).

## 5. Performance
- **Image Dimensions**: Always provide `width` and `height` to prevent layout shift.
- **Lazy Loading**: Use `loading="lazy"` for off-screen images.
- **DOM Size**: Avoid excessively deep DOM trees.

## 6. Typography & Content
- **Responsive Font Size**: Use relative units (rem/em) instead of px for body text.
- **Overflow**: Handle long text gracefully (ellipsis or wrap) without breaking layout.
- **Empty States**: Provide clear states when no data is available.

---

## Output Format Specification
Findings from a review must be formatted as follows:

`[FILE_PATH]:[LINE_NUMBER]: [ISSUE_DESCRIPTION]`

Example:
`src/components/Button.tsx:12: Interactive element missing focus state.`
`src/components/Avatar.tsx:5: Image missing alt attribute.`
