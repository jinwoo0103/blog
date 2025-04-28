/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  printWidth: 100,
  singleQuote: true,

  plugins: [
    /**
     * https://github.com/simonhaenisch/prettier-plugin-organize-imports
     */
    'prettier-plugin-organize-imports',

    /**
     * https://github.com/tailwindlabs/prettier-plugin-tailwindcss?tab=readme-ov-file#compatibility-with-other-prettier-plugins
     *
     * `prettier-plugin-tailwindcss` must be loaded last.
     * (not always, but in this case it's due to above `prettier-plugin-organize-imports`)
     * check: https://github.com/tailwindlabs/prettier-plugin-tailwindcss?tab=readme-ov-file#compatibility-with-other-prettier-plugins
     */
    'prettier-plugin-tailwindcss',
  ],
};

export default config;
