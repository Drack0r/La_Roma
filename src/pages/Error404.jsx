import { usePageClass } from "../hook/usePageClass";

export function Error404() {
  usePageClass(true);

  return (
    <>
      <h1>Error 404</h1>
    </>
  );
}
