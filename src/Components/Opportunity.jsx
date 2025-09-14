const Opportunity = () => {
  const jobs = [
    { id: 1, title: "Section Head - E&A Maintenance", location: "Surat" },
    { id: 2, title: "Section Head - E&A Maintenance", location: "Surat" },
    { id: 3, title: "Section Head - E&A Maintenance", location: "Surat" },
  ];

  return (
    <section className="w-full bg-black text-white py-16 px-6 md:px-20">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#405FFC] mb-10">
        Job Opportunities
      </h2>

      {/* Job List */}
      <div className="max-w-4xl mx-auto space-y-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-[#405FFC] pb-4"
          >
            {/* Job Info */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold">{job.title}</h3>
              <p className="text-sm text-[#405FFC]">{job.location}</p>
            </div>

            {/* Show More Button */}
            <button className="mt-3 md:mt-0 text-gray-400 hover:text-[#405FFC] transition text-sm uppercase">
              Show More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Opportunity;
