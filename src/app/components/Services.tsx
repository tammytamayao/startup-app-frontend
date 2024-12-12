import { LP_GRID_ITEMS } from "../services/lp-items";

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
      <h1 className="mb-4 max-w-2xl text-6xl text-blue-700 font-extrabold leading-none tracking-tight md:text-8xl xl:text-6xl">
        Our Services
      </h1>
      <hr className="border-blue-700 my-8" />
      <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3 lg:gap-12">
        {LP_GRID_ITEMS.map((singleItem) => (
          <div
            key={singleItem.title}
            className="flex flex-col items-center justify-between text-center h-full" // Ensure full height
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-1.5 text-blue-700 dark:bg-primary-900 lg:h-12 lg:w-12">
              {singleItem.icon}
            </div>
            <h3 className="mb-2 text-xl text-black font-bold">
              {singleItem.title}
            </h3>
            <p className="text-black">{singleItem.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
