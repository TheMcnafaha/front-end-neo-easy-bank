import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/Button/button";

export default component$(() => {
  const isMobileNavbarOpen = useSignal(false);
  return (
    <div class="grid grid-cols-1 text-center text-tp-grayishBlue md:text-left">
      {/* master grid */}
      <header class="text-center text-tp-darkBlue outline-red-900">
        <nav class="z-10 border-gray-200 bg-white dark:bg-gray-900">
          <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 lg:px-10">
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
            <div class="hidden w-full md:block md:w-auto " id="navbar-default">
              <ul class="mx-auto my-0 mt-4 flex max-w-sm flex-col rounded-lg border border-gray-100 bg-gray-50  font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
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
            <div class="hidden lg:block">
              <Button text="Request Invite"></Button>
            </div>
          </div>
        </nav>
      </header>
      <main class="md:flex md:flex-col md:items-center ">
        <div class="max-w-screen-xl lg:pt-8  lg:px-10">
          <section class=" relative bottom-20 -z-20  grid max-w-screen-xl grid-cols-1 md:bottom-0 md:grid-cols-2 md:justify-between md:justify-items-start justify-items-center md:overflow-hidden lg:overflow-visible">
            <div class="max-w-screen-lg overflow-hidden lg:overflow-visible bg-[url('/fe/bg-intro-mobile.svg')] bg-cover   object-left md:relative md:bottom-[8vw] md:col-start-2 md:row-start-1 md:w-[125%] md:bg-[url('/fe/bg-intro-desktop.svg')] lg:bottom-0 lg:w-full  lg:max-w-[640px] ">
              <img
                class="relative bottom-[8vw] md:bottom-0 md:pl-[15vw] lg:block lg:pl-32"
                src="  fe/image-mockups.png "
                alt=""
              />
            </div>
            <div class="relative bottom-[8vw]  flex  max-w-sm flex-col md:content-center items-center py-4 md:bottom-0 md:items-start md:justify-center md:px-4 lg:px-0">
              <h1 class=" mb-4 text-4xl text-tp-darkBlue">
                Next generation digital banking
              </h1>
              <p class=" max-w-xs text-base">
                Take your financial life online. Your Easybank account will be a
                one-stop-shop for spending, saving, budgeting, investing, and
                much more.
              </p>
              <div class="relative top-[8vw] md:block md:top-0 md:pt-6 hover:cursor-pointer">
                <Button text="Request Invite"></Button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <div class="bg-blue-200 px-4 lg:px-10">
        <h1>Hi 👋</h1>
        <p>{`${isMobileNavbarOpen.value}`}</p>
      </div>
      <Button text="test123"></Button>
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
