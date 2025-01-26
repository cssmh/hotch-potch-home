type PerspectiveTextProps = {
  label?: string;
  textColor?: string;
};

const PerspectiveText: React.FC<PerspectiveTextProps> = ({
  label,
  textColor,
}) => {
  return (
    <div className={`perspectiveText z-10 ${textColor}`}>
      <p className="relative z-[5] desc-text whitespace-nowrap">{label}</p>
      <p className="relative z-[5] desc-text whitespace-nowrap">{label}</p>
    </div>
  );
};

export default PerspectiveText;
