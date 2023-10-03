import { component$ } from "@builder.io/qwik";
export interface CardProps {
  img_link: string;
  img_alt: string;
  author: string;
  title: string;
  intro_text: string;
}

export const Card = component$<CardProps>(
  ({ img_link, img_alt, author, title, intro_text }) => {
    return (
      <div class="max-w-md pb-6 drop-shadow-sm">
        <img
          class=" rounded-t-lg object-cover md:h-[300px] md:w-full xl:h-[220px]"
          src={img_link}
          alt={img_alt}
        />
        <div class="rounded-b-lg bg-white px-4 py-6 text-left md:h-[250px]">
          <p class="mb-4 text-xs font-light text-tp-grayishBlue">By {author}</p>
          <h3 class="mb-2 text-lg font-medium text-tp-darkBlue lg:hover:cursor-pointer lg:hover:bg-gradient-to-b lg:hover:from-tp-limeGreen lg:hover:to-tp-brightCyan lg:hover:bg-clip-text lg:hover:text-transparent">
            {title}
          </h3>
          <p class="text-sm text-tp-grayishBlue">{intro_text}</p>
        </div>
      </div>
    );
  },
);
