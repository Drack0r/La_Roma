import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export function usePageClass(isErrorPage = false) {
  const location = useLocation();

  useEffect(() => {
    // Supprimer toutes les classes de page existantes
    document.getElementById("root").className = document
      .getElementById("root")
      .className.replace(/page-\S+/g, "")
      .trim();

    // Générer la classe basée sur le pathname
    let pageClass = "page-home"; // classe par défaut

    // Si c'est une page d'erreur, utiliser page-error
    if (isErrorPage) {
      pageClass = "page-error";
    } else if (location.pathname === "/") {
      pageClass = "page-home";
    } else if (location.pathname === "/contact") {
      pageClass = "page-contact";
    } else {
      // Pour les autres routes, utiliser le pathname
      pageClass = `page-${
        location.pathname.slice(1).replace(/\//g, "-") || "unknown"
      }`;
    }

    // Ajouter la nouvelle classe
    document.getElementById("root").classList.add(pageClass);

    // Cleanup function pour supprimer la classe quand le composant se démonte
    return () => {
      document.getElementById("root").classList.remove(pageClass);
    };
  }, [location.pathname, isErrorPage]);

  // Retourner la classe actuelle si vous en avez besoin dans le composant
  const getCurrentPageClass = () => {
    if (isErrorPage) return "page-error";
    if (location.pathname === "/") return "page-home";
    if (location.pathname === "/contact") return "page-contact";
    return `page-${
      location.pathname.slice(1).replace(/\//g, "-") || "unknown"
    }`;
  };

  return getCurrentPageClass();
}
