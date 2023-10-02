import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/Button/button";
import { Card } from "~/components/card/card";
import { ListItem } from "~/components/list-item/list-item";
// import PhoneMockup from "~/media/image-mockups.png?jsx";
import PhoneMockup from "~/../public/fe/image-mockups.png?jsx";

export default component$(() => {
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
                alt="Easybank logo "
                width={139}
                height={20}
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
                src="/fe/icon-hamburger.svg"
                class="text-xs"
                alt="menu icon"
                width={24}
                height={24}
              />
            </button>
            <div class="hidden w-full md:block md:w-auto " id="navbar-default">
              <ul class="mx-auto my-0 mt-4 flex max-w-sm flex-col rounded-lg border border-gray-100 bg-gray-50  font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
                <li>
                  <a
                    href="#"
                    class="block rounded py-2 pl-3 pr-4    hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:text-tp-grayishBlue md:hover:bg-transparent md:hover:text-tp-darkBlue "
                    aria-current="page"
                    onMouseOver$={function show() {
                      if (window.innerWidth < 767) {
                        return;
                      }
                      document.getElementById(
                        "nav_item_home",
                      )!.style.visibility = "visible";
                    }}
                    onMouseOut$={function hide() {
                      document.getElementById(
                        "nav_item_home",
                      )!.style.visibility = "hidden";
                    }}
                  >
                    Home
                  </a>
                  <div
                    id="nav_item_home"
                    class=" invisible relative   top-4 h-1 w-full bg-gradient-to-r from-tp-limeGreen to-tp-brightCyan md:invisible"
                  ></div>
                </li>
                <li>
                  <a
                    href="#"
                    class="block rounded py-2 pl-3 pr-4  hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:text-tp-grayishBlue md:hover:bg-transparent md:hover:text-tp-darkBlue "
                    onMouseOver$={function show() {
                      if (window.innerWidth < 767) {
                        return;
                      }
                      document.getElementById(
                        "nav_item_about",
                      )!.style.visibility = "visible";
                    }}
                    onMouseOut$={function hide() {
                      document.getElementById(
                        "nav_item_about",
                      )!.style.visibility = "hidden";
                    }}
                  >
                    About
                    <div
                      id="nav_item_about"
                      class=" invisible relative   top-4 h-1 w-full bg-gradient-to-r from-tp-limeGreen to-tp-brightCyan md:invisible"
                    ></div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block rounded py-2 pl-3 pr-4  hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:text-tp-grayishBlue md:hover:bg-transparent md:hover:text-tp-darkBlue "
                    onMouseOver$={function show() {
                      if (window.innerWidth < 767) {
                        return;
                      }
                      document.getElementById(
                        "nav_item_contact",
                      )!.style.visibility = "visible";
                    }}
                    onMouseOut$={function hide() {
                      document.getElementById(
                        "nav_item_contact",
                      )!.style.visibility = "hidden";
                    }}
                  >
                    Contact
                  </a>
                  <div
                    id="nav_item_contact"
                    class=" invisible relative   top-4 h-1 w-full bg-gradient-to-r from-tp-limeGreen to-tp-brightCyan md:invisible"
                  ></div>
                </li>
                <li>
                  <a
                    href="#"
                    class="block rounded py-2 pl-3 pr-4  hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:text-tp-grayishBlue md:hover:bg-transparent md:hover:text-tp-darkBlue "
                    onMouseOver$={function show() {
                      if (window.innerWidth < 767) {
                        return;
                      }
                      document.getElementById(
                        "nav_item_blog",
                      )!.style.visibility = "visible";
                    }}
                    onMouseOut$={function hide() {
                      document.getElementById(
                        "nav_item_blog",
                      )!.style.visibility = "hidden";
                    }}
                  >
                    Blog
                  </a>
                  <div
                    id="nav_item_blog"
                    class=" invisible relative   top-4 h-1 w-full bg-gradient-to-r from-tp-limeGreen to-tp-brightCyan md:invisible"
                  ></div>
                </li>
                <li>
                  <a
                    href="#"
                    class="block rounded py-2 pl-3 pr-4  hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:text-tp-grayishBlue md:hover:bg-transparent md:hover:text-tp-darkBlue "
                    onMouseOver$={function show() {
                      if (window.innerWidth < 767) {
                        return;
                      }
                      document.getElementById(
                        "nav_item_careers",
                      )!.style.visibility = "visible";
                    }}
                    onMouseOut$={function hide() {
                      document.getElementById(
                        "nav_item_careers",
                      )!.style.visibility = "hidden";
                    }}
                  >
                    Careers
                  </a>
                  <div
                    id="nav_item_careers"
                    class=" invisible relative   top-4 h-1 w-full bg-gradient-to-r from-tp-limeGreen to-tp-brightCyan md:invisible"
                  ></div>
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
          <section class=" relative bottom-20 -z-20 md:z-0  grid  grid-cols-1 justify-items-center md:bottom-0 md:grid-cols-2 md:justify-between md:justify-items-start md:overflow-hidden lg:overflow-visible">
            <div class="max-w-screen-lg overflow-hidden bg-[url('/fe/bg-intro-mobile.svg')] bg-cover object-left   md:relative md:bottom-[8vw] md:col-start-2 md:row-start-1 md:w-[125%] md:bg-[url('/fe/bg-intro-desktop.svg')] lg:bottom-0 lg:w-full lg:max-w-[640px]  lg:overflow-visible ">
              <div class="relative bottom-[8vw] md:bottom-0 md:pl-[15vw] lg:block lg:pl-32">
                <PhoneMockup />
              </div>
            </div>
            <div class="relative bottom-[8vw]  flex  max-w-sm flex-col items-center py-4 md:bottom-0 md:content-center md:items-start md:justify-center md:px-4 lg:px-0">
              <h1 class=" mb-4  text-4xl text-tp-darkBlue lg:text-5xl">
                Next generation digital banking
              </h1>
              <p class=" max-w-xs text-base md:max-w-full">
                Take your financial life online. Your Easybank account will be a
                one-stop-shop for spending, saving, budgeting, investing, and
                much more.
              </p>
              <div class="relative top-[8vw]  z-20 md:top-0 md:block md:pt-6">
                <Button text="Request Invite"></Button>
              </div>
            </div>
          </section>
        </div>

        <div class=" grid w-full grid-cols-1 justify-items-center     bg-tp-lightGrayish md:justify-start md:text-center lg:justify-start  lg:text-left  xl:px-10">
          <section class="max-w-screen-xl  py-16 md:grid md:grid-cols-2 md:grid-rows-1 lg:w-full   lg:px-10 ">
            <div class="mb-16 max-w-[340px] md:col-span-2 md:row-start-1 md:max-w-md md:justify-self-center lg:justify-start lg:justify-self-start  ">
              <h2 class="mb-4 px-4 text-3xl text-tp-darkBlue lg:px-0 lg:text-4xl">
                Why choose Easybank?
              </h2>
              <p class="px-3 md:px-4 lg:px-0">
                {" "}
                We leverage Open Banking to turn your bank account into your
                financial hub. Control your finances like never before.{" "}
              </p>
            </div>
            <ul class="col-span-2  gap-4 self-center md:col-start-1 md:row-start-2 md:grid md:grid-cols-2 md:px-4 lg:grid-cols-4 lg:gap-10 lg:self-start lg:px-0">
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
        <div class=" w-full bg-tp-veryLightGray py-16 xl:flex xl:flex-col xl:items-center ">
          <section class="flex max-w-screen-xl flex-col items-center ">
            <h3 class="pb-16 text-3xl text-tp-darkBlue lg:text-4xl">
              Latest Articles
            </h3>
            <ul class="max-w-sm px-4 md:col-start-1 md:row-start-2 md:grid md:max-w-screen-xl md:grid-cols-2 md:gap-8 md:px-4 xl:grid-cols-4 xl:self-center xl:px-0">
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
      <footer class="flex justify-center bg-tp-darkBlue py-10 lg:text-lg">
        <div class="flex w-full max-w-screen-xl flex-col items-center gap-8 px-4 md:grid md:grid-cols-3 md:justify-between lg:gap-0 lg:px-10">
          <div class="flex flex-col items-start gap-8 lg:self-start lg:justify-self-start">
            <img
              class=""
              src="fe/logo-alt.svg"
              alt="logo of EasyBank"
              width={139}
              height={20}
            />
            <ul class=" flex justify-around gap-4">
              <li>
                <img
                  src="fe/icon-facebook.svg"
                  class="  lg:hover:cursor-pointer "
                  alt="logo of Facebook"
                  id="facebook"
                  width={20}
                  height={20}
                  onMouseOver$={() => {
                    document
                      .getElementById("facebook")!
                      .setAttribute("src", "fe/icon-facebook-alt.svg");
                  }}
                  onMouseOut$={() => {
                    document
                      .getElementById("facebook")!
                      .setAttribute("src", "fe/icon-facebook.svg");
                  }}
                />
              </li>
              <li>
                <img
                  src="fe/icon-youtube.svg "
                  class="lg:hover:cursor-pointer lg:hover:fill-red-400"
                  alt="logo of YouTube"
                  id="youtube"
                  width={20}
                  height={20}
                  onMouseOver$={() => {
                    document
                      .getElementById("youtube")!
                      .setAttribute("src", "fe/icon-youtube-alt.svg");
                  }}
                  onMouseOut$={() => {
                    document
                      .getElementById("youtube")!
                      .setAttribute("src", "fe/icon-youtube.svg");
                  }}
                />
              </li>
              <li>
                <img
                  src="fe/icon-twitter.svg "
                  class="lg:hover:cursor-pointer"
                  alt="logo of Twitter"
                  id="twitter"
                  width={20}
                  height={20}
                  onMouseOver$={() => {
                    document
                      .getElementById("twitter")!
                      .setAttribute("src", "fe/icon-twitter-alt.svg");
                  }}
                  onMouseOut$={() => {
                    document
                      .getElementById("twitter")!
                      .setAttribute("src", "fe/icon-twitter.svg");
                  }}
                />
              </li>
              <li>
                <img
                  src="fe/icon-pinterest.svg "
                  class="lg:hover:cursor-pointer lg:hover:fill-red-400"
                  alt="logo of Piterest"
                  id="pinterest"
                  width={20}
                  height={20}
                  onMouseOver$={() => {
                    document
                      .getElementById("pinterest")!
                      .setAttribute("src", "fe/icon-pinterest-alt.svg");
                  }}
                  onMouseOut$={() => {
                    document
                      .getElementById("pinterest")!
                      .setAttribute("src", "fe/icon-pinterest.svg");
                  }}
                />
              </li>
              <li>
                <img
                  src="fe/icon-instagram.svg "
                  class="lg:hover:cursor-pointer lg:hover:fill-red-400"
                  alt="logo of Instagram"
                  id="instagram"
                  width={20}
                  height={20}
                  onMouseOver$={() => {
                    document
                      .getElementById("instagram")!
                      .setAttribute("src", "fe/icon-instagram-alt.svg");
                  }}
                  onMouseOut$={() => {
                    document
                      .getElementById("instagram")!
                      .setAttribute("src", "fe/icon-instagram.svg");
                  }}
                />
              </li>
            </ul>
          </div>
          {/*  lesson learned: dont flex svgs xddd  */}
          <div class=" flex max-w-xs flex-col items-center gap-3 md:flex-row md:justify-between md:pr-10">
            <ul class="mb-3 flex flex-col items-center gap-2 text-xs text-white lg:text-base">
              <li class="lg:hover:cursor-pointer lg:hover:bg-gradient-to-b lg:hover:from-tp-limeGreen lg:hover:to-tp-brightCyan lg:hover:bg-clip-text lg:hover:text-transparent">
                About Us
              </li>
              <li class="lg:hover:cursor-pointer lg:hover:bg-gradient-to-b lg:hover:from-tp-limeGreen lg:hover:to-tp-brightCyan lg:hover:bg-clip-text lg:hover:text-transparent">
                Contact
              </li>
              <li class="lg:hover:cursor-pointer lg:hover:bg-gradient-to-b lg:hover:from-tp-limeGreen lg:hover:to-tp-brightCyan lg:hover:bg-clip-text lg:hover:text-transparent">
                Blog
              </li>
            </ul>
            <ul class="mb-3 flex flex-col items-center gap-2 text-xs text-white lg:text-base">
              <li class="lg:hover:cursor-pointer lg:hover:bg-gradient-to-b lg:hover:from-tp-limeGreen lg:hover:to-tp-brightCyan lg:hover:bg-clip-text lg:hover:text-transparent">
                Careers
              </li>
              <li class="lg:hover:cursor-pointer lg:hover:bg-gradient-to-b lg:hover:from-tp-limeGreen lg:hover:to-tp-brightCyan lg:hover:bg-clip-text lg:hover:text-transparent">
                Support
              </li>
              <li class="lg:hover:cursor-pointer lg:hover:bg-gradient-to-b lg:hover:from-tp-limeGreen lg:hover:to-tp-brightCyan lg:hover:bg-clip-text lg:hover:text-transparent">
                Privacy Policy
              </li>
            </ul>
          </div>

          <div class="flex flex-col items-center gap-2 pt-2 lg:justify-self-end">
            <Button text="Request Invite"></Button>
            <p class="mt-3 text-xs text-tp-grayishBlue lg:text-sm">
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
