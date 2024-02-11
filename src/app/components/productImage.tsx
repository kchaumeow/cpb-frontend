"use client";

import { useEffect, useRef } from "react";

export default function ProductImage({
  src,
  width,
  height,
}: {
  src: string;
  width: number;
  height: number;
}) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    setPicture();
  }, [ref.current]);
  function setPicture() {
    if (ref.current) {
      const canvas = ref.current;
      const ctx = canvas.getContext("2d")!;
      const img = new Image();
      img.src = src;

      img.onload = function () {
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.min(hRatio, vRatio);
        ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          0,
          0,
          img.width * ratio,
          img.height * ratio
        );
      };
    }
  }
  return <canvas id="my-canvas" ref={ref} width={width} height={height} />;
}
