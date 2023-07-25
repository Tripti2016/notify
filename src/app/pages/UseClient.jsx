
import { useState, useEffect } from "react";

export const useClient = () => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    setShouldRender(true);
  }, []);

  return shouldRender;
};
