import Icon from './Icon.jsx';

const Button = ({
  onClick,
  buttonLabel: label,
  type = 'button',
  icon,
  className = '',
  iconW,
  iconH
}) => {
  return (
    <button className={`${className} `} type={type} onClick={onClick} icon={icon}>
      {icon && <Icon id={icon} iconW={iconW} iconH={iconH} />}
      {label && <h2 className="mt-[2px] lg:mt-[0px]">{label}</h2>}
    </button>
  );
};

export default Button;
