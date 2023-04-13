import UserControlButton from '../buttons/UserControlButton'

const UserControls = () => {
  return (
    <div className='flex flex-col gap-10 items-center shadow-buttons px-4 py-11 rounded-full'>
      <UserControlButton
        route='friends'
        icon='friends.svg'
      />
      <UserControlButton
        route='discovery'
        icon='compass.svg'
      />
      <UserControlButton
        route='profile'
        icon='legasov.png'
      />
    </div>
  )
}

export default UserControls