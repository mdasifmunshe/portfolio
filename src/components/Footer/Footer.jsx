const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer
      id="footer"
      className="flex flex-col items-center justify-center gap-8 py-16"
    >
      <div className="flex flex-col text-center text-[1.5em] font-bold xs:block">
        Asif Munshi <span>&mdash;</span> Student
      </div>
      <ul className="flex flex-row flex-wrap justify-center gap-6 text-5xl xs:gap-8">
        <li>
          <a href="https://www.linkedin.com/in/mdasifmunshe/" target="_blank">
            <img
              src="./linkedin-logo.png"
              alt="linkedin-logo"
              className="h-10 w-10 rounded bg-[#86fbfb] p-[2px] hover:bg-[#06fbfb] xs:h-12 xs:w-12"
            />
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://www.github.com/mdasifmunshe" target="_blank">
            <img
              src="./github-mark.svg"
              alt="github-mark"
              className="h-10 w-10 rounded bg-[#86fbfb] p-1 hover:bg-[#06fbfb] xs:h-12 xs:w-12"
            />
            <span className="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a href="mailto:asif35-2872@diu.edu.bd">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#171321"
              className="h-10 w-10 rounded bg-[#86fbfb] p-[2px] hover:bg-[#06fbfb] xs:h-12 xs:w-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <span className="sr-only">Email</span>
          </a>
        </li>
      </ul>
      <div className="flex items-center justify-center">
        <span className="text-center text-base">
          &copy; {currentYear} Asif Munshi. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
