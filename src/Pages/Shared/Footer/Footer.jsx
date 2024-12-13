const Footer = () => {
  return (
    <div>
      <hr />
      <footer className=" py-10 px-6 md:px-12">
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h3 className="text-xl font-bold text-gray-900">JobBox</h3>
            <p className="mt-4 text-sm text-gray-700 leading-relaxed">
              JobBox is the heart of the design community and the best resource
              to discover and connect with designers and jobs worldwide.
            </p>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
            <h3 className="text-xl font-bold text-gray-900">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="hover:text-purple-600 transition cursor-pointer">
                About Us
              </li>
              <li className="hover:text-purple-600 transition cursor-pointer">
                Our Team
              </li>
              <li className="hover:text-purple-600 transition cursor-pointer">
                Products
              </li>
              <li className="hover:text-purple-600 transition cursor-pointer">
                Contact
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
            <h3 className="text-xl font-bold text-gray-900">Community</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="hover:text-purple-600 transition cursor-pointer">
                Feature
              </li>
              <li className="hover:text-purple-600 transition cursor-pointer">
                Pricing
              </li>
              <li className="hover:text-purple-600 transition cursor-pointer">
                Credit
              </li>
              <li className="hover:text-purple-600 transition cursor-pointer">
                FAQ
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
            <h3 className="text-xl font-bold text-gray-900">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="hover:text-purple-600 transition cursor-pointer">
                iOS
              </li>
              <li className="hover:text-purple-600 transition cursor-pointer">
                Android
              </li>
              <li className="hover:text-purple-600 transition cursor-pointer">
                Microsoft
              </li>
              <li className="hover:text-purple-600 transition cursor-pointer">
                Desktop
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-300 pt-6 text-center text-sm text-gray-600">
          © 2024 JobBox. All rights reserved. | (Himel)
        </div>
      </footer>
    </div>
  );
};

export default Footer;
