import styles from "@/styles/alert.module.scss";
import React, { useEffect } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { MdDangerous } from "react-icons/md";
import { TiWarningOutline } from "react-icons/ti";

interface Props {
  type?: "danger" | "warning" | "success";
  message?: string;
  onClose: () => void;
}

const Alert: React.FC<Props> = ({ type = "success", message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);
  const types = {
    success: {
      color: "#C39152",
      icon: IoMdCheckmark,
    },
    warning: {
      color: "#C39152",
      icon: TiWarningOutline,
    },
    danger: {
      color: "#C39152",
      icon: MdDangerous,
    },
  };

  const Icon = types[type].icon;
  const backgroundColor = types[type].color;

  return (
    <div className={styles.alertContainer} >
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "90%", backgroundColor, }}>
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Icon size={"2em"} color="black" />
          <p className={styles.alertText}>{message}</p>
        </div>
      </div>
      <div className={styles.dibox}>
        <h2></h2>
      </div>
      {/* <button
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          margin: 10,
          marginRight: 20,
          backgroundColor: "transparent",
          border: 0,
          fontWeight: "700",
          cursor: "pointer",
          fontSize: 25,
        }}
        onClick={onClose}
      >
        X
      </button> */}
    </div>

  );
};

export default Alert;
