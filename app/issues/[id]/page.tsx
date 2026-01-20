import prisma from '@/prisma/client';
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
        <p>{issue?.id}</p>
        <p>{issue?.title}</p>
        <p>{issue?.description}</p>
        <p>{issue?.CreatedAt.toISOString()}</p>
    </div>
  )
}

export default DescriptionPage