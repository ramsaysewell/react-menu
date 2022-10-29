import { useLayoutEffect as useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect.js';

var useItemEffect = function useItemEffect(isDisabled, itemRef, updateItems) {
  useIsomorphicLayoutEffect(function () {
    if (process.env.NODE_ENV !== 'production' && !updateItems) {
      throw new Error("[React-Menu] This menu item or submenu should be rendered under a menu: " + itemRef.current.outerHTML);
    }
    if (isDisabled) return;
    var item = itemRef.current;
    updateItems(item, true);
    return function () {
      updateItems(item);
    };
  }, [isDisabled, itemRef, updateItems]);
};

export { useItemEffect };
