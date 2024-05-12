export const VariantsMap = {
  rounded: "p-4 rounded-full",
  lg: "p-4 rounded-lg text-xl font-medium border-2",
  md: "p-2 rounded-md text-lg font-medium border-2",
  sm: "p-1 rounded-sm test-md border-2",
  light: "bg-white text-gray-900 hover:bg-green-500 hover:text-white",
  dark: "bg-green-500 text-white hover:bg-white hover:text-gray-900"
}

export type VariantsKeys = keyof typeof VariantsMap;
