import styles from "./Map.module.css";
import { useSearchParams } from "react-router-dom";

function Map() {
  const [params, setParams] = useSearchParams();

  let lat = params.get("lat");
  let lng = params.get("lng");

  return (
    <div className={styles.mapContainer}>
      {lat}, {lng}
    </div>
  );
}

export default Map;
