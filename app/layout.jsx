import "./globals.css";

export const metadata = {
  title: "Vaibhav | Frontend Developer Portfolio",
  description:
    "Production-style portfolio built with Next.js for showcasing projects, skills, and contact information.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
  try {
    const key = "portfolio-theme";
    const saved = localStorage.getItem(key);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = saved === "light" || saved === "dark" ? saved : (prefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  } catch (error) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
