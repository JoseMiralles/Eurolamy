/**
 * This supresses an error raised by Typescript when importing an SVG.
 */
declare module "*.svg" {
    const content: any;
    export default content;
}