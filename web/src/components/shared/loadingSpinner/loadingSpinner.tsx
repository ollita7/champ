import CircularProgress from "@mui/material/CircularProgress";
import "./styles.scss";

const LoadingSpinner = () => {
  return (
    <div className="loading">
      <CircularProgress />
    </div>
  );
};

export default LoadingSpinner;
