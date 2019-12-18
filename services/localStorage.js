/**
 * Check if the localStorage API is available.
 *
 * It won't be available in the server and in clients where the user disabled
 * the use of cookies and other storage forms.
 *
 * @returns {Boolean} - If the localStorage API is available.
 */
export function isAvailable() {
  try {
    return typeof localStorage.getItem === 'function';
  } catch (err) {
    return false;
  }
}

/**
 * Get an item from localStorage.
 *
 * @param {String} key - Key under which the item is stored.
 * @returns {String|null} - The item from localStorage.
 */
export function get(key) {
  try {
    return localStorage.getItem(key);
  } catch (err) {
    console.warn('localStorage API is not available');

    return null;
  }
}

/**
 * Store an item in localStorage.
 *
 * @param {String} key - Key under which to store the item.
 * @param {String} value - Value to store.
 */
export function set(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (err) {
    console.warn('localStorage API is not available');
  }
}

/**
 * Remove an item from localStorage.
 *
 * @param {String} key - Key under which to remove the item from.
 */
export function remove(key) {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.warn('localStorage API is not available');
  }
}

/**
 * Clear all items from localStorage.
 */
export function clear() {
  try {
    localStorage.clear();
  } catch (err) {
    console.warn('localStorage API is not available');
  }
}
