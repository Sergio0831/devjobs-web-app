/* eslint-disable jsx-a11y/label-has-associated-control */
import { useMemo, useCallback } from 'react';
import useTheme from '../../hooks/useTheme';
import IconMoon from '../../icons/IconMoon';
import IconSun from '../../icons/IconSun';
import styles from './styles.module.css';

/**
 * A React component that allows the user to toggle between light and dark themes.
 */

function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = useMemo(() => theme === 'dark', [theme]);

  const onChange = useCallback(() => toggleTheme(), [toggleTheme]);

  return (
    <div className={styles.themeSwitch}>
      <IconSun />
      <label htmlFor="themeSwitch" className={styles.themeSwitchLabel}>
        <input
          type="checkbox"
          name="themeSwitch"
          id="themeSwitch"
          className={styles.themeSwitchInput}
          checked={isDarkMode}
          onChange={onChange}
          aria-label="Toggle Theme"
        />
        <span className={styles.themeSwitchCircle} />
      </label>
      <IconMoon />
    </div>
  );
}

export default ThemeSwitch;
