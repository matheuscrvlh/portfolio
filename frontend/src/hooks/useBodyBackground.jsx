import { useEffect } from "react";

export default function useBodyBackground(color) {
  useEffect(() => {
    // meta theme-color (barra do navegador)
    let meta = document.querySelector('meta[name="theme-color"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "theme-color");
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", color);

    document.documentElement.style.background = color;
    document.body.style.background = color;

    return () => {
      // resetar quando sair da página
      document.documentElement.style.background = "";
      document.body.style.background = "";
    };
  }, [color]);
}