import React, {useEffect, useState} from 'react';

export default function useSelectionChange(items) {
  const [selectionMode, setSelectionMode] = useState(null);

  useEffect(() => {
    if (items.filter(i => i.selected).length > 0) {
      setSelectionMode(true);
    } else {
      setSelectionMode(false);
    }
  }, [items]);

  return selectionMode;
}
