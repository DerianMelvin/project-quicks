import { ComponentSizeType } from "@/types/components";

export default function TaskSelectedButton({ size }: ComponentSizeType) {
  return (
    <svg
      width={`${size}`}
      height={`${size}`}
      viewBox="0 0 68 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M68 34C68 52.7777 52.7777 68 34 68C15.2223 68 0 52.7777 0 34C0 15.2223 15.2223 0 34 0C52.7777 0 68 15.2223 68 34Z"
        fill="#F8B76B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.1111 24.6663H48.1111C49.3334 24.6663 50.3334 25.6663 50.3334 26.8885V41.3329C50.3334 42.5551 49.3334 43.5551 48.1111 43.5551H28.1111C26.8889 43.5551 25.8889 42.5551 25.8889 41.3329V26.8885C25.8889 25.6663 26.8889 24.6663 28.1111 24.6663ZM28.1111 26.8885V41.3329H37V26.8885H28.1111ZM48.1111 41.3329H39.2222V26.8885H48.1111V41.3329ZM47 30.7774H40.3334V32.444H47V30.7774ZM40.3334 33.5551H47V35.2218H40.3334V33.5551ZM47 36.3329H40.3334V37.9996H47V36.3329Z"
        fill="white"
        className="-translate-x-1"
      />
    </svg>
  );
}
