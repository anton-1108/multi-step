export const InputError = ({ error }) => {
  if (!error) return null;

  return <p className="text-red-500 text-xs">{error}</p>;
};
