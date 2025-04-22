const EditButton = ({children,onEditClick,id}) => {
  return (
    <button className="cursor-pointer" onClick={() => onEditClick(id)}>{children}</button>
  )
}
 
export {EditButton}
