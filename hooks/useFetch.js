export default async function useFetch(url, method = "GET", body = null) {
  let raw,
    headers = {
      "Content-type": "application/json; charset=UTF-8",
    };

  if (body) {
    raw =
      "headers" in body
        ? await fetch(url, { method, ...body })
        : await fetch(url, {
            method,
            headers,
            body: JSON.stringify(body),
          });
  } else raw = await fetch(url, { method, headers });

  const res = await raw.json();
  const len = (res) =>
    Array.isArray(res) ? res.length : typeof res === "object" ? 1 : 0;
  const msg = (raw, err = false) =>
    raw.statusText && raw.statusText.length > 0
      ? raw.statusText
      : err
      ? "Not Found"
      : "OK";

  return raw.ok
    ? {
        data: res,
        meta: {
          size: len(res),
          error: msg(raw),
          errno: raw.status,
        },
      }
    : {
        data: null,
        meta: { size: 0, error: msg(raw, true), errno: raw.status },
      };
}
