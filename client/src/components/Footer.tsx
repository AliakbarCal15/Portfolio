const Footer = () => {
  return (
    <footer className="bg-dark-dark py-12 relative">
      <div className="tire-mark absolute top-0 w-full h-8"></div>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-neon-green font-montserrat text-xl font-bold">
              Ali<span className="text-neon-orange">akbar</span>
            </a>
            <p className="text-light-darker mt-2 text-sm">© {new Date().getFullYear()} Aliakbar. All rights reserved.</p>
          </div>
          
          <div>
            <p className="text-light italic font-light mb-4 text-center md:text-right">
              "Let's connect — for your next backend build or weekend ride."
            </p>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="text-light-darker hover:text-neon-green transition-colors">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="#" className="text-light-darker hover:text-neon-blue transition-colors">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="#" className="text-light-darker hover:text-neon-orange transition-colors">
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
