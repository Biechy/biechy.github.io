interface ButtonGroupProps {
  activeButton: "all" | "AI" | "software";
  onButtonChange: (category: string) => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  activeButton,
  onButtonChange,
}) => {
  const categories = ["all", "AI", "software"];
  return (
    <div
      className="relative mt-12 flex bg-neutral-100 dark:bg-neutral-900  rounded-md overflow-hidden  text-sm shadow-xl"
      style={{ width: `${categories.length * 45}px` }}
    >
      <div
        className={`absolute top-0 left-0 h-full bg-primary-light dark:bg-primary-dark transform transition-transform duration-300 ease-in-out`}
        style={{
          width: `${100 / categories.length}%`,
          transform: `translateX(${categories.indexOf(activeButton) * 100}%)`,
        }}
      />
      {categories.map((category) => (
        <div
          key={category}
          className={`relative flex-1 py-0.5 px-1 text-center cursor-pointer transition-all text-neutral-800 dark:text-neutral-300`}
          onClick={() => onButtonChange(category)}
        >
          {category === "software"
            ? "Soft"
            : category.charAt(0).toUpperCase() + category.slice(1)}
        </div>
      ))}
    </div>
  );
};

export default ButtonGroup;
