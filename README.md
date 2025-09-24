# Zenith Portfolio

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/zawminhtutx/generated-app-20250924-044658)

A visually stunning, minimalist, and interactive single-page portfolio application to showcase a developer's or designer's work.

Zenith Portfolio is a visually stunning, minimalist, and interactive single-page application designed to showcase a professional's work with elegance and clarity. Built with a 'less is more' philosophy, the application guides visitors through a seamless journey across distinct sections: a captivating Hero section with a subtle animated gradient, an 'About Me' biography, an interactive 'Projects' grid, a clean 'Skills' showcase, and a functional 'Contact' form. The design prioritizes exceptional typography, generous white space, and delightful micro-interactions to create a polished, premium, and memorable user experience. The entire application is flawlessly responsive, ensuring a perfect presentation on desktops, tablets, and mobile devices.

## Key Features

-   **Minimalist & Interactive Design**: A clean, modern aesthetic focusing on content and user experience.
-   **Single-Page Application**: Smooth scrolling navigation between all sections.
-   **Distinct Sections**: Includes Hero, About, Projects, Skills, and Contact sections.
-   **Subtle Animations**: Graceful animations and micro-interactions powered by Framer Motion.
-   **Flawlessly Responsive**: Looks great on all devices, from mobile phones to desktops.
-   **Easily Customizable**: All portfolio data is centralized in a single file for easy updates.

## Technology Stack

-   **Framework**: [React](https://react.dev/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Deployment**: [Cloudflare Pages & Workers](https://pages.cloudflare.com/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or later)
-   [Bun](https://bun.sh/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/zenith_portfolio.git
    cd zenith_portfolio
    ```

2.  **Install dependencies:**
    This project uses Bun as the package manager.
    ```bash
    bun install
    ```

### Running the Development Server

To start the local development server, run the following command:

```bash
bun run dev
```

The application will be available at `http://localhost:3000` (or another port if 3000 is in use).

## Customization

All personal data, projects, and skills are managed in a single file for easy customization. To personalize the portfolio, simply edit the contents of:

`src/data/portfolio-data.ts`

You can update your name, bio, project details, skills, and social media links in this file without touching any of the React components.

## Deployment

This project is optimized for deployment on the Cloudflare network.

### Deploying to Cloudflare Pages

1.  **Build the project:**
    This command bundles the React application for production.
    ```bash
    bun run build
    ```

2.  **Deploy using Wrangler:**
    Make sure you have the [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) installed and configured. Then, run the deploy command:
    ```bash
    bun run deploy
    ```

Alternatively, you can deploy directly from your GitHub repository with a single click.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/zawminhtutx/generated-app-20250924-044658)

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.