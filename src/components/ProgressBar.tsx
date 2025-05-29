
interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div 
      className="progress-bar"
      style={{ width: `${progress}%` }}
    />
  );
};

export default ProgressBar;
