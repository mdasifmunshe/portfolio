const Main = () => {
  return (
    <section
      id="intro"
      className="mx-auto max-w-[1200px] px-4 pt-8 pb-20 sm:pt-16 sm:pb-40"
    >
      <div className="my-4 flex h-[80px] flex-col items-start justify-center gap-5 font-oxygen-mono text-base xs:h-[120px] xs:gap-10">
        Hi, my name is{" "}
        <span className="block h-[50%] font-oxygen text-[2rem] font-light text-[#86fbfb] xs:text-[4rem]">
          Asif Munshi.
        </span>
      </div>
      <h2 className="text-[2rem] font-normal md:text-[4rem]">
        I create web application.
      </h2>
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
