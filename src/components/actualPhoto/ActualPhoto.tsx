import OverlayActualPhoto from "../overlay/OverlayActualPhoto";

import "./ActualPhoto.scss";

function ActualPhoto({ overlayPhoto }:any) {
  return (
    <div className="actual-photo-wrapper">
      <OverlayActualPhoto overlayPhoto={overlayPhoto} />
    </div>
  );
}

export default ActualPhoto;
