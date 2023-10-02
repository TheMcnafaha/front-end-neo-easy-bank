import { component$ } from "@builder.io/qwik";

export interface ListItemProps {
  title: string;
  description: string;
  img_link: string;
  img_alt: string;
}

export const ListItem = component$<ListItemProps>(
  ({ title, description, img_link, img_alt }) => {
    return (
      <li class="flex flex-col items-center lg:items-start my-10">
        <img src={img_link} alt={img_alt} width={72} height={72} />
        <h4 class="text-tp-darkBlue text-xl lg:text-2xl my-4">{title} </h4>
        <p class="max-w-[340px]">{description}</p>
      </li>
    );
  },
);
