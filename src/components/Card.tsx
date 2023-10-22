import * as React from 'react'

// import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	// CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card'

type TechCardProps = {
	title: string
	desc: string
	content: string
}

export const TechCard: React.FC<TechCardProps> = ({ title, desc, content }) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{desc}</CardDescription>
			</CardHeader>
			<CardContent>{content}</CardContent>
			{/* <CardFooter className="flex justify-between">
				<Button variant="outline">Cancel</Button>
				<Button>Deploy</Button>
			</CardFooter> */}
		</Card>
	)
}
