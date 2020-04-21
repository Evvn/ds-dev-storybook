import "@storybook/addon-actions/register";
import "@storybook/addon-links/register";
import { registerDsm } from "@invisionapp/dsm-storybook/register";
import "@storybook/addon-a11y/register";

registerDsm(process.env.STORYBOOK_DSM);
