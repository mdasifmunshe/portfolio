const Contact = () => {
  return (
    <section id="contact" className="bg-indigo-900 font-oxygen">
      <div className="mx-auto max-w-[400px] py-12 text-center">
        <h2 className="text-[1.5em] font-bold">Contact me</h2>
        <p className="py-4">
          I'm always interested in hearing about new teaching opportunities,
          writing curricula, or instructional design work.
        </p>
        <div className="mt-8">
          <a
            href="mailto:asif35-2872@diu.edu.bd"
            className="flex items-center justify-center"
          >
            <div className="rounded-md bg-gradient-to-r from-sky-500 via-[#3B82F6] to-[#9333EA] p-1">
              <button className="flex h-full flex-col justify-between rounded-sm bg-[#86fbfb] p-1 font-normal text-black hover:bg-[#06fbfb]">
                Email me
              </button>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
