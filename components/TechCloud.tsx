'use client'

export default function TechCloud() {

  const skills = [
    "Python",
    "PyTorch",
    "TensorFlow",
    "YOLOv8",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "LLMs",
    "RAG",
    "AI Agents",
    "LangChain"
  ]

  return (
    <section className="py-32 flex flex-col items-center">

      <h2 className="text-4xl font-bold mb-12 text-cyan-400">
        Tech Stack
      </h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl">

        {skills.map((skill, i) => (
          <span
            key={i}
            className="px-4 py-2 border border-cyan-500 text-cyan-300 hover:bg-cyan-500 hover:text-black transition"
          >
            {skill}
          </span>
        ))}

      </div>

    </section>
  )
}
