import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

function Map() {
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();

  let lat = params.get("lat");
  let lng = params.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      {lat}, {lng}
      MAP
    </div>
  );
}

export default Map;
