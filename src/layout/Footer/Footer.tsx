export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-accent px-8 py-5 text-xs">
      © {currentYear} Copyright{" "}
      <span className="font-bold text-primary">Prime</span>
    </footer>
  );
};
