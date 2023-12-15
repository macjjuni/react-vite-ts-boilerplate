import { Link, useLocation } from 'react-router-dom'
import { MdManageAccounts, MdHome } from 'react-icons/md'

const iconSize = 30

export default function UserAdminSwitchButton() {
  const isAdmin = useLocation().pathname.includes('admin')

  return (
    <>
      {isAdmin ? (
        <Link to="/">
          <MdHome size={iconSize} />
        </Link>
      ) : (
        <Link to="/admin">
          <MdManageAccounts size={iconSize} />
        </Link>
      )}
    </>
  )
}
