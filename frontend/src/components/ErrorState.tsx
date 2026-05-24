export const ErrorState = ({ message }: { message: string }) => (
  <div className="rounded-2xl border border-red-200 bg-red-50/90 p-6 text-sm text-red-700 shadow-soft">
    {message}
  </div>
);
