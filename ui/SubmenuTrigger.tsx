interface Props {
    className?: string;
    onClick?: () => void;
}

const SubmenuTrigger = ({className, onClick}: Props) => {
    return (
        <button className={className || ''} onClick={onClick} aria-label="Open submenu">
            <i className="icon icon-ellipsis-vertical-solid text-[24px]" />
        </button>
    )
}

export default SubmenuTrigger