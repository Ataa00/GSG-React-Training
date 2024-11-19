interface Props {
  title: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  onClose: () => void;
}

const Button = ({ title, color = "primary", onClose }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClose}>
      {title}
    </button>
  );
};

export default Button;
