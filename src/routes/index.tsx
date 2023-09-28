import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/Button/button";
import { Card } from "~/components/card/card";
import { ListItem } from "~/components/list-item/list-item";

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
        <div class="max-w-screen-xl lg:px-10  lg:pt-8">
          <section class=" relative bottom-20 -z-20  grid  grid-cols-1 justify-items-center md:bottom-0 md:grid-cols-2 md:justify-between md:justify-items-start md:overflow-hidden lg:overflow-visible">
            <div class="max-w-screen-lg overflow-hidden bg-[url('/fe/bg-intro-mobile.svg')] bg-cover object-left   md:relative md:bottom-[8vw] md:col-start-2 md:row-start-1 md:w-[125%] md:bg-[url('/fe/bg-intro-desktop.svg')] lg:bottom-0 lg:w-full lg:max-w-[640px]  lg:overflow-visible ">
              <img
                class="relative bottom-[8vw] md:bottom-0 md:pl-[15vw] lg:block lg:pl-32"
                src="  fe/image-mockups.png "
                alt=""
              />
            </div>
            <div class="relative bottom-[8vw]  flex  max-w-sm flex-col items-center py-4 md:bottom-0 md:content-center md:items-start md:justify-center md:px-4 lg:px-0">
              <h1 class=" mb-4 text-4xl text-tp-darkBlue">
                Next generation digital banking
              </h1>
              <p class=" max-w-xs text-base md:max-w-full">
                Take your financial life online. Your Easybank account will be a
                one-stop-shop for spending, saving, budgeting, investing, and
                much more.
              </p>
              <div class="relative top-[8vw] hover:cursor-pointer md:top-0 md:block md:pt-6">
                <Button text="Request Invite"></Button>
              </div>
            </div>
          </section>
        </div>

        <div class=" grid w-full grid-cols-1 justify-items-center     bg-tp-lightGrayish md:justify-start md:text-center lg:justify-start  lg:text-left  xl:px-10">
          <section class="max-w-screen-xl  py-16 md:grid md:grid-cols-2 md:grid-rows-1 lg:w-full   lg:px-10 ">
            <div class="mb-16 max-w-[340px] md:col-span-2 md:row-start-1 md:max-w-md md:justify-self-center lg:justify-start lg:justify-self-start  ">
              <h2 class="mb-4 px-4 text-3xl text-tp-darkBlue lg:px-0">
                Why choose Easybank?
              </h2>
              <p class="px-3 md:px-4 lg:px-0">
                {" "}
                We leverage Open Banking to turn your bank account into your
                financial hub. Control your finances like never before.{" "}
              </p>
            </div>
            <ul class="col-span-2  gap-4 self-center md:col-start-1 md:row-start-2 md:grid md:grid-cols-2 md:px-4 lg:grid-cols-4 lg:self-start lg:px-0">
              <ListItem
                title="Online Banking"
                description="
  Our modern web and mobile applications allow you to keep track of your finances 
  wherever you are in the world."
                img_link="fe/icon-online.svg"
                img_alt="digital drawing of a credit card"
              ></ListItem>

              <ListItem
                title="Simple Budgeting"
                description="See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits. "
                img_link="fe/icon-budgeting.svg"
                img_alt="digital drawing of a credit card"
              ></ListItem>
              <ListItem
                title="Fast Onboarding"
                description=" We don’t do branches. Open your account in minutes online and start taking control of your finances right away. "
                img_link="fe/icon-onboarding.svg"
                img_alt="digital drawing of a credit card"
              ></ListItem>
              <ListItem
                title="Open API"
                description=" Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier. "
                img_link="fe/icon-api.svg"
                img_alt="digital drawing of a credit card"
              ></ListItem>
            </ul>
          </section>
        </div>
        <div class=" py-16 w-full bg-tp-veryLightGray xl:flex xl:flex-col xl:items-center ">
          <section class="flex flex-col items-center max-w-screen-xl ">
            <h3 class="pb-16 text-3xl text-tp-darkBlue">Latest Articles</h3>
            <ul class="max-w-sm md:max-w-screen-xl md:gap-8 md:col-start-1 md:row-start-2 md:grid md:grid-cols-2 md:px-4 px-4 xl:grid-cols-4 xl:self-center xl:px-0">
              <li>
                <Card
                  title="Recieve money in any curency with no fees"
                  author="Claire Robinson"
                  intro_text=" The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single … "
                  img_link="fe/image-currency.jpg"
                  img_alt="multiple and different dollars spread around"
                ></Card>
              </li>
              <li>
                <Card
                  title="Treat yourself without worrying about money"
                  author="Wilson Hutton"
                  intro_text=" Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you … "
                  img_link="fe/image-restaurant.jpg"
                  img_alt="airplane wing amid cluods on a sunny day"
                ></Card>
              </li>
              <li>
                <Card
                  title="Take your Easybank card wherever you go"
                  author="Wilson Hutton"
                  intro_text=" We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you … "
                  img_link="fe/image-plane.jpg"
                  img_alt="colorful confetti thrown against a blue wall"
                ></Card>
              </li>
              <li>
                <Card
                  title="Our invite-only Beta accounts are now live!"
                  author="Claire Robinson"
                  intro_text=" Our invite-only Beta accounts are now live! After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ... "
                  img_link="fe/image-confetti.jpg"
                  img_alt="multiple and different dollars spread around"
                ></Card>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer class="bg-tp-darkBlue py-10">
        <div class="flex flex-col items-center gap-8">
          <img class="" src="fe/logo-alt.svg" alt="logo of EasyBank" />
          {/*  lesson learned: dont flex svgs xddd  */}
          <div class=" flex max-w-xs flex-col items-center gap-3">
            <ul class=" flex justify-around gap-4">
              <li>
                <img src="fe/icon-facebook.svg" alt="logo of Facebook" />
              </li>
              <li>
                <img src="fe/icon-youtube.svg " alt="logo of YouTube" />
              </li>
              <li>
                <img src="fe/icon-twitter.svg " alt="logo of Twitter" />
              </li>
              <li>
                <img src="fe/icon-pinterest.svg " alt="logo of Piterest" />
              </li>
              <li>
                <img src="fe/icon-instagram.svg " alt="logo of Instagram" />
              </li>
            </ul>
            <ul class="mb-3 flex flex-col items-center gap-2 text-xs text-white">
              <li>About Us</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Support</li>
              <li>Privacy Policy</li>
            </ul>
            <Button text="Request Invite"></Button>
            <p class="mt-3 text-xs text-tp-grayishBlue">
              {" "}
              {" © Easybank. All Rights Reserved "}{" "}
            </p>
          </div>
        </div>
      </footer>
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
