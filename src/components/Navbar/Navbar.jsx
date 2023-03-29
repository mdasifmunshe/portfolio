import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="m-auto p-4 font-oxygen-mono text-[80%] md:max-w-[1200px]"
    >
      <div className="flex justify-between">
        <div className="flex-none">
          <h1>
            <Link
              to={"/portfolio/"}
              className="flex items-center justify-center font-black text-[#f7f8fa] hover:text-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                className="h-8 w-8 stroke-[#86fbfb] hover:stroke-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
              <span className="ml-1 font-oxygen text-2xl font-black">
                Asif Munshi
              </span>
            </Link>
          </h1>
        </div>
        <div className="flex-1">
          <ul className="flex list-none flex-wrap items-center justify-end gap-8">
            <li>
              <Link to={"#projects"} className="hover:text-blue-500">
                Projects
              </Link>
            </li>
            <li>
              <Link to={"#contact"} className="hover:text-blue-500">
                Contact
              </Link>
            </li>
            <li>
              <Link to={"/portfolio/about"} className="hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mdasifmunshe/"
                target="_blank"
                className=""
              >
                <img
                  src="./linkedin-logo.png"
                  alt="linkedin-logo"
                  className="h-7 w-7 rounded bg-[#86fbfb] p-[2px] hover:bg-blue-500"
                />
                <span className="sr-only">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com/mdasifmunshe"
                target="_blank"
                className=""
              >
                <img
                  src="./github-mark.svg"
                  alt="github-mark"
                  className="h-7 w-7 rounded bg-[#86fbfb] p-1 hover:bg-blue-500"
                />
                <span className="sr-only">Github</span>
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1YfYJE2lTdSMHAU8JB18ZRmuxOYHmzacE/view?usp=sharing"
                target="_blank"
                className="flex items-center justify-center"
              >
                <div className="rounded-md bg-gradient-to-r from-sky-500 via-[#3B82F6] to-[#9333EA] p-1 hover:from-[#86fbfb] hover:via-[#3B82F6] hover:to-indigo-300">
                  <button className="flex h-full flex-col justify-between rounded-sm bg-[#86fbfb] p-1 text-black hover:bg-blue-500 hover:text-white">
                    Resume
                  </button>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
