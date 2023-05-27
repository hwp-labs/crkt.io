import { useMemo, useCallback } from "react";

// <CardList items={$({...},[])} />

export default function useMemoizer(props, dependencies = []) {
  return typeof props === "function"
    ? useCallback(
        () => (dependencies.length > 0 ? dependencies[0] && props : props),
        [...dependencies]
      )
    : useMemo(
        () => (dependencies.length > 0 ? dependencies[0] && props : props),
        [...dependencies]
      );
}
