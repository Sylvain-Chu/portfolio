declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "@/app/styles/globals.css";
