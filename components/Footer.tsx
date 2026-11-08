export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white py-8 text-sm text-zinc-600">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6">
        <span>&copy; {new Date().getFullYear()} Abdul Munim</span>
        <a href="#main" className="font-medium hover:text-zinc-900">Back to top</a>
      </div>
    </footer>
  );
}
