import {useTranslations} from "next-intl";

export default function Search() {
  const t = useTranslations();
  return (
    <form className="w-3/4 border print:hidden border-gray-400 rounded-lg flex items-center relative">
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
        {t("Search")}
      </label>
      <input
        type="search"
        id="default-search"
        className="block p-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 pl-3 w-full pr-10" // Added padding to the right
        placeholder="Search"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        {" "}
        {/* Moved the icon container to the right */}
        <svg
          className="w-5 h-5 text-gray-500"
          aria-hidden="true"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
    </form>
  );
}
