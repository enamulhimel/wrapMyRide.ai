import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className, ...props }) => (
    <div className={cn('mx-auto max-w-7xl px-4', className)} {...props}>
        {children}
    </div>
);

export default Container;