import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const isMobileNavbarOpen = useSignal(false);
  return (
    <div class="grid grid-cols-1">
      <header class="text-center text-tp-darkBlue">
        <nav class="border-gray-200 bg-white dark:bg-gray-900">
          <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
            <a href="/" class="flex items-center">
              <img
                src="/fe/logo.svg"
                class="mr-3 "
                alt="Easybank <Lo:w></Lo:w> "
              />
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <img
                onFocusout$={() => {
                  console.log("fadsfdsaf");
                }}
                src="/fe/icon-hamburger.svg"
                class="text-xs"
                alt="menu icon"
              />
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul class="mt-4 max-w-sm my-0 mx-auto flex flex-col rounded-lg border border-gray-100 bg-gray-50  font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
                <li>
                  <a
                    href="#"
                    class="block rounded py-2 pl-3 pr-4  hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block rounded py-2 pl-3 pr-4  hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block rounded py-2 pl-3 pr-4  hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block rounded py-2 pl-3 pr-4  hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block rounded py-2 pl-3 pr-4  hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main></main>
      <div class="px-4 bg-blue-200">
        <h1>Hi 👋</h1>
        <p>{`${isMobileNavbarOpen.value}`}</p>
      </div>
      <p>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </p>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
