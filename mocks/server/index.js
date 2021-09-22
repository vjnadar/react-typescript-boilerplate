import { setupServer } from "msw/node";
import { appComponentHandlers } from "../handlers";

export const server = setupServer(...appComponentHandlers);
