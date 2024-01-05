const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 w-full py-5 text-center text-xs text-gray-500 bg-white">
      <p>&copy; {currentYear} Kevin Toms. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
