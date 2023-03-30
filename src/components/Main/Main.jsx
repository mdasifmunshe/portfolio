const Main = () => {
  return (
    <section id="intro" className="mx-auto max-w-[1200px] px-4 pt-16 pb-40">
      <p className="my-4 h-[120px] font-oxygen-mono text-base">
        Hi, my name is{" "}
        <span className="mt-10 block h-full font-oxygen text-[4rem] font-light text-[#86fbfb]">
          Asif Munshi.
        </span>
      </p>
      <h2 className="text-[4rem] font-normal">I create web application.</h2>
      <p className="my-4 text-base">
        I'm a student specializing in HTML, CSS, JavaScript and ReactJS.
      </p>
      <p className="my-4 text-base">
        {"Currently, I'm studying at "}
        <a
          href="https://daffodilvarsity.edu.bd/"
          target="_blank"
          className="text-[#86fbfb] underline hover:text-[#06fbfb]"
        >
          Daffodil International University
        </a>
      </p>
    </section>
  );
};

export default Main;
