import { component$ } from "@builder.io/qwik";

export interface ButtonProps {
  text: string;
}

export const Button = component$<ButtonProps>(({ text }) => {
  return (
    <button
      class="rounded-3xl text-sm  bg-gradient-to-r from-tp-limeGreen to-tp-brightCyan px-5 py-2   font-bold text-white w-fit"
      type="button"
    >
      {text}
    </button>
  );
});
