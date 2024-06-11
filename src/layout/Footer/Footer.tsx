export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-accent p-5 text-xs lg:px-0 lg:text-sm">
      <p className="px-0 lg:container lg:px-5">
        © {currentYear} Copyright{" "}
        <span className="font-bold text-primary">Prime</span>
      </p>
    </footer>
  );
};
