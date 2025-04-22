const DeleteButton = ({children,onDeleteClick,obj}) => {
    return (
      <button className="cursor-pointer" onClick={() => onDeleteClick(obj?.id)}>{children}</button>
    )
}

  
export {DeleteButton}
  