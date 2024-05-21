import React from 'react';

interface ILayoutPageProps {
 children: React.ReactNode;
}

export function LayoutPage({ children }: ILayoutPageProps) {
 return <div>{children}</div>;
}
