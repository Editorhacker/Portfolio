export default function Skills() {
  const skills = [
    {
      name: "HTML5",
      logo: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
    },
    {
      name: "CSS3",
      logo: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg",
    },
    {
      name: "React",
      logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },
    {
      name: "Node.js",
      logo: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
    },
    {
      name: "JavaScript",
      logo: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
    },
    {
      name: "Express.js",
      logo: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=FFFFFF",
    },
    {
      name: "MongoDB",
      logo: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
    },
    {
      name: "Next.js",
      logo: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg",
    },
  ]

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 text-zinc-900 dark:text-zinc-100 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Skills
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            A quick snapshot of the technologies I use to build modern, scalable, and visually engaging applications.
          </p>
        </header>

        {/* Grid */}
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {skills.map((s) => (
            <article
              key={s.name}
              className="group relative flex flex-col items-center justify-center gap-4 rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl shadow-red-800/20"
            >
              <div className="shrink-0 grid place-items-center size-20 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900 overflow-hidden ">
                <img
                  src={s.logo}
                  alt={`${s.name} logo`}
                  className="max-h-10 max-w-10 object-contain transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  loading="lazy"
                />
              </div>


              <h2 className="text-lg font-semibold text-center transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-red-400">
                {s.name}
              </h2>

            </article>
          ))}
        </section>
      </div>
    </main>
  )
}