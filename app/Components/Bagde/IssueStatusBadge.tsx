import React from 'react'
import { Status } from '@prisma/client'
import { Badge } from '@radix-ui/themes'
const IssueStatusMap : 
Record<Status,{label:string,color: 'red' | 'violet' | 'green'}> 
= {
OPEN: {label:"Open", color:"red"},
IN_PROGRESS: {label:"In progress", color:"violet"},
CLOSED: { label: "Closed", color:"green"}
}
const IssueStatusBadge = ({status}: {status: Status}) => {
  return (
    <Badge color={IssueStatusMap[status].color}>{IssueStatusMap[status].label}</Badge>
  )
}

export default IssueStatusBadge