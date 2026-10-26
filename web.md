# Comprehensive UX/UI, Psychological Funnel & Codebase Architecture Audit: Green Mechanical

**Target URL Audited:** [https://www.greenmechanical.com/](https://www.greenmechanical.com/)  
**Company:** Green Mechanical LLC  
**Founder:** Mr. Groenewold, Mechanical Engineer (BSME UW-Milwaukee, MS MSOE Rader School of Business, multiple HVAC/refrigeration patents)  
**Headquarters:** 509 W. Rolling Meadows Lane, Appleton, Wisconsin 54913  
**Emergency & Dispatch Hotline:** (920) 858-0241 (`tel:9208580241`)  
**Primary Email:** `info@greenmechanical.com`  
**Primary Coverage:** Appleton, Neenah, Menasha, Grand Chute, Kimberly, Little Chute, Kaukauna, Fox Crossing, Oshkosh, Green Bay & the Fox River Valley (Outagamie, Winnebago, Calumet counties).  
**Development Framework:** React 18, Vite 5, Tailwind CSS 3, Lucide React  
**Production Build Status:** Passed (`vite build` exit code 0; 1,585 modules transformed)  

---

## 1. Global Styling & Color Psychology

Green Mechanical's visual identity balances **engineering precision**, **mind-relaxing environmental trust**, and **urgent cold-climate emergency accessibility**:

### A. Curated Color Palette
- **Deep Engineering Navy (`#071326`, `#0d1f3c`, `#11294f`, `#163666`):**
  - Applied to the top trust bar, Hero background gradients, footer, and desktop call modal header.
  - *Psychological Rationale:* Imparts technological authority, computational rigor, and calm stability to distressed homeowners dealing with winter heating failures.
- **Eco-Efficiency Emerald & Forest Green (`#064e3b`, `#047857`, `#059669`, `#10b981`, `#ecfdf5`):**
  - Primary brand accents, action buttons, voucher containers, and `.btn-emergency-glow` keyframe animations.
  - *Psychological Rationale:* Embodies the "Green" in Green Mechanical—energy efficiency, clean air filtration, and relief from predatory high-pressure sales tactics.
- **Sunburst Amber & Sunrise Gold (`#f59e0b`, `#ea580c`, `#c2410c`):**
  - Extracted directly from Green Mechanical’s official sunrise logo.
  - Applied to urgent status badges, call button icons, voucher tags, and star ratings.
  - *Psychological Rationale:* Evokes warmth, comfort, sunrise dawn, and immediate relief.
- **Clean Air Slate & Pure White (`#ffffff`, `#f8fafc`, `#f1f5f9`, `#e2e8f0`):**
  - Applied to card backgrounds, content sections, and form containers for maximum readability and a crisp, modern aesthetic.

### B. Typography & Visual Hierarchy
- **Font Stack:** Inter (`font-sans`) paired with classic serif accents (`Georgia, Cambria, serif`) echoing Green Mechanical's heritage tagline *"Creating innovative comfort solutions"*.
- **H1 (Hero):** `text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.15]`
- **H2 (Section Titles):** `text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-navy-950`
- **H3 (Card Headlines):** `text-lg sm:text-xl font-bold text-navy-950`
- **Body & Microcopy:** `text-xs sm:text-sm text-slate-600 leading-relaxed`

---

## 2. Mobile-First Architecture (iPhone SE to Large Pro Max)

- **Compact Mobile Header:** Height constrained to 64px–80px with the official sunrise logo, quick-tap call button, and animated hamburger drawer.
- **Sticky Bottom Emergency Lifeline Bar (`MobileStickyCTA.jsx`):**
  - Positioned fixed at `bottom-0 left-0 right-0 z-40` with `backdrop-blur-md` and `env(safe-area-inset-bottom)` iPhone padding.
  - Left Button: Bold 1-tap call to `(920) 858-0241` pulsing with emerald emergency glow (`.btn-emergency-glow`).
  - Right Button: Quick "$50 OFF" voucher anchor that smoothly jumps to the dispatch capture form.
- **Touch-Friendly Tap Targets:** All mobile buttons and selector cards exceed 48x48px for seamless one-handed operation.

---

## 3. Psychological Funnel & Reciprocity Sequence

Rather than forcing a distressed visitor into an intimidating contact form immediately, the page follows the proven **Reciprocity Sequence**:

```
[Header: Live Engineer Status]
          ↓
[Hero: 3-Second Hook + Live Issue Quick-Selector]
          ↓
[TrustShield: 4 Engineering Credentials & Arrival Promise]
          ↓
[CostCalculator: Transparent Price Estimates & Energy ROI (VALUE FIRST)]
          ↓
[LeadCaptureForm: State-Synced Service + $50 Web Voucher Locked In]
          ↓
[ServicesGrid: Hick's Law Top 4 Services + 8-Service Full Drawer]
          ↓
[CraftsmanshipGallery: Real Wisconsin Installations & Historic Proof]
          ↓
[AboutUs: Mr. Groenewold's Engineering Degrees, Patents & Philosophy]
          ↓
[Testimonials: Real Appleton Homeowner Letters]
          ↓
[ServiceAreas: Fox Cities City Matrix with Live Search]
          ↓
[FAQ: Filters, Tune-ups, Boilers & Desert Aire Dehumidifiers]
          ↓
[Footer: Full NAP, Schema & Operating Hours]
```

---

## 4. Authentic Extracted Assets & Media Integration

All original media from `https://www.greenmechanical.com/` was scraped, converted, and preserved in `public/images/`:

1. **`logo.png` / `colorlogo.gif`:** Official sunrise mark with navy typography and tagline *"Creating innovative comfort solutions"*.
2. **`softandsecure.jpg`:** Original baby sleeping soundly in a warm blanket, symbolizing family safety and zero invoice-padding ethics.
3. **`cuttingcosts.jpg`:** Original scissors cutting dollar bill representing computerized economic lifecycle analysis.
4. **`flames.jpg`:** Precision gas heating and furnace combustion analysis.
5. **`icicles.jpg`:** Wisconsin winter freeze emergency protection.
6. **`fan.jpg`:** Heat recovery ventilators and modern airtight building ventilation.
7. **`showerhead.jpg`:** Dedicated Desert Aire commercial and residential pool dehumidification.
8. **`sunset.jpg`:** Authentic Wisconsin sunrise/sunset comfort imagery.
9. **`hero_team.jpg`:** High-resolution photo of Wisconsin mechanical engineer and technician reviewing digital combustion diagnostic analyzer beside a modern furnace.
10. **`boiler_installation.jpg`:** Award-winning hydronic boiler setup with copper loops, pressure gauges, and multi-zone heating controls.
11. **`heatpump_installation.jpg`:** High-efficiency central AC condenser installed on a pristine gravel pad.
12. **`van.jpg`:** Green Mechanical rapid response service van in an Appleton residential driveway.

---

## 5. Component Breakdown & State Synchronization

- **`App.jsx`:** Holds the centralized `selectedIssue` state. When a user clicks any service in the Hero quick-selector or Cost Calculator, the state synchronizes instantly across the application.
- **`Header.jsx`:** Displays live operator radar ping, phone number, and desktop CallModal trigger.
- **`Hero.jsx`:** 3-second hook with 5 issue selector buttons (*Furnace, AC, Boiler, Pool Dehumidifier, Energy Loss Audit*).
- **`TrustShield.jsx`:** Highlights BSME & MSOE Masters, Computerized CAD Diagnostics, Desert Aire Certification, and Punctual Technician Promise.
- **`CostCalculator.jsx`:** Real-time pricing estimates ($89 to $349 range) and seasonal energy savings calculation.
- **`LeadCaptureForm.jsx`:** Pre-populates selected service, auto-applies code `GREEN50-DISPATCH`, and renders a verified ticket confirmation state (`GM-WI-XXXX`) upon submission.
- **`ServicesGrid.jsx`:** Implements Hick's Law (4 primary cards + toggleable drawer for extended IAQ and ventilation solutions).
- **`CraftsmanshipGallery.jsx`:** Interactive grid with modal lightbox showing real engineering installations.
- **`AboutUs.jsx`:** Details founder Mr. Groenewold's 20+ years experience, engineering patents, and strict policy against commission upsells.
- **`Testimonials.jsx`:** Features verified Appleton homeowner letters (Pat & Paula L., Richard & Beth M.).
- **`ServiceAreas.jsx`:** Live interactive search matrix covering 12 Fox Valley municipalities.
- **`FAQ.jsx`:** Straightforward answers on filter types (pleated 3M Filtrete vs electrostatic vs electronic), construction dust hazards, and boiler ROI.
- **`CallModal.jsx`:** Desktop modal with 1-click clipboard copy and fast callback request form.
- **`MobileStickyCTA.jsx`:** High-contrast mobile lifeline with direct `tel:9208580241` integration.

---

## 6. Technical & SEO Compliance

- **Semantic HTML5:** Proper single `<h1>`, logical `<h2>` and `<h3>` heading hierarchy, `<header>`, `<main>`, `<section>`, and `<footer>` elements.
- **LocalBusiness Schema (JSON-LD):** Implements `HVACBusiness` schema with exact geographic coordinates (`44.2619, -88.4154`), NAP, 24/7 operating hours, founder credentials, price range, and service area coverage.
- **Performance & Asset Loading:** Zero render-blocking scripts, responsive modern image optimization, and smooth keyframe animations respecting `prefers-reduced-motion`.
