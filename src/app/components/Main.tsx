export default function MainPage() {
  return (
    <div className="mx-auto text-center">
      <h1 className="mb-4 max-w-2xl text-6xl font-extrabold leading-none tracking-tight md:text-8xl xl:text-6xl">
        The Ko-Socials
      </h1>
      <h3 className="mb-4 max-w-2xl text-2xl font-extrabold leading-none tracking-tight md:text-2xl xl:text-4xl">
        Your Ko-partner in Growth and Success.
      </h3>
      <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
        We deliver tailored outsourcing solutions to meet your business needs.
        Our mission is to empower your business with our specialized services
        that drives efficiency and growth.
      </p>
      <button
        type="submit"
        className="mb-2 px-4 py-2 bg-primary text-white text-xl rounded hover:bg-accent hover:text-black transition-colors"
      >
        Let's Get Started
      </button>
    </div>
  );
}
