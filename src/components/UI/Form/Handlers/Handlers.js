export const inputChangeHandler = (e, setState) => {
  const { name, value } = e.target
  return setState(prev => ({ ...prev, [name]: value }))
}
