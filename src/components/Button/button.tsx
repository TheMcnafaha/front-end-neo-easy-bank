import { component$ } from "@builder.io/qwik";

export interface ButtonProps {
  text: string;
}

export const Button = component$<ButtonProps>(({ text }) => {
  return (
    <button
      class="w-fit rounded-3xl z-50  lg:hover:[filter:brightness(110%)] md:hover:cursor-pointer bg-gradient-to-r from-tp-limeGreen to-tp-brightCyan px-5 py-2   text-sm font-bold text-white"
      type="button"
    >
      {text}
    </button>
  );
});
