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

      const ctx = canvas.getContext && canvas.getContext("2d");

      if (!ctx) {
        return;
      }

      const image = new Image();
      image.src = src;

      image.onload = function () {
        const wrh = image.width / image.height;
        let newWidth = canvas.width;
        let newHeight = newWidth / wrh;
        if (newHeight > canvas.height) {
          newHeight = canvas.height;
          newWidth = newHeight * wrh;
        }
        const xOffset =
          newWidth < canvas.width ? (canvas.width - newWidth) / 2 : 0;
        const yOffset =
          newHeight < canvas.height ? (canvas.height - newHeight) / 2 : 0;

        ctx.drawImage(image, xOffset, yOffset, newWidth, newHeight);
      };
    }
  }
  return <canvas id="my-canvas" ref={ref} width={width} height={height} />;
}
