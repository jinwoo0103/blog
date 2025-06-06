export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main id="skip-nav" className="prose">
      {children}
    </main>
  );
}
