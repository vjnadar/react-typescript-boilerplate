import { http, HttpResponse } from "msw";

export const appComponentHandlers = [
    http.get("http://localhost:3030/dummyUrl", () => {
        return HttpResponse.json({ message: "Learn React." });
    })
];
