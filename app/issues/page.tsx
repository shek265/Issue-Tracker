import React from 'react'
import { Button, Table } from '@radix-ui/themes'
import prisma from '@/prisma/client'
import IssueStatusBadge from '../Components/Bagde/IssueStatusBadge'
import delay from 'delay';
import NewIssueButton from './NewIssueButton';
import Link from 'next/link';
const IssuesPage = async() => {
  let issues = await prisma.issue.findMany();
  await delay(5000);

  return (
    <div>
    <NewIssueButton />
    <Table.Root variant='surface'>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Issues</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell  className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className='hidden md:table-cell'>Created</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {issues && issues.map((issue) => (
          <Table.Row key={issue.id}>
          <Table.Cell>
            <Link href={`/issues/${issue.id}`}>
              {issue.title}
            </Link>
              <div className='block md:hidden'>
                <IssueStatusBadge status={issue.status} />
              </div>
            </Table.Cell>
          <Table.Cell  className='hidden md:table-cell'>
                <IssueStatusBadge status={issue.status} />
          </Table.Cell>
          <Table.Cell className='hidden md:table-cell'>{issue.CreatedAt.toDateString()}</Table.Cell>
        </Table.Row>
        ))}
        
      </Table.Body>
    </Table.Root>
    </div>
  )
}

export default IssuesPage