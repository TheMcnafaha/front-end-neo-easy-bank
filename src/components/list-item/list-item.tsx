import { component$ } from "@builder.io/qwik";
import { title } from "process";

export interface ListItemProps {
  title: string;
  description: string;
  img_link: string;
  img_alt: string;
}

export const ListItem = component$<ListItemProps>(
  ({ title, description, img_link, img_alt }) => {
    return (
      <li class="flex flex-col items-center my-10">
        <img src={img_link} alt={img_alt} />
        <h4 class="text-tp-darkBlue text-xl my-4">{title} </h4>
        <p class="max-w-[340px]">{description}</p>
      </li>
    );
  },
);
