import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import Header from './Header'
import Content from './Content'

const Layout = ({ children }: any) => {

  const today = new Date()
  const currentMonth = format(today, 'MMMM')
  const currentYear = format(today, 'yyyy')

  const [month, setMonth] = useState(currentMonth)
  const [year, setYear] = useState(currentYear)

  useEffect(() => {
    setMonth(currentMonth)
    setYear(currentYear)
  }, [currentMonth, currentYear])

  return (
    <>
      <Header year={year} month={month} />
      <Content>
        {children}
      </Content>
    </>
  )
}

export default Layout