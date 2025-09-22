import React from 'react'

interface PageProps {
	params: Promise<{id: string}>;
}

const page = async ({params}: PageProps) => {
	const {id} = await params;
	return (
		<div>
			{id}
		</div>
	)
}

export default page
