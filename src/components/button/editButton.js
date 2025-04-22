const EditButton = ({children,onEditClick,obj}) => {
  return (
    <button className="cursor-pointer" onClick={() => onEditClick(obj)}>{children}</button>
  )
}
 
export {EditButton}
