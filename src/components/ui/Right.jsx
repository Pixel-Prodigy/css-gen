import { GetCssButton } from "./GetCssButton";

function Right({ name, children, className,  ...props }) {
  return (
    <div className="w-[50%] border-r-2 border-gray-400/20 sm:px-12 px-2 py-8">
      <div className="flex justify-between items-center h-">
        <h3 className="font-bold">{name || "Editor"}</h3>
        <GetCssButton />
      </div>

      <div className="flex h-full">
        <div
          className={`bg-[#f3f4f6] grid place-content-center h-80 mt-28 min-h-68 w-full ${className} `}
          {...props}
        >
          {children}
        </div>
        <div></div>
      </div>
    </div>
  );
}
export { Right };
