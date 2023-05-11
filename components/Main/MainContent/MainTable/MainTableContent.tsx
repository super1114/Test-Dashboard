import Image from 'next/image';
import React from 'react'

const MainTableContent = () => {
    const projects = [
        { imageUrl: 'rightBar/8.svg', managerName: 'Koray Okumus', date: 'Jun 24, 2022', amount: '$942.00', status: 'In Progress' },
        { imageUrl: 'rightBar/7.svg', managerName: 'Natali Craig', date: 'Mar 10, 2022', amount: '$881.00', status: 'Rejected' },
        { imageUrl: 'rightBar/olivia.svg', managerName: 'Olivia Rhye', date: 'Nov 10, 2022', amount: '$409.00', status: 'Competed' },
        { imageUrl: 'rightBar/10.svg', managerName: 'Orlando Diggs', date: 'Dec 20, 2022', amount: '$953.00', status: 'Approved' },
        { imageUrl: 'mainContent/katherine.svg', managerName: 'Katherine Moss', date: 'Jul 25, 2022', amount: '$907.00', status: 'Pending' }
    ];
    return (
        <div className='mt-4'>
            <div className='text-xs'>
                <table className='w-full max-ss:text-[10px] table-fixed'>
                    <thead className='border-b border-b-grey-border'>
                        <tr className="text-left text-grey-text border-collapse">
                            <th className="">Manager</th>
                            <th className="">Date</th>
                            <th className="">Amount</th>
                            <th className="">Status</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {projects.map((project, index) =>
                            <tr key={index} className=''>
                                <td className="flex gap-x-2 items-center ">
                                    <Image src={project.imageUrl} width='24' height='24' alt='Not Found' />
                                    <div className='max-ss:hidden'>{project.managerName}</div>
                                </td>
                                <td className="">{project.date}</td>
                                <td className="">{project.amount}</td>
                                <td className={`max-w-[20px] truncate ${project.status === 'In Progress' ? 'text-progress-text' :
                                    project.status === 'Rejected' ? 'text-grey-text' :
                                        project.status === 'Competed' ? 'text-competed-text' :
                                            project.status === 'Approved' ? 'text-approved-text' :
                                                project.status === 'Pending' ? 'text-pending-text' : 'text-black'
                                    }`}><li className='list-disc'><span className='inline-block relative left-[-8px]'>{project.status}</span></li></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div >
        </div >
    )
}

export default MainTableContent;