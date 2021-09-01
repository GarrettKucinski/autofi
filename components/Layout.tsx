export default function Layout ({ children }) {
  return (
    <div className="bg-smoke grid grid-cols-1 min-h-screen">
      {children}
    </div>
  );
}
