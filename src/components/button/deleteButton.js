const DeleteButton = ({children,onDeleteClick,id}) => {
    return (
      <button className="cursor-pointer" onClick={() => onDeleteClick(id)}>{children}</button>
    )
}

  
export {DeleteButton}
  