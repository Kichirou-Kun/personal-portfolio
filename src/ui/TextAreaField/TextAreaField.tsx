import React from "react";
interface Props {
  placeholder: string;
}
const TextAreaField = ({ placeholder }: Props) => {
  return (
    <textarea
      className="block w-full rounded-md border border-gray-500 bg-inherit px-4 py-[16.5px]  text-SECONDARY_COLOR placeholder-slate-400 invalid:border-pink-500 invalid:text-pink-600 hover:ring-1 hover:ring-black focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:cursor-not-allowed disabled:text-gray-500 disabled:shadow-none disabled:hover:ring-0 dark:text-white dark:placeholder-slate-300 dark:hover:ring-white dark:disabled:text-gray-400"
      placeholder={placeholder}
      rows={4}
    />
  );
};

export default TextAreaField;
