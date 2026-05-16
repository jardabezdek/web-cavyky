export default function Footer() {
  return (
    <footer className="bg-[#FEFAE0] py-12 border-t border-[#D4A373]/30 text-center text-[#D4A373] text-xs tracking-widest uppercase font-bold">
      <div className="max-w-7xl mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Cavyky. Všechna práva vyhrazena.</p>
      </div>
    </footer>
  );
}
