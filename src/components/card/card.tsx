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
      <div class="pb-6 drop-shadow-sm max-w-md">
        <img
          class=" rounded-t-lg md:h-[300px] xl:h-[220px] object-cover md:w-full"
          src={img_link}
          alt={img_alt}
        />
        <div class="rounded-b-lg bg-white px-4 py-6 text-left md:h-[250px]">
          <h5 class="mb-4 text-xs font-light text-tp-grayishBlue">
            By {author}
          </h5>
          <h4 class="mb-2 text-lg text-tp-darkBlue">{title}</h4>
          <p class="text-sm text-tp-grayishBlue">{intro_text}</p>
        </div>
      </div>
    );
  },
);
