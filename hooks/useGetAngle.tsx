/** @format */

import { useState, useEffect } from "react";

export default function useGetAngle(width: any, height: any) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const degree =
    (Math.atan2(
      width === null ? 1200 : width / 2 - coords.x,
      height === null ? 700 : height / 2 - coords.y
    ) *
      180) /
    Math.PI;

  const angle = Math.round(degree);

  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // 👇️ get global mouse coordinates
    const handleWindowMouseMove = (event: any) => {
      setGlobalCoords({
        x: event.screenX,
        y: event.screenY,
      });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);

  const handleMouseMove = (event: any) => {
    console.log(event.target.offsetLeft, event.target.offsetTop);
    setCoords({
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop,
    });
  };

  return { angle, handleMouseMove };
}
