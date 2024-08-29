export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-grow=0 p-6 md:p-0.5 ">
        {children}
      </main>
    </div>
  );
}