import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
export const baseUrl = "http://194.58.120.23:5896/api";

export const rtkApiQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  prepareHeaders: (headers) => {
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append(
      "Authorization",
      `Bearer ${localStorage.getItem("access_token") || ""}`
    );
    return headers;
  },
  credentials: "include",
});
