# NEXUS 2026 | High-Performance Tech-Fest Landing Page

NEXUS 2026 is an immersive, high-fidelity digital experience designed for a fictional 48-hour global hackathon. The project focuses on "Motion Design as a Language," utilizing industry-standard animation libraries to create a seamless, high-performance user journey.

**[Live Demo Link]** | **[GitHub Repository]**

https://github.com/anmolkumar875511/Nexus.git

---

## Technical Architecture & Stack

The core objective was to move beyond "template-heavy" designs by building custom UI components from scratch using a professional-grade frontend stack:

* **Framework:** [Next.js 15](https://nextjs.org/) (React) utilizing the App Router for optimized server-side rendering and faster Largest Contentful Paint (LCP).
* **Animation Core:** [GSAP (GreenSock Animation Platform)](https://gsap.com/) for precision-based JavaScript animations.
* **Motion Utilities:** [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) for reactive, scroll-bound storytelling.
* **Smooth Scrolling:** [Lenis](https://lenis.darkroom.engineering/) for inertial scrolling and cross-browser scroll normalization.
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) for a utility-first, performant design system.
* **Icons:** [Lucide-React](https://lucide.dev/) for clean, scalable vector graphics.

---

## Deep Technical Insights

### 1. Unified Motion System (Lenis + ScrollTrigger)
A major challenge in modern web design is "Scroll Jittering," where animations stutter due to browser-specific scroll speeds.
* **Technical Implementation:** I integrated **Lenis** to normalize the scroll experience across different input devices (Trackpad vs. Mouse wheel). 
* **Sync Logic:** By updating the `ScrollTrigger` proxy inside the Lenis scroll loop, I ensured that the **Timeline Progress Line** and **Pinned Sections** stay perfectly in sync without visual "lag."

### 2. Masked Text Reveal & Magnetic CTA
* **The Reveal:** Instead of a simple fade-in, the Hero section uses "Overflow Masking." The text is wrapped in a `div` with `overflow: hidden`, and animated from `y: 150` with a `skewY: 7` transform. This mimics the reveal of high-end cinematic titles.
* **Magnetic Interaction:** The "Register Now" button calculates the relative distance between the cursor position and the button's center point. GSAP then pulls the button toward the cursor with an `elastic.out` easing, providing a tactile, reactive feel.

### 3. GPU-Accelerated Performance Optimization
To maintain a consistent 60FPS on both mobile and desktop:
* **Composite Layers:** I prioritized animating **Transforms** and **Opacity** exclusively. This forces the browser to handle animations on the GPU (Graphics Processing Unit) rather than the CPU, preventing "Layout Reflows."
* **Lifecycle Management:** Used the official `@gsap/react` hook to ensure that all animation instances are automatically killed and garbage-collected when components unmount, preventing memory leaks.

---

## Project Structure

```text
src/
├── app/
│   ├── layout.js       # Global Providers & Font Configuration
│   ├── page.js         # Section Assembly & Page Logic
│   └── globals.css     # Cyber-noir theme, variables, and scanline effects
└─── components/
    ├── Hero.js         # Masked reveals, Magnetic CTA, and floating blurs
    ├── About.js        # Split-screen layout with pinned ScrollTrigger
    ├── Tracks.js       # 3D Tilt interactive cards with Lucide icons
    ├── Schedule.js     # Scroll-linked vertical progress timeline
    ├── Speakers.js     # Parallax background image effects
    ├── CustomCursor.js # Dual-layer inertial follower logic
    ├── SmoothScroll.js # Lenis initialization and config
    └── Footer.js       # Text scramble interactions & Back-to-top logic

```
---

## Installation & Development

### 1. Clone the Repo:
```bash
git clone https://github.com/anmolkumar875511/Nexus.git

```

### 2. Install Dependencies:

```bash
npm install 

```

### 3. Run Dev Server:
```bash
npm run dev

```

### 4. Build for Production:
```bash
npm run build

```
