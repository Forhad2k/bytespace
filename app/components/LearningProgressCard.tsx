type LearningProgressCardProps = {
  className: string;
  labelClassName: string;
  valueClassName: string;
  trackClassName: string;
  progress?: number;
};

export default function LearningProgressCard({
  className,
  labelClassName,
  valueClassName,
  trackClassName,
  progress = 55,
}: LearningProgressCardProps) {
  return (
    <div className={className}>
      <span className={labelClassName}>Learning Progress</span>
      <strong className={valueClassName}>{progress}%</strong>
      <div
        role="progressbar"
        aria-label="Learning Progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
        className={trackClassName}
      >
        <div
          className="h-full rounded-full bg-[#CBFC01]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}