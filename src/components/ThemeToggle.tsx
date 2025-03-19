import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useAnalytics } from "@/hooks/useAnalytics";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { trackThemeChange } = useAnalytics();

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    trackThemeChange(newTheme);
  };

  return (
    <button
      onClick={handleThemeChange}
      className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary transition-all duration-300 ease-in-out hover:scale-110"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4 text-foreground" />
      ) : (
        <Sun className="h-4 w-4 text-foreground" />
      )}
    </button>
  );
}
