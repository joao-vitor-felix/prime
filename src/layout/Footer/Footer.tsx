export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-5 bg-accent px-8 py-5 text-sm">
      © {currentYear} Copyright{" "}
      <span className="font-bold text-primary">Prime</span>
    </footer>
  );
};
