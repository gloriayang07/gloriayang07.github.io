interface HeadingProps {
  children: React.ReactNode;
}
export function Heading(props: HeadingProps) {
  return <div className="text-3xl font-bold" {...props} />;
}
