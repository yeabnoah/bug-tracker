const toggleTheme = (theme: string, setTheme: (newTheme: string) => void) => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
};

export default toggleTheme;
