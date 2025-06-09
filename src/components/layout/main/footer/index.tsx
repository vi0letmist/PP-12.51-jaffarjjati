const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 border-t border-black border-separate">
      <div className="col-span-1 p-4 md:border-r border-black">
        <p className="text-sm">
          Built with Next.js, Tailwind CSS, and TypeScript.
        </p>
      </div>
      <div className="col-span-1 p-4 border-t md:border-t-0 md:border-r border-black">
        <span className="text-sm">
          12.51 is the time when my head found the focus that i sought.
        </span>
      </div>
      <div className="col-span-1 p-4 border-t md:border-none border-black">
        <span className="text-sm">
          © {new Date().getFullYear()} jaffarjjati. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
