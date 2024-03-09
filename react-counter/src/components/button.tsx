import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  onClick: () => void;
}>;

export default function Button({ onClick, children }: Props) {
  return (
    <button
      className="bg-gray-600 px-6 py-3 rounded active:bg-gray-700"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
