"use client"

import CalendarModule from "@/src/modules/CalendarModule/CalendarModule"

const HomePage = ({ params }: { params: { date: string } }) => {
    return <CalendarModule params={params} />
}

export default HomePage
