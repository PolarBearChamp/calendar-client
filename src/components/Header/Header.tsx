
interface Props {
  year: string
  month: string
}

const Header = ({ year, month }: Props) => {

  return (
    <div className="font-bold text-6xl mt-16">
      <span className="mr-9">{year}</span><span>{month}</span>
    </div>
  )
}

export default Header