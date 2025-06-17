// app/notes/layout.jsx
export const metadata = {
  title: "Notes Canvas-Sticky Board",
  description:
    "Sticky Board’s interactive canvas where you can anonymously post ideas, social links, or shoutouts that auto-expire in 30 days.",
  keywords: [
    "Sticky Notes Board",
    "Sticky Board App",
    "Notes Canvas",
    "Anonymous collaboration",
    "Sticky Wall for ideas",
    "Drop notes app",
  ],
};

export default function NotesLayout({ children }) {
  return (
    <section className="min-h-screen bg-[#FAF0CA] text-[#0D3B66]">
      {children}
    </section>
  );
}
