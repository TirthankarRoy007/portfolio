export const LoadingState = ({ label = "Loading" }: { label?: string }) => (
  <div className="glass-panel rounded-2xl p-6 text-sm text-muted">
    {label}...
  </div>
);
