import IssueStatusBadge from '@/app/Components/Bagde/IssueStatusBadge';
import prisma from '@/prisma/client';
import { Card, Flex, Heading, Text } from '@radix-ui/themes';
import { notFound } from 'next/navigation';


interface Props{
    params: Promise<{id: string}>
}

const DescriptionPage = async({params}: Props) => {
    const id = (await params).id;
const issue = await prisma.issue.findUnique(
    {
        where:{id: parseInt(id)}
    }
);

if(!issue) notFound();

  return (
    <div>
        <Heading>{issue?.title}</Heading>
        <Flex gap='3' my='2'>
        <IssueStatusBadge status={issue.status}/>
        <Text>{issue?.CreatedAt.toDateString()}</Text>
        </Flex>
        <Card>{issue?.description}</Card>

    </div>
  )
}

export default DescriptionPage