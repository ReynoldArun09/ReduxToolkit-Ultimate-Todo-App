import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

export default function Theme() {
  const { theme, setTheme } = useTheme();
  return (
    <Button variant={"outline"}>
      {theme === "dark" ? (
        <Sun onClick={() => setTheme("light")} />
      ) : (
        <Moon onClick={() => setTheme("dark")} />
      )}
    </Button>
  );
}
