import { useEffect } from "react";

export default function useFocusEffect(ref) {
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref]);
}
