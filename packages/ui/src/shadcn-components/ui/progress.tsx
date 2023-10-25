import * as ProgressPrimitive from '@radix-ui/react-progress'
import {cva, VariantProps} from 'class-variance-authority'
import * as React from 'react'

import {cn} from '@/shadcn-lib/utils'

const progressVariants = cva('relative w-full overflow-hidden rounded-full bg-white/10', {
	variants: {
		size: {
			default: 'h-1.5',
			thicker: 'h-2',
		},
	},
	defaultVariants: {
		size: 'default',
	},
})

const Progress = React.forwardRef<
	React.ElementRef<typeof ProgressPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & VariantProps<typeof progressVariants>
>(({className, value, size, ...props}, ref) => (
	<ProgressPrimitive.Root ref={ref} className={cn(progressVariants({className, size}), className)} {...props}>
		<ProgressPrimitive.Indicator
			className='h-full w-full flex-1 bg-brand transition-all'
			style={{transform: `translateX(-${100 - (value || 0)}%)`}}
		/>
	</ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export {Progress}
